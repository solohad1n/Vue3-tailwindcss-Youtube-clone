<template>
  <div :class="classes" ref="closeInput">
    <BaseTooltip v-if="isSmallScreen" text="Back" right>
      <button @click="$emit('close')" class="mr-2 p-2 focus:outline-none">
        <BaseIcon name="arrowLeft" class="w-5 h-5" />
      </button>
    </BaseTooltip>
    <TheSearch />
    <BaseTooltip text="Search with your voice" :left="isSmallScreen">
      <button @click="$emit('open-voice-modal')" class="p-2 focus:outline-none">
        <BaseIcon name="microphone" class="w-5 h-5" />
      </button>
    </BaseTooltip>
  </div>
</template>

<script setup>
import BaseIcon from '@/Icon/BaseIcon.vue'
import BaseTooltip from '@/BaseTooltip/BaseTooltip.vue'
import TheSearch from './TheSearch.vue'
import { computed, nextTick, onMounted, ref } from 'vue'


const props = defineProps(['isSmallScreen'])
const emit = defineEmits(['close'])

const closeInput = ref(null)

const classes = computed(() => {
  return props.isSmallScreen
        ? ['absolute', 'w-full', 'p-2', 'z-10', 'flex']
        : [
            'hidden',
            'sm:flex',
            'items-center',
            'justify-end',
            'p-2.5',
            'pl-8',
            'md:pl-12',
            'md:px-8',
            'flex-1',
            'lg:px-0',
            'lg:w-1/2',
            'max-w-screen-md'
          ]
})

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