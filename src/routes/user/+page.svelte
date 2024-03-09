<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import { addTreatment, createTreatment, hasTreatment, findProvidersWithTreatment, storedUser, addProvider, createProvider, hasProvider, type User } from "$lib/schema";

  let user: User = storedUser.get();

  if (!hasTreatment("Ventolin")) {
    addTreatment(createTreatment("Ventolin", 0.1, "Chronic Obstructive Pulmonary Disease"));
  }

  if (!hasTreatment("Brovana")) {
    addTreatment(createTreatment("Brovana", 0.1, "Chronic Obstructive Pulmonary Disease"));
  }

  if (!hasTreatment("Pulmicort Flexhaler")) {
    addTreatment(createTreatment("Pulmicort Flexhaler", 0.1, "Asthma"));
  }

  if (!hasTreatment("COVID-19 Screening")) {
    addTreatment(createTreatment("COVID-19 Screening", 0.1, "Coronavirus"));
  }

  if (!hasProvider("CVS Boston")) {
    let cvs = createProvider("CVS Boston", "900 Commonwealth Ave.");

    cvs.treatmentNames = ["Brovana", "Ventolin", "COVID-19 Screening"];

    addProvider(cvs);
  }

  if (!hasProvider("Stop & Shop Pharmacy")) {
    let ss = createProvider("Stop & Shop Pharmacy", "1620 Tremont St.");

    ss.treatmentNames = ["Pulmicort Flexhaler", "COVID-19 Screening"];

    addProvider(ss);
  }
</script>

<h1>Hi, {user.name}!</h1>

<h2>Your Treatments</h2>
{#each user.treatments as treatment }
   <Card>
    <div>
      <h1>{treatment.name} ({treatment.condition})</h1>
      <ul>
        {#each findProvidersWithTreatment(treatment) as provider}
          <li>Get {treatment.name} at {provider.name} ({provider.location})</li>
        {/each}
      </ul>
    </div>
   </Card>
{/each}