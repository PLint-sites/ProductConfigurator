<template>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="navbar navbar-default navbar-inverse">
                    <div class="navbar-header">
                        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>                        
                    </div>
                    <h1>Personal postcard configurator</h1>
                    <select v-model="i18n.locale">
                        <option v-for="(locale, key) in i18n.locales" :key="key" :value="key">{{locale.__name__}}</option>
                    </select>
                    <!--<LoginForm 
                        :auth="auth"
                        @login="attemptLogin"
                        @logout="logout"
                    />-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import LoginForm from './LoginForm'
export default {
    name: 'AccountNav',
    components: {LoginForm},
    computed: {
        ...mapState('account', [
            'auth'
        ]),
        ...mapState('i18n', ['i18n']),
    },
    methods: {
        ...mapActions('account', [
            'attemptLogin',
            'logout'
        ])
    },
}
</script>

<style lang="less" scoped>
@orange: #FF9900;
.navbar {
    border-radius: 0;
    background: @orange;
    border-color: #cc7a00;
    
    h1 {
        color: white;
        text-align: center;
        margin-top: 10px;
    }
}
</style>