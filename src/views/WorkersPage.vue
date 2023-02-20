<template>
  <div class="workers">
    <div class="workers__main">
      <SearchComponent/>
      <ListingComponent/>
    </div>
    <SidebarComponent class="workers__sidebar"/>
    <router-view/>
  </div>
</template>

<script>
import SearchComponent from "@/components/workersPage/SearchComponent";
import ListingComponent from "@/components/workersPage/listing/ListingComponent";
import SidebarComponent from "@/components/workersPage/sidebar/SidebarComponent";

export default {
  name: 'WorkersPage',
  components: {SidebarComponent, ListingComponent, SearchComponent},
}
</script>
<style scoped>
.workers {
  display: flex;
  align-items: start;
  margin: 41px 50px 0;

}
.workers__main {
  background-color: white;
  width: 66%;
  box-shadow: 0px 7px 30px rgba(42, 53, 140, 0.03);
}
.workers__sidebar {
  width: 33%;
  margin-left: 30px;
}

@media screen and (max-width: 1300px){
  .workers {
    flex-direction: column-reverse;
  }
  .workers__main,
  .workers__sidebar {
    width: 100%;
  }
  .workers__sidebar {
    margin:0 0 20px 0;
  }
}
</style>
