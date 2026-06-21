<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    stack,
    img_class,
    ...rest
  }: HTMLAttributes<HTMLUListElement> & {
    stack: string[];
    img_class?: string;
  } = $props();

  const labels: Record<string, string> = {
    android: 'Android',
    aws: 'AWS',
    bitbucket: 'BitBucket',
    circleci: 'CircleCI',
    cloudflare: 'Cloudflare',
    django: 'Django',
    docker: 'Docker',
    ec2: 'Amazon EC2',
    express: 'ExpressJS',
    github: 'GitHub',
    java: 'Java',
    jira: 'Jira',
    linear: 'Linear',
    linux: 'Linux',
    materialui: 'Material UI',
    nextjs: 'NextJS',
    postgresql: 'PostgreSQL',
    python: 'Python',
    rails: 'Ruby on Rails',
    react: 'React',
    spring: 'Spring Boot',
    supabase: 'Supabase',
    sveltekit: 'SvelteKit',
    svelte: 'Svelte',
    typescript: 'TypeScript',
    vue: 'VueJS'
  };

  const invert: Record<string, true> = {
    express: true,
    github: true,
    circleci: true,
    linear: true
  };

  const light_alternate: Record<string, true> = {
    aws: true,
    nextjs: true
  };

  const default_img_class =
    'mx-auto h-5 drop-shadow-sm drop-shadow-black/40 md:h-6 dark:drop-shadow-white/40';
</script>

<ul {...rest} class={['flex flex-wrap', rest?.class]} title="Tech Stack">
  {#each stack as icon}
    {@const label = labels[icon]}
    <li class="flex gap-4">
      <div class="flex gap-1">
        <img
          src="/tech-stack/{icon}.svg"
          class={[
            default_img_class,
            icon in invert && 'light:invert',
            icon in light_alternate && 'light:hidden',
            img_class
          ]}
          alt=""
          title={label}
          aria-hidden="true"
        />
        {#if icon in light_alternate}
          <img
            src="/tech-stack/{icon}-light.svg"
            alt=""
            class={[default_img_class, 'light:block hidden']}
            aria-hidden="true"
          />
        {/if}
        <p class="text-sm">{label}</p>
      </div>
    </li>
  {/each}
</ul>
