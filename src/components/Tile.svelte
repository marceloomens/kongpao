<script>
  export let id;
  export let name;
  export let description;
  export let image;
  export let available;

  // Could be a nice piece of code to move to a filter
  const ASSETS_BASE = /^https:\/\/res.cloudinary.com\/jflower\/image\/upload\//;
  if (image) {
    image = image
      // Remove Cloudinary base url
      .replace(ASSETS_BASE, '')
      // Remove file extension
      .replace(/\.\w{3,4}$/,'');
  }
  if (!image) {
    image = 'fallback';
  }

  let wamsg = encodeURIComponent(`I would like to order a ${name}. (from website)`);
</script>

<style>
aside {
  display: none;
}
aside:target {
  display: flex;
}
.out-of-stock {
  filter: blur(2px) grayscale(70%);
}
</style>

<article class="relative">
<a href="#tile-{id}">

  <figure class:out-of-stock="{!available}">
    <picture>
      <source media="(min-width: 320px)" type="image/webp" srcset="//res.cloudinary.com/jflower/image/upload/t_tile-320/{image}.webp, //res.cloudinary.com/jflower/image/upload/t_tile-640/{image}.webp 2x">
      <source type="image/webp" srcset="//res.cloudinary.com/jflower/image/upload/t_tile-160/{image}.webp, //res.cloudinary.com/jflower/image/upload/t_tile-320/{image}.webp 2x">
      <img src="//res.cloudinary.com/jflower/image/upload/t_tile-320/{image}.jpg" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" alt="{name}">
    </picture>
    <figcaption class="hidden">{name}</figcaption>
  </figure>
</a>
<aside id="tile-{id}" class="fixed inset-0 top-1/4 sm:top-0 sm:left-1/2 z-10 p-4 bg-black bg-opacity-90">
  <a href="#/" class="absolute block top-0 right-0 p-3 text-xl">&#x2715;</a>
  <div class="flex flex-col justify-end content-center sm:max-w-screen-sm mx-auto">
    <figure class="w-3/4 overflow-hidden mx-auto">
      <picture>
        <source media="(min-width: 320px)" type="image/webp" srcset="//res.cloudinary.com/jflower/image/upload/t_landscape-640/{image}.webp, //res.cloudinary.com/jflower/image/upload/t_landscape-1280/{image}.webp 2x">
        <source type="image/webp" srcset="//res.cloudinary.com/jflower/image/upload/t_landscape-320/{image}.webp, //res.cloudinary.com/jflower/image/upload/t_landscape-640/{image}.webp 2x">
        <img class="object-contain h-full rounded-lg" src="//res.cloudinary.com/jflower/image/upload/t_landscape-640/{image}.jpg" sizes="(min-width: 640px) 50vw, 100vw" alt="{name}">
      </picture>
    </figure>
    <h2 class="font-display text-center text-2xl">{name}</h2>
    <p class="max-w-prose">{description}</p>
    {#if available}
      <a href="https://wa.me/31611134040?text={wamsg}" target="_blank" class="w-1/2 max-w-xs self-center mt-2" rel="external nofollow noopener noreferrer">
        <button class="w-full border-2 border-white font-display text-white focus:bg-yellow-50 active:bg-yellow-50 hover:bg-yellow-50 focus:border-yellow-600 active:border-yellow-600 hover:border-yellow-600 focus:text-yellow-600 active:text-yellow-600 hover:text-yellow-600 py-2 px-3 rounded-md">Add to cart</button>
      </a>
    {/if}
  </div>
</aside>
</article>
