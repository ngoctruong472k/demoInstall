<template>
  <div class="box-editemployee">
    <div class="block-add">
      <div class="form-add">
        <form>
          <div class="form-group">
            <input type="text" class="form-control" id="nameInput" placeholder="Name:"/>
          </div>
          <div class="form-group">
            <!-- <label for="gmailInput">Email</label> -->
            <input type="text" class="form-control" id="gmailInput" placeholder="Email:" />
          </div>
          <div class="form-group">
            <input type="text" class="form-control" pattern="" id="phoneInput" placeholder="Phone:"/>
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
.form-add{
  text-align:center;
}
</style>