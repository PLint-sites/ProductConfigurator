<template>
    <div>
        <div class="container">
            <div id="intro">
                <b>{{ lang['introduction1'] }}</b>

                <div id="list">
                    <ul>
                        <li>{{ lang['product']['papershape'] }}</li>
                        <li>{{ lang['product']['papersize'] }}</li>
                    </ul>

                    <ul>
                        <li>{{ lang['product']['amount'] }}</li>
                        <li>{{ lang['product']['quality'] }}</li>
                    </ul>
                </div>

                <b>{{ lang['introduction2'] }}</b>
            </div>

            <ProductList 
                :products="products"
                @update-price="updatePrice"
                @reset-product="resetProduct"
                @remove-product="removeProduct"
                @add-product="addProduct"
            />
            
            <footer class="row">
                <div class="col-md-6 col-sm-6 col-xs-6">
                    <PriceContainer :price="price"/>
                </div>

                <div class="col-md-6 col-sm-6 col-xs-6">
                    <ProceedToCheckoutButton @clicked="handleSubmit"/>
                </div>
            </footer>
        </div>

        <sweet-modal icon="success" ref="modal">{{ lang['checkoutMessage'] }}</sweet-modal>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import ProductList from './ProductList'
import PriceContainer from './PriceContainer'
import ProceedToCheckoutButton from './ProceedToCheckoutButton'
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
export default {
    name: 'PostCardConfigurator',
    components: {
        ProductList,
        PriceContainer,
        ProceedToCheckoutButton,
        SweetModal,
        SweetModalTab
    },
    computed: {
        ...mapState('configurator', {
            products: 'products',
            price: 'price'
        }),
        ...mapGetters('i18n', ['lang']),
    },
    methods: {
        ...mapActions('configurator', [
            'addProduct',
            'removeProduct',
            'updatePrice',
            'resetProduct'
        ]),
        handleSubmit() {
            this.$refs.modal.open()
        },
    },
    mounted() {
        this.updatePrice()
    },
}
</script>

<style lang="less">
@orange: #FF9900;

.sweet-modal {
    box-shadow: 0px 8px 46px rgb(255 165 0 / 20%), 0px 2px 6px rgb(255 165 0 / 30%);
}

.sweet-modal .sweet-box-actions .sweet-action-close:hover {
    background: @orange;
}

.sweet-modal-icon.sweet-modal-success .sweet-modal-placeholder {
    border-color: @orange !important;
}

.sweet-modal-icon.sweet-modal-success .sweet-modal-line {
    background-color: @orange;
}

#intro {
    width: 280px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 0px;
    margin-bottom: 0;

    #list {
        display: grid;
        grid-template-columns: 100px 100px;
        ul {
           margin-top: 10px;
        }
    }
    
}

.form-group {
    margin-bottom: 30px;
}

.form-control {
    border-radius: 0;
    background: #eee;
}

footer {
    margin-bottom: 30px;
}

/* Custom radiobuttons and checkboxes */
div.custom-input {

	&.inline {
		display: inline;
	}

	label {
		font-size: 15px;
		margin-right: 10px;
	}

	/* General icon styling */
	input[type=radio],
	input[type=checkbox] {
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
	input[type=radio] ~ label:before,
	input[type=checkbox] ~ label:before {
	    font-family: FontAwesome;
	    display: inline-block;
	    content: "\f10c";
	    letter-spacing: 10px;
	    font-size: 20px;
	    color: @orange;
	    width: 1.4em;
	    position: relative;
	    top: 2px;
	}

	/* Checked radio icon styling */
	input[type=radio]:checked ~ label:before {
	    content: "\f192";
	}

	/* Update icon for checkbox (unchecked) */
	input[type=checkbox] ~ label:before {
	    content: "\f096";
	    top: 3px;
	}

	/* Update icon for checkbox (checked) */
	input[type=checkbox]:checked ~ label:before {
	    content: "\f14a";
	}

	input[type=radio]:focus ~ label:before,
	input[type=checkbox]:focus ~ label:before
	{
	    color: @orange;
	}
}
</style>