<template>
	<div class="section principal">
		<div class="container">
			<article v-if="!authStore.isAuth">
				<header><h1 class="title">Este es mi header</h1></header>
				<div class="landing-page">
					<div class="container container-landing">
						<div class="card">
							<div class="card-content">
								Bienvenido! <br />
								Inicia sesion en la APP para ver contenido <br />
							</div>
							<div class="card-content">
								Bienvenido! <br />
								Inicia sesion en la APP para ver contenido <br />
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
							<p class="modal-card-title">Registro</p>
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
			<div v-else>
				<Navbar></Navbar>
				<div>
					<div class="container">
						<div>Wellcome {{ authStore.user.email }}</div>
						<button
							@click="authStore.logout()"
							class="button is-danger is-light"
						>
							Cerrar Sesión
						</button>
					</div>
				</div>
				<Tasks> </Tasks>
			</div>
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
</style>
