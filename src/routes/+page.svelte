<script>
  import Hero from './components/sections/Hero.svelte';
  import Construction from './components/sections/Construction.svelte';
  import Work from './components/sections/Work.svelte';
  import Projects from './components/sections/Projects.svelte';
  import Blog from './components/sections/Blog.svelte';
  import LoadingScreen from '$lib/components/animations/LoadingScreen.svelte';
  import Contact from './components/sections/Contact.svelte';
  import MetaTags from '$lib/components/MetaTags.svelte';
</script>

<MetaTags title="Mihran Mashhud" titleTemplate="%s" />

<LoadingScreen>
  <article>
    <Hero />
    <Work />
    <Projects />
    <Contact />
    <Blog />
  </article>
</LoadingScreen>
