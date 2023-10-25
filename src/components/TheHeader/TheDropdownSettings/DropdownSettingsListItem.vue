<template>
  <li>
    <a
      href="#"
      class="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
    >
      <BaseIcon v-if="isIconShown" :name="iconName" class="w-5 h-5 mr-3 text-gray-400"/>
      <span :class="{'ml-8' : !isIconShown}">{{ label }}</span>
      <BaseIcon v-if="withSubMenu" name="chevronRight" class="w-5 h-5 text-gray-400 ml-auto"/>
    </a>
  </li>
</template>

<script setup>
import BaseIcon from '@/icon/BaseIcon.vue'
import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    default: 'check'
  },
  label: String,
  withSubMenu: Boolean,
  active: Boolean
})

const isIconShown = computed(() => {
  return props.active || props.icon !== 'check'
})

const iconName = computed(() => {
  return props.active ? 'check' : props.icon
})
</script>
