<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import "../app.css";
	let { children } = $props();
</script>

<Header></Header>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<Footer></Footer>