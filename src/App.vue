<script setup>
import MailToForm from './components/MailToForm.vue'
defineProps({
  campaign: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  subjects: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <MailToForm :campaign="campaign" :destination="destination" :subjects="subjects" />
</template>

<style scoped></style>
