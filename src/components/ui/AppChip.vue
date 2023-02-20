<template>
  <v-chip
    label
    v-bind="$attrs"
    size="small"
  >
    <slot/>
  </v-chip>
</template>
<script>
export default {
  name:'AppChip'
}
</script>
