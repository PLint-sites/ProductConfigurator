<template>
    <!--<nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsing-on-mobile" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">{{ lang['title'] }}</a>
            </div>

            <div class="collapse navbar-collapse" id="collapsing-on-mobile">
                <form class="navbar-form navbar-left">
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

                <ul class="nav navbar-nav">
                    <li><a href="#"><i class="fa fa-home"></i> {{ lang['backToListButton'] }}</a></li>
                </ul>
            </div>
            
        </div>
    </nav>-->

    <nav class="navbar">
        <ul>
            <li class="brand">{{ lang['title'] }}</li>
            <li>
                <form>
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
            </li>
            <li><a href="#"><i class="fa fa-home"></i> {{ lang['backToListButton'] }}</a></li>
        </ul>
    </nav>
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
    border-left: none;
    border-top: none;
    border-right: none;
    margin-bottom: 0;
    background: @orange;
    border-color: #cc7a00;
    min-height: auto;

    ul {
        list-style: none;
        padding: 10px;
        margin-bottom: 0;
        display: grid;
        grid-template-columns: 150px 1fr 1fr;
        place-items: center;

        li, li > a {
            color: white;
            font-size: 16px;
        }

        .brand {
            font-weight: bold;
        }
    }
}

/* Custom radiobuttons and checkboxes */
div.language-input {

	&.inline {
		display: inline;
        position: relative;
        top: -3px;
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