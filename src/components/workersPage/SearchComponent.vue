<template>
  <div class="search">
    <div class="search__main">
      <AppInput
        color="primary"
        hide-details
        append-inner-icon="mdi-magnify"
        v-model="searchData"
      />
      <small class="search__example">Например: Иванов Иван</small>
    </div>
  </div>
</template>
<script>
import {ref, watch} from "vue";
import {debounce} from "@/utils/debounce";

export default {
  name:'SearchComponent',
  setup() {
    const searchData = ref('')
    const searchHandler = debounce((val) => {
      console.log('o daaa', val)
    }, 500)
    watch(searchData, (val) => {
      searchHandler(val)
    })
    return {
      searchData
    }
  },
}
</script>
<style scoped>
.search {
  width: 100%;
  padding: 30px;
  border-bottom: 1px solid #DBE4ED;
}
.search__example {
  font-weight: 400;
  font-size: 13px;
  line-height: 120%;
  color: #B0BCC7;
}

</style>
