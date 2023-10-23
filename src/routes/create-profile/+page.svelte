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
		Spinner,
		Navbar,
		DarkMode
	} from 'flowbite-svelte';
	import { UserCircleSolid, QuestionCircleSolid } from 'flowbite-svelte-icons';

	let ready = false;

	onMount(() =>
		setTimeout(() => {
			ready = true;
		}, 0)
	);

	let hidden = true;
</script>

<Navbar color="indigo">
	<NavBrand>
		<img src="/joystick.svg" class="mr-3 h-6 sm:h-9" alt="joystick logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Create a profile</span>
	</NavBrand>
	<DarkMode />
</Navbar>
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
					<Input type="text" id="username" placeholder="Oboygutten" />
				</ButtonGroup>
			</div>

			<div class="mt-4">
				<Label for="password1" class="bloack mb-2">Password</Label>
				<ButtonGroup>
					<InputAddon>
						<QuestionCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
					</InputAddon>
					<Input type="password" id="password1" placeholder="vanskeligpassord123" />
				</ButtonGroup>
				<Helper {hidden} class="mt-2" color="red">lol</Helper>
			</div>
			<div class="mt-4">
				<Label for="password2" class="bloack mb-2">Repeat password</Label>
				<ButtonGroup>
					<InputAddon>
						<QuestionCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
					</InputAddon>
					<Input type="password" id="password2" placeholder="Gjenta" />
				</ButtonGroup>
				<Helper {hidden} class="mt-2" color="red">lol</Helper>
			</div>
		</form>
		<ButtonGroup class="mt-4">
			<Button>I give up..</Button>
			<Button>Create Profile</Button>
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
