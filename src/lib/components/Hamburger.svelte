<script lang="ts">
	import { logOut } from '$lib/auth/google';

	let menu = [
		{ name: 'Home', href: '/' },
		{ name: 'Leaderboard', href: '/leaderboard' },
		{ name: 'Profile', href: '/profile' },
		{ name: 'Instructions', href: '/instructions' },
		{ name: 'Settings', href: '/settings' }
	];
</script>

<div class="drawer">
	<input id="menu-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<!-- Page content here -->
		<label for="menu-drawer" class="btn btn-ghost drawer-button">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-5 h-5 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/></svg
			></label
		>
	</div>
	<div class="drawer-side">
		<label for="menu-drawer" aria-label="close sidebar" class="drawer-overlay" />
		<ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
			{#each menu as { name, href }, index}
				<li><a class="font-bold" {href}>{name}</a></li>
			{/each}
			<li>
				<button class="font-bold" on:click={logOut}><a href="/login">Log out</a></button>
			</li>
		</ul>
	</div>
</div>
