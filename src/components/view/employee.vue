<template>
  <div>
    <div id="content-title">
      <!-- Phan dau cua content -->
      <div id="content-list-customer">Danh sách nhân viên</div>
      <button id="btn-add" class="button-function" @click="isShowDialog()">
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
    <!-- Content Table -->

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
          <tr v-for="employee in employees" :key="employee.EmployeeId">
            <td>{{employee.EmployeeCode}}</td>
            <td>{{employee.FullName}}</td>
            <td>{{employee.GenderName}}</td>
            <td>{{employee.DateOfBirth}}</td>
            <td>{{employee.PhoneNumber}}</td>
            <td>{{employee.Email}}</td>
            <td>{{employee.PositionName}}</td>
            <td>{{employee.DepartmentName}}</td>
            <td>{{employee.Salary}}</td>
            <td>{{employee.WorkStatus}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Tao footer -->
    <div id="footer">
      <div id="footer-title">
        Hiển thị <span class="footer-title-numberlist">1-10/10000</span> nhân
        viên
      </div>

      <div id="footer-paging">
        <!-- Tro ve trang truoc -->
        <div class="icon-pre-page">
          <div class="icon-first-page"></div>
          <div class="icon-prev-page"></div>
        </div>
        <!-- Hien thi danh sach trang -->
        <div class="icon-number-page">
          <button class="number-page">1</button>
          <button class="number-page">2</button>
          <button class="number-page">3</button>
          <button class="number-page">4</button>
        </div>

        <!-- Next den trang tiep theo -->
        <div class="icon-next-page">
          <div class="icon-next-topage"></div>
          <div class="icon-last-page"></div>
        </div>
      </div>
      <div id="footer-infor">
        <span class="footer-title-numberlist">10</span> nhân viên/trang
      </div>
    </div>
    <Dialog :isShow="isShow" @closeDialog="closeDialog()" />
  </div>
</template>

<script>
import Dialog from "../layout/dialog";
import axios from "axios";
export default {
  data() {
    return {
      isShow: false,
      employees: []
    };
  },
  created() {
    axios
      .get("http://api.manhnv.net/v1/employees")
      .then(res=>{
        console.log(res.data); 
        this.employees = res.data;
      })
      .catch(res=>{
        console.log(res);
      });
  },
  components: {
    Dialog,
  },
  methods: {
    isShowDialog() {
      this.isShow = true;
    },
    closeDialog() {
      this.isShow = false;
    },
  },
};
</script>
