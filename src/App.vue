<script setup>
import List from './components/List.vue'
import Control from './components/ControlFiter.vue'
import Add from './components/AddTask.vue'
</script>

<template>
  <main>
    <div id="app">
      <div class="thumbnail">
        <img src="./assets/img/keyvisual_img.jpg" alt="thumbnail" />
      </div>
      <div class="section-main">
        <div class="wrapper">
          <h1 class="text-5xl mb-10 site-title">Todo Listtt</h1>

          <div class="block-control flex justify-between mb-10">
            <control />

            <div class="flex-1 pl-5 control-right">
              <add />
            </div>
          </div>

          <List @handleDelete="handleDelete" @handleEdit="handleEdit" @submitEdit="submitEdit" @closeEdit="closeEdit"/>

        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>
