<template>
	<div class="card" v-if="(estado = !task.isCreated)">
		<div class="card-flex" v-if="!editMode">
			<header class="card-header">
				<p class="card-header-title">{{ props.task.title }}</p>
			</header>
			<div class="card-content">
				<div class="content">
					{{ props.task.description }}
				</div>
			</div>
			<footer class="card-footer">
				<button
					class="card-footer-item button is-light is-info"
					@click="eliminateTask(props.task.id)"
				>
					<div><i class="fa-solid fa-trash"></i></div>
				</button>
				<button
					class="card-footer-item button is-light is-info"
					@click="doneTask(props.task.id)"
				>
					<div><i class="fa-solid fa-check"></i></div>
				</button>
				<button
					class="card-footer-item button is-light is-info"
					@click="toggleEdit(props.task.id)"
				>
					<div><i class="fa-solid fa-pen-to-square"></i></div>
				</button>
			</footer>
		</div>
		<div v-else>
			<header class="card-header">
				<input
					:v-model="title"
					type="text"
					:placeholder="props.task.title"
					class="card-header-title"
				/>
			</header>
			<div class="card-content">
				<textarea
					rows="4"
					cols="30"
					:placeholder="props.task.description"
				></textarea>
			</div>
			<footer class="card-footer">
				<button
					class="card-footer-item button is-info is-light"
					@click="editedTask(props.task.id)"
				>
					<div><i class="fa-regular fa-floppy-disk"></i></div>
				</button>
				<button
					class="card-footer-item button is-info is-light"
					@click="toggleEdit(props.task.id)"
				>
					<div><i class="fa-solid fa-xmark"></i></div>
				</button>
			</footer>
		</div>
	</div>

	<div class="done" v-else>
		<header class="card-header">
			<p class="card-header-title">{{ props.task.title }}</p>
		</header>
		<div class="card-content">
			<div class="content">
				{{ props.task.description }}
			</div>
		</div>
		<footer class="card-footer">
			<button
				class="card-footer-item button is-light is-info"
				@click="eliminateTask(props.task.id)"
			>
				<div><i class="fa-solid fa-trash"></i></div>
			</button>
			<button
				class="card-footer-item button is-info is-light"
				@click="undoTask(props.task.id)"
			>
				<div><i class="fa-solid fa-rotate-left"></i></div>
			</button>
		</footer>
	</div>
</template>
<script setup>
import { ref, onMounted, pushScopeId } from "vue";
import { useAuthStore, useTaskStore } from "../store";

import { deleteTask, getTasks, statusTask, updateTask } from "../API";
const editMode = ref(false);
const toggleEdit = () => {
	editMode.value = !editMode.value;
};
const authStore = useAuthStore();
const taskStore = useTaskStore();
const props = defineProps({
	task: Object,
});

const eliminateTask = async (id) => {
	taskStore.setTask();
	await deleteTask(id);
	taskStore.deleteTask(id);
};
let estado = ref("");
let title = ref("");
let description = ref("");
const doneTask = async (id) => {
	estado = true;
	//taskStore.updateTask()
	await statusTask(id, estado);
	taskStore.setTask();
};
const undoTask = async (id) => {
	estado = false;
	//taskStore.updateTask()
	await statusTask(id, estado);
	taskStore.setTask();
};
const editedTask = async (id) => {
	await updateTask(id, title.value, description.value);
	taskStore.setTask();
	toggleEdit();
};
</script>
<style scoped>
.done .card-header-title {
	background-color: rgba(0, 0, 0, 0.3);
	border-radius: 5px;
	text-decoration: line-through;
}
.done .content {
	text-decoration: line-through;
}
.done .card-content {
	background-color: rgba(0, 0, 0, 0.3);
	border-radius: 5px;
}
</style>
