<template>
    <ul class="tags">
      <li class="tags__item" v-for="tag in tags" :key="tag.id">
        <AppButton
          :variant="(selectedTags.length === 0 && tag.id === 1)
            || selectedTags.includes(tag.id)
              ? 'flat'
              : 'outlined'"
          rounded="pill"
          :color="tag.color"
          :active="true"
          @click="selectTag(tag)"
          :class="
          {'tags__item_active':
            (selectedTags.length === 0 && tag.id === 1)
            || selectedTags.includes(tag.id)
          }"
        >{{tag.name}}</AppButton>
      </li>
    </ul>
</template>
<script>
import tags from '../../../mocs/tags'
import AppButton from "@/components/ui/AppButton";
import {ref} from "vue";
export default {
  name:'TagsComponent',
  components: {AppButton},
  emits:['update:modelValue'],
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
  },
  setup(_, {emit}) {
    const selectedTags = ref([])
    const resetSelectedTags = () => {
      selectedTags.value = []
    }
    const updateSelectedTags = (tag) => {
      const idThisTag = selectedTags.value.findIndex(e => e === tag.id)
      idThisTag !== -1
        ? selectedTags.value.splice(idThisTag, 1)
        : selectedTags.value.push(tag.id)
    }
    const selectTag = (tag) => {
      if (tag.id === 1) {
        resetSelectedTags ()
      } else {
        updateSelectedTags(tag)
      }
      emit('update:modelValue', selectedTags.value)
    }

    return {
      tags,
      selectTag,
      selectedTags,
    }
  },
}
</script>
<style scoped>
.tags {
  list-style-type: none;
  display: flex;
  align-items: center;
}
.tags__item {
  margin-right: 10px;
}
.tags__item_active {
  color: white;
  border: 1px solid transparent;
}
</style>
