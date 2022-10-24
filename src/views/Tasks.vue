<template>
	<NewTasks />
	<div class="section">
		<div class="container">
			<div class="columns is-multiline">
				<div
					v-for="task in taskStore.tasks"
					:key="task.id"
					class="column is-12-mobile is-6-tablet is-4-desktop"
				>
					<Card :task="task" />
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref, onMounted, pushScopeId } from "vue";
import { useAuthStore, useTaskStore } from "../store";
import NewTasks from "../components/NewTasks.vue";

import { deleteTask, getTasks, updateTask, statusTask } from "../api";
import router from "../router";
import Card from "../components/Card.vue";
const authStore = useAuthStore();
const taskStore = useTaskStore();
const tasks = ref("");

onMounted(() => {
	//await getTasks()
	taskStore.setTask();
});
</script>
<style scoped>
div.done div {
	text-decoration: line-through;
	background-color: aquamarine;
}
</style>
