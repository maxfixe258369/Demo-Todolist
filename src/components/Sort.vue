<script setup>
import { ref } from 'vue';

const props = defineProps({
  orderBy : {
    type: String,
  }
});

const emit = defineEmits(['updateSort']);

const selected = ref('');

const handleSort = () => {
  emit('updateSort',selected.value);
}
</script>

<template>
  <div class="control-sort mb-5 flex">
    <select
      name="sort"
      @change="handleSort"
      v-model="selected"
      class="bg-gray-500 text-white p-2 mr-4 text-xl outline-none cursor-pointer"
    >
      <option value="" hidden>Sort by</option>
      <option value="Name Ascending">Name Ascending</option>
      <option value="Name Descending">Name Descending</option>
      <option disabled></option>
      <option value="Level Ascending">Level Ascending</option>
      <option value="Level Descending">Level Descending</option>
    </select>

    <div class="sort-text bg-green-400 text-white font-medium p-2 text-xl">{{ props.orderBy }}</div>
  </div>
</template>

<style scoped>

</style>
