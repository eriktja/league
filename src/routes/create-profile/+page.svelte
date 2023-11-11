<script>
	import { user } from '$lib/firebase';
	import { confirmPasswordReset } from 'firebase/auth';
	import { onMount } from 'svelte';
	import * as yup from 'yup';

	let ready = false;

	let values = {
		email: '',
		password: '',
		confirmPassword: ''
	};

	const schema = yup.object().shape({
		email: yup.string().required('Email is required').email('Email is invalid'),
		password: yup.string().required('Password is required'),
		confirmPassword: yup
			.string()
			.required('Please confirm your password')
			.oneOf([yup.ref('password')], 'Passwords do not match')
	});

	onMount(() =>
		setTimeout(() => {
			ready = true;
		}, 0)
	);

	let errors = {};

	const clearErrorMessages = () => {
		errors = {};
	};

	const handleSubmit = async () => {
		try {
			await schema.validate(values, { abortEarly: false });
			// alert(JSON.stringify(values, null, 2));
			errors = {};


		} catch (err) {
			errors = err.inner.reduce((acc, err) => {
				return { ...acc, [err.path]: err.message };
			}, {});
		}
	};
</script>

<div class="flex items-center justify-center h-screen">
	{#if !ready}
		<span class="loading loading-infinity loading-lg" />
	{/if}
	{#if ready}
		<div class="card w-96 bg-base-100 shadow-xl">
			<figure><img src="/gaming-tournament.svg" class="" alt="Gaming-tournament logo" /></figure>
			<div class="card-body flex align-center">
				{#if $user}
					<h2 class="card-title">You are already logged in {$user.displayName}!</h2>
					<a class="btn btn-primary" href="/">Home</a>
				{:else}
					<h2 class="card-title">Create a profile!</h2>

					<form
						id="create-profile-form"
						class="flex flex-col justify-center"
						on:submit|preventDefault={handleSubmit}
					>
						<div class="form-control w-full max-w-xs">
							<label for="name-input" class="label">
								<span class="label-text">Name</span>
							</label>
							<input
								id="name-input"
								name="name"
								type="text"
								placeholder="Hva heter du?"
								class="input input-bordered w-full max-w-xs"
								on:input={clearErrorMessages}
							/>
						</div>
						<div>
							<label for="email-input" class="label">
								<span class="label-text">Email</span>
							</label>
							<input
								id="email-input"
								name="email"
								type="text"
								placeholder="oboygutten@dnb.no"
								class="input input-bordered w-full max-w-xs"
								bind:value={values.email}
								on:input={clearErrorMessages}
							/>
						</div>

						{#if errors.email}
							<span class="indicator-item badge badge-warning">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="stroke-current shrink-0 h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
									/></svg
								>
								{errors.email}!
							</span>
						{/if}

						<div class="form-control w-full max-w-xs">
							<label for="password-input" class="label">
								<span class="label-text">Password</span>
							</label>
							<input
								id="password-input"
								name="password"
								type="password"
								placeholder="Nerd123"
								class="input input-bordered w-full max-w-xs"
								bind:value={values.password}
								on:input={clearErrorMessages}
							/>
						</div>
						{#if errors.password}
							<span class="indicator-item badge badge-warning">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="stroke-current shrink-0 h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
									/></svg
								>
								{errors.password}!
							</span>
						{/if}
						<div class="form-control w-full max-w-xs">
							<label for="repeat-password-input" class="label">
								<span class="label-text">Repeat password</span>
							</label>
							<input
								id="repeat-password-input"
								name="conformPassword"
								type="password"
								placeholder="Nerd123"
								class="input input-bordered w-full max-w-xs"
								bind:value={values.confirmPassword}
								on:input={clearErrorMessages}
							/>
						</div>

						{#if errors.confirmPassword}
							<span class="indicator-item badge badge-warning">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="stroke-current shrink-0 h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
									/></svg
								>
								{errors.confirmPassword}!
							</span>
						{/if}
						<div class="join join-vertical mt-2">
							<button class="btn btn-accent join-item">Create profile</button>
							<a class="btn btn-warning join-item" href="/login">Back to log in screen</a>
						</div>
					</form>
				{/if}
			</div>
		</div>
	{/if}
</div>
