<script>
  export let title;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="prose max-w-none">
  <h1>{title}</h1>
  <slot/>
</div>
