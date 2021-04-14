<template>
    <div id="price">
        {{ lang['price'] }}: &euro; {{ price.toFixed(2) }}
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
export default {
    name: 'Price',
    props: ['price'],
    computed: {
        ...mapGetters('i18n', ['lang']),
    },
}
</script>

<style lang="less" scoped>
    #price {
        font-size: 20px;
        font-weight: bold;
    }
</style>