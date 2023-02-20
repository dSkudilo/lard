<template>
  <div class="icon" :style="[
    {width},
    {height},
    ]">
    <img :src="src" alt="icon" class="icon__img">
  </div>
</template>
<script>
export default {
  name: 'AppIcon',
  props:{
    width:{
      type: String,
      default:'10px'
    },
    height:{
      type: String,
      default:'10px'
    },
    src: {
      type:String,
      default: '',
    },
  }
}
</script>
<style scoped>
.icon__img {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
