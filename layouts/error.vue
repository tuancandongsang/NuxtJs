<template>
    <div >
      <h1 v-if="error.statusCode === 404">Page not found  error.statusCode - {{error.statusCode}}</h1>
      <h1 v-else>An error occurred</h1>
      <p>Trong quá trình chạy chương trình có rất nhiều dạng lỗi...</p>
      <p>Ta quy chuẩn về page layout error</p>  
      <p>B1: tạo 1 layout có tên error.vue - tên bắt buộc</p>
      <p>B2: Phải truyền props: ['error'] vào thẻ script để nhận thuộc tính error </p>
      <P>Ngoài ra có thể tạo nhiều trang với các Layout khác nhau</P>
      <p></p>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </template>
  
  <script>
  export default {
    props: ['error'],
  }
  </script>