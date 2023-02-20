<template>
  <v-form >
    <div class="filter">
      <h4 class="title">Фильтр</h4>
      <v-row no-gutters class="mt-5">
        <v-col cols="6" class="pr-2">
          <AppSelect
            v-model="filtersParams.country"
            :items="countries"
            item-title="title"
            labelText="Гражданство"
            hide-details
            placeholder="Все страны"
          />
        </v-col>
        <v-col cols="6" class="pl-2">
          <AppSelect
            labelText="Пол"
            hide-details
            v-model="filtersParams.gender"
            :items="genders"
            item-title="title"
            placeholder="Без разницы"
          />
        </v-col>
      </v-row>
      <v-row no-gutters class="mt-5">
        <v-col cols="12">
          <AppSelect
            labelText="Должность"
            hide-details
            v-model="filtersParams.position"
            :items="positions"
            item-title="title"
            placeholder="Все должности"
          />
        </v-col>
      </v-row>
      <div class="filter__contracts mt-5">
        <ContractsSelectComponent v-model="filtersParams.typeContract"/>
      </div>
      <v-row no-gutters class="mt-5">
        <v-col cols="6" class="pr-2">
          <AppButton
            @click="setFilters"
            height="48px"
            width="100%"
            color="#00AE5B">
            <span class="filter__btn">Применить</span>
          </AppButton>
        </v-col>
        <v-col cols="6" class="pl-2">
          <AppButton
            @click="clearFilters"
            height="48px"
            width="100%"
            color="#84909B">
            <span class="filter__btn">Очистить</span>
          </AppButton>
        </v-col>
      </v-row>
    </div>
  </v-form>
</template>
<script>

import {ref} from "vue";
import ContractsSelectComponent from "@/components/workersPage/sidebar/filter/ContractsSelectComponent";
import countries from "@/mocs/countries";
import genders from "@/mocs/genders";
import positions from "@/mocs/positions";
import {useFiltersStore} from "@/store/filters";
export default {
  name:'FilterComponent',
  components: {ContractsSelectComponent},
  setup() {
    const filters = useFiltersStore()

    const filtersParams = ref({})
    const getFilters = () =>
      Object.entries(filtersParams.value).reduce((acc,[key,val]) => {
        if (val) {
          acc[key] = val
        }
        return acc
      }, {})

    const setFilters = () => {
      filters.setFilters(getFilters())
    }

    const clearFilters = () => {
      filters.clearFilters()
      filtersParams.value = {}
    }
    return {
      filters,
      filtersParams,
      setFilters,
      clearFilters,
      countries,
      genders,
      positions
    }
  },
}
</script>
<style scoped>
.filter {
  padding: 30px;
  }
.filter__contracts {
  padding-bottom: 20px;
  border-bottom: 1px solid #DBE4ED;
}
.filter__btn {
  font-weight: 500;
  font-size: 15px;
  line-height: 120%;
  color: white;
}
</style>
