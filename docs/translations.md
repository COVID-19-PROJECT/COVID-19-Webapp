# Translations

The current model defines the main dictionary as the source of true for new languages. 
Any content change should be versioned in the app and commited in the es-GT.json file.

The translations are available through the following tools:
  * [nuxt i18n](https://github.com/nuxt-community/nuxt-i18n)
  * [poeditor](https://poeditor.com/)

## Translations file structure

The translation files are json files of two levels depth, **NO MORE NO LESS** otherwise
poeditor won't recognize properly the file format.

```js
{
    "general": {
        //site wide terms (like site name, 'accept','back', 'cancel' and so on)
    }, 
    "navigation": {
        "home" : "Inicio",
        // navigation specific items
    },
    "some-page": {
        "title" : "This is a nice title", 
        "intro-description" :  "Some nice\n\nmultine\n\ntext";
        // keys - values in the format "concept" - "content"
    }
    "another-page": {
        //...
    }
    //..
}
```

## Using translations

To use the translations inside a component you can use:

```html
<someElement v-md="$t('some-page.content-with-markdown-support')" />

<anotherElement>
    {{ $t('some-page.content-without-markdown') }}
</anotherElement>

```



## Uploading changes to poeditor for future translations.

All changes must be uploaded from master in order to avoid data loss when handling 
translations. To upload translations, you must be an admin of the project in 
[poeditor.com](https://poeditor.com).

In order to run the upload command, you must configure the .env file according to the 
repo example for these particular variables: `POEDITOR_API_TOKEN` and 
`POEDITOR_PROJECT_ID`.

```
# Install deps
npm install

# Run gulp task
gulp uploadBaseLanguage
#... review changes and approve them.
```

## Roadmap

@Todo add documentation for synchronizing other languages.