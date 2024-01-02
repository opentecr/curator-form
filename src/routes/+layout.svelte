<script lang="ts">
    import { AppShell } from '@skeletonlabs/skeleton';
    import { AppBar } from '@skeletonlabs/skeleton';

    import '../app.pcss';
</script>

<AppShell>
    <svelte:fragment slot="header">
        <AppBar gridColumns="grid-cols-1" slotDefault="place-self-center">
            <h1 class="h1">openTECR Curated Measurement Submission</h1>
        </AppBar>
    </svelte:fragment>
    <div class="w-full flex justify-center">
        <slot />
    </div>
</AppShell>
