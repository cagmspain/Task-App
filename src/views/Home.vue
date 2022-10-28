<template>
	<article class="section" v-if="!authStore.isAuth">
		<header>
			<div><img src="../assets/logo.png" alt="logo" /></div>
			<h1 class="title">Tasks helper!</h1>
		</header>
		<div class="landing-page">
			<div class="container container-landing">
				<div class="card">
					<div class="card-content">
						<div class="subtitle">
							Bienvenido! <br />
							<hr />
							Tasks helper te ayuda a organizar tus actividades, <br />
							proyectos, incluso hasta tu vida!
						</div>
						<div class="subtitle">
							Registrate en la App o inicia sesion <br />
							y descubre en todo lo que te podemos ayudar!
						</div>
					</div>
				</div>
			</div>
			<div class="card container container-landing">
				<div class="card-flex">
					<Login @close="toggleEdit"></Login>
				</div>
			</div>
		</div>

		<div class="modal" :class="{ 'is-active': isShowModal }">
			<div class="modal-background" @click="toggleEdit"></div>
			<div class="modal-card">
				<header class="modal-card-head">
					<p class="modal-card-title">Registrate!</p>
					<button
						class="delete"
						aria-label="close"
						@click="toggleEdit"
					></button>
				</header>
				<section class="modal-card-body">
					<SignUp @close="toggleEdit" />
				</section>
			</div>
		</div>
	</article>
	<div class="section tasks-display" v-else>
		<Navbar></Navbar>
		<div class="section">
			<Tasks> </Tasks>
		</div>
	</div>

	<FooterV />
</template>
<script setup>
import { useAuthStore } from "../store/auth";
import { useTaskStore } from "../store";
import { onMounted, ref } from "vue";
import { getTasks } from "../api/index";
import Login from "../views/Login.vue";
import Navbar from "../components/Navbar.vue";
import Tasks from "../views/Tasks.vue";
import SignUp from "../views/SignUp.vue";
import FooterV from "../components/FooterV.vue";
const authStore = useAuthStore();
const taskStore = useTaskStore();
onMounted(async () => {
	await getTasks();
});

//modal
let isShowModal = ref(false);
const toggleEdit = () => {
	isShowModal.value = !isShowModal.value;
};

//await getTasks()

//const tasksLenght = taskStore.tasks.length;
//console.log("lomgitud tasks", tasksLenght);
</script>
<style scoped>
.landing-page {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	align-items: center;
}
.container-landing {
	margin: 1rem;
}

.principal {
	min-height: 85vh;
	display: flex;
	align-items: center;
}
.tasks-display {
	padding-top: 0;
	min-height: 85vh;
}
article.section {
	min-height: 85vh;
}
header {
	margin-bottom: 2rem;
	display: flex;
	justify-content: center;
}
img {
	height: 30px;
	padding-right: 1rem;
}
div.card-content > div.subtitle {
	font-weight: 700;
}
</style>
