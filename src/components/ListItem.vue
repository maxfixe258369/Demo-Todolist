<script setup>
import { computed, ref } from "vue"
import { useTodoStore } from '../store/TodoStore'

const store = useTodoStore();

const props = defineProps({
  item: {
    type: Object,
  },
  index: {
    type: Number,
  },
});

const editName = ref(props.item.name);
const editLevel = ref(props.item.level);

const getLevel = computed(() => {
  switch (props.item.level) {
    case 0:
      return 'High'
    case 1:
      return 'Medium'
    case 2:
      return 'Low'
    default:
      return ''
  }
});

const getClassLevel = computed(() => {
  switch (props.item.level) {
    case 0:
      return 'level-high'
    case 1:
      return 'level-medium'
    case 2:
      return 'level-low'
    default:
      return ''
  }
});

const submitEdit = () => {
  const updateItem = {
    ...props.item,
    name: editName.value,
    level: parseInt(editLevel.value),
  };
  store.handleSubmitEdit(updateItem)
}
</script>

<template>
 <tr>
    <td>{{ props.index }}</td>
    <td>
      <div v-if="!props.item.selected" >{{ item.name }}</div>
      <div v-else ><input v-model="editName" type="text" class="add-name border border-black flex-1 p-1 pl-4 w-full"></div>
    </td>
    <td>
      <div v-if="!props.item.selected" class="level" :class="getClassLevel">{{ getLevel }}</div>
      <div v-else>
        <select  v-model="editLevel" name="priorEdit" class="w-30 border border-black p-2">
          <option value="" hidden>{{ getLevel }}</option>
          <option value="0">High</option>
          <option value="1">Medium</option>
          <option value="2">Low</option>
        </select>
      </div>
    </td>
    <td class="flex justify-center column-edit">
      <button v-if="!props.item.selected" class="bg-yellow-500 text-white p-2 ml-1 mr-1" @click="store.handleEdit(props.item)">Edit</button>
      <div v-else>
        <button class="bg-green-500 text-white p-2 ml-1 mr-1" @click="submitEdit">Update</button>
        <button class="bg-gray-500 text-white p-2 ml-1 mr-1" @click="store.closeEdit(props.item)">Cancel</button>
      </div>
      <button class="bg-red-500 text-white p-2 ml-1 mr-1" @click="store.handleDelete(props.item)">Delete</button>
    </td>
  </tr>
</template>

<style scoped>

</style>
