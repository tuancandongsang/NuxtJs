<template>
  <div>
    <header class="header">header client</header>
    <div class="container">
      <aside>
        <NuxtAside />
      </aside>
      <nuxt />
    </div>
    <footer class="footer">footer client</footer>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped >
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