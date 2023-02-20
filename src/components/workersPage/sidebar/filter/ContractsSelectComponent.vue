<template>
  <div class="contracts">
    <span class="contracts__title">Тип договора</span>
    <div class="contracts__list">
      <v-checkbox
        v-for="item in contracts"
        :key="item.id"
        :label="item.title"
        :value="item.id"
        color="#00B6ED"
        v-bind="$attrs"
        density="compact"
        @update:modelValue="selectHandler"
        :model-value="modelValue?.id"
        hide-details
      ></v-checkbox>
    </div>
  </div>
</template>
<script>
import contracts from "@/mocs/contracts";
export default {
  name: 'ContractSelectComponent',
  emits:['update:modelValue'],
  props:{
    modelValue: {
      type:Object,
      default: () => {},
    },
  },
  setup(_,{emit}) {
    const selectHandler = (val) => {
      emit('update:modelValue',val ? {id:val} : null)
    }
    return {
      contracts,
      selectHandler,
    }
  }
}
</script>
<style scoped>
.contracts__title {
  font-weight: 500;
  font-size: 15px;
  line-height: 120%;
}
</style>
