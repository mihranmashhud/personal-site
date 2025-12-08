<script>
  import { page } from '$app/state';
  import ProjectSummaryCard from '$lib/components/cards/ProjectSummaryCard.svelte';
</script>

<section id="projects" class="bg-zinc-50 dark:bg-zinc-950 p-4 py-20">
  <h1 class="mb-12 text-center text-4xl font-bold headline-gradient">Projects</h1>
  <div class="mx-auto flex max-w-4xl flex-col gap-6 md:grid md:grid-cols-2">
    <ProjectSummaryCard
      href="projects/personal-site"
      title="This Website"
      link={page.url.host}
      stack={['typescript', 'svelte', 'cloudflare']}
    ></ProjectSummaryCard>

    <ProjectSummaryCard
      href="projects/landsat"
      title="Landsat Tracker & Viewer"
      link="landsat-reflector.vercel.app"
      stack={['typescript', 'react', 'nextjs']}
    ></ProjectSummaryCard>
  </div>
</section>
