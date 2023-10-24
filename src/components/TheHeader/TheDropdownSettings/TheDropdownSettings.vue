<template>
  <div class="relative" ref="elementOpen">
    <BaseTooltip text="Settings">
      <button class="relative p-2 focus:outline-none" @click="isOpen = !isOpen">
        <BaseIcon name="dotsVertical" class="w-5 h-5"/>
      </button>
    </BaseTooltip>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transition opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        :class="dropdownClasses"
        v-show="isOpen"
        @keydown.esc="isOpen = false"
        tabindex="-1"
        ref="dropdown"
      >
        <section class="py-2 border-b">
          <ul>
            <DropdownSettingsListItem
            v-for="listItem in listItems.slice(0, 8)"
            :key="listItem.label"
            :label="listItem.label"
            :icon="listItem.icon"
            :withSubMenu="listItem.withSubMenu"
            />
          </ul>
        </section>
        <section class="py-2">
          <ul>
            <DropdownSettingsListItem
            :label="listItems[8].label"
            :withSubMenu="listItems[8].withSubMenu"
            />
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>

<script setup>
import DropdownSettingsListItem from './DropdownSettingsListItem.vue';
import BaseIcon from '@/Icon/BaseIcon.vue'
import { nextTick, onMounted, ref, watch } from 'vue';
import BaseTooltip from '@/BaseTooltip/BaseTooltip.vue'

const isOpen = ref(false)
const elementOpen = ref(null)
const dropdown = ref(null)

onMounted(() => {
  window.addEventListener('click', event => {
    if (!elementOpen.value.contains(event.target)) {
      isOpen.value = false
    }
  })
})

watch(() => isOpen.value, () => {
  nextTick(() => { isOpen.value && dropdown.value.focus()
    // if (props.isOpen) {
    //   mobileSidebar.value.focus()
    // }
  })
})

const listItems = [
  {
    label: 'Appearance: Light',
    icon: 'sun',
    withSubMenu: true
  },
  {
    label: 'Language: English',
    icon: 'translate',
    withSubMenu: true
  },
  {
    label: 'Location: Ukraine',
    icon: 'globeAlt',
    withSubMenu: true
  },
  {
    label: 'Settings',
    icon: 'cog',
    withSubMenu: false
  },
  {
    label: 'Your data in YouTube',
    icon: 'shieldCheck',
    withSubMenu: false
  },
  {
    label: 'Help',
    icon: 'questionMarkCircle',
    withSubMenu: false
  },
  {
    label: 'Send feedback',
    icon: 'chatAlt',
    withSubMenu: false
  },
  {
    label: 'Keyboard shortcuts',
    icon: 'calculator',
    withSubMenu: false
  },
  {
    label: 'Restricted Mode: Off',
    icon: null,
    withSubMenu: true
  }
]

const dropdownClasses = computed(() => {
  return [
    'z-10',
    'absolute',
    'top-9',
    '-right-full',
    'sm:right-0',
    'bg-white',
    'w-72',
    'border',
    'border-t-0',
    'focus:outline-none'
  ]
})
</script>

<style>

</style>