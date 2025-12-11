<script>
  import { page } from '$app/state';
  import ProjectSummaryCard from '$lib/components/cards/ProjectSummaryCard.svelte';
</script>

<section id="projects" class="bg-zinc-50 px-4 py-20 dark:bg-zinc-950">
  <h1 class="headline-gradient mx-auto mb-12 w-fit text-4xl font-bold">Projects</h1>
  <div class="mx-auto flex max-w-4xl flex-col gap-6 md:grid md:grid-cols-2">
    <ProjectSummaryCard
      href="https://github.com/mihranmashhud/personal-site"
      title="This Website"
      link={page.url.host}
      stack={['typescript', 'svelte', 'cloudflare']}
    ></ProjectSummaryCard>

    <ProjectSummaryCard
      href="https://github.com/mihranmashhud/nasa-space-apps-challenge-2024"
      title="Landsat Tracker & Viewer"
      link="landsat-reflector.vercel.app"
      stack={['typescript', 'react', 'nextjs']}
    ></ProjectSummaryCard>
  </div>
</section>
