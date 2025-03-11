<script setup>
import ListItem from './ListItem.vue'

const props = defineProps({
  list: {
    type: Array,
  },

  isEdit: {
    type: Boolean,
  },
});

const emit = defineEmits(['handleDelete','handleEdit','closeEdit','submitEdit']);

const handleDelete = (itemDelete) => {
  emit('handleDelete', itemDelete)
};

const handleEdit = (itemEdit) => {
  emit('handleEdit',itemEdit)
};

const submitEdit = (itemUpdated) => {
  emit('submitEdit',itemUpdated)
};

const closeEdit = (itemClose) => {
  emit('closeEdit',itemClose)
};

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
          <th class="w-2/6">Task name</th>
          <th class="w-1/6">Level</th>
          <th class="w-3/6">Action</th>
        </tr>
      </thead>

      <tbody>
        <ListItem v-for="(item,index) in props.list" :key="item.id" :item="item" :index="index + 1" :isEdit="props.isEdit" @handleDelete="handleDelete" @handleEdit="handleEdit" @submitEdit="submitEdit" @closeEdit="closeEdit"/>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>
