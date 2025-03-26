import { defineStore } from 'pinia'
import listTask from '../data/task.js'
import { computed, reactive, ref } from 'vue';

export const useTodoStore = defineStore('todo', () => {
  const list = reactive(listTask);
  const filteredList = ref(list);
  const isShowForm = ref(false);
  const orderBy = ref('Name Ascending');

  const handleAddTask = (newItem) => {
    list.push(newItem);
    filteredList.value = list;
  };

  const toggleForm = () => {
    isShowForm.value = !isShowForm.value;
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

  const handleSort = (selectedSort) => {
    orderBy.value = selectedSort;
  };

  const handleSearch = (txtSearch) => {
    var listSearch = []
    if (txtSearch !== '') {
      listSearch = list.filter(item => item.name.toLowerCase().includes(txtSearch.toLowerCase()));
    }
    else {
      listSearch = [];
    }
    filteredList.value = filteredList.value.map((listItem) => {
      const matchedItem = listSearch.find(itemSearch => itemSearch.id === listItem.id);
      return {
        ...listItem,
        active: matchedItem ? true : false
      };
    })
  };

  const handleDelete = (itemDelete) => {
    const index = list.findIndex(item => item.id === itemDelete.id);
    list.splice(index,1);
    filteredList.value = list;
  };

  const handleEdit = (itemEdit) => {
    const index = list.findIndex(item => item.id === itemEdit.id);
    list[index].selected = true
  }

  const handleSubmitEdit = (itemUpdated) => {
    const index = list.findIndex(item => item.id === itemUpdated.id);
    list[index].name = itemUpdated.name;
    list[index].level = itemUpdated.level;
    closeEdit(itemUpdated);
  }

  const closeEdit = (itemClose) => {
    const index = list.findIndex(item => item.id === itemClose.id);
    list[index].selected = false;
  }

  return {
    list,
    isShowForm,
    sortList,
    orderBy,
    handleSort,
    handleAddTask,
    handleSearch,
    toggleForm,
    handleDelete,
    handleEdit,
    handleSubmitEdit,
    closeEdit
  }
})
