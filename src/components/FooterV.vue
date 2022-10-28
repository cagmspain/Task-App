<template>
	<footer>
		<ul class="footer-list">
			<li>
				<button class="button is-ghost">
					<a href="https://github.com/cagmspain?tab=repositories">
						<img class="gh" src="../assets/pngwing.com.png" alt="logo" />
					</a>
				</button>
			</li>
			<li>
				<button class="button is-ghost">
					<a href="https://www.linkedin.com/"
						><img class="in" src="../assets/linkdin.png" alt="logo"
					/></a>
				</button>
			</li>
		</ul>
	</footer>
</template>
<script setup></script>
<style scoped>
footer {
	background-color: #3e8ed0;
	height: 15vh;
	color: white;
	display: flex;
	justify-content: center;
}
.footer-list {
	display: flex;
	align-items: center;
}
ul > li {
	padding: 1rem;
}
li > button > a > img.gh {
	height: 50px;
}
li > button > a > img.in {
	height: 30px;
}
</style>
