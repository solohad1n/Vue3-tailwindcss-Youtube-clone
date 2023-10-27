<template>
  <div class="space-y-3 text-black text-sm mt-5">
    <div v-for="(label, index) in searchPredictions" :key="label" class="flex items-center">
      <input type="checkbox" :id="index" :value="label" class="h-5 w-5 cursor-pointer" v-model="selectedSearchPredictions"/>
      <label :for="index" class="pl-4 cursor-pointer flex-grow">{{ label }}</label>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"

const props = defineProps({
  searchPredictions: Array,
  modelValue: Array
})

const emit = defineEmits(['update:modelValue'])

const selectedSearchPredictions = ref(props.modelValue)

watch(selectedSearchPredictions, () => {
  emit('update:modelValue', selectedSearchPredictions.value)
});
</script>