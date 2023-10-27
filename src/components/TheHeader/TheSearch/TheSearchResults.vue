<template>
  <div :class="classes">
    <ul>
      <li
        v-for="(text, id) in results"
        :key="text"
        :class="getItemClasses(id)"
        @mouseenter="$emit('search-result-mouseenter', id)"
        @mouseleave="$emit('search-result-mouseleave')"
        @click.stop="$emit('search-result-click')"
      >
        <span @mouseenter="$emit('search-result-mouseenter', id)">
          {{ text }}
        </span>
      </li>
    </ul>
    <a
    href="#"
    :class="reportLinkClasses"
    @click="isVoiceModalOpen = true"
    >Report search predictions</a>
    <teleport to="body">
      <TheModalSearchPredictions
      v-if="isVoiceModalOpen"
      @close="isVoiceModalOpen = false"
      :search-predictions="results"
      />
    </teleport>
  </div>
</template>

<script setup>
import TheModalSearchPredictions from '@/TheModals/TheModalSearchPredictions/TheModalSearchPredictions.vue'
import { ref } from 'vue'

const props = defineProps(['results', 'activeResultId'])

const isVoiceModalOpen = ref(false)
const classes = [
        'absolute',
        'top-full',
        'w-full',
        'bg-white',
        'border',
        'border-t-0',
        'border-gray-300',
        'shadow-md',
        'pt-4'
      ]

const reportLinkClasses = [
        'w-full',
        'inline-block',
        'text-right',
        'text-xs',
        'italic',
        'text-gray-500',
        'hover:text-black',
        'pr-2'
      ]


const getItemClasses = (resultId) => {
      return [
        resultId === props.activeResultId ? 'bg-gray-100' : 'bg-transparent',
        'text-black',
        'px-3',
        'py-1',
        'select-none',
        'truncate'
      ]
    }

</script>