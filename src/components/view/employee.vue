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

      <button id="content-navbar-reload" @click="loadData()"></button>
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
          <tr
            v-for="employee in employees"
            :key="employee.EmployeeId"
            @dblclick="trDoubleClick(employee.EmployeeId)"
          >
            <td>{{ employee.EmployeeCode }}</td>
            <td>{{ employee.FullName }}</td>
            <td>{{ employee.GenderName }}</td>
            <td>{{ formatDateOfBirth(employee.DateOfBirth) }}</td>
            <td>{{ employee.PhoneNumber }}</td>
            <td>{{ employee.Email }}</td>
            <td>{{ employee.PositionName }}</td>
            <td>{{ employee.DepartmentName }}</td>
            <td>{{ formatMoney(employee.Salary) }}</td>
            <td>{{ employee.WorkStatus }}</td>
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
    <Dialog
      :isShow="isShow"
      @closeDialog="closeDialog()"
      :employeeGet="employeeGet"
      :statusForm="statusForm"
      @loadData="loadData()"
      :selectedEmployee="selectedEmployee"
      :btnDelete="btnDelete"
      :inputFocus="inputFocus"
      :employeeCodeDefault= "employeeCodeDefault"
    />
  </div>
</template>

<script>
import Dialog from "../layout/dialog";
import axios from "axios";
export default {
  data() {
    return {
      isShow: false,
      employees: [],
      employeeGet: {},
      statusForm: "add",
      selectedEmployee: "",
      btnDelete: false,
      inputFocus: false,
      employeeCodeArray: [],
      employeeCodeHeader: [],
      employeeCodeDefault: 0
    };
  },
  created() {
    axios
      .get("http://api.manhnv.net/v1/employees")
      .then((res) => {
        console.log(res.data);
        this.employees = res.data;
        console.log(res.data.length);

        for (var x = 0; x < res.data.length; x++) {
          this.employeeCodeArray.push(res.data[x].EmployeeCode);
        }
        console.log(this.employeeCodeArray);
        this.searchMaxEmployeeCode(res);
      })
      .catch((res) => {
        console.log(res);
      });
  },
  components: {
    Dialog,
  },
  methods: {
    formatMoney(money) {
      var a = new Intl.NumberFormat().format(money);
      return a;
    },
    formatDateOfBirth(birth) {
      var d = new Date(birth),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },

    // Hien thi Dialog Them moi nhan vien
    isShowDialog() {
      this.isShow = true;
      this.statusForm = "add";
      this.employeeGet = {};
      this.btnDelete = true;
      this.inputFocus = true;
      
    },

    // Close Dialog
    closeDialog() {
      this.isShow = false;
      this.inputFocus = false;
    },

    // Load Data
    loadData() {
      axios
        .get("http://api.manhnv.net/v1/employees")
        .then((res) => {
          console.log(res.data);
          this.employees = res.data;
          this.searchMaxEmployeeCode(res);
        })
        .catch((res) => {
          console.log(res);
        });
    },

    // Function tim EmployeeCode Max
    searchMaxEmployeeCode(res) {
      this.employeeCodeHeader = [];
      console.log(res.data.length);
      this.employeeCodeArray = [];

      for (var x = 0; x < res.data.length; x++) {
        this.employeeCodeArray.push(res.data[x].EmployeeCode);
      }
      console.log(this.employeeCodeArray);

      // Loc du lieu (EmployeeCode) tu array employeeCodeArray

      for (x = 0; x < this.employeeCodeArray.length; x++) {
        var substring = this.employeeCodeArray[x].substring(0, 3);
        var regex = /NV-/;
        if (regex.test(substring) == true) {
          var substringCode = this.employeeCodeArray[x].substring(3);
          this.employeeCodeHeader.push(substringCode);
        }
      }

      console.log(this.employeeCodeHeader);

      var max_of_array = Math.max.apply(Math, this.employeeCodeHeader);
      this.employeeCodeDefault = max_of_array;
      console.log(this.employeeCodeDefault);
    },

    // Hien thi thong tin cua Employee
    trDoubleClick(customerId) {
      this.statusForm = "edit";
      this.isShow = true;
      this.inputFocus = true;
      this.selectedEmployee = customerId;
      this.btnDelete = false;

      axios
        .get("http://api.manhnv.net/v1/employees/" + customerId)
        .then((res) => {
          this.employeeGet = res.data;
          console.log(this.employeeGet);
        })
        .catch((res) => {
          console.log(res);
          alert("That bai");
        });
    },
  },
};
</script>
