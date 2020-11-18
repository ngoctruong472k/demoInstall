<template>
<edit-employee/>
</template>

<script>
import employee from "./views/employee"
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components: {
    "edit-employee": employee,
  },
}
</script>

