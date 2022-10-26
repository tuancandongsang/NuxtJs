<template>
  <div class="root">
    <header class="header">header defaule</header>
    <div class="container">
      <aside>
        <NuxtAside />
      </aside>
      <nuxt />
    </div>
    <notifications group="foo" />
    <footer class="footer">footer defaule</footer>
  </div>
</template>

<script>
import NuxtAside from '../components/NuxtAside.vue';

export default {
    components: { NuxtAside }
}
</script>

<style scoped>
.container {
  display: flex;
}

aside {
  margin-right: 50px;
  background-color: tan;
  padding-right: 60px;
}

.footer,
.header {
  background-color: antiquewhite;
  padding: 20px 0;
  font-size: 2rem;
  font-weight: 900px;
  text-align: center;
}
</style>