<template>
  <div class="relative w-full">
    <input
    type="text"
    placeholder="Search"
    :class="classes"
    :value="query"
    @input="updateQuery($event.target.value)"
    v-bind="$attrs"
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
const emit = defineEmits(['update:query'])

defineOptions({
  inheritAttrs: false
})

const inputFocus = ref(null)

const updateQuery = (query) => {
  emit('update:query', query)
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