import vI18n from 'vue-simple-i18n'

const i18n = new vI18n({
  base: 'en-us', // The base fallback when specified language not exists, defaults to 'en-us'
  locale: 'nl-nl', // Global language, defaults to browser language
  locales: {
    'nl-nl': {
      __name__: 'Nederlands',
      title: 'Maak je kaart',
      backToListButton: 'home',
      introduction1: 'Stel nu je persoonlijke kaart samen. Kies de vorm, maat en aantal en vul je persoonlijke tekst in. De prijs wordt automatisch berekend',
      introduction2: 'Maak meerdere kaarten door een extra kaart te samen te stellen!',

      product: {
        papershape: 'Vorm',
        papersize: 'Afmeting',
        amount: 'Aantal',
        quality: 'Kwaliteit',
        headline: 'Titel',
        headlinePlaceholder: 'Uw titel',
        bodytext: 'Bericht',
        bodytextPlaceholder: 'Uw bericht',
        clearLinkText: 'Begin opnieuw'
      },

      addProductButtonText: '+ kaart toevoegen',
      addAnotherProductButtonText: '+ nog een kaart toevoegen',

      price: 'Prijs',

      checkoutButtonText: 'Verder naar afrekenen',
      checkoutMessage: 'In een echte app zou je nu naar de winkelwagen gaan om af te rekenen. Vandaag eindigt het hier!',
    },
    'en-us': {
      __name__: 'English', // Specify a display name for each language is highly recommended
      title: 'Postcard configurator',
      backToListButton: 'home',
      introduction1: 'Use the configurator below to create your own stunning postcard. Just choose the card’s shape and paper size. Add your headline and main text and we’ll take care of the rest. The price will automatically adjust during your configuration.',
      introduction2: 'Simply configure multiple cards by adding another!',

      product: {
        papershape: 'Shape',
        papersize: 'Size',
        amount: 'Amount',
        quality: 'Quality',
        headline: 'Title',
        headlinePlaceholder: 'Your title',
        bodytext: 'Message',
        bodytextPlaceholder: 'Your message',
        clearLinkText: 'Clear configuration'
      },

      addProductButtonText: '+ Add card',
      addAnotherProductButtonText: '+ Add another card',

      price: 'Price',

      checkoutButtonText: 'Proceed to checkout',
      checkoutMessage: 'Normally, you would proceed to the checkout, fill out the form and get your product. But this is a demo and this popup is the finish!',
    },
  } 
})

const state = {
    i18n,
}
const getters = {
    lang: state => {
        return state.i18n.locales[state.i18n.locale]
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