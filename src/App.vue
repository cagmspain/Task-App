<template>
	<Navbar />
	<RouterView></RouterView>
</template>
<script setup>
import { createClient } from "@supabase/supabase-js";
import { useAuthStore } from "./store/index";
import Navbar from "./components/Navbar.vue";

const auth = useAuthStore();
console.log(auth.isAuth);
</script>

<style scoped></style>
