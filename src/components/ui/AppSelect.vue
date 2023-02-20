<template>
  <div class="select">
    <label class="select__label">{{labelText}}</label>
    <v-select
      variant="outlined"
      height="46"
      bg-color="#E8F1F4"
      density="comfortable"
      v-bind="$attrs"
      return-object
      @update:modelValue="$emit('update:modelValue', $event)"
      :model-value="modelValue"
    ></v-select>
  </div>
</template>
<script>

export default {
  name:'AppSelect',
  emits:['update:modelValue'],
  props:{
    modelValue: {
      type:Object,
      default: () => {},
    },
    labelText:{
      type:String,
      default: ''
    },
  },
}
</script>
<style scoped>
.select {
  width: 100%;
}
.select__label {
  font-weight: 500;
  font-size: 15px;
  line-height: 120%;
  color: #041423;
}
</style>
