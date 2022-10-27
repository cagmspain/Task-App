<template>
	<footer>
		<ul class="footer-list">
			<li><button class="button is-light">Github</button></li>
			<li><button class="button is-light">linked in</button></li>
		</ul>
	</footer>
</template>
<script setup></script>
<style scoped>
footer {
	background-color: #485fc7;
	height: 15vh;
	color: white;
	display: flex;
	justify-content: center;
}
.footer-list {
	display: flex;
}
ul > li {
	padding: 1rem;
}
</style>
