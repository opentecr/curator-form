<script lang="ts">
    import { AppShell } from '@skeletonlabs/skeleton';
    import { AppBar } from '@skeletonlabs/skeleton';

    import '../app.pcss';
</script>

<AppShell>
    <svelte:fragment slot="pageHeader"
        ><AppBar><h1 class="h1">openTECR Curated Measurement Submission</h1></AppBar
        ></svelte:fragment
    >
    <slot />
</AppShell>
