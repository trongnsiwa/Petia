<script lang ts>
	import AuthButton from '$lib/components/AuthButton.svelte';
</script>

<div class="lg:flex">
	<div class="hidden lg:flex flex-1 h-screen bg-petia-400" />
	<div class="lg:w-1/2 xl:max-w-screen-sm">
		<div class="pt-40 bg-white flex flex-col justify-center items-center px-12">
			<h3 class="font-bold text-petia-400">Petia</h3>
			<h4 class="pt-16">Log in</h4>
			<div class="pt-7 flex flex-col gap-3 w-full">
				<AuthButton name="google" />
				<AuthButton name="github" />
				<AuthButton name="email" />
			</div>
			<div class="inline-flex gap-1.5 pt-5 text-sm">
				<p>Don't you have an account?</p>
				<a href="/signup" class="font-bold text-petia-400 hover:underline">Sign up</a>
			</div>
		</div>
	</div>
</div>
