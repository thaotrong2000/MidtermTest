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
                id="employeeCode"
                type="text"
                class="dialog-input"
                v-model="employeeGet.EmployeeCode"
                ref="employeeCode"
                @blur="employeeCode()"
                :style="
                  checkEmployeeCode
                    ? 'border: 0.1px solid #ccc;'
                    : 'border: 0.1px solid red;'
                "
              />
            </div>
            <!-- Right -->
            <div class="dialog-input-label">
              <div class="dialog-input-text">Họ và tên(<span>*</span>)</div>
              <input
                type="text"
                class="dialog-input"
                v-model="employeeGet.FullName"
                ref="employeeFullName"
                @blur="employeeFullName()"
                :style="
                  checkEmployeeFullName
                    ? 'border: 0.1px solid #ccc;'
                    : 'border: 0.1px solid red;'
                "
              />
            </div>
          </div>

          <!-- Tao thong tin dong thu 2 -->
          <div class="dialog-information">
            <div class="dialog-input-label">
              <div class="dialog-input-text">Ngày sinh</div>
              <input
                type="date"
                class="dialog-input"
                v-bind:value="dateChange(employeeGet.DateOfBirth)"
                v-on:change="updateDate($event.target.value)"
              />
            </div>
            <!-- Right -->
            <div class="dialog-input-label">
              <div class="dialog-input-text">Giới tính</div>
              <select class="dialog-input" v-model="employeeGet.Gender">
                <option value="3"></option>
                <option :selected="employeeGet.Gender == 1" value="1"
                  >Nam</option
                >
                <option :selected="employeeGet.Gender == 0" value="0"
                  >Nữ</option
                >
                <option :selected="employeeGet.Gender == 2" value="2"
                  >Không xác định</option
                >
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
                ref="employeeIdentityNumber"
                @blur="employeeIdentityNumber()"
                :style="
                  checkEmployeeIdentityNumber
                    ? 'border: 0.1px solid #ccc;'
                    : 'border: 0.1px solid red;'
                "
              />
            </div>
            <!-- Right -->
            <div class="dialog-input-label">
              <div class="dialog-input-text">Ngày cấp</div>
              <input
                type="date"
                class="dialog-input"
                v-bind:value="dateChange(employeeGet.IdentityDate)"
                v-on:change="updateDateIdentityDate($event.target.value)"
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
              <div class="dialog-input-text">Email<span>(*)</span></div>
              <input
                type="text"
                placeholder="misa@company"
                class="dialog-input"
                v-model="employeeGet.Email"
                ref="employeeEmail"
                @blur="employeeEmail()"
                :style="
                  checkEmployeeEmail
                    ? 'border: 0.1px solid #ccc;'
                    : 'border: 0.1px solid red;'
                "
              />
            </div>
            <!-- Right -->
            <div class="dialog-input-label">
              <div class="dialog-input-text">Số điện thoại(<span>*</span>)</div>
              <input
                type="text"
                class="dialog-input"
                v-model="employeeGet.PhoneNumber"
                ref="employeeTel"
                @blur="employeeTel()"
                :style="
                  checkEmployeeTel
                    ? 'border: 0.1px solid #ccc;'
                    : 'border: 0.1px solid red;'
                "
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
              <input type="date" class="dialog-input" />
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
        <button
          @click="deleteData()"
          class="dialog-delete-employee dialog-button-change"
          :disabled="btnDelete"
        >
          Xóa
        </button>
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
    btnDelete: {
      type: Boolean,
      default: false,
    },
    inputFocus: {
      type: Boolean,
      default: false,
    },
    employeeCodeDefault: {
      type: Number,
      default: 0,
    },
    employeeCodeArray:{
      type: Array
    }
  },

  data() {
    return {
      checkEmployeeCode: true,
      checkEmployeeFullName: true,
      checkEmployeeIdentityNumber: true,
      checkEmployeeEmail: true,
      checkEmployeeTel: true,
    };
  },
  methods: {
    employeeTel() {
      var check = this.$refs.employeeTel.value;
      if (check == "") {
        this.checkEmployeeTel = false;
      } else {
        this.checkEmployeeTel = true;
      }
    },
    employeeEmail() {
      var check = this.$refs.employeeEmail.value;
      var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        check
      );

      if (check == "" || regex == false) {
        this.checkEmployeeEmail = false;
      } else {
        this.checkEmployeeEmail = true;
      }
    },
    employeeIdentityNumber() {
      var check = this.$refs.employeeIdentityNumber.value;
      if (check == "") {
        this.checkEmployeeIdentityNumber = false;
      } else {
        this.checkEmployeeIdentityNumber = true;
      }
    },
    employeeFullName() {
      var check = this.$refs.employeeFullName.value;
      if (check == "") {
        this.checkEmployeeFullName = false;
      } else {
        this.checkEmployeeFullName = true;
      }
    },
    employeeCode() {
      var check = this.$refs.employeeCode.value;
      var checkRepeat = this.employeeCodeArray.includes(check);

      if (check == "" || checkRepeat == true) {
        this.checkEmployeeCode = false;
      } else {
        this.checkEmployeeCode = true;
      }
    },
    updateDateIdentityDate(x) {
      this.employeeGet.IdentityDate = x;
    },

    updateDate(x) {
      this.employeeGet.DateOfBirth = x;
    },

    dateChange(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
    closeDialog() {
      this.$emit("closeDialog");
      (this.checkEmployeeCode = true),
        (this.checkEmployeeFullName = true),
        (this.checkEmployeeIdentityNumber = true),
        (this.checkEmployeeEmail = true),
        (this.checkEmployeeTel = true);
    },

    saveButton() {
      if (
        this.checkEmployeeCode == true &&
        this.checkEmployeeFullName == true &&
        this.checkEmployeeIdentityNumber == true &&
        this.checkEmployeeEmail == true &&
        this.checkEmployeeTel == true
      ) {
        if (this.statusForm == "add") {
          alert(this.employeeCodeDefault);
          if (this.$refs.employeeCode.value != "") {
            alert("Bạn đang thêm mới Nhân Viên");
            axios
              .post("http://api.manhnv.net/v1/employees", this.employeeGet)
              .then(() => {
                alert("Thêm mới thành công");

                this.$emit("closeDialog");
                this.$emit("loadData");
              })
              .catch((res) => {
                console.log(res);
                alert("Không thêm được dữ liệu");
              });
          } else {
            this.checkEmployeeCode = false;
            this.checkEmployeeFullName = false;
            this.checkEmployeeIdentityNumber = false;
            this.checkEmployeeEmail = false;
            this.checkEmployeeTel = false;
            alert("Bạn cần nhập đầy đủ thông tin bắt buộc");
          }
        } else {
          axios
            .put(
              "http://api.manhnv.net/v1/employees/" +
                this.employeeGet.EmployeeId,
              this.employeeGet
            )
            .then(() => {
              alert("Bạn cập nhật thông tin thành công!");
              this.$emit("closeDialog");
              this.$emit("loadData");
            })
            .catch((res) => {
              console.log(res);
              alert("Cập nhật thất bại!");
            });
        }
      } else {
        alert("Bạn cần nhập đầy đủ thông tin bắt buộc");
      }
    },
    deleteData() {
      var confirmDelete = confirm(
        "“Bạn có chắc chắn muốn xóa nhân viên [" +
          this.employeeGet.EmployeeCode +
          "] không?”"
      );
      if (confirmDelete == true) {
        axios
          .delete("http://api.manhnv.net/v1/employees/" + this.selectedEmployee)
          .then(() => {
            alert("Xóa thành công!");
            this.$emit("closeDialog");
            this.$emit("loadData");
          })
          .catch(() => {
            alert("Không thể xóa dữ liệu");
          });
      } else {
        alert("Bạn đã hủy việc Xóa!");
      }
    },
  },
  watch: {
    inputFocus() {
      if (this.inputFocus == true) {
        this.checkEmployeeCode = true;
        this.$nextTick(() => this.$refs.employeeCode.focus());
        console.log(this.employeeCodeArray);
      }
    },
  },
};
</script>

<style>
@import "../../style/layout/css-dialog.css";

.red {
  background-color: #ccc;
  color: #ffffff;
}
</style>
