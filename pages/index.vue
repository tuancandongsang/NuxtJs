<template>
  <div>
    <!-- <Tutorial/> -->
    <h1> index app</h1>
    <ul>
      <li><nuxt-link to="/custom-loading">Custom loading</nuxt-link></li>
      <li><nuxt-link to="/user">User</nuxt-link></li>
      <li><nuxt-link to="/error">error</nuxt-link></li>
      <li><nuxt-link to="/client">client</nuxt-link></li>
    </ul>
    <h1>{{counter}}</h1>
    <button v-on:click="handleClick">click me</button>

  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  computed:{
    ...mapState({
      counter: state => state.counter
    })
  },
  name: 'IndexPage',
  mounted() {
    setTimeout(() => {
      this.$notify({
        group: 'foo',
        title: 'Important message',
        text: 'Hello user! This is a notification!'
      });
      console.log(this.$abc);
    }, 1000)
  },
  methods:{
    ...mapActions(['increment']),
    handleClick(){
      this.increment()
    }
  }

}
</script>
