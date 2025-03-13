<script setup>
import { ref } from 'vue';
import { useTodoStore } from '../store/TodoStore'

const store = useTodoStore();

const inputSearch = ref('')

const clearSearch = () => {
  inputSearch.value = '';
  store.handleSearch('')
}
</script>

<template>
  <div class="control-search flex">
    <input
      v-model.trim="inputSearch"
      @input="store.handleSearch(inputSearch)"
      type="text"
      placeholder="Search for ..."
      class="flex-1 border border-black border-r-0 p-1 pl-4 outline-none"
    />
    <button type="button" class="bg-blue-500 text-white w-50 p-2" @click="clearSearch">Clear</button>
  </div>
</template>

<style scoped>

</style>
