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

  const tooltip_labels: Record<string, string> = {
    android: 'Android',
    aws: 'Amazon Web Services',
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
    linux: 'Linux',
    materialui: 'Material UI',
    nextjs: 'NextJS',
    postgresql: 'PostgreSQL',
    python: 'Python',
    rails: 'Ruby on Rails',
    react: 'React',
    spring: 'Java Spring Boot',
    svelte: 'Svelte',
    sveltekit: 'SvelteKit',
    typescript: 'TypeScript',
    vue: 'VueJS'
  };

  const invert: Record<string, true> = {
    express: true,
    github: true,
    circleci: true,
    aws: true,
  }
</script>

<ul {...rest} class={['flex', rest?.class]} title="Tech Stack">
  {#each stack as icon}
    <li>
      <img
        src="/tech-stack/{icon}.svg"
        class={['h-5 md:h-6 drop-shadow-sm drop-shadow-black/40 dark:drop-shadow-white/40', 
          icon in invert && "light:invert",
          img_class]}
        alt=""
        title={tooltip_labels[icon]}
        aria-hidden="true"
      />
      <span class="sr-only">{tooltip_labels[icon]}</span>
    </li>
  {/each}
</ul>
