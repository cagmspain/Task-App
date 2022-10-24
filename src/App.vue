<template>
	<Navbar />
	<RouterView></RouterView>
</template>
<script setup>
import { createClient } from "@supabase/supabase-js";
import { useAuthStore } from "./store";
import Navbar from "./components/Navbar.vue";

// const supabase = createClient(
// 	import.meta.env.VITE_SUPABASE_URL,
// 	import.meta.env.VITE_SUPABASE_KEY
// );
// console.log(supabase);

const auth = useAuthStore();
</script>

<style scoped></style>
