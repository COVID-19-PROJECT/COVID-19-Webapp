/**
    Copyright (C) 2019  Javier Toledo & Fernando Navarijo

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

'use-strict'

const fs = require('fs')
const os = require('os')
const crypto = require('crypto')

const _ = require('lodash')

function deepIterate (data, callback, parent = '') {
  if (data !== Object(data)) {
    throw new Error('data is not an object')
  }
  Object.getOwnPropertyNames(data).forEach((property) => {
    const path = `${parent}${property}`
    const value = data[property]
    const isPrimitive = value !== Object(value)

    if (isPrimitive) {
      callback(value, path)
    } else {
      deepIterate(value, callback, `${parent}${property}.`)
    }
  })
}

module.exports = class TranslationComparator {
  constructor (translationsDowloader, language, localLangPath) {
    this.downloader = translationsDowloader
    this.language = language
    this.localLangPath = localLangPath
  }

  async checkDifferences () {
    const { localTranslations, referenceTranslations } = await this.loadTranslations()

    const differences = {}
    const additions = {}
    const deletions = Object.assign({}, referenceTranslations)

    deepIterate(localTranslations, (text, key) => {
      const referenceText = _.get(referenceTranslations, key)

      if (typeof referenceText === 'undefined') {
        _.set(additions, key, text)
      } else if (text !== referenceText) {
        _.set(differences, key, `"${referenceText}" => "${text}"`)
      }
      _.unset(deletions, key)
    })

    return {
      differences,
      additions,
      deletions: _.omitBy(deletions, _.isEmpty),
    }
  }

  async loadTranslations () {
    const referenceLangPath = this.tempFilename()
    await this.downloader.downloadTranslation(referenceLangPath, this.language)
    const translationFiles = await Promise.all([
      this.getFileData(this.localLangPath),
      this.getFileData(referenceLangPath),
    ])

    return {
      localTranslations: JSON.parse(translationFiles[0]),
      referenceTranslations: JSON.parse(translationFiles[1].toString() || '{}'),
    }
  }

  tempFilename () {
    const hash = crypto.createHash('sha256')
    hash.update(`${this.localLangPath} ${this.language}`)
    const hashedFilename = hash.digest('hex')
    return `${os.tmpdir()}/poeditor_${hashedFilename}`
  }

  getFileData (file) {
    return new Promise((resolve, reject) => {
      fs.readFile(file, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }
}
