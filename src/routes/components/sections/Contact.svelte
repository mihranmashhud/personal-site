<script lang="ts">
  const contacts = [
    {
      href: 'https://github.com/mihranmashhud',
      text: 'github.com/mihranmashhud',
      name: 'Github',
      icon: 'github-line'
    },
    {
      href: 'https://linkedin.com/in/mihran-mashhud',
      text: 'linkedin.com/in/mihran-mashhud',
      name: 'LinkedIn',
      icon: 'linkedin-box-line'
    },
    {
      href: 'mailto:mihranmashhud@gmail.com',
      text: 'mihranmashhud@gmail.com',
      name: 'Email',
      icon: 'mail-send-line'
    }
  ];
</script>

<section id="contact" class="bg-zinc-100 px-4 py-20 dark:bg-zinc-900">
  <h2 class="headline-gradient mx-auto mb-12 w-fit text-4xl font-bold">Contact</h2>
  <div class="mx-auto max-w-fit space-y-3 text-xl">
    {#each contacts as { href, text, name, icon }}
      <p>
        <a {href}>
          <i class="ri-{icon}"></i>
          {name}: <span class="headline-gradient">{text}</span>
          <i class="ri-external-link-line"></i>
        </a>
      </p>
    {/each}
  </div>
</section>
