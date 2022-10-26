<template>
    <div class="root">
        <header>header defaule</header>
        <!-- <Tutorial /> -->
        <!-- <user /> -->
        <!-- <client /> -->
        <notifications group="foo" />
        <Nuxt />
        <footer>footer</footer>
    </div>
</template>

<script>
import Client from '../pages/client.vue'
import User from '../pages/User.vue'
export default {
  components: { User, Client },

}
</script>

<style>

</style>