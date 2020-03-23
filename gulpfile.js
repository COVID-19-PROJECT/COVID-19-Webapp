require('dotenv').config()

const consola = require('consola')
const prompts = require('prompts')
const { src } = require('gulp')

const Poeditor = require('./lib/poeditor/api')
const TranslationsDownloader = require('./lib/poeditor/translations-downloader')
const TranslationComparator = require('./lib/poeditor/translation-comparator')

const config = {
  poeditor: {
    projectId: process.env.POEDITOR_PROJECT_ID,
    apiToken: process.env.POEDITOR_API_TOKEN,
    referenceLanguage: 'es-gt',
    referenceLanguagePath: './lang/es-gt.json',
  },
}

const poeditor = new Poeditor(config.poeditor.apiToken)

async function downloadTranslations () {
  const downloader = new TranslationsDownloader(poeditor, config.poeditor.projectId)

  consola.info('Downloading translations')
  const results = await downloader.downloadAll('./lang', config.poeditor.referenceLanguage)
  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      consola.info(`Downloaded ${result.value.language}`)
    } else {
      consola.error(`Failed to download ${result.value.language}`)
    }
  })
  consola.info('Finished downloading translations')
}

async function uploadBaseLanguage () {
  const downloader = new TranslationsDownloader(poeditor, config.poeditor.projectId)
  const comparator = new TranslationComparator(
    downloader,
    config.poeditor.referenceLanguage,
    config.poeditor.referenceLanguagePath
  )
  const differences = await comparator.checkDifferences()
  consola.info(differences)
  const { confirm } = await prompts({
    type: 'confirm',
    name: 'confirm',
    message: 'Confirm upload changes?',
    initial: false,
  })
  if (confirm) {
    const result = await poeditor.upload(config.poeditor.referenceLanguagePath, {
      id: config.poeditor.projectId,
      updating: 'terms_translations',
      language: config.poeditor.referenceLanguage,
      overwrite: 1,
      sync_terms: 1,
      fuzzy_trigger: 1,
    })
    consola.info('Uploaded terms and translations')
  }
}

exports.downloadTranslations = downloadTranslations
exports.uploadBaseLanguage = uploadBaseLanguage
