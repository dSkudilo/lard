<template>
  <AppButton
    color="#00B6ED"
    height="64px"
    width="100%"
    @click="$emit('click')"
  >
    <AppIcon
      src="./src/assets/icons/add.svg"
      width="18px"
      height="18px"
    />
    <span class="add__text">
      Добавить нового сотрудника
    </span>
  </AppButton>
</template>
<script>
export default {
  name: 'AddButton',
  emits:['click'],
}
</script>
<style scoped>
.add__text {
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  color: white;
  margin-left: 10px;
}
</style>
