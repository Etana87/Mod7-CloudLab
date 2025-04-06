<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '../stores/taskStore'

const taskStore = useTaskStore()
const newTask = ref('')

const addTask = () => {
  taskStore.addTask(newTask.value)
  newTask.value = ''
}
</script>

<template>
  <div class="container">
    <h1>Lista de Tareas</h1>
    <div class="task-input">
      <input v-model="newTask" placeholder="Nueva tarea" />
      <button @click="addTask">Agregar</button>
    </div>
    <TaskList />
  </div>
</template>

<style scoped>
.container {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
}

h1 {
  text-align: center;
  color: #333;
}

.task-input {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
</style>