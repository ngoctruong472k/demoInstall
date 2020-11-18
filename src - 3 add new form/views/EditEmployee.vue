<template>
  <div class="box-editemployee">
    <div class="block-add">
      <div class="form-add">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="nameInput"
              placeholder="Name:"
              v-model="employee.name"
            />
          </div>
          <div class="form-group">
            <!-- <label for="gmailInput">Email</label> -->
            <input
              type="text"
              class="form-control"
              id="gmailInput"
              placeholder="Email:"
              v-model="employee.gmail"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              pattern=""
              id="phoneInput"
              placeholder="Phone:"
              v-model="employee.phone"
            />
          </div>
          <div class="btn btn-primary" @click="clickSave()">save</div>
          <div class="btn btn-primary" id="close" @click="clickThoat()">
            Close
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditEmployee",
  props: {
    employee: Object,
  },
  methods: {
    clickSave() {
      this.$emit("save", this.employee);
    },
    clickThoat() {
      this.$emit("nosave", this.employee);
    },
  },
};
</script>
<style>
.form-add {
  text-align: center;
}

.block-add {
  position: absolute;
  display: flex;
  text-align: center;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150%;
  top: 0;
  left: 0;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
}
.form-add {
  margin: auto;
  border: 1px solid #fff;
  padding: 25px;
  border-radius: 5px;
  position: absolute;
  width: 500px;
  background: #fff;
  left: 38%;
  margin-top: -30%;
}
#close {
  margin-left: 25px;
}
</style>