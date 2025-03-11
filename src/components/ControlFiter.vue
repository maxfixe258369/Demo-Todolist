<script setup>
import Search from './Search.vue'
import Sort from './Sort.vue'

const props = defineProps({
  orderBy : {
    type: String,
  }
})


const emit = defineEmits(['handleSearch','handleSort']);

const handleSearch = (txtSearch) => {
  emit('handleSearch',txtSearch);
}

const handleSort = (selectedSort) => {
  emit('handleSort',selectedSort);
}
</script>

<template>
  <div class="flex-1 pr-5">
    <Sort :orderBy="props.orderBy" @updateSort="handleSort"/>
    <Search @updateSearch="handleSearch"/>
  </div>
</template>

<style scoped>

</style>
