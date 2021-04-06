<template>
  <div id="dialog" v-show="isShow">
    <div id="dialog-opacity"></div>
    <div id="dialog-content">
      <div class="dialog-header">
        <div>Thông tin nhân viên</div>
        <button @click="closeDialog()"></button>
      </div>
      <div class="dialog-content">
        <div class="dialog-content-ava">
          <div class="dialog-ava"></div>
          <div class="dialog-ava-text">
            (Vui lòng chọn ảnh có định dạng .jpq .jpeg .png .gif.)
          </div>
        </div>
        <div class="dialog-content-main">
          <!-- Common first -->
          <div class="dialog-common">
            A. THÔNG TIN CHUNG:
          </div>

          <hr />

          <!-- Tao thong tin o dong 1 -->

          <!-- Left -->
          <div class="dialog-information">
            <div class="dialog-input-label">
              <div class="dialog-input-text">Mã nhân viên(<span>*</span>)</div>
              <input
                type="text"
                class="dialog-input"
                v-model="employeeGet.EmployeeCode"
              />
            </div>
            <!-- Right -->
            <div class="dialog-input-label">
              <div class="dialog-input-text">Họ và tên(<span>*</span>)</div>
              <input
                type="text"
                class="dialog-input"
                v-model="employeeGet.FullName"
              />
            </div>
          </div>

          <!-- Tao thong tin dong thu 2 -->
          <div class="dialog-information">
            <div class="dialog-input-label">
              <div class="dialog-input-text">Ngày sinh</div>
              <input type="date" class="dialog-input" />
            </div>
            <!-- Right -->
            <div class="dialog-input-label">
              <div class="dialog-input-text">Giới tính</div>
              <select class="dialog-input" v-model="employeeGet.Gender">
                <option  value="3"></option>
                <option  :selected=" employeeGet.Gender == 1" value="1">Nam</option>
                <option :selected=" employeeGet.Gender == 0" value="0">Nữ</option>
                <option  :selected=" employeeGet.Gender == 2" value="2">Không xác định</option>
              </select>
            </div>
          </div>

          <!-- Tao thong tin dong thu 3 -->
          <div class="dialog-information">
            <div class="dialog-input-label">
              <div class="dialog-input-text">
                Số CMTNHD/ Căn cước(<span>*</span>)
              </div>
              <input
                type="text"
                class="dialog-input"
                v-model="employeeGet.IdentityNumber"
              />
            </div>
            <!-- Right -->
            <div class="dialog-input-label">
              <div class="dialog-input-text">Ngày cấp</div>
              <input
                type="text"
                class="dialog-input"
                v-model="employeeGet.IdentityDate"
              />
            </div>
          </div>

          <!-- Tao thong tin dong thu 4 -->
          <div class="dialog-information">
            <div class="dialog-input-label">
              <div class="dialog-input-text">Nơi cấp</div>
              <input
                type="text"
                class="dialog-input"
                v-model="employeeGet.IdentityPlace"
              />
            </div>
            <!-- Right -->
            <!-- <div class="dialog-input-label">
              <div class="dialog-input-text">Mã nhân viên(<span>*</span>)</div>
              <input type="text" class="dialog-input" />
            </div> -->
          </div>

          <!-- Tao thong tin dong thu 5 -->
          <div class="dialog-information dialog-information-last">
            <div class="dialog-input-label">
              <div class="dialog-input-text">Email(*)</div>
              <input
                type="text"
                class="dialog-input"
                v-model="employeeGet.Email"
              />
            </div>
            <!-- Right -->
            <div class="dialog-input-label">
              <div class="dialog-input-text">Số điện thoại(<span>*</span>)</div>
              <input
                type="text"
                class="dialog-input"
                v-model="employeeGet.PhoneNumber"
              />
            </div>
          </div>

          <div class="dialog-common">
            B. THÔNG TIN CÔNG VIỆC:
          </div>

          <hr />

          <!-- Tao thong tin o dong 1 -->

          <!-- Left -->
          <div class="dialog-information">
            <div class="dialog-input-label">
              <div class="dialog-input-text">Vị trí</div>
              <input
                type="text"
                class="dialog-input"
                v-model="employeeGet.PositionName"
              />
            </div>
            <!-- Right -->
            <div class="dialog-input-label">
              <div class="dialog-input-text">Phòng ban</div>
              <input
                type="text"
                class="dialog-input"
                v-model="employeeGet.DepartmentName"
              />
            </div>
          </div>

          <!-- Tao thong tin dong thu 2 -->
          <div class="dialog-information">
            <div class="dialog-input-label">
              <div class="dialog-input-text">Mã số thuế cá nhân</div>
              <input
                type="text"
                class="dialog-input"
                v-model="employeeGet.PersonalTaxCode"
              />
            </div>
            <!-- Right -->
            <div class="dialog-input-label">
              <div class="dialog-input-text">Mức lương cơ bản</div>
              <input
                type="text"
                class="dialog-input"
                v-model="employeeGet.Salary"
              />
            </div>
          </div>

          <!-- Tao thong tin dong thu 3 -->
          <div class="dialog-information">
            <div class="dialog-input-label">
              <div class="dialog-input-text">Ngày gia nhập công ty</div>
              <input type="text" class="dialog-input" />
            </div>
            <!-- Right -->
            <div class="dialog-input-label">
              <div class="dialog-input-text">Tình trạng công việc</div>
              <input
                type="text"
                class="dialog-input"
                v-model="employeeGet.WorkStatus"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Common detail -->

      <!-- Tao Footer -->
      <div class="dialog-footer">
        <button @click="deleteData()" class="dialog-delete-employee dialog-button-change" :disabled="btnDelete" >Xóa</button>
        <div class="dialog-cancel-delete">
          <div class="dialog-cacel dialog-button-change" @click="closeDialog()">
          Hủy
        </div>
        <div class="dialog-save dialog-button-change" @click="saveButton()">
          <div class="dialog-save-icon"></div>
          <div class="dialog-save-text">Lưu</div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    isShow: {
      type: Boolean,
      default: true,
    },
    employeeGet: {
      type: Object,
    },
    statusForm: {
      type: String,
      default: "add",
    },
    selectedEmployee: {
      type: String,
      default: "",
    },
    btnDelete:{
      type: Boolean, 
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },

    saveButton() {
      if (this.statusForm == "add") {
        alert("Ban dang them moi");
        axios
          .post("http://api.manhnv.net/v1/employees", this.employeeGet)
          .then(() => {
            alert("THANH CONG");

            this.$emit("closeDialog");
            this.$emit("loadData");
          })
          .catch((res) => {
            console.log(res);
            alert("that bai");
          });
      } else {
        alert("Ban dang Sua");
        axios
          .put(
            "http://api.manhnv.net/v1/employees/" + this.employeeGet.EmployeeId,
            this.employeeGet
          )
          .then(() => {
            alert("SUA THANH CONG");
            this.$emit("closeDialog");
            this.$emit("loadData");
          })
          .catch((res) => {
            console.log(res);
            alert(" sua that bai");
          });
      }
    },
    deleteData() {
      axios
        .delete("http://api.manhnv.net/v1/employees/" + this.selectedEmployee)
        .then(() => {
          alert("Xoa Thanh cong ");
          this.$emit("closeDialog");
          this.$emit("loadData");
        })
        .catch(() => {
          alert("Khong");
        });
    },
    
    
  },
};
</script>

<style>
@import "../../style/layout/css-dialog.css";
</style>
