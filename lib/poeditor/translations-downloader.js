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

const https = require('https')
const fs = require('fs')

module.exports = class TranslationsDownloader {
  constructor (poeditor, projectId) {
    this.poeditor = poeditor
    this.projectId = projectId
  }

  downloadAll (path, referenceLangCode) {
    return this.supportedLangCodes().then((langCodes) => {
      const downloads = langCodes
        .filter(language => language !== referenceLangCode)
        .map((language) => {
          const filename = `${path}/${language}.json`
          return this.downloadTranslation(filename, language)
        })
      return Promise.allSettled(downloads)
    })
  }

  async downloadTranslation (filename, language) {
    const url = await this.exportTranslation(language)
    const file = fs.createWriteStream(filename)

    https.get(url, (response) => {
      response.pipe(file)
    })

    return new Promise((resolve, reject) => {
      file.on('finish', () => resolve({ language, sucess: true }))
      file.on('error', () => reject({ language, sucess: false }))
    })
  }

  async supportedLangCodes () {
    const { languages } = await this.poeditor.request('/languages/list', { id: this.projectId })
    return languages.map(lang => lang.code)
  }

  async exportTranslation (langCode) {
    const { url } = await this.poeditor.request('/projects/export', {
      id: this.projectId,
      language: langCode,
      type: 'key_value_json',
    })

    return url
  }
}
