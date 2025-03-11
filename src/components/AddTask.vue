<script setup>
import { reactive, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid'

defineProps({
  isShowForm: {
    type: Boolean,
    default: false,
  },
})

const nameInput = ref('');
const levelInput = ref('-1');

const emit = defineEmits(['toggleForm','handleAddTask']);

const toggleForm = () => {
  emit('toggleForm');
}

const closeForm = () => {
  emit('toggleForm');
  resetData();
}

const handleAddTask = () => {
  if (nameInput.value !== '' && levelInput.value !== '-1') {
    const newTask = reactive({
      id: uuidv4(),
      name: '',
      level: -1,
      selected: false
    })

    newTask.name = nameInput.value;
    newTask.level = parseInt(levelInput.value);
    emit('handleAddTask', newTask);
    resetData();
    closeForm();
  }
  else {
    alert('Xin hãy nhập đầy đủ thông tin Task');
  }
}

const resetData = () => {
  nameInput.value = '';
  levelInput.value = '-1';
}

</script>

<template>
  <div class="control-add">
    <button
      class="bg-blue-500 text-white text-center p-2 mb-5 w-full text-xl"
      @click="toggleForm"
    >
      Add task
    </button>
    <div class="add-main flex" id="formAdd" v-if="isShowForm">
      <form action=""></form>
      <input
        v-model="nameInput"
        type="text"
        class="add-name border border-black flex-1 p-1 pl-4"
        placeholder="name"
      />
      <select v-model="levelInput" name="prior" class="w-30 border border-black p-2 ml-2">
        <option value="-1" hidden>Level</option>
        <option value="0">High</option>
        <option value="1">Medium</option>
        <option value="2">Low</option>
      </select>
      <button
        class="w-20 bg-green-500 hover:bg-green-700 transition text-white mr-2 ml-2"
        @click="handleAddTask"
      >
        Submit
      </button>
      <button
        class="w-20 bg-gray-500 hover:bg-gray-700 transition text-white"
        @click="closeForm"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
