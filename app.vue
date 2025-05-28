<template>
  <div>
    <p
      v-if="isLoading"
      class="bg-red-200"
    >
      status: loading...
    </p>
    <p v-else-if="status">
      status: {{ status }}
    </p>
    <p v-else>
      status: error not connected
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const status = ref(null)
const isLoading = ref(true)

onMounted(async () => {
  try {
    const { data } = await axios.get('http://localhost:8080/api/test')
    status.value = data.status || 'OK'
  }
  catch (error) {
    console.error('Axios fetch error:', error)
    status.value = null
  }
  finally {
    isLoading.value = false
  }
})
</script>
