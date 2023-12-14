<script lang="ts">
    export let value: number = 3;
    const min = 1;
    const max = 5;
</script>

<fieldset>
    <span>Uncertain</span>
    <input type="range" bind:value {min} {max} />
    <span>Highly Confident</span>
</fieldset>
