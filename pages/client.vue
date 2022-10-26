<template>
    <div>
        <h1 style="color:red">client parent</h1>
        <ul>
            <li>
                <nuxt-link active-class="active" exact-active-class="exact" to="/client"> client page</nuxt-link>
            </li>
            <li>
                <nuxt-link active-class="active" exact-active-class="exact" to="/client/10"> client id</nuxt-link>
            </li>
            <li>
                <nuxt-link active-class="active" exact-active-class="exact" to="/client/10/setting"> client setting
                </nuxt-link>
            </li>
        </ul>
        <nuxt-child />
    </div>
</template>

<script>
export default {
    layout:'user',
    head: {
    title: 'Client page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
  }
}
</script>

<style>

</style>