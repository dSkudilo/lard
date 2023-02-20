<template>
  <v-text-field
    label="Label"
    variant="outlined"
    height="46"
    v-bind="$attrs"
    bg-color="#E8F1F4"
    density="comfortable"
    @update:modelValue="$emit('update:modelValue', $event)"
    :model-value="modelValue"
  ></v-text-field>
</template>
<script>
export default {
  name:'AppInput',
  emits:['update:modelValue'],
  props:{
    modelValue: {
      type:String,
      default: '',
    },
  },
}
</script>
<style>

</style>
