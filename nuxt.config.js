export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MyProject',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel:'stylesheet', 
        href:"https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap"
      }
    ]
  },
  // <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet"></link>

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/vue-notifycation.js' , mode:'client'},
    '~/plugins/hello.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router:{
    middleware: 'mobile'
  },
  loading: {
    color: 'blue',   // màu thanh loadunbg
    height: '5px',  // chiều cao thanh loading
    failedColor: 'red', /// màu khi lỗi
    css: true, // css true: sử dụng css của loading. false thì sẽ là dùng của dev tạo
    rtl: true, /// cấu trúc đoạn văn từ trái qua phải, false là phải qua trái ( arap, japan )
  }
}
