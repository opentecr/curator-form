<script lang="ts">
    import MeasurementParameterInput from './MeasurementParameterInput.svelte';
    import ConfidenceRangeInput from './ConfidenceRangeInput.svelte';
    import { type IScalarMeasurement } from '$lib/types';

    export let label: string;
    export let hasFreeUnit: boolean = false;
    export let choices: string[] = [];
    export const measurement: IScalarMeasurement = {};
    let value: number;
    let unit: string;
    let confidence: number;

    $: {
        measurement.value = value;
    }
    $: {
        measurement.unit = unit;
    }
    $: {
        measurement.confidence = confidence;
    }
</script>

<fieldset class="flex flex-row gap-x-4">
    <legend>{label}</legend>
    <MeasurementParameterInput bind:value bind:unit {hasFreeUnit} {choices} />
    <ConfidenceRangeInput bind:value={confidence} />
</fieldset>
