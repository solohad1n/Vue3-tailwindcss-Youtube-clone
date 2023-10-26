<template>
  <div class="relative w-full">
    <input
      type="text"
      placeholder="Search"
      ref="input"
      :class="classes"
      :value="query"
      @input="updateQuery($event.target.value)"
      @focus="setState(true)"
      @click.stop="setState(true)"
      @keyup.esc="handleEsc"
      @keydown.enter="handleEnter"
    />
    <button
      class="absolute top-0 right-0 h-full px-3 focus:outline-none"
      v-show="query"
      @click="clear"
    >
      <BaseIcon name="x" class="w-5 w-5" />
    </button>
  </div>
</template>

<script setup>
import BaseIcon from '@/Icon/BaseIcon.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps(['query', 'hasResults'])
const emit = defineEmits(['update:query', 'change-state', 'enter'])

const isActive = ref(false)
const input = ref(null)
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
  if (window.innerWidth < 640) {
      input.value.focus()
    }

  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
})

const onKeydown = (event) => {
  const isInputFocused = input.value === document.activeElement

  if (event.code === 'Slash' && !isInputFocused) {
    event.preventDefault()

    input.value.focus()
  }
}

const updateQuery = (query) => {
  emit('update:query', query)

  setState(isActive.value)
}

const setState = (a) => {
  isActive.value = a

  emit('change-state', a)
}

const handleEsc = () => {
  removeSelection()

  if (isActive.value && props.hasResults) {
    setState(false)
  } else {
    input.value.blur()
  }
}

const handleEnter = () => {
  setState(false)

  input.value.blur()

  emit('enter')
}

const removeSelection = () => {
  const end = input.value.length

  input.value.setSelectionRange(end, end)
}

const clear = () => {
  input.value.focus()

  updateQuery('')
}
</script>