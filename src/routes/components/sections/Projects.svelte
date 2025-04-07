<script>
  import ProjectSummaryCard from '$lib/components/cards/ProjectSummaryCard.svelte';
</script>

<section id="projects" class="p-4 py-20 bg-zinc-950">
  <h1 class="text-4xl font-bold mb-12 text-center">Projects</h1>
  <div class="flex justify-center">
    <div class="flex flex-col md:grid md:grid-cols-2 gap-6">
      <ProjectSummaryCard
        key="projects/personal-site"
        title="This website"
        link="mihranmashhud.dev"
        stack={['typescript', 'svelte', 'cloudflare']}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        {#snippet story()}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        {/snippet}
      </ProjectSummaryCard>

      <ProjectSummaryCard
        key="projects/landsat"
        title="Landsat Tracker & Viewer"
        link="landsat-reflector.vercel.app"
        stack={['typescript', 'react', 'nextjs']}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        {#snippet story()}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        {/snippet}
      </ProjectSummaryCard>
    </div>
  </div>
</section>
