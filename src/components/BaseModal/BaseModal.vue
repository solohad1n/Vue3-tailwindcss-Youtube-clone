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
    <div v-if="isOpen" class="relative bg-white max-w-sm m-8">
      <div class="p-2 text-right">
        <BaseModalButtonClose @click="close" />
      </div>
      <div class="p-6">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import BaseModalButtonClose from './BaseModalButtonClose.vue'
import BaseModalOverlay from './BaseModalOverlay.vue'

const emit = defineEmits(['close'])

const modalFocus = ref(null)
const isOpen = ref(true)
const classes = [
    'fixed',
    'inset-0',
    'z-30',
    'focus:outline-none',
    'flex',
    'justify-center',
    'items-start'
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