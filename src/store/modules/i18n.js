import vI18n from 'vue-simple-i18n'

const i18n = new vI18n({
  base: 'en-us', // The base fallback when specified language not exists, defaults to 'en-us'
  locale: 'nl-nl', // Global language, defaults to browser language
  locales: {
    'en-us': {
      __name__: 'English', // Specify a display name for each language is highly recommended
      welcome: 'Welcome to the Wonderland!', // Translation, default template supported is vue-like without expressions
      introduction1: 'Use the configurator below to create your own stunning postcard. Just choose the card’s shape and paper size. Add your headline and main text and we’ll take care of the rest. The price will automatically adjust during your configuration.',
      introduction2: 'Simply configure multiple cards by adding another!',
    },
    'nl-nl': {
      __name__: 'Nederlands',
      welcome: 'Welkom in het kantoor van Lim Loempia',
      introduction1: 'Stel nu je persoonlijke kaart samen. Kies de vorm, maat en aantal en vul je persoonlijke tekst in. De prijs wordt automatisch berekend',
      introduction2: 'Maak meerdere kaarten door een extra kaart te samen te stellen!',
    }
  } // Where you put all your translations
})

const state = {
    i18n,
}
const getters = {
    welcome: state => {
        return state.i18n.locales[state.i18n.locale]['welcome']
    },
    introduction1: state => {
        return state.i18n.locales[state.i18n.locale]['introduction1']
    },
    introduction2: state => {
        return state.i18n.locales[state.i18n.locale]['introduction2']
    },
}
const actions = {
    
}
const mutations = {
    
}

export default {
    namespaced: true,
    getters,
    state,
    actions,
    mutations,
} 