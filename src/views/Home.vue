<template>
	<Navbar />
	<div class="section">
		<div class="container">
			<article v-if="!authStore.isAuth" class="message is-danger">
				<div class="card message-body">
					Bienvenido! <br />
					Inicia sesion en la APP para ver contenido <br />
					<router-link :to="{ name: 'login' }"> Ir a Login </router-link>
				</div>
			</article>
			<div v-else>
				<div class="title">Hola {{ authStore.user.email }}</div>
				<button @click="authStore.logout()" class="button is-danger">
					Cerrar Sesión
				</button>

				<RouterView></RouterView>
			</div>
		</div>
	</div>
</template>
<script setup>
import { useAuthStore } from "../store/auth";
import { useTaskStore } from "../store";
import { onMounted, ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Tasks from "../views/Tasks.vue";
const authStore = useAuthStore();
const taskStore = useTaskStore();

//await getTasks()

//const tasksLenght = taskStore.tasks.length;
//console.log("lomgitud tasks", tasksLenght);
</script>
<style scoped></style>
