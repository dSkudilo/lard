<template>
  <AppModal v-model="isModalOpen" closeRoute="Workers" width="680px">
      <v-form v-model="valid" @submit.prevent>
        <v-row no-gutters>
          <v-col cols="6" class="pa-1">
            <AppInput
              :rules="rules"
              label="ФИО"
              v-model="employee.fullName"/>
          </v-col>
          <v-col cols="6" class="pa-1">
            <AppInput
              :rules="rules"
              label="ИНН"
              v-model="employee.inn"/>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="6" class="pa-1">
           <AppInput
             type="number"
             label="Возраст"
             v-model="employee.age"/>
          </v-col>
          <v-col cols="6" class="pa-1">
           <AppInput
             :rules="rules"
             type="number"
             label="Серия и номер"
             v-model="employee.number"/>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="6" class="pa-1">
            <AppInput
              :rules="rules"
              label="Адрес"
              v-model="employee.address"/>
          </v-col>
          <v-col cols="6" class="pa-1">
            <AppInput
              type="date"
              label="Дата"
              v-model="employee.dateBirth"/>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="12" class="pa-1 mb-3">
            <AppSelect
              v-model="employee.country"
              :items="countries"
              item-title="title"
              labelText="Гражданство"
              hide-details
              placeholder="Все страны"
              :rules="rules"
            />
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="6" class="pa-1">
            <AppSelect
              labelText="Пол"
              hide-details
              v-model="employee.gender"
              :items="genders"
              item-title="title"
              :rules="rules"
              placeholder="Без разницы"
            />
          </v-col>
          <v-col cols="6" class="pa-1">
             <AppSelect
              labelText="Должность"
              hide-details
              v-model="employee.position"
              :items="positions"
              item-title="title"
              :rules="rules"
              placeholder="Все должности"
            />
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="6" class="pa-1">
            <AppSelect
              labelText="Тип контракта"
              hide-details
              v-model="employee.typeContract"
              :items="contracts"
              item-title="title"
              placeholder="Все должности"
              :rules="rules"
            />
          </v-col>
          <v-col cols="6" class="pa-1">
            <AppSelect
              labelText="Cтатус"
              hide-details
              v-model="employee.status.tag"
              :items="tags"
              item-title="name"
              placeholder="статус"
              :rules="rules"
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" class="pa-1 mt-2">
            <AppInput
              :rules="rules"
              v-model="employee.status.description"
              label="Комментарий"
            />
          </v-col>
        </v-row>

        <v-row no-gutters class="pa-1">
          <AppButton
            type="submit"
            @click="sendEmployee"
          >Отправить</AppButton>
          <AppButton
            variant="outlined"
            @click="close"
            class="ml-2"
          >Отмена</AppButton>
        </v-row>
      </v-form>
  </AppModal>
</template>
<script>
import {ref} from "vue";
import countries from "@/mocs/countries";
import genders from "@/mocs/genders";
import positions from "@/mocs/positions";
import contracts from "@/mocs/contracts";
import tags from "@/mocs/tags";
import {useRouter} from "vue-router";
import {useEmployeesStore} from "@/store/employees";
export default {
  name: 'WorkerId',
  components: {},

  setup() {
    const router = useRouter()
    const employees = useEmployeesStore()

    const isModalOpen = true
    const valid = ref(false)
    const employee = ref({
      status:{}
    })
    const rules = [
      value => {
        if (value) return true
        return 'Обязательное поле'
      }
    ]
    const close = () => {
      router.push({
        name:'Workers'
      })
    }
    const sendEmployee = () => {
      if (!valid.value) return
      employees.addNew(employee.value)
      close()
    }

    return {
      isModalOpen,
      employee,
      valid,
      rules,
      sendEmployee,
      close,
      countries,
      genders,
      positions,
      contracts,
      tags
    }
  }
}
</script>
