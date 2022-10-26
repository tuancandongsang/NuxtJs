<template>
  <div>
    <h1 style="color:red">User page parent</h1>
    <ul>
      <li>
        <nuxt-link active-class="active" exact-active-class="exact" to="/user"> user page</nuxt-link>
      </li>
      <li>
        <nuxt-link active-class="active" exact-active-class="exact" to="/user/20"> user id</nuxt-link>
      </li>
      <li>
        <nuxt-link active-class="active" exact-active-class="exact" to="/user/setting"> user setting</nuxt-link>
      </li>
    </ul>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  validate(context) {
    // if(!Number(context.params.userId)){
    //   return false
    // }
    // console.log(context.params);
    return true // if the params are valid
    // return false // will stop Nuxt to render the route and display the error page
  },
  layout(context) {
    console.log("[context user.vue]", Object.keys(context));
    return context.isMobile ? 'mobile' : 'admin'
    // console.log('userAgent', userAgent);
    // console.log('navigator', navigator);
    // return 'admin'
  },
  head: {
    title: 'User  page',
    meta: [
      {
        hid: 'description',
        name: 'alo',
        content: 'user page description'
      }
    ],
  }
}
</script>

<style>
.exact {
  color: red;
}
</style>