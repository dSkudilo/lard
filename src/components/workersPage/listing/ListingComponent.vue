<template>
  <div class="listing">
    <h4 class="title">Список сотрудников</h4>
    <TagsComponent class="mt-5" v-model="tagsSelected"/>
    <CardComponent
      class="mt-4"
      v-for="(item) in list"
      :key="item.id"
      :item="item"
    />
    <div class="listing__bottom mt-5" v-if="canLoadMore">
      <ShowBtnComponent @click="loadItems"/>
    </div>
  </div>
</template>
<script>
import TagsComponent from "@/components/workersPage/listing/TagsComponent";
import CardComponent from "@/components/workersPage/listing/CardComponent";
import ShowBtnComponent from "@/components/workersPage/listing/ShowBtnComponent";
import {useEmployeesStore} from "@/store/employees";
import {computed, onMounted, ref} from "vue";
import {useFiltersStore} from "@/store/filters";
import { pagination } from '@/use/pagination'
export default {
  name: 'ListingComponent',
  components: {ShowBtnComponent, CardComponent, TagsComponent},
  setup() {
    const employees = useEmployeesStore()

    const filters = useFiltersStore()
    const tagsSelected = ref([])

    //вся фильтрация тут
    const filteredEmployees = computed(() =>
      employees.employees.filter(e =>
       ( tagsSelected.value.length === 0 || tagsSelected.value.includes(e.status.tag.id))
        && Object.entries(filters.filters).reduce(
          (acc, [key, val]) => e[key].id !== val.id
              ? false
              : acc
          , true)
    ))
    const { list, loadItems, canLoadMore } = pagination(filteredEmployees)
    onMounted(() => {
      loadItems(true)
    })
    return {
      list,
      loadItems,
      canLoadMore,
      tagsSelected,
    }
  }

}
</script>
<style scoped>
.listing {
  padding: 30px 40px 60px;
}
.listing__bottom {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
