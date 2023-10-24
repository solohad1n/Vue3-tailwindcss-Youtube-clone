<template>
  <div class="relative">
    <div class="flex items-center h-full" @mouseenter="isShown = true" @mouseleave="isShown = false" @click="isShown = false">
      <slot/>
    </div>
    <transition
      enter-active-class="duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-75"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="isShown" :class="classes">{{text}}</div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isShown = ref(false)

const props = defineProps({
  text: String,
  top: Boolean,
  right: Boolean,
  left: Boolean
})

const getPositionClasses = () => {
  const topClass = props.top ? 'bottom-12' : 'top-14' 

  if (props.right) {
    return [topClass, 'left-0']
  }

  if (props.left) {
    return [topClass, 'right-0']
  }

  return [topClass, 'left-1/2', '-translate-x-1/2']
}

const classes = ref([
      'bg-gray-600',
      'bg-opacity-80',
      'rounded-sm',
      'text-white',
      'text-xs',
      'whitespace-nowrap',
      'p-2',
      'transform',
      'absolute',
      ...getPositionClasses()
    ])
</script>