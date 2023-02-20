<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <AddButton @click="addNewEmploye"/>
    </div>
    <div class="sidebar__filter">
      <FilterComponent/>
    </div>
  </div>
</template>
<script>
import AddButton from "@/components/workersPage/sidebar/AddButton";
import FilterComponent from "@/components/workersPage/sidebar/filter/FilterComponent";

import {useRouter} from "vue-router";
export default {
  name:'SidebarComponent',
  components: {FilterComponent, AddButton},
  setup() {
    const router = useRouter()
    const addNewEmploye = () => {
     router.push({
       name:'Worker',
       params: {
         id: 'add'
       }
     })
    }
    return {
      addNewEmploye
    }
  },
}
</script>
<style>
.sidebar {
  background-color: white;
  box-shadow: 0px 7px 30px rgba(42, 53, 140, 0.03);
  border-radius: 10px;
}
.sidebar__header {
  padding: 30px;
  border-bottom: 1px solid #DBE4ED;
}
</style>
