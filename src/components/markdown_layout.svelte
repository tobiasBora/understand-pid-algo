<script>
  export let title;
</script>

<svelte:head>
  <title>{title}</title>
  <link href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" rel="stylesheet">
</svelte:head>

<div class="prose max-w-none">
  <h1>{title}</h1>
  <slot/>
</div>
