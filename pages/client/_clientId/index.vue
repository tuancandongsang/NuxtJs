<template>
    <h2>client id = {{ $route.params.clientId }}</h2>
</template>

<script>
export default {
    created() {
        console.log(this.$route.params.clientId);
    },
    data() {

        return {
            tittle: 'client ID',
            description: "hom nay la ngay ram, con chau den choi"
        }
    },
    head() {
        return {
            title: this.tittle,
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: this.description },
                { name: 'format-detection', content: 'telephone=no' }
            ],
        }
    }
}
</script>

<style>

</style>