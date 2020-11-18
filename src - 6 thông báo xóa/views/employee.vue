<template>
  <div id="box-employee">
    <vue-confirm-dialog></vue-confirm-dialog>
    <div class="container">
      <div class="block-employee-list">
        <div class="row">
          <div class="col-md-6 col-lg-6 col-xl-6 col-6" style="padding-top:40px;">
            <input v-model="filterProduct" class="form-control" type="text" id="myInput" placeholder="Search ..."
              style="margin-bottom: 10px"
            />
          </div>
          <div class="col-md-6 col-lg-6 col-xl-6 col-6">
            <div class="block-manage">
              <div class="bt-addnew">
                <button type="button" class="btn btn-primary" @click="clickAdd()">Add New</button>
              </div>
            </div>
          </div>
          <table class="table table-bordered">
            <thead>
              <tr class="hover-tr">
                <th scope="col" class="bg-th">ID</th>
                <th scope="col" class="bg-th">Name</th>
                <th scope="col" class="bg-th">Email</th>
                <th scope="col" class="bg-th">Phone</th>
                <th scope="col" class="bg-th">Actions</th>
              </tr>
            </thead>
            <tbody class="block-tbody">
              <tr v-for="(product, index) in filterProducts" :key="index">
                <td class="td-id" scope="row">{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.gmail }}</td>
                <td>{{ product.phone }}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-warning"
                    @click="clickEdit(product)"
                  >
                   <font-awesome-icon icon="edit" />
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="clickDelete(product)"
                  >
                   <font-awesome-icon icon="trash" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="container">
      <editemployee
        :employee="employee"
        @save="clickSave"
        @nosave="clickThoat"
        v-if="isEdit"
      ></editemployee>
    </div>
  </div>
</template>

<script>
import EditEmployee from "./EditEmployee";
export default {
  data() {
    return {
      employeeList: [
        {
          id: 1,
          name: "Công Ảo",
          gmail: "lecongao.it@gmail.com",
          phone: "123456",
        },
        {
          id: 2,
          name: "Nguyễn Trần Bổn",
          gmail: "tranbong@gmail.com",
          phone: "123455",
        },
        {
          id: 3,
          name: "Nguyễn Ngọc Trường",
          gmail: "Ngoctruong@gmail.com",
          phone: "123454",
        },
      ],
      employee: null,
      isEdit: false,
      filterProduct: "",
      
    };
  },
  filters: {
    toLowerCase(text) {
      return text.toLowerCase();
    },
  },
   computed: {
    // Search
    filterProducts: function () {
      let seft = this;
      return this.employeeList.filter(function (product) {
        return (
          (product.gmail + product.name + product.id)
            .toLowerCase()
            .indexOf(seft.filterProduct.toLowerCase()) >= 0
        );
      });
    },
   },
  components: {
    editemployee: EditEmployee,
  },
  methods: {
    clickAdd() {
      let employee = {
        id: Math.floor(Math.random() * 100),
        name: "",
        gmail: "",
        phone: "",
      };
      this.employee = employee;
      this.isEdit = true;
    },
    clickSave(employee) {
      let index = this.employeeList.findIndex((item) => item.id == employee.id);
      if (index >= 0) {
        this.employeeList.splice(index, 1, employee);
      } else {
        this.employeeList.push(employee);
      }
      this.isEdit = false;
    },
    clickThoat(employee) {
      let index = this.employeeList.findIndex((item) => item.id == employee.id);
      this.isEdit = false;
    },
    clickEdit(employee) {
      this.employee = JSON.parse(JSON.stringify(employee));
      this.isEdit = true;
    },
     clickDelete(employee) {
      this.$confirm({
        message: `Bạn có muốn xóa không?`,
        button: {
          no: "No",
          yes: "Yes",
        },
        /**
         * Callback Function
         * @param {Boolean} confirm
         */
        callback: (confirm) => {
          if (confirm) {
            // ... do something
            let index = this.employeeList.findIndex(
              (item) => item.id == employee.id
            );
            this.employeeList.splice(index, 1);
          }
        },
      });
    },
  },
};
</script>

<style>
.block-manage {
  padding-top: 40px;
  padding-bottom: 20px;
  float: right;
}
</style>