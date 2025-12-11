<script>
  import Hero from './components/sections/Hero.svelte';
  import Work from './components/sections/Work.svelte';
  import Projects from './components/sections/Projects.svelte';
  import Blog from './components/sections/Blog.svelte';
  import Contact from './components/sections/Contact.svelte';
  import MetaTags from '$lib/components/MetaTags.svelte';
</script>

<MetaTags title="Mihran Mashhud" titleTemplate="%s" />

<article>
  <Hero />
  <Work />
  <Projects />
  <Contact />
  <Blog />
</article>
