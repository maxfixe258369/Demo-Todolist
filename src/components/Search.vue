<script setup>
import { ref } from 'vue';

const emit = defineEmits(['updateSearch']);

const inputSearch = ref('')

const handleSearch = () => {
  emit('updateSearch',inputSearch.value);
}

const clearSearch = () => {
  inputSearch.value = '';
  emit('updateSearch','');
}
</script>

<template>
  <div class="control-search flex">
    <input
      v-model.trim="inputSearch"
      @input="handleSearch"
      type="text"
      placeholder="Search for ..."
      class="flex-1 border border-black border-r-0 p-1 pl-4 outline-none"
    />
    <button type="button" class="bg-blue-500 text-white w-50 p-2" @click="clearSearch">Clear</button>
  </div>
</template>

<style scoped>

</style>
