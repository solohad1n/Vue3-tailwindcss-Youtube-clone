<template>
  <div class="absolute w-full p-2 z-10 flex" ref="closeInput">
    <BaseTooltip text="Back" right>
      <button @click="$emit('close')" class="mr-2 p-2 focus:outline-none">
        <BaseIcon name="arrowLeft" class="w-5 h-5" />
      </button>
    </BaseTooltip>
    <TheSearch />
    <BaseTooltip text="Search with your voice" left>
      <button class="p-2 focus:outline-none">
        <BaseIcon name="microphone" class="w-5 h-5" />
      </button>
    </BaseTooltip>
  </div>
</template>

<script setup>
import BaseIcon from '@/Icon/BaseIcon.vue'
import BaseTooltip from '@/BaseTooltip/BaseTooltip.vue'
import TheSearch from './TheSearch.vue'
import { nextTick, onMounted, ref } from 'vue'

const closeInput = ref(null)

const emit = defineEmits(['close'])

onMounted(() => {
  window.addEventListener('click', onClick)
})

const onClick = (event) => {
  nextTick(() => {
    if(closeInput.value && !closeInput.value.contains(event.target)) {
    emit('close')
  }
  })
}
</script>