<template>
  <div>
    <h1>client child</h1>
    <ul>
      <li>{{posts}}</li>
    </ul>
    <button v-on:click="handleAdd">add item</button>
    <h3>{{name}}</h3>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed:{
    ...mapState({ 
      posts: state => state.post.post,
      name: state => state.name
    })
  },
  methods:{
    ...mapActions({
      'actaddPosts': 'post/actaddPosts'
    }),
    handleAdd(){
      this.actaddPosts('tuancan')
    }
  }

}
</script>

<style>

</style>