import { defineStore } from 'pinia'
import employeesArr from "@/mocs/employeesArr";
import {ref} from "vue";
export const useEmployeesStore = defineStore('employees', () => {
  const employees = ref(employeesArr)

  const addNew = (data) => {
    employees.value.unshift(data)
  }

  return {
    employees,
    addNew
  }
})
