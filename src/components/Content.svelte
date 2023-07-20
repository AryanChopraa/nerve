<script>
  import { onMount } from "svelte";
  import { companiesStore } from "./Store";
  import { SelectedCardStore } from "./SelectedCardStore";

  let companies = [];
  let CardIndex;
  let companyCars = [];
  let searchTerm = "";
  let filteredCompanyCars = [];

  const updateCompanyCars = () => {
    if (CardIndex !== undefined && companies[CardIndex - 1]) {
      companyCars = companies[CardIndex - 1].cars;
      updateFilteredCompanyCars(); // Whenever company cars are updated, filter them based on the search term
    }
  };

  const updateFilteredCompanyCars = () => {
    if (searchTerm === "") {
      filteredCompanyCars = companyCars;
    } else {
      filteredCompanyCars = companyCars.filter((car) =>
        car.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  };

  onMount(() => {
    companiesStore.subscribe((value) => {
      companies = Object.values(value);
    });

    SelectedCardStore.subscribe((value) => {
      CardIndex = value;
      updateCompanyCars();
    });
  });

  // Update filtered cars when search term changes
  $: updateFilteredCompanyCars();
</script>

<main class="min-h-screen w-full bg-white border-l">
  <nav class="flex items-center justify-between px-10 bg-white py-6 border-b">
    <div
      class="flex items-center bg-gray-100 px-4 py-2 rounded-md space-x-3 w-96"
    >
      <input
        type="text"
        placeholder="Search Model"
        class="bg-gray-100 outline-none w-full"
        bind:value={searchTerm}
      />
      <button on:click={updateFilteredCompanyCars}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAfBJREFUaEPtmWFOBDEIhdmTqSfTPZl6Mg3JkjQEWh7Q3Zlk5s+q6VA+eNAt3ujkz+3k/tMF8OoMVjPwTkSfAwT/zs/P4/P38fm1CzQL8E1E4mzUtzsRtYOgAOzAGPGo8+O6VhAEIBN1D5Al9pGh1+9EAETnlmRE6xzVUfu8VtbPMsYQYiPFEwH4Myzzpux0dHNPeuVMrAAs2VQ2tUAq9qYHmbVZRwG22p1lQEunw3lRo5XZlRrMGvFesqKU2mBSmRoiJSXPqZ3RFybuUgwxPnCQrBeeEX1PSnBbjQB0al8rqiwjC0Ab3QmgZQTXQQQATitwpG4B0AUMFxYAwEtL+1nOlQyCzm8B0DXwTAkxEJTxV9eAbtlbihg2CshIA8Adz8pAuTMAAOUTP/pVYkcdtJz4HkD5hAxkoRz9VcXrDTproSX6K4DWi8eQkVa7q55rXTzgTjE47002Vn64ioy86G2KgMwmG+wcYgu+QFgXj9HIOFKRKYUeqUSmeCmISAZm99hAszGXMKgFBUMgAOxJ52jRswVBoAASzgyINQwrQ2QBRhD++e3xBz1elwKdTfBKEFWAbA3o99IQRwGY1de0Jo4EMINwv0weDcCCOFUGdJdbttQjZkAguKMt//9wZIBQh7sAQmHauOjKwMbghkyfPgP/ceZ8MX3RV60AAAAASUVORK5CYII="
          alt="srch"
        />
      </button>
    </div>
  </nav>
  <div class="mx-6">
    <h1 class="my-6 text-3xl">
      {#if CardIndex !== undefined && companies[CardIndex - 1]}
        {companies[CardIndex - 1].name}
      {/if}
    </h1>
    <div class="md:flex space-y-3 md:space-y-0 md:space-x-4 mt-6">
      {#if CardIndex !== undefined && companies[CardIndex - 1]}
        <div
          class="h-90 bg-gradient-to-br from-gray-900 to-gray-600 rounded-lg p-10"
        >
          <p class="text-3xl font-thin text-indigo-50 cursor-pointer">
            {companies[CardIndex - 1].description}
          </p>
          <div class="flex items-center mt-4 space-x-4">
            <div>
              <h3 class="text-indigo-50 font-semibold cursor-pointer">
                Experience: {companies[CardIndex - 1].experience}
              </h3>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
  <div
    class="flex items-start justify-center min-h-screen pt-5 bg-white min-w-screen"
  >
    <div class="flex flex-wrap w-full px-4">
      {#if filteredCompanyCars.length > 0}
        {#each filteredCompanyCars as car}
          <div class="w-full px-2 mt-10 xl:w-1/3">
            <div
              class="flex items-center px-8 py-6 overflow-hidden rounded-md shadow-sm bg-gradient-to-br from-gray-100 to-gray-200"
            >
              <div class="mx-5">
                <h4 class="text-2xl font-semibold text-gray-700">{car}</h4>
              </div>
            </div>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</main>
