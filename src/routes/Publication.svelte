<script lang="ts">
    import { Step } from '@skeletonlabs/skeleton';

    import logo from '$lib/assets/icons/DOI_logo.svg';

    export let lockedState: boolean = true;
</script>

<Step locked={lockedState}>
    <svelte:fragment slot="header">Publication</svelte:fragment>
    <label class="label">
        <span
            >DOI <img
                alt="The colored digital object identifier (DOI) logo."
                src={logo}
                class="orcid-logo"
            /></span
        >
        <input class="input" type="text" />
    </label>
</Step>
