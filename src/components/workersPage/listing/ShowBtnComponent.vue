<template>
  <AppButton
    color="#2A358C"
    variant="outlined"
    class="btn"
    @click="$emit('click')"
  >
    <AppIcon
      src="./src/assets/icons/refresh.svg"
      width="18px"
      height="18px"
    />
    <span class="btn__show">
        Показать ещё
      </span>
  </AppButton>
</template>
<script>
export default {
  name: 'ShowBtnComponent',
  emits:['click']
}
</script>
<style scoped>
.btn__show {
  font-weight: 500;
  font-size: 15px;
  line-height: 120%;
  margin-left: 10px;
}
</style>
