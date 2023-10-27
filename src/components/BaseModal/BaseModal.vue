<template>
  <div
  :class="classes"
  @click.self="close"
  @keydown.esc="close"
  tabindex="-1"
  ref="modalFocus"
  >
  <transition
      appear
      enter-active-class="ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <BaseModalOverlay v-if="isOpen" @click="close" />
    </transition>
    <div v-if="isOpen"
      class="relative bg-white w-full sm:w-2/3 m-8 flex flex-col"
      style="max-height: calc(100vh - 64px)"
    >
      <div v-if="withCloseButton" class="p-2 text-right">
        <BaseModalButtonClose @click="close" />
      </div>
      <div class="p-6 overflow-auto">
        <slot/>
      </div>
      <div v-if="$slots.footer" class="flex border-t border-gray-300 py-2">
        <slot name="footer" :close="close" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import BaseModalButtonClose from './BaseModalButtonClose.vue'
import BaseModalOverlay from './BaseModalOverlay.vue'

const emit = defineEmits(['close'])
const props = defineProps({
  withCloseButton: Boolean
})

const modalFocus = ref(null)
const isOpen = ref(true)
const classes = [
    'fixed',
    'inset-0',
    'z-30',
    'focus:outline-none',
    'flex',
    'justify-center',
    'items-start',
    'mx-auto'
  ]

onMounted(() => {
  modalFocus.value.focus()
})

const close = () => {
  setTimeout(() => {
    isOpen.value = false
    emit('close')
  }, 100)
}
</script>