<script setup>
import ListItem from './ListItem.vue'
import { useTodoStore } from '../store/TodoStore'

const store = useTodoStore();
</script>


<template>
 <div class="list-task">
    <h2 class="list-title text-2xl bg-gray-200 p-3 border-t border-b border-black mb-5">
      List task
    </h2>
    <table class="w-full">
      <thead>
        <tr>
          <th class="w-1/6">#No</th>
          <th class="w-2/6 text-left">Task name</th>
          <th class="w-1/6">Level</th>
          <th class="w-3/6">Action</th>
        </tr>
      </thead>

      <tbody>
        <ListItem v-for="(item,index) in store.sortList" :key="item.id" :item="item" :index="index + 1"/>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>
