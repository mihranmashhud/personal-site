<script>
  import WorkSummaryCard from '$lib/components/cards/WorkSummaryCard.svelte';
  import data from '../../work/data';
</script>

<section id="work-experience" class="bg-zinc-200 p-4 py-20 dark:bg-zinc-900">
  <h1 class="headline-gradient mx-auto mb-12 w-fit text-4xl font-bold">Work Experience</h1>
  <div class="mx-auto flex max-w-4xl flex-col gap-6 md:grid md:grid-cols-2">
    <WorkSummaryCard href="/work#{data.i3institute.id}" {...data.i3institute}>
      {#snippet logo(id, send, receive)}
        <div class="flex h-20 items-center gap-4 text-3xl">
          <img
            src="/logos/i3-white.svg"
            alt="i3 Institute Logo"
            class="h-20 not-dark:invert"
            out:send={{ key: id + '-logo' }}
            in:receive={{ key: id + '-logo' }}
          />
        </div>
      {/snippet}
    </WorkSummaryCard>

    <WorkSummaryCard href="/work#{data.ensoconnect.id}" {...data.ensoconnect}>
      {#snippet logo(id, send, receive)}
        <div class="flex h-20 items-center gap-4 text-3xl">
          <img
            src="/logos/ensoconnect.svg"
            alt="EnsoConnect Logo"
            class="h-14 not-dark:invert"
            out:send={{ key: id + '-logo' }}
            in:receive={{ key: id + '-logo' }}
          />
        </div>
      {/snippet}
    </WorkSummaryCard>

    <WorkSummaryCard href="/work#{data.iqc.id}" {...data.iqc}>
      {#snippet logo(id, send, receive)}
        <div class="-ml-6 flex h-20 items-center gap-4 text-3xl">
          <img
            src="/logos/uwaterloo.png"
            alt="University of Waterloo Logo"
            class="h-20 not-dark:invert"
            out:send={{ key: id + '-logo' }}
            in:receive={{ key: id + '-logo' }}
          />
        </div>
      {/snippet}
    </WorkSummaryCard>

    <WorkSummaryCard href="/work#{data.opentext.id}" {...data.opentext}>
      {#snippet logo(id, send, receive)}
        <div class="flex h-20 items-center gap-4 py-2 text-3xl">
          <img src="/logos/opentext.svg" alt="OpenText Logo" class="h-10 not-dark:invert" />
        </div>
      {/snippet}
    </WorkSummaryCard>

    <WorkSummaryCard href="/work#{data.lynchpyn.id}" {...data.lynchpyn}>
      {#snippet logo(id, send, receive)}
        <div class="flex items-center gap-4 py-2 text-3xl">
          <img
            src="/logos/lynchpyn-white.webp"
            alt="LynchPyn Logo"
            class="h-16 not-dark:invert"
            out:send={{ key: id + '-logo' }}
            in:receive={{ key: id + '-logo' }}
          />
        </div>
      {/snippet}
    </WorkSummaryCard>

    <WorkSummaryCard href="/work#{data.avanteio.id}" {...data.avanteio}>
      {#snippet logo(id, send, receive)}
        <div
          class="flex h-20 items-center gap-4 py-2 text-3xl"
          out:send={{ key: id + '-logo' }}
          in:receive={{ key: id + '-logo' }}
        >
          <img src="/logos/avante-io.svg" alt="Avante IO Logo" class="h-12 not-dark:invert" />
          <div class="headline font-medium">Avante IO</div>
        </div>
      {/snippet}
    </WorkSummaryCard>
  </div>
</section>
