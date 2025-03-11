<script setup>
import List from './components/List.vue'
import Control from './components/ControlFiter.vue'
import Add from './components/AddTask.vue'
import { computed, reactive, ref } from 'vue'

import listTask from './data/task.js'

const list = reactive(listTask);
const filteredList = ref(list);
const isShowForm = ref(false);
const orderBy = ref('Name Ascending');
const isEdit = ref(false);

const toggleForm = () => {
  isShowForm.value = !isShowForm.value;
};

const handleAddTask = (newItem) => {
  list.push(newItem);
  filteredList.value = list;
};

const handleDelete = (itemDelete) => {
  const index = list.findIndex(item => item.id === itemDelete.id);
  list.splice(index,1);
  filteredList.value = list;
};

const handleSearch = (txtSearch) => {
  filteredList.value = list.filter(item => item.name.toLowerCase().includes(txtSearch.toLowerCase()));
};

const handleSort = (selectedSort) => {
  orderBy.value = selectedSort;
};

const sortName = (a, b) => {
  const orderMultiplier = orderBy.value === 'Name Ascending' ? 1 : -1;
  return a.name.localeCompare(b.name) * orderMultiplier;
};

const sortLevel = (a, b) => {
  const orderMultiplier = orderBy.value === 'Level Ascending' ? 1 : -1;
  return (a.level - b.level) * orderMultiplier;
};

const sortList = computed(() => {
  var listTaskSort = [...filteredList.value]
  if (orderBy.value === 'Name Ascending' || orderBy.value === 'Name Descending') {
    listTaskSort.sort(sortName);
  } else {
    listTaskSort.sort(sortLevel);
  }

  return listTaskSort;
});

const handleEdit = (itemEdit) => {
  const index = list.findIndex(item => item.id === itemEdit.id);
  list[index].selected = true
  isEdit.value = true;
}

const submitEdit = (itemUpdated) => {
  const index = list.findIndex(item => item.id === itemUpdated.id);
  list[index].name = itemUpdated.name;
  list[index].level = itemUpdated.level;
  closeEdit(itemUpdated);
}

const closeEdit = (itemClose) => {
  const index = list.findIndex(item => item.id === itemClose.id);
  list[index].selected = false;
  isEdit.value = !isEdit.value;
}

</script>

<template>
  <main>
    <div id="app">
      <div class="thumbnail">
        <img src="./assets/img/keyvisual_img.jpg" alt="thumbnail" />
      </div>
      <div class="section-main">
        <div class="wrapper">
          <h1 class="text-5xl mb-10 site-title">Todo List</h1>

          <div class="block-control flex justify-between mb-10">
            <control @handleSearch="handleSearch" @handleSort="handleSort" :orderBy="orderBy"/>

            <div class="flex-1 pl-5">
              <add :isShowForm="isShowForm" @toggleForm="toggleForm" @handleAddTask="handleAddTask"/>
            </div>
          </div>

          <List :list="sortList" :isEdit="isEdit" @handleDelete="handleDelete" @handleEdit="handleEdit" @submitEdit="submitEdit" @closeEdit="closeEdit"/>

        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>
