<script lang="ts">
    export let value: number = 2;

    const min = 1;
    const max = 3;
    const range = {
        1: 'Uncertain',
        2: 'Somewhat Confident',
        3: 'Highly Confident'
    };
</script>

<div class="w-40">
    <label class="label">
        <span>{range[value]}</span>
        <input type="range" bind:value {min} {max} class="inline-block" />
    </label>
</div>
