<template>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <!-- Brand and toggle get grouped for better mobile display -->
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">{{ lang['title'] }}</a>
                        </div>

                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav">
                                <li><button type="button" class="btn btn-default navbar-btn"><i class="fa fa-chevron-right"></i> {{ lang['backToListButton'] }}</button></li>
                            </ul>

                            <form class="navbar-form navbar-right">
                                <div id="language-switcher">
                                    <div class="language-input inline nl">
                                        <input :id="i18n.locales['nl-nl'].__name__" type="radio" v-model="i18n.locale" value="nl-nl">
                                        <label :for="i18n.locales['nl-nl'].__name__"></label>
                                    </div>

                                    <div class="language-input inline en">
                                        <input :id="i18n.locales['en-us'].__name__" type="radio" v-model="i18n.locale" value="en-us">
                                        <label :for="i18n.locales['en-us'].__name__"></label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import LoginForm from './LoginForm'
export default {
    name: 'AccountNav',
    components: {LoginForm},
    computed: {
        ...mapState('account', [
            'auth'
        ]),
        ...mapState('i18n', ['i18n']),
        ...mapGetters('i18n', ['lang']),
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
    
    .navbar-brand {
        width: 250px;
    }
}

/* Custom radiobuttons and checkboxes */
div.language-input {

	&.inline {
		display: inline;
	}

	label {
		font-size: 15px;
		margin-right: 10px;
	}

	/* General icon styling */
	input[type=radio] {
	    border: 0;
	    clip: rect(0 0 0 0);
	    height: 1px;
	    margin: -1px;
	    overflow: hidden;
	    padding: 0;
	    position: absolute;
	    width: 1px;
	}

	/* Unchecked icon styling */
	input[type=radio] ~ label:before {
	    display: inline-block;
	    position: relative;
	    top: 7px;
        opacity: 0.3;
	}

    &.nl {
        input[type=radio] ~ label:before {
            content: url(../../assets/nl.png);
        }
    }

    &.en {
        input[type=radio] ~ label:before {
            content: url(../../assets/en.png);
        }
    }

	/* Checked radio icon styling */
	input[type=radio]:checked ~ label:before {
        opacity: 1;
	}
}
</style>