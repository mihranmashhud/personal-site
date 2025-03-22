<script>
  import WorkSummaryCard from '$lib/components/cards/WorkSummaryCard.svelte';
</script>

<section id="work-experience" class="p-4 py-20 bg-zinc-900">
  <h1 class="text-4xl font-bold mb-12 text-center">Work Experience</h1>
  <div class="flex justify-center">
    <div class="flex flex-col md:grid md:grid-cols-2 gap-6">
      <WorkSummaryCard
        href="work/ensoconnect"
        title="Full Stack Developer"
        start="Sep. 2023"
        end="Dec. 2023"
        stack={['python', 'react', 'typescript', 'aws', 'bitbucket', 'jira']}
      >
        {#snippet logo()}
          <div class="flex gap-4 items-center text-3xl h-20">
            <img src="/logos/ensoconnect.svg" alt="EnsoConnect Logo" class="h-14" />
          </div>
        {/snippet}
        text
      </WorkSummaryCard>

      <WorkSummaryCard
        href="work/iqc"
        title="Quantum Cybersec Developer"
        start="Sep. 2022"
        end="Dec. 2022"
        stack={['java', 'python', 'vue', 'github']}
      >
        {#snippet logo()}
          <div class="flex gap-4 items-center text-3xl -ml-6 h-20">
            <img src="/logos/uwaterloo.png" alt="University of Waterloo Logo" class="h-20" />
          </div>
        {/snippet}
        text
      </WorkSummaryCard>

      <WorkSummaryCard
        href="work/opentext"
        title="Full Stack Developer"
        start="Jan. 2022"
        end="Apr. 2022"
        stack={['java', 'spring', 'react', 'vue', 'postgresql', 'bitbucket', 'jira']}
      >
        {#snippet logo()}
          <div class="flex gap-4 items-center text-3xl py-2 h-20">
            <img src="/logos/opentext.svg" alt="OpenText Logo" class="h-10" />
          </div>
        {/snippet}
        First foray into working at a large coorporation. Also, Java. <i>gasp!</i> Things take a bit longer to get rolling but there is also a lot more projects to hop on. In fact, that's exactly what I did.
      </WorkSummaryCard>

      <WorkSummaryCard
        href="work/lynchpyn"
        title="Full Stack Developer"
        start="May 2021"
        end="Aug. 2021"
        stack={['typescript', 'react', 'materialui', 'rails', 'bitbucket']}
      >
        {#snippet logo()}
          <div class="flex gap-4 items-center text-3xl py-2">
            <img src="/logos/lynchpyn-white.webp" alt="LynchPyn Logo" class="h-16" />
          </div>
        {/snippet}
        Another startup experience, however, the scope was quite large.
        <i>This small company has how many products?</i> Time to upgrade my React game! Glad to say that
        my level of polish came through. Almost too well.
      </WorkSummaryCard>

      <WorkSummaryCard
        href="work/avante-io"
        title="Full Stack Developer"
        start="Sep. 2020"
        end="Dec. 2020"
        stack={['python', 'django', 'docker', 'postgresql', 'circleci', 'github']}
      >
        {#snippet logo()}
          <div class="flex gap-4 items-center text-3xl py-2 h-20">
            <img src="/logos/avante-io.svg" alt="Avante IO Logo" class="h-12" />
            <div class="headline font-medium">Avante IO</div>
          </div>
        {/snippet}
        First ever co-op and I'm already thrown into the deep end learning SQL and Django in the span
        of 3 days. Not to mention recent migration issues. Really had my work cut out for me.
      </WorkSummaryCard>
    </div>
  </div>
</section>
