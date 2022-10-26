<template>
  <div>
    <h1>Structure thông thường của 1 dự án</h1>
    <ul>
      <li><b>Assets</b>: chứa ảnh, các file tĩnh</li>
      <li><b>Component</b>: chứa các component dùng chung</li>
      <li><b>Layouts</b>: chia layouts cho nhiều cấu hình trang</li>
      <li>
        <b>Middleware</b>: chứa những Middleware dùng để custome function trước khi
        render component ( tựa như beforeEach trong router)
      </li>
      <li>
        <b>Pages</b> : là thư mục quan trọng của nuxtJS, cấu hình thư mục sẽ chỉ định
        thay cho router trong project, tạo các file theo cấu trúc mẫu định sẵn
        của nuxt để có đường dẫn router mong muôn
      </li>
      <li><b>Mixin</b>: chứa các hàm, data... chung có thể import và sử dụng trong các component</li>
      <li><b>plugins</b>: chứa các thư viện mà chúng ta muốn sử dụng. nó sẽ chạy trước khi mounting component</li>
      <li><b>static</b>: chứa file hoặc ảnh tĩnh mà k sử lý wepback</li>
      <li><b>Store</b> : chứa global state</li>
      <li><b>nuxt.config.js</b> : chứa tổng quan gần như toàn bộ config của nuxt</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>