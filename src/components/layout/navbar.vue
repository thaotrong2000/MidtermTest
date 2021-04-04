<template>
  <div id="navbar">
    <!-- Tao logo -->
    <div id="navbar-logo">
      <!-- Tao bieu tuong dieu huong -->
      <div id="navbar-direction"></div>

      <!-- Tao Logo -->
      <div id="navbar-logo-misa"></div>
    </div>

    <!-- Tao thanh Menu -->
    <div id="navbar-menu">
      <router-link class="btn-menu"  to="/dashboard">
        <div class="btn-menu-icon btn-dashboard"></div>
        <div class="btn-menu-text ">Tổng quan</div>
      </router-link>

      <router-link class="btn-menu" to="/report">
        <div class="btn-menu-icon btn-report" ></div>
        <div class="btn-menu-text ">Báo cáo</div>
      </router-link>

      <router-link class="btn-menu" to="/buy">
        <div class="btn-menu-icon btn-buy" ></div>
        <div class="btn-menu-text ">Mua hàng</div>
      </router-link>
      <router-link class="btn-menu" to="/employee">
        <div class="btn-menu-icon btn-employee"></div>
        <div class="btn-menu-text ">Danh mục nhân viên</div>
      </router-link>

      <router-link class="btn-menu" to="/customer">
        <div class="btn-menu-icon btn-employee" ></div>
        <div class="btn-menu-text ">Danh mục khách hàng</div>
      </router-link>

      <router-link class="btn-menu" to="/system">
        <div class="btn-menu-icon btn-system" ></div>
        <div class="btn-menu-text ">Thiết lập hệ thống</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
@import "../../style/layout/css-navbar.css";
</style>
