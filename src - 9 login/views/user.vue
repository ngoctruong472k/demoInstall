<template>
  <div id="box-employee">
    <vue-confirm-dialog></vue-confirm-dialog>
    <div class="container">
      <div class="block-employee-list">
        <div class="row">
          <div class="col-md-6 col-lg-6 col-xl-6 col-6"
            style="padding-top: 40px"
          >
            <input
              v-model="filterProduct"
              class="form-control"
              type="text"
              id="myInput"
              placeholder="Search ..."
              style="margin-bottom: 10px"
            />
          </div>
          <div class="col-md-6 col-lg-6 col-xl-6 col-6">
            <div class="block-manage">
              <div class="bt-addnew">
               
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="block-select">
              <h4 class="select">{{ select }}</h4>
              <select v-model="pageSizeModel">
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
              </select>
            </div>
          </div>
          <table class="table table-bordered">
            <thead>
              <tr class="hover-tr">
                <th scope="col" class="bg-th" @click="sort('id')">ID</th>
                <th scope="col" class="bg-th" @click="sort('name')">Name</th>
                <th scope="col" class="bg-th" @click="sort('gmail')">Email</th>
                <th scope="col" class="bg-th" @click="sort('phone')">Phone</th>
              </tr>
            </thead>
            <tbody class="block-tbody">
              <tr v-for="(product, index) in paginate" :key="index">
                <td class="td-id" scope="row">{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.gmail }}</td>
                <td>{{ product.phone }}</td>
                
              </tr>
            </tbody>
          </table>
          <ul class="block-ul">
            <li
              class="li"
              v-for="pageNumber in totalPages"
              v-bind:key="pageNumber"
            >
              <a
                v-bind:key="pageNumber"
                href="#"
                @click="setPage(pageNumber)"
                :class="{
                  current: currentPage === pageNumber,
                  last:
                    pageNumber == totalPages &&
                    Math.abs(pageNumber - currentPage) > 3,
                  first:
                    pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3,
                }"
                >{{ pageNumber }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
    </div>
  </div>
</template>

<script>
import "../sass/style.scss";
export default {
  data() {
    return {
      employeeList: [
        {
          id: "1",
          name: "Công Ảo",
          gmail: "lecongao.it@gmail.com",
          phone: "123456",
        },
        {
          id: "2",
          name: "Nguyễn Trần Bổn",
          gmail: "tranbong@gmail.com",
          phone: "123455",
        },
        {
          id: "3",
          name: "Nguyễn Ngọc Trường",
          gmail: "Ngoctruong@gmail.com",
          phone: "123454",
        },
        {
          id: 4,
          name: "Ngọc Trường",
          gmail: "truong@gmail.com",
          phone: "123454",
        },
        {
          id: 5,
          name: "Nguyễn Trường",
          gmail: "Ngoc@gmail.com",
          phone: "123454",
        },
        {
          id: 6,
          name: "Trường",
          gmail: "Ngoctruong@gmail.com",
          phone: "123454",
        },
        {
          id: 7,
          name: "Nguyễn",
          gmail: "Ngoctruong@gmail.com",
          phone: "123454",
        },
        {
          id: 8,
          name: "Công Ảo",
          gmail: "lecongao.it@gmail.com",
          phone: "123456",
        },
        {
          id: 9,
          name: "Ảo",
          gmail: "ao.it@gmail.com",
          phone: "123456",
        },
        {
          id: 10,
          name: "Ảo Công",
          gmail: "aocong.it@gmail.com",
          phone: "123456",
        },
      ],
      employee: null,
      isEdit: false,
      currentPage: 1,
      itemsPerPage: 5,
      resultCount: 1,
      currentSort: "name",
      currentSortDir: "asc",
      filterProduct: "",
      select: "Sắp xếp theo số trang: ",
    };
  },
  filters: {
    toLowerCase(text) {
      return text.toLowerCase();
    },
  },
  computed: {
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
    totalPages: function () {
      return Math.ceil(this.resultCount / this.itemsPerPage);
    },
    paginate: function () {
      if (
        !this.filterProducts ||
        this.filterProducts.length != this.filterProducts.length
      ) {
        return;
      }
      this.resultCount = this.filterProducts.length;
      console.log("demo 1:", this.resultCount);
      console.log("demo 2:", this.totalPages);

      if (this.currentPage >= this.totalPages) {
        this.currentPage = this.totalPages;
      }
      var index = this.currentPage * this.itemsPerPage - this.itemsPerPage;
      return this.filterProducts
        .sort((a, b) => {
          let modifier = 1;
          if (this.currentSortDir === "desc") modifier = -1;
          if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
          if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        })
        .slice(index, index + this.itemsPerPage);
    },
    pageSizeModel: {
      get() {
        return this.itemsPerPage;
      },
      set(v) {
        this.itemsPerPage = v;
        this.page = 0;
      },
    },
  },
  methods: {
    setPage: function (pageNumber) {
      this.currentPage = pageNumber;
    },
    sort: function (s) {
      //if s == current sort, reverse
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
      console.log(this.currentSortDir);
      console.log(this.currentSort);
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
.block-select{
  padding-bottom: 30px;
}
</style>