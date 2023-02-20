import {computed, ref, watch} from "vue";

export function pagination(arr, step = 4) {
  const getEndPosition = (start) => {
    return arr.value.length - 1 >= start + step
      ? start + step
      : arr.value.length
  }
  const list = ref([])
  const canLoadMore = computed(() => arr.value.length > list.value.length)

  const getChunk = (start) => {
    return arr.value.slice(start , getEndPosition(start))
  }

  const loadItems = (isReloade) => {
    if (isReloade) {
      const start = 0
      list.value = getChunk(start)
      return
    }
    const start = list.value.length
    list.value = list.value.concat(getChunk(start))
  }

  const addItemInList = (data) => {
    if (canLoadMore.value) {
      list.value.splice(list.value.length - 1, 1)
    }
    list.value.unshift(data)
  }

  watch(arr,() => {
    loadItems(true)
  })

  return {
    list,
    addItemInList,
    canLoadMore,
    loadItems,
  }
}
