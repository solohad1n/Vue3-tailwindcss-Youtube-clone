<template>
  <div class="relative" ref="elementOpen">
    <BaseTooltip text="Settings">
      <button class="relative p-2 focus:outline-none" @click="toggle">
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
        @keydown.esc="close"
        tabindex="-1"
        ref="dropdown"
      >
        <component
        :is="menu"
        @select-menu="showSelectedMenu"
        :selectedOptions="selectedOptions"
        @selectOption="selectOption"
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
import TheDropdownSettingsLanguage from './TheDropdownSettingsLanguage.vue';
import TheDropdownSettingsLocation from './TheDropdownSettingsLocation.vue';
import TheDropdownSettingsRestrictedMode from './TheDropdownSettingsRestrictedMode.vue'

const isOpen = ref(false)
const elementOpen = ref(null)
const dropdown = ref(null)
const selectedMenu = ref('main')
const selectedOptions = ref({
    themeId: 0,
    languageId: 0,
    locationId: 0,
    restrictedMode: false
})

onMounted(() => {
  window.addEventListener('click', event => {
    if (!elementOpen.value.contains(event.target)) {
      close()
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
  dropdown.value.focus()
}

const close = () => {
  isOpen.value = false
  setTimeout(() => selectedMenu.value = 'main', 100)
}

const open = () => {
  isOpen.value = true
}

const toggle = () => {
  isOpen.value ? close() : open()
}

const selectOption = (option) => {
  selectedOptions.value[option.name] = option.val
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

const menu = computed(() => {
  const menuComputedNames = {
    main: TheDropdownSettingsMain,
    appearance: TheDropdownSettingsAppearance,
    language: TheDropdownSettingsLanguage,
    location: TheDropdownSettingsLocation,
    restricted_mode: TheDropdownSettingsRestrictedMode
  }
  return menuComputedNames[selectedMenu.value]
})
</script>

<style>

</style>