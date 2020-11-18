<template>
  <div id="box-employee">
    <div class="container">
      <div class="block-employee-list">
        <table class="table table-bordered">
          <thead>
            <tr class="hover-tr">
              <th scope="col" class="bg-th">ID</th>
              <th scope="col" class="bg-th" >Name</th>
              <th scope="col" class="bg-th">Email</th>
              <th scope="col" class="bg-th">Phone</th>
              <th scope="col" class="bg-th">Actions</th>
            </tr>
          </thead>
          <tbody class="block-tbody">
            <tr v-for="(product, index) in employeeList" :key="index">
              <td class="td-id" scope="row">{{ product.id }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.gmail }}</td>
              <td>{{ product.phone }}</td>
              <td>
                <button type="button" class="btn btn-warning">
                  Edit
                </button>
                <button type="button" class="btn btn-danger" >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
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
    };
  },
};
</script>

