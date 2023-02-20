<template>
  <v-dialog
    :modelValue="isModalOpen"
    @update:modelValue="closeModal"
    width="auto"
    v-bind="$attrs"
  >
      <div class="modal">
        <slot/>
      </div>
  </v-dialog>
</template>
<script>
import {computed} from "vue";
import {useRouter} from "vue-router";

export default {
  name: 'AppModal',
  emits:['update:modelValue'],
  props:{
    modelValue: {
      type:Boolean,
    },
    closeRoute: {
      type: String,
      default: '',
    }
  },
  setup (props, {emit}) {
    const router = useRouter()

    const isModalOpen = computed(() => props.modelValue)
    const closeModal = (val) => {
      emit('update:modelValue', val)
      if (props.closeRoute) {
        router.push({name: props.closeRoute})
      }
    }
    return {
      isModalOpen,
      closeModal,
    }
  }
}
</script>
<style>
.modal {
  padding: 20px 30px;
  background-color: white;
  border-radius: 10px;
}
</style>
