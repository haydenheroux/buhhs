<script lang="ts">
  import { addTreatment, createTreatment } from "$lib/schema";

    export let condition: string;

    let value: string = "";

    function add() {
      if (value.length > 0) {
        addTreatment(createTreatment(value, 0, condition));
      }
    }
</script>

<input type="text" bind:value />
<button on:click={add}>Add Treatment</button>