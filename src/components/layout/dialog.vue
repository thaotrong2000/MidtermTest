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

          <hr>

          <!-- Tao thong tin o dong 1 -->

          <!-- Left -->
          <div class="dialog-information">
            <div class="dialog-input-label">
              <div class="dialog-input-text">Mã nhân viên(<span>*</span>)</div>
              <input type="text" class="dialog-input" autofocus/>
            </div>
            <!-- Right -->
            <div class="dialog-input-label">
              <div class="dialog-input-text">Họ và tên(<span>*</span>)</div>
              <input type="text" class="dialog-input" />
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
              <select class="dialog-input">
                <option value="1">Nam</option>
                <option value="0">Nữ</option>
                <option value="2">Khác</option>
              </select>
            </div>
          </div>


          <!-- Tao thong tin dong thu 3 -->
          <div class="dialog-information">
            <div class="dialog-input-label">
              <div class="dialog-input-text">Số CMTNHD/ Căn cước(<span>*</span>)</div>
              <input type="text" class="dialog-input" />
            </div>
            <!-- Right -->
            <div class="dialog-input-label">
              <div class="dialog-input-text">Ngày cấp</div>
              <input type="text" class="dialog-input" />
            </div>
          </div>

          <!-- Tao thong tin dong thu 4 -->
          <div class="dialog-information">
            <div class="dialog-input-label">
              <div class="dialog-input-text">Nơi cấp</div>
              <input type="text" class="dialog-input" />
            </div>
            <!-- Right -->
            <!-- <div class="dialog-input-label">
              <div class="dialog-input-text">Mã nhân viên(<span>*</span>)</div>
              <input type="text" class="dialog-input" />
            </div> -->
          </div>

          <!-- Tao thong tin dong thu 5 -->
          <div class="dialog-information dialog-information-last" >
            <div class="dialog-input-label">
              <div class="dialog-input-text">Email(*)</div>
              <input type="text" class="dialog-input" />
            </div>
            <!-- Right -->
            <div class="dialog-input-label">
              <div class="dialog-input-text">Số điện thoại(<span>*</span>)</div>
              <input type="text" class="dialog-input" />
            </div>
          </div>

          <div class="dialog-common">
            B. THÔNG TIN CÔNG VIỆC:
          </div>

          <hr>

          <!-- Tao thong tin o dong 1 -->

          <!-- Left -->
          <div class="dialog-information">
            <div class="dialog-input-label">
              <div class="dialog-input-text">Vị trí</div>
              <input type="text" class="dialog-input" />
            </div>
            <!-- Right -->
            <div class="dialog-input-label">
              <div class="dialog-input-text">Phòng ban</div>
              <input type="text" class="dialog-input" />
            </div>
          </div>

          <!-- Tao thong tin dong thu 2 -->
          <div class="dialog-information">
            <div class="dialog-input-label">
              <div class="dialog-input-text">Mã số thuế cá nhân</div>
              <input type="text" class="dialog-input" />
            </div>
            <!-- Right -->
            <div class="dialog-input-label">
              <div class="dialog-input-text">Mức lương cơ bản</div>
              <input type="text" class="dialog-input" />
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
              <input type="text" class="dialog-input" />
            </div>
          </div>
        </div>
      </div>

      <!-- Common detail -->

      <!-- Tao Footer -->
      <div class="dialog-footer">
        <div class="dialog-cacel dialog-button-change">Hủy</div>
        <div class="dialog-save dialog-button-change">
          <div class="dialog-save-icon"></div>
          <div class="dialog-save-text">Lưu</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
  },
};
</script>

<style>
@import "../../style/layout/css-dialog.css";
</style>
