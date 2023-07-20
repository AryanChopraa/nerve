<script>
  import { companiesStore } from "./Store";
  import { IsOpen } from "./IsOpen";

  let companyName = "";
  let companyDescription = "";
  let companyExperience = 0;
  let carModels = [];

  const handleClose = () => {
    IsOpen.set(false);
  };

  const editStore = () => {
    companiesStore.update((currentCompanies) => {
      const newCompany = {
        id: currentCompanies.length + 1,
        name: companyName,
        description: companyDescription,
        experience: companyExperience,
        cars: carModels,
      };
      return [...currentCompanies, newCompany];
    });
  };
</script>

<form
  on:submit|preventDefault={editStore}
  class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
>
  <div class="p-10 bg-white">
    <div class="bg-white py-6 rounded-md px-10 max-w-lg shadow-md">
      <h1 class="text-center text-lg font-bold text-gray-500">
        Add new company
      </h1>

      <div class="space-y-4 mt-6">
        <div class="w-full">
          <input
            type="text"
            placeholder="Company name"
            class="px-4 py-2 bg-gray-50 rounded"
            bind:value={companyName}
          />
        </div>
        <div class="w-full">
          <input
            type="text"
            placeholder="Company description"
            class="px-4 py-2 bg-gray-50 rounded"
            bind:value={companyDescription}
          />
        </div>
        <div class="w-full">
          <input
            type="number"
            placeholder="Company experience"
            class="px-4 py-2 bg-gray-50 rounded"
            bind:value={companyExperience}
          />
        </div>
      </div>

      <div class="space-y-4 mt-6">
        {#each carModels as model, index}
          <div class="w-full" key={index}>
            <input
              type="text"
              placeholder={`Car model ${index + 1}`}
              class="px-4 py-2 bg-gray-50 rounded"
              bind:value={carModels[index]}
            />
          </div>
        {/each}
        <button
          type="button"
          class="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight"
          on:click={() => (carModels = [...carModels, ""])}
        >
          Add Car Model
        </button>
      </div>

      <button
        type="submit"
        class="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight"
      >
        Add
      </button>
      <button
        on:click={handleClose}
        type="button"
        class="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight"
      >
        Close
      </button>
    </div>
  </div>
</form>
