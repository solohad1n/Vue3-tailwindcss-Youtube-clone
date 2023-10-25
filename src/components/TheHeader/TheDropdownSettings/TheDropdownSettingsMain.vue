<template>
  <section class="py-2 border-b">
    <ul>
      <DropdownSettingsListItem
      v-for="listItem in listItems.slice(0, 8)"
      :key="listItem.label"
      :label="listItem.label"
      :icon="listItem.icon"
      :withSubMenu="listItem.withSubMenu"
      @click.stop="selectMenu(listItem)"
      />
    </ul>
  </section>
  <section class="py-2">
    <ul>
      <DropdownSettingsListItem
      :icon="listItems[8].icon"
      :label="listItems[8].label"
      :withSubMenu="listItems[8].withSubMenu"
      @click.stop="selectMenu(listItems[8])"
      />
    </ul>
  </section>
</template>

<script setup>
import DropdownSettingsListItem from './DropdownSettingsListItem.vue';

const listItems = [
  {
    id: 'appearance',
    label: 'Appearance: Light',
    icon: 'sun',
    withSubMenu: true
  },
  {
    id: 'language',
    label: 'Language: English',
    icon: 'translate',
    withSubMenu: true
  },
  {
    id: 'location',
    label: 'Location: Bora Bora',
    icon: 'globeAlt',
    withSubMenu: true
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'cog',
    withSubMenu: false
  },
  {
    id: 'your_data_in_youtube',
    label: 'Your data in YouTube',
    icon: 'shieldCheck',
    withSubMenu: false
  },
  {
    id: 'help',
    label: 'Help',
    icon: 'questionMarkCircle',
    withSubMenu: false
  },
  {
    id: 'send_feedback',
    label: 'Send feedback',
    icon: 'chatAlt',
    withSubMenu: false
  },
  {
    id: 'keyboard_shortcuts',
    label: 'Keyboard shortcuts',
    icon: 'calculator',
    withSubMenu: false
  },
  {
    id: 'restricted_mode',
    label: 'Restricted Mode: Off',
    icon: null,
    withSubMenu: true
  }
]

const emit = defineEmits(['select-menu'])

const selectMenu = (listItem) => {
  if (listItem.withSubMenu) {
    emit('select-menu', listItem.id)
  }
}
</script>