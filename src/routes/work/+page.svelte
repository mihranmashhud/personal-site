<script lang="ts">
  import WorkSummary from './components/WorkSummary.svelte';
  import data from './data';
  import MetaTags from '$lib/components/MetaTags.svelte';
  import { scramblereveal } from '$lib/animate/attachments.svelte';

  const title = 'Work Experience';
</script>

<MetaTags {title} />

<article class="mx-auto max-w-4xl space-y-6 p-5">
  <h1
    class="headline-gradient mx-auto mt-10 w-fit text-center text-4xl font-bold"
    {@attach scramblereveal()}
  >
    {title}
  </h1>

  <WorkSummary {...data.getgambit}>
    {#snippet logo()}{/snippet}
    <p><em>Work in progress... (literally!)</em></p>
  </WorkSummary>

  <WorkSummary {...data.i3institute}>
    {#snippet logo()}
      <img src="/logos/i3-white.svg" alt="i3 Institute Logo" class="light:invert h-16" />
    {/snippet}
    <p>
      I've actually been with i3 Institute for a while. My work on their website started when I got
      fed up with how dated the site looked. Did a large refactor of it to Svelte. Svelte was a
      great choice for this since it was originally written in mostly plain HTML. A few bash scripts
      and some manual refactoring later and all the pages were migrated. With that, we were able to
      remake the site page by page instead of having to rewrite the whole thing at once.
    </p>
    <p>
      The first and largest page I worked at the time was the donation page. Completely revamped the
      whole thing. Used Stripe directly and connected it to an ExpressJS backend. Tried integrating
      PayPal. <em>I now hate PayPal.</em>
    </p>
    <p>
      Later, after most of the site was migrated I ended taking on the whole project of building the
      signup and payment page for the Muslim Blueprint Program along with its associated
      automations. This was i3's first major paid program offering. While I was familiar using
      Stripe at this point, I quickly found that using it for doing two separate payment schemes was
      rather difficult. Especially since the monthly scheme was not a subscription but a monthly
      installment payment. Honestly, my first crack at it was less than stellar. But I reworked the
      whole payment process later on and worked rock steady ever since.
    </p>
  </WorkSummary>

  <WorkSummary {...data.ensoconnect}>
    {#snippet logo()}
      <img src="/logos/ensoconnect.svg" alt="EnsoConnect Logo" class="light:invert h-12" />
    {/snippet}
    <p>
      First time working in Toronto in office! Had a hybrid arrangement and although waking up so
      early was quite a pain, I did somewhat enjoy the commute to the office. Took the GO train over
      and would order a latte online while on the street car so by the time I arrived it was ready.
    </p>
    <p>
      Work involved solving bugs and developing new features for the Enso Connect app. The app was
      focused on being an all in one solution for integrating and operating multiple Property
      Management Services. Think AirBnb, Guestify, Lodgify, and many more. I quickly got a hold of
      things as this was also when I migrated to NixOS. Made setting up the local development
      environment a breeze to the point that I was up and ready in 2 days while previous developers
      took 2 weeks.
    </p>
  </WorkSummary>

  <WorkSummary {...data.iqc}>
    {#snippet logo()}
      <div class="-mt-4 -mr-7">
        <img
          src="/logos/uwaterloo.png"
          alt="University of Waterloo Logo"
          class="light:invert h-20"
        />
      </div>
    {/snippet}
    <p>
      A very different co-op than the previous, focused on a demonstration of quantum cryptography
      backed video conferencing. My work involved writing out a driver to simulate a satelite relay
      of generated keys. Also rewrote their dashboard using Vue for the hell of it.
    </p>
    <p>
      This job was where I got introduced to networking fundamentals. Learned the TLS protocol,
      cryptography, and dabbled into some quantum computing topics.
    </p>
  </WorkSummary>

  <WorkSummary {...data.opentext}>
    {#snippet logo()}
      <img src="/logos/opentext.svg" alt="OpenText Logo" class="light:invert h-8" />
    {/snippet}
    <p>
      The first BIG company I worked for. Was immediately obvious with the increased security,
      provided equipment, and the larger teams. Also, had to work in Java 11 and I have been hating
      on Java for quite a while. Despite that, I think Sprint Boot is a pretty cool framework for
      having the full batteries included experience. Though it is quite verbose.
    </p>
    <p>
      The backend wasn't the only thing I was working on. Since I kept up with new features in CSS I
      was able to provide a rather simple solution to an ongoing issue of not being able to support
      RTL in OpenText's styling package. One 300+ substitution later (vim substitutions made this so
      much easier) and OpenText CSS can now support RTL in both layout and prose.
    </p>
  </WorkSummary>

  <WorkSummary {...data.lynchpyn}>
    {#snippet logo()}
      <img src="/logos/lynchpyn-white.webp" alt="LynchPyn Logo" class="light:invert h-16" />
    {/snippet}
    <p>
      Now this was more in my wheelhouse. Learning frontend development was my main focus during
      high-school. Here I got to focus on that skill through realizing Adobe XD designs into pixel
      perfect implementations made in React. And I took this craft seriously, enough so that
      whatever I worked on had more polish than the rest of the application and kind of made it look
      bad. <em>Whoops...</em>
    </p>
  </WorkSummary>

  <WorkSummary {...data.avanteio}>
    {#snippet logo()}
      <div class="flex items-center gap-4 text-3xl">
        <img src="/logos/avante-io.svg" alt="Avante IO Logo" class="light:invert h-12" />
        <div class="headline font-medium">Avante IO</div>
      </div>
    {/snippet}
    <p>
      This was my first ever job. Was a good start. I was basically solo maintaining a Django
      backend with issues being handed to me by my senior developer supervisor. The app I was
      maintaining was a B2B app for tracking deliveries and shipments. It had a plethora of data so
      a lot of my work was using that data to improve the delivery path prediction algorithm.
    </p>
    <p>
      Funnily enough, this was also my first exposure to backend development, which surprised my
      supervisor immensely when I told him that near the end of the co-op term. His suprise was due
      to how unapparant my lack of knowledge was. Even though I learned SQL in about 3 days, and
      Django on the fly. Fortunately, my foray into learning web dev before this made me accustomed
      to reading docs and learning to trace through programs effectively.
    </p>
  </WorkSummary>
</article>
