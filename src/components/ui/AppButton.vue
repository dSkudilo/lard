<template>
  <v-btn
    color="primary"
    height="33"
    class="app-button"
    v-bind="$attrs"
    :active="false"
    @click="$emit('click')"
  >
    <slot/>
  </v-btn>
</template>
<script>
export default {
  name: 'AppButton',
  emits:['click']
}
</script>
<style>
.app-button{
  display: flex;
  align-items: center;
}
.app-button.v-btn {
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  text-transform: none;
  letter-spacing: 0px;
}
</style>
