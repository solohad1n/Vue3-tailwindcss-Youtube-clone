<template>
  <span :class="classes" @mouseenter="toggleBadge" @mouseleave="toggleBadge">
    <BaseIcon :name="icon" class="w-5 h-5"/>
    <span :class="badgeClasses ">
      <span class="inline-block my-1.5 mx-3">
        {{label}}
      </span>
    </span>
  </span>
</template>

<script setup>
import BaseIcon from '@/Icon/BaseIcon.vue'
import { computed, ref } from 'vue'

const props = defineProps({
  icon: String,
  label: String
})

const isBadgeShown = ref(false)

const toggleBadge = () => {
  isBadgeShown.value = !isBadgeShown.value;
}

const classes = computed(()=> {
  return [
    'opacity-0',
    'group-hover:opacity-100',
    'bg-opacity-60',
    'absolute',
    'right-0',
    'bg-black',
    'text-white',
    'm-1',
    'p-1',
    isBadgeShown.value ? 'rounded-r-sm' : 'rounded-sm'
  ]
})

const badgeClasses = computed(()=>{
  return [
    'absolute',
    'transition-width',
    'bg-black',
    'bg-opacity-60',
    'whitespace-nowrap',
    'top-0',
    'right-full',
    'overflow-hidden',
    'uppercase',
    'text-xs',
    'delay-100',
    'font-semibold',
    'rounded-l-sm',
    isBadgeShown.value ? 'w-28' : 'w-0'
  ]
})
</script>
