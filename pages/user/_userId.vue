<template>
  <div>
    <h3>uderId page {{ $route.params.userId }}</h3>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.params.userId);
  },
  data() {
    return {
      title: `User ${this.$route.params.userId}`
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'alo',
          content: 'user page description'
        }
      ],
      link: [
        {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
          crossorigin: "anonymous",
        }
      ],
      script: [
        {
          body: true,
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
          integrity: "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
          crossorigin: "anonymous"
        }
      ]
    }
  }
}
</script>

<style>

</style>