<script lang="ts">
    import { Step } from '@skeletonlabs/skeleton';

    import { currentCuratedMeasurement } from '$lib/stores';
    import { NotFoundError } from '$lib/errors';
    import { OrcidService } from '$lib/orcidService';
    import logoBW from '$lib/assets/icons/ORCIDiD_iconbwvector.svg';

    import Card from '$components/Card.svelte';

    export let lockedState: boolean = true;
    export let denyCustomName: boolean = true;

    let orcid: string = '';
    let name: string = '';
    let isValid: boolean = false;
    let symbol: string = '';
    let timer: ReturnType<typeof setTimeout>;
    const orcidPattern: RegExp = /^\d{4}(-\d{4}){3}$/;

    function getOrcidName() {
        OrcidService.getRecordName(orcid)
            .then((value: string) => {
                name = value;
                symbol = '&#10004;'; // check mark
            })
            .catch((error: Error) => {
                console.debug(error.message);
                if (denyCustomName) {
                    name = '';
                }
                if (error instanceof NotFoundError) {
                    symbol = '&#10060;'; // cross
                } else {
                    symbol = '';
                }
            });
    }

    function debounceRequest() {
        symbol = '&#9203;'; // hourglass
        clearTimeout(timer);
        timer = setTimeout(getOrcidName, 500);
    }

    $: if (orcid) {
        isValid = orcid.match(orcidPattern) !== null;
    }

    $: if (orcid && isValid) {
        debounceRequest();
        currentCuratedMeasurement.update((current) => {
            return {
                ...current,
                contributor: { orcid, name }
            };
        });
    }
</script>

<Step locked={lockedState}>
    <svelte:fragment slot="header">Personal Info</svelte:fragment>
    <Card>
        <label class="label">
            <span
                >ORCID <img
                    alt="The ORCID logo in black and white."
                    src={logoBW}
                    class="orcid-logo"
                /></span
            >
            <input
                type="text"
                placeholder="0000-0000-0000-0000"
                bind:value={orcid}
                class="input"
                class:input-success={orcid && isValid}
                class:input-error={orcid && !isValid}
            />
            <span>
                {@html symbol}
            </span>
        </label>
        <label class="label">
            <span>Name</span>
            <input
                class="input"
                type="text"
                bind:value={name}
                readonly={denyCustomName}
            />
        </label>
    </Card>
</Step>
