<script lang="ts">
  import WorkSummary from './components/WorkSummary.svelte';
  import data from './data';
  import MetaTags from '$lib/components/MetaTags.svelte';
  import { scramblereveal } from '$lib/animate/attachments.svelte';

  const title = 'Work Experience';
</script>

<MetaTags {title} />

<article class="mx-auto max-w-4xl space-y-6 p-5">
  <h1 class="headline-gradient mx-auto mt-10 w-fit text-center text-4xl font-bold"
    {@attach scramblereveal()}
  >
    {title}
  </h1>

  <WorkSummary {...data.i3institute}>
    {#snippet logo()}
      <img src="/logos/i3-white.svg" alt="i3 Institute Logo" class="h-16 light:invert" />
    {/snippet}
    <!-- TODO: Replace below -->
    <p>
      As the Lead Web Developer at i3 Institute, I spearhead the development and maintenance of our
      web applications, ensuring they are robust, scalable, and user-friendly. I collaborate closely
      with cross-functional teams to deliver innovative solutions that meet our clients' needs.
    </p>
  </WorkSummary>

  <WorkSummary {...data.ensoconnect}>
    {#snippet logo()}
      <img src="/logos/ensoconnect.svg" alt="EnsoConnect Logo" class="h-12 light:invert" />
    {/snippet}
  </WorkSummary>

  <WorkSummary {...data.iqc}>
    {#snippet logo()}
      <div class="-mr-7 -mt-4">
        <img
          src="/logos/uwaterloo.png"
          alt="University of Waterloo Logo"
          class="h-20 light:invert"
        />
      </div>
    {/snippet}
  </WorkSummary>

  <WorkSummary {...data.opentext}>
    {#snippet logo()}
      <img src="/logos/opentext.svg" alt="OpenText Logo" class="h-8 light:invert" />
    {/snippet}
  </WorkSummary>

  <WorkSummary {...data.lynchpyn}>
    {#snippet logo()}
      <img src="/logos/lynchpyn-white.webp" alt="LynchPyn Logo" class="h-16 light:invert" />
    {/snippet}
  </WorkSummary>

  <WorkSummary {...data.avanteio}>
    {#snippet logo()}
      <div class="flex items-center gap-4 text-3xl">
        <img src="/logos/avante-io.svg" alt="Avante IO Logo" class="h-12 light:invert" />
        <div class="headline font-medium">Avante IO</div>
      </div>
    {/snippet}
  </WorkSummary>
</article>
