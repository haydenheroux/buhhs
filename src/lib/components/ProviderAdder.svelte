<script lang="ts">
  import { addTreatmentToProvider } from "$lib/schema";

    export let providerName: string;

    let value: string = "";

    function add() {
      if (value.length > 0) {
        addTreatmentToProvider(providerName, value);
      }
    }
</script>

<input type="text" bind:value />
<button on:click={add}>Add Treatment</button>