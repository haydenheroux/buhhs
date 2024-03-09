<script lang="ts">
  import UserAdder from "$lib/components/UserAdder.svelte";
import Card from "$lib/components/Card.svelte";
  import { addTreatment, createTreatment, storedUser, type User } from "$lib/schema";

  let user: User = storedUser.get();

  let conditions = user.treatments.map(treatment => treatment.condition).reduce((a: string[], c: string) => {
    if (!a.includes(c)) {
      a.push(c);
    }

    return a;
  }, []);

  function getTreatmentsByCondition(condition: string) {
    return user.treatments.filter(treatment => treatment.condition == condition);
  }
</script>

<h1>Offices of Dr. Jane Doe</h1>

<h2>Your Patients</h2>
<Card>
  <div>
    <h1>{user.name}</h1>
    <ul>
    {#each conditions as condition}
      <li>{condition}</li>
      <ul>
        {#each getTreatmentsByCondition(condition) as treatment}
          <li>{treatment.name}</li>
        {/each}
      <li><UserAdder {condition} /></li>
      </ul>
    {/each}
    </ul>
  </div>
</Card>

