<script>
  import Hero from './components/sections/Hero.svelte';
  import Construction from './components/sections/Construction.svelte';
  import Work from './components/sections/Work.svelte';
  import Projects from './components/sections/Projects.svelte';
  import Blog from './components/sections/Blog.svelte';
  import LoadingScreen from '$lib/components/animations/LoadingScreen.svelte';
</script>

<LoadingScreen>
  <article>
    <Hero />
    <Work />
    <Projects />
    <Blog />
    <Construction />
  </article>
</LoadingScreen>
