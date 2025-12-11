<script lang="ts">
  import { onNavigate } from '$app/navigation';

  // View transitions
  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<style>
  :global(header > nav) {
    view-transition-name: nav;
  }
</style>
