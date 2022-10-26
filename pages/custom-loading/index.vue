<template>
  <div>
   <h1> custome loading</h1>
   <button>
    <nuxt-link to="/">home</nuxt-link>
   </button>
  </div>
</template>

<script>
export default {
asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    return new Promise((resolve, redirect) => {
        setTimeout(function(){
            resolve({})
            // redirect({error: 'co loi say ra'})

        }, 2000)
    })
    
},
}
</script>

<style>

</style>