<template>
	<nav
		class="navbar container is-transparent"
		role="navigation"
		aria-label="main navigation"
	>
		<div class="navbar-brand">
			<router-link class="navbar-item" :to="{ name: 'home' }">
				<img src="../assets/logo.png" alt="logo" height="28" />
			</router-link>
			<a
				role="button"
				@click="toggleMenu"
				class="navbar-burger"
				:class="{ 'is-active': isOpen }"
				aria-label="menu"
				aria-expanded="false"
				data-target="navbarBasicExample"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>
		<div
			id="navbarBasicExample"
			class="navbar-menu"
			:class="{ 'is-active': isOpen }"
		>
			<div class="navbar-start">
				<div class="user-logged">
					<div>{{ authStore.user.email }}</div>
					<button @click="authStore.logout()" class="button is-ghost">
						<i class="fa-solid fa-right-from-bracket"></i>
					</button>
				</div>
			</div>
		</div>
	</nav>
</template>
<script setup>
import { ref } from "vue";
import { useAuthStore } from "../store/auth";
const authStore = useAuthStore();
const isOpen = ref(false);
const toggleMenu = () => {
	isOpen.value = !isOpen.value;
};
</script>
<style scoped>
.navbar {
	background-color: transparent;
}

.navbar-start {
	flex: 1;
	justify-content: flex-end;
	font-weight: 700;
}
.user-logged {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
