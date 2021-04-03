<template>
  <div id="content">
    <div id="content-title">
      <!-- Phan dau cua content -->
      <div id="content-list-customer">Danh sách nhân viên</div>
      <button id="btn-add" class="button-function">
        <div id="btn-add-icon"></div>
        <div id="btn-add-text">Thêm nhân viên</div>
      </button>
    </div>

    <!-- Content Navbar -->
    <div id="content-navbar">
      <div class="content-filter">
        <div class="content-navbar-search">
          <div class="content-navbar-btnsearch"></div>
          <input
            type="text"
            class="button-search"
            placeholder="Tìm kiếm theo Mã, Tên, hoặc Số điện thoại"
          />
        </div>

        <div class="content-navbar-search content-navbar-department">
          <div class="content-navbar-btnsearch "></div>
          <input type="text" class="button-search" value="Tất cả phòng ban" />
        </div>

        <div class="content-navbar-search content-navbar-all">
          <div class="content-navbar-btnsearch "></div>
          <input type="text" class="button-search" value="Tất cả vị trí" />
        </div>
      </div>

      <button id="content-navbar-reload"></button>
    </div>

    <div id="table">
      <table id="content-table">
        <thead>
          <tr>
            <th>Mã nhân viên</th>
            <th>Họ và tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Điện thoại</th>
            <th>Email</th>
            <th>Chức vụ</th>
            <th>Phòng ban</th>
            <th>Mức lương cơ bản</th>
            <th>Tình trạng công việc</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>

          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>

          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>

          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>

          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>

          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>

          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>

          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>

          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>

          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>

          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>

          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>

          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
          <tr>
            <td>NV0001</td>
            <td>Nguyễn Trọng Thảo</td>
            <td>Nam</td>
            <td>28-07-2000</td>
            <td>0355553286</td>
            <td>trongthao@gmail.com</td>
            <td>Nhân viên</td>
            <td>Công nghệ</td>
            <td>1.000.000</td>
            <td>Tốt</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Content Table -->
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "../../style/layout/css-content.css";
@import "../../style/common/button-function.css";
@import "../../style/common/button-search.css";
</style>
