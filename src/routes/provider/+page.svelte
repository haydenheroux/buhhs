<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import ProviderAdder from "$lib/components/ProviderAdder.svelte";
  import { addTreatment, createTreatment, hasTreatment, findProvidersWithTreatment, storedUser, addProvider, createProvider, hasProvider, type User, storedProviders } from "$lib/schema";

  let providers = storedProviders.get();
</script>

{#each providers as provider}
<Card>
  <h1>{provider.name} ({provider.location})</h1>

  <h2>In-Stock Treatments</h2>

  <ul>
    {#each provider.treatmentNames as treatmentName}
      <li>{treatmentName}</li>
    {/each}
    <li><ProviderAdder providerName={provider.name} /></li>
  </ul>
</Card>
{/each}