<script>
  export let templateHtml, settings;
</script>

<style>
:global(html) {
  scroll-behavior: smooth;
}
:global(body) {
  background: linear-gradient(to bottom, #483A58, #63A088 35%, #63A088 35%, #483A58), #483A58;
  color: #FFF;
  display: flex;
  flex-direction: column;
  margin-left: 0;
  margin-right: 0;
  min-height: 100vh;
}
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link rel="stylesheet" href="/style.css" />
  <title>J Flower Cake — Delicious cakes, desert and snacks with an Asian twist</title>
  <meta name="description" content="J Flower Cake — Delicious cakes, desert and snacks with an Asian twist">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewbox='0 0 16 16'><text x='0' y='14'>🌸</text></svg>">
</svelte:head>

<header class="px-2 py-4 text-center">
  <h1 class="font-cursive text-4xl sm:text-6xl">J Flower Cake</h1>
  <p class="font-display">Delicious cakes, desert and snacks, made with love using locally-sourced ingredients and traditional Asian and Western recipes.</p>
</header>

<main class="flex-grow">
  {@html templateHtml}
</main>

<footer class="px-2 py-4 text-center">
  <address class="not-italic text-sm">
    <span class="font-cursive text-3xl">J Flower Cake</span><br />
    Middenmolenlaan 9<br />
    2807 DL Gouda
  </address>
  <small>&copy; J Flower cake, 2021</small>
  <dl class="text-xs">
    <dt class="inline px-2">KVK reg.</dt>
    <dd class="inline">80458998</dd>
    <dt class="inline px-2">VAT no.</dt>
    <dd class="inline">NL003445086B58</dd>
  </dl>
</footer>
