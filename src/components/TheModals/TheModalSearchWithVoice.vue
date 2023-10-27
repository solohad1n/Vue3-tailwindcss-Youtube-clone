<template>
  <BaseModal>
    <p class="text-2xl mb-52">{{ text }}</p>
    <div class="flex justify-center items-center">
      <span v-show="isListening" :class="buttonAnimationClasses" />
      <button :class="buttonClasses" @click="toogleRecording">
        <BaseIcon name="microphone" />
      </button>
    </div>
    <div :class="buttonHintClasses">
      Tap the microphone to try again
    </div>
  </BaseModal>
</template>

<script setup>
import BaseModal from '@/BaseModal/BaseModal.vue'
import BaseIcon from '@/Icon/BaseIcon.vue'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const isListening = ref(false)
const isRecording = ref(false)
const isQuiet = ref(false)
const recordingTimeout = ref(null)

onMounted(() => {
  handleRecordingTimeout()
})

onBeforeUnmount(() => {
  clearTimeout(recordingTimeout.value)
})

const toogleRecording = () => {
  clearTimeout(recordingTimeout.value)
  isQuiet.value = false
  if (isRecording.value) {
    isRecording.value = false
    isListening.value = false
  } else if (isListening.value) {
    isRecording.value = true
  } else {
    isListening.value = true
  }
  handleRecordingTimeout()
}

const handleRecordingTimeout = () => {
  if (isListening.value || isRecording.value) {
    recordingTimeout.value = setTimeout(() => {
      isQuiet.value = true
      isListening.value = false
      isRecording.value = false
    }, 5000)
  }
}

const buttonClasses = computed(() => {
  return [
    isListening.value ? 'bg-red-600' : 'bg-gray-300',
    isListening.value ? 'text-white' : 'text-black',
    'w-16',
    'h-16',
    'mx-auto',
    'rounded-full',
    'flex',
    'justify-center',
    'items-center',
    'relative',
    'focus:outline-none'
  ]
})

const buttonHintClasses = computed(() => {
  return [
      isListening.value ? 'invisible' : 'visible',
      'text-center',
      'text-sm',
      'text-gray-500',
      'mt-4'
    ]
})

const text = computed(() => {
  if (isQuiet.value) {
    return "Didn't hear that. Try again."
  }
  if (isListening.value || isRecording.value) {
    return 'Listening...'
  }
  return 'Microphone off. Try again.'
})

const buttonAnimationClasses = computed(() => {
  return [
      isRecording.value ? 'bg-gray-300' : 'border border-gray-300',
      'animate-ping',
      'absolute',
      'w-14',
      'h-14',
      'rounded-full'
    ]
})
</script>