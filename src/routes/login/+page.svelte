<script>
	let count = 0;

	const up = () => {
		count++;
	};
</script>

<svelte:head>
	<title>Login</title>
	<meta name="Meh" content="" />
</svelte:head>

<div id="login-frame">
	<h1>Login</h1>
	<form method="post" id="login-form">
		<label class="form-item">
			<span>Username:</span>
			<input name="username" type="text" />
		</label>
		<label class="form-item">
			<span>Password:</span>
			<input name="password" type="password" />
		</label>
	</form>
	<button>Log in</button>
</div>

<style>
	.form-item {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.2em;
	}

	#login-frame {
		width: fit-content;
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -70%);
	}

	#login-form {
		display: flex;
		flex-direction: column;
	}

	button {
		margin-top: 1em;
		width: 200px;
	}
</style>
