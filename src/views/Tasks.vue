<template>
	<div class="card">
		<div class="card-content">
			<div class="content">
				<button class="button is-info" @click="toggleEdit">Add new task</button>
			</div>
		</div>
	</div>

	<div class="modal" :class="{ 'is-active': isShowModal }">
		<div class="modal-background" @click="toggleEdit"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">Modal title</p>
				<button class="delete" aria-label="close" @click="toggleEdit"></button>
			</header>
			<section class="modal-card-body">
				<NewTasks @close="toggleEdit" />
			</section>
		</div>
	</div>

	<div v-if="taskLenght" class="section">
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
	<div v-else class="section">
		<div class="card">
			<div class="card-content">
				<div class="media">
					<div class="media-left">
						<figure class="image is-48x48">
							<img src="../assets/logo.png" alt="Placeholder image" />
						</figure>
					</div>
					<div class="media-content is-centrado">
						<div class="title is-4">Wellcome to you tasks app!!</div>
					</div>
				</div>

				<div>
					<div class="media">
						<div class="media-left"></div>
						<div class="media-content is-centrado">
							<div class="subtitle is-4">Start by adding your tasks!</div>
						</div>
					</div>
					<div class="media">
						<div class="media-left"></div>
						<div class="media-content is-centrado">
							<div class="subtitle is-4">You can mark as done</div>
						</div>
					</div>
					<div class="media">
						<div class="media-left"></div>
						<div class="media-content is-centrado">
							<div class="subtitle is-4">Edit your task</div>
						</div>
					</div>
					<div class="media">
						<div class="media-left"></div>
						<div class="media-content is-centrado">
							<div class="subtitle is-4">Delete your task</div>
						</div>
					</div>
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
import { watch } from "vue";
const authStore = useAuthStore();
const taskStore = useTaskStore();
const tasks = ref("");

onMounted(() => {
	//await getTasks();
	taskStore.setTask();
});

//modal
let isShowModal = ref(false);
const toggleEdit = () => {
	isShowModal.value = !isShowModal.value;
};
let taskLenght = ref(taskStore.tasks.length);
//emppty state
watch(
	() => taskStore.tasks.length,
	(newValue) => {
		taskLenght.value = taskStore.tasks.length;
	}
);
</script>
<style scoped>
div.done div {
	text-decoration: line-through;
	background-color: aquamarine;
}
div.is-centrado {
	text-align: center;
}
</style>
