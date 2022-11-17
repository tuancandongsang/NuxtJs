<template>
  <div>
    <h1>Vue-ChartJs </h1>
    <div>
      <ul>
        <li> <nuxt-link active-class="active" exact-active-class="exact" to="/chartjs"> chartjs</nuxt-link></li>
        <li> <nuxt-link active-class="active" exact-active-class="exact" to="/chartjs/bar"> Bar</nuxt-link></li>
        <li> <nuxt-link active-class="active" exact-active-class="exact" to="/chartjs/pie"> pie</nuxt-link></li>
        <li> <nuxt-link active-class="active" exact-active-class="exact" to="/chartjs/bubble"> bubble</nuxt-link></li>
        <li> <nuxt-link active-class="active" exact-active-class="exact" to="/chartjs/pie"> pie</nuxt-link></li>
        <li> <nuxt-link active-class="active" exact-active-class="exact" to="/chartjs/pie"> pie</nuxt-link></li>

      </ul>
    </div>
    <nuxt-child />
  </div>

</template>

<script>


</script>

<style scoped>
ul{
  list-style-type: none;
  display: flex;
}
li{
  margin: 0 5px;
  padding: 4px 12px;
  background-color: #ccc;
  border-radius: 5px;

}
</style>