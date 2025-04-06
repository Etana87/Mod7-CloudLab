<script setup lang="ts">
import { useTaskStore } from '../stores/taskStore'

const taskStore = useTaskStore()
</script>

<template>
  <ul class="task-list">
    <li v-for="task in taskStore.tasks" :key="task.id" class="task-item">
      <span :class="{ completed: task.completed }">{{ task.text }}</span>
      <div class="task-actions">
        <button @click="taskStore.toggleTask(task.id)">✅</button>
        <button @click="taskStore.removeTask(task.id)">🗑️</button>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.task-list {
  list-style: none;
  padding: 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.task-actions {
  display: flex;
  gap: 5px;
}

.completed {
  text-decoration: line-through;
  color: #777;
}

button {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
}

button:hover {
  color: red;
}
</style>
