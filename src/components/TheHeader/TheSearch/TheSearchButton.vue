<template>
  <BaseTooltip text="Search">
      <button :class="classes">
        <BaseIcon name="search" class="w-5 h-5"/>
      </button>
  </BaseTooltip>
</template>

<script setup>
import BaseIcon from '@/Icon/BaseIcon.vue'
import BaseTooltip from '@/BaseTooltip/BaseTooltip.vue'

const classes = [
        'h-full',
        'focus:outline-none',
        'flex',
        'items-center',
        'px-6',
        'py-1',
        'text-gray-600',
        'bg-gray-100',
        'border',
        'border-l-0',
        'border-gray-300',
        'rounded-tr-sm',
        'rounded-br-sm',
        'hover:bg-gray-200'
      ]
</script>