import Vue from 'vue';
import Vuex from 'vuex';
import configurator from './modules/configurator';
import account from './modules/account';
import i18n from './modules/i18n';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        configurator,
        account,
        i18n,
    },
});
