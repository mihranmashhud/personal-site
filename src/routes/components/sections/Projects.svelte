<script>
  import { page } from '$app/state';
  import ProjectSummaryCard from '$lib/components/cards/ProjectSummaryCard.svelte';
</script>

<section id="projects" class="p-4 py-20 bg-zinc-950">
  <h1 class="text-4xl font-bold mb-12 text-center">Projects</h1>
  <div class="flex justify-center">
    <div class="flex flex-col md:grid md:grid-cols-2 gap-6">
      <ProjectSummaryCard
        href="projects/personal-site"
        title="This website"
        link={page.url.host}
        stack={['typescript', 'svelte', 'cloudflare']}
      >
      </ProjectSummaryCard>

      <ProjectSummaryCard
        href="projects/landsat"
        title="Landsat Tracker & Viewer"
        link="landsat-reflector.vercel.app"
        stack={['typescript', 'react', 'nextjs']}
      >
      </ProjectSummaryCard>
    </div>
  </div>
</section>
