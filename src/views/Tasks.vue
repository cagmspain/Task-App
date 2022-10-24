<template>
	<NewTasks />
	<div class="section" v-for="task in taskStore.tasks" :key="task.id">
		<div v-if="!task.isCreated">
			<div>{{ task.title }} - {{ task.created_at }}</div>
			<div>{{ task.description }}</div>
			<button @click="eliminateTask(task.id)">Delete</button>
			<button @click="setDoneTask(task.id)">Done</button>
			<button @click="enableEditTask(task.id)">Edit</button>
		</div>
		<div class="done" v-else>
			<div>{{ task.title }} - {{ task.created_at }}</div>
			<div>{{ task.description }}</div>
			<button @click="eliminateTask(task.id)">Delete</button>
			<button @click="setDoneTask(task.id)">Done</button>
			<button>archive</button>
		</div>
	</div>
</template>
<script setup>
import { ref, onMounted, pushScopeId } from "vue";
import { useAuthStore, useTaskStore } from "../store";
import NewTasks from "../components/NewTasks.vue";

import { deleteTask, getTasks, updateTask, statusTask } from "../api";
import router from "../router";
const authStore = useAuthStore();
const taskStore = useTaskStore();
const tasks = ref("");

onMounted(() => {
	//await getTasks()
	taskStore.setTask();
});
const eliminateTask = async (id) => {
	await deleteTask(id);
	taskStore.deleteTask(id);
	taskStore.setTask(id);
};
const isRender = ref(false);

const show = () => {
	isRender.value = !isRender.value;
};

let estado = false;
const setDoneTask = async (id) => {
	estado = !estado;
	const task = { created_at: estado };
	taskStore.updateTask(id, task);
	await statusTask(id, estado);
};

const enableEditTask = (id) => {};
</script>
<style scoped>
div.done div {
	text-decoration: line-through;
}
</style>
