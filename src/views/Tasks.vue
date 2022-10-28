<template>
	<div class="container">
		<div class="card-content button-add">
			<div class="content">
				<button class="button is-info" @click="toggleEdit">
					<div>Add new task</div>
					<div><i class="fa-solid fa-plus"></i></div>
				</button>
			</div>
		</div>
	</div>

	<div class="modal" :class="{ 'is-active': isShowModal }">
		<div class="modal-background" @click="toggleEdit"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">Create task!</p>
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
		<div>
			<div class="greetings">
				<div class="media-content is-centrado">
					<div class="title is-4">Here we go!!</div>
				</div>
			</div>

			<div class="contenedor">
				<div class="media-content is-centrado">
					<div class="subtitle piece1 is-5">
						<div><i class="fa-solid fa-plus"></i></div>

						<div class="letras">Add your tasks!</div>
					</div>
				</div>

				<div class="media-content is-centrado">
					<div class="subtitle piece2 is-5">
						<div><i class="fa-solid fa-check"></i></div>
						<div class="letras">You can mark as done</div>
					</div>
				</div>

				<div class="media-content is-centrado">
					<div class="subtitle piece1 is-5">
						<div><i class="fa-solid fa-pen-to-square"></i></div>
						<div class="letras">Edit your tasks</div>
					</div>
				</div>

				<div class="media-content is-centrado">
					<div class="subtitle piece2 is-5">
						<div><i class="fa-solid fa-trash"></i></div>
						<div class="letras">Delete your tasks</div>
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
.button-add {
	display: flex;
	justify-content: center;
}
button.is-info {
	min-width: 200px;
	display: flex;
	justify-content: space-around;
	border-radius: 25px;
}
.greetings {
	display: flex;
	padding-bottom: 2rem;
}
.subtitle {
	display: flex;
	justify-content: center;
	border-radius: 25px;
	border: solid rgba(62, 142, 208, 0.5);
	padding: 1rem;
	margin: 1rem;
	align-items: center;
	max-width: 400px;
}
.letras {
	padding-left: 2rem;
	color: #3e8ed0;
}
div > div > i {
	color: #3e8ed0;
}
.contenedor {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
