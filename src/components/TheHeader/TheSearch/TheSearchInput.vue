<template>
  <div class="relative w-full">
    <input
    ref="inputFocus"
    type="text"
    placeholder="Search"
    :class="classes"
    :value="query"
    @input="updateQuery($event.target.value)"
    @focus="setState(true)"
    @keyup.esc="setState(false)"
    @keydown.enter="handleEnter"
    />
    <button
      class="absolute top-0 right-0 h-full px-3 focus:outline-none"
      v-show="query"
      @click="updateQuery('')"
      >
      <BaseIcon name="x" class="w-5 w-5" />
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import BaseIcon from '@/Icon/BaseIcon.vue'

const props = defineProps(['query'])
const emit = defineEmits(['update:query', 'changeState'])

const inputFocus = ref(null)

const handleEnter = () => {
  setState(false)
  inputFocus.value.blur()
  emit('enter')
}

const updateQuery = (query) => {
  emit('update:query', query)
  setState(true)
}

const setState = (state) => {
  emit('changeState', state)
}

const classes = [
  'w-full',
  'h-full',
  'px-3',
  'shadow-inner',
  'rounded-bl-sm',
  'rounded-tl-sm',
  'border',
  'border-gray-300',
  'focus:border-blue-700',
  'focus:outline-none'
]

onMounted(() => {
  if(window.innerWidth < 640) {
    inputFocus.value.focus()
  }
})
</script>