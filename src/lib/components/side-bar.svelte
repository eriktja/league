<svelte:options customElement="side-bar" />

<script>
	import { Button, ButtonGroup } from 'flowbite-svelte';
</script>

<div id="side-bar-frame">
	<Button color="dark">|||</Button>
	<ButtonGroup>
		<Button color="dark" href="/">HOME</Button>
		<Button color="dark" href="/profile">Profile</Button>
		<Button color="dark" href="/leaderboard">Leaderboard</Button>
		<Button color="dark" href="/settings">Settings</Button>
	</ButtonGroup>
</div>

<style>
	#side-bar-frame {
		height: 100%;
		width: 100px;
		display: block;
	}
</style>
