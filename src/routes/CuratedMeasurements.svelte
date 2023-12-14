<script lang="ts">
    import { Step } from '@skeletonlabs/skeleton';

    import ConfidenceRange from '$components/ConfidenceRange.svelte';

    export let lockedState: boolean = true;
</script>

<Step locked={lockedState}>
    <svelte:fragment slot="header">Curated Measurements</svelte:fragment>
    <fieldset class="border-solid border-2 border-primary-700">
        <legend>Measurement</legend>
        <fieldset>
            <label class="label">
                <span>Equilibrium Constant</span>
                <input class="input" type="number" placeholder="" />
                <ConfidenceRange />
            </label>
        </fieldset>
        <fieldset>
            <label class="label">
                <span>Hydrogen Potential (pH)</span>
                <input class="input" type="number" placeholder="" />
                <ConfidenceRange />
            </label>
        </fieldset>
        <fieldset>
            <label class="label">
                <span>Magnesium Potential (pMg)</span>
                <input class="input" type="number" placeholder="" />
                <ConfidenceRange />
            </label>
        </fieldset>
        <fieldset>
            <label class="label">
                <span>Temperature</span>
                <input class="input" type="number" placeholder="" />
                <input class="input" type="text" placeholder="K" />
                <ConfidenceRange />
            </label>
        </fieldset>
        <fieldset>
            <label class="label">
                <span>Ionic Strength</span>
                <input class="input" type="number" placeholder="" />
                <input class="input" type="text" placeholder="Unit" />
                <ConfidenceRange />
            </label>
        </fieldset>
    </fieldset>
</Step>
