<template>
  <div class="relative ml-auto -mt-1" ref="elementOpen">
    <button @click="toggle" :class="buttonClasses">
      <BaseIcon name="dotsVertical"/>
    </button>
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
        <section class="py-2">
          <ul>
            <VideoItemDropdownListItem
            label="Add to queue"
            icon="menuAlt3"
            />
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>

<script setup>
import VideoItemDropdownListItem from './VideoItemDropdownListItem.vue'
import BaseIcon from '@/Icon/BaseIcon.vue'
import { computed, nextTick, onMounted, ref, watch } from 'vue'

const isOpen = ref(false)
const elementOpen = ref(null)
const dropdown = ref(null)
const positionClasses = ref([])

onMounted(() => {
  window.addEventListener('click', event => {
    if (!elementOpen.value.contains(event.target)) {
      isOpen.value = false
    }
  })
  // window.addEventListener('scroll', () => (isOpen.value = false))
})

watch(() => isOpen.value, () => {
  document.body.classList.toggle('overflow-hidden')
  nextTick(() => { isOpen.value && dropdown.value.focus()
  })
})

const toggle = (event) => {
  isOpen.value = !isOpen.value

  if (isOpen.value) {
    nextTick(() => {
      positionClasses.value = getPositionClasses(event)
    })
  }
}

const getPositionClasses = (event) => {
    return [
      getTopClass(event),
      getRightClass(event),
      getLeftClass(event),
      getBottomClass(event),
    ]
  }

const getBottomClass = (event) => {
    const clickCoordY = event.clientY
    const dropdownHeight = dropdown.value.offsetHeight
    if (window.innerHeight - clickCoordY < dropdownHeight) {
      return 'bottom-9'
    }
    return 'buttom-auto'
  }

const getTopClass = (event) => {
    const clickCoordY = event.clientY
    const buttonHeight = event.currentTarget.offsetHeight
    const dropdownHeight = dropdown.value.offsetHeight
    if (window.innerHeight - clickCoordY < dropdownHeight) {
      return 'top-auto'
    }
    if (window.innerHeight - clickCoordY < dropdownHeight + buttonHeight) {
      return 'top-0'
    }
    return 'top-8'
  }

const getRightClass = (event) => {
  const clickCoordX = event.clientX
  const clickCoordY = event.clientY
  const buttonHeight = event.currentTarget.offsetHeight
  const dropdownWidth = dropdown.value.offsetWidth
  const dropdownHeight = dropdown.value.offsetHeight
  if (window.innerWidth - clickCoordX > dropdownWidth) {
    return 'right-auto'
  }
  if (window.innerHeight - clickCoordY > dropdownHeight + buttonHeight) {
    return 'right-0'
  }
  if (window.innerHeight - clickCoordY > dropdownHeight) {
    return 'right-8'
  }
  return 'right-0'
}

const getLeftClass = (event) => {
  const clickCoordX = event.clientX
  const clickCoordY = event.clientY
  const buttonHeight = event.currentTarget.offsetHeight
  const dropdownWidth = dropdown.value.offsetWidth
  const dropdownHeight = dropdown.value.offsetHeight
  if (window.innerWidth - clickCoordX < dropdownWidth) {
    return 'left-auto'
  }
  if (window.innerHeight - clickCoordY < dropdownHeight) {
    return 'left-auto'
  }
  if (window.innerHeight - clickCoordY > dropdownHeight + buttonHeight) {
    return 'left-auto'
  }
  return 'left-8'
}

const buttonClasses = computed(()=>{
  return [
      'p-1',
      'text-gray-500',
      'hover:text-gray-700',
      'focus:outline-none',
      'group-hover:opacity-100',
      isOpen.value ? 'opacity-100' : 'opacity-0'
    ]
})

const dropdownClasses = computed(()=>{
  return [
      'z-30',
      'absolute',
      // 'top-9',
      // '-right-full',
      // 'sm:right-0',
      'bg-white',
      'w-48',
      'rounded',
      'shadow',
      'focus:outline-none',
      ...positionClasses.value
    ]
})
</script>