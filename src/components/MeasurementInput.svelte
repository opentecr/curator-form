<script lang="ts">
    import MeasurementParameterInput from './MeasurementParameterInput.svelte';
    import ConfidenceRangeInput from './ConfidenceRangeInput.svelte';

    export let label: string;
    export let hasFreeUnit: boolean = false;
    export let choices: string[] = [];
</script>

<fieldset class="flex flex-row gap-x-4">
    <legend>{label}</legend>
    <MeasurementParameterInput {hasFreeUnit} {choices} />
    <ConfidenceRangeInput />
</fieldset>
