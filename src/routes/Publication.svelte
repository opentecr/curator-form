<script lang="ts">
    import { Step } from '@skeletonlabs/skeleton';
    import { type Works } from '@jamesgopsill/crossref-client';

    import { CrossRefService } from '$lib/crossRefService';
    import logo from '$lib/assets/icons/DOI_logo.svg';

    import Card from '$components/Card.svelte';

    export let lockedState: boolean = true;

    let doi: string = '';
    let symbol: string = '';
    let timer: ReturnType<typeof setTimeout>;
    let publication: Works | null = null;

    const service = new CrossRefService();

    function getPublication() {
        service
            .getWork(doi)
            .then((work: Works) => {
                console.debug(work);
                publication = work;
                symbol = '&#10004;'; // check mark
            })
            .catch((error: Error) => {
                console.debug(error);
                publication = null;
                symbol = '&#10060;'; // cross
            });
        symbol = '';
    }

    function debounceRequest() {
        symbol = '&#9203;'; // hourglass
        clearTimeout(timer);
        timer = setTimeout(getPublication, 500);
    }

    $: if (doi) {
        debounceRequest();
    }
</script>

<Step locked={lockedState}>
    <svelte:fragment slot="header">Publication</svelte:fragment>
    <Card>
        <label class="label">
            <span
                >DOI <img
                    alt="The colored digital object identifier (DOI) logo."
                    src={logo}
                    class="orcid-logo"
                /></span
            >
            <input
                class="input"
                type="text"
                bind:value={doi}
                class:input-success={doi && publication}
                class:input-error={doi && !publication}
            />
            <span>
                {@html symbol}
            </span>
        </label>
        {#if publication}
            <label class="label">
                <span>Title</span>
                <input
                    class="input"
                    type="text"
                    bind:value={publication.title}
                    readonly
                />
            </label>
        {/if}
    </Card>
</Step>
