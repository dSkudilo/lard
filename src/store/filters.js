import { defineStore } from 'pinia'
import {ref} from "vue";

export const useFiltersStore = defineStore('filters', () => {
  const filters = ref({})

  const setFilters = (filtersObj) => {
    filters.value = filtersObj
  }

  const clearFilters = () => {
    filters.value = {}
  }

  return {
    filters,
    setFilters,
    clearFilters
  }
})
