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
        <TheDropdownSettingsMain
        @select-menu="showSelectedMenu"
        v-if="selectedMenu == 'main'"
        />
        <TheDropdownSettingsAppearance
        v-if="selectedMenu == 'appearance'"
        />
      </div>
    </transition>
  </div>
</template>

<script setup>
import BaseIcon from '@/Icon/BaseIcon.vue'
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import BaseTooltip from '@/BaseTooltip/BaseTooltip.vue'
import TheDropdownSettingsMain from './TheDropdownSettingsMain.vue'
import TheDropdownSettingsAppearance from './TheDropdownSettingsAppearance.vue';

const isOpen = ref(false)
const elementOpen = ref(null)
const dropdown = ref(null)
const selectedMenu = ref('main')

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

const showSelectedMenu = (selectedName) => {
  selectedMenu.value = selectedName
}

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