<script>
	import { onMount } from 'svelte';
	import {
		ButtonGroup,
		InputAddon,
		Label,
		Input,
		Button,
		Helper,
		NavBrand,
		Spinner
	} from 'flowbite-svelte';
	import { UserCircleSolid, QuestionCircleSolid } from 'flowbite-svelte-icons';

	let ready = false;

	onMount(() =>
		setTimeout(() => {
			ready = true;
		}, 100)
	);

	let hidden = true;
</script>

<div class="login-frame">
	{#if !ready}
		<Spinner />
	{/if}
	{#if ready}
		<img src="/gaming-tournament.svg" class="" alt="Gaming-tournament logo" />
		<form>
			<div>
				<Label for="username" class="bloack mb-2">Username</Label>
				<ButtonGroup>
					<InputAddon>
						<UserCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
					</InputAddon>
					<Input type="text" id="username" placeholder="Username" />
				</ButtonGroup>
			</div>

			<div class="mt-4">
				<Label for="password" class="bloack mb-2">Password</Label>
				<ButtonGroup>
					<InputAddon>
						<QuestionCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
					</InputAddon>
					<Input type="password" id="password" placeholder="Password" />
				</ButtonGroup>
				<Helper {hidden} class="mt-2" color="red">lol</Helper>
			</div>
		</form>
		<ButtonGroup class="mt-4">
			<Button>Sign in</Button>
			<Button>New account</Button>
		</ButtonGroup>
	{/if}
</div>

<style>
	.login-frame {
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
