<script>
  import Card from "./Card.svelte";
  import { onMount } from "svelte";
  import AddCompany from "./Add.svelte";
  import { companiesStore } from "./Store";
  import { IsOpen } from "./IsOpen";
  import { SelectedCardStore } from "./SelectedCardStore";
  import { Collapsible } from "./Collapsible";

  let companies = [];
  let filteredCompanies = [];
  companiesStore.subscribe((value) => {
    companies = Object.values(value);
    filteredCompanies = companies;
  });

  let isOpen;
  IsOpen.subscribe((value) => {
    isOpen = value;
  });

  let searchTerm = "";

  function updateFilteredCompanies() {
    if (searchTerm === "") {
      filteredCompanies = companies;
    } else {
      filteredCompanies = companies.filter((company) =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  let addNewCompany = () => {
    IsOpen.set(true);
  };

  function selectCard(index) {
    SelectedCardStore.set(index);
  }

  let isFilterModalOpen = false;
  let experienceFilter = 0;

  function openFilterModal() {
    isFilterModalOpen = true;
  }

  function closeFilterModal() {
    isFilterModalOpen = false;
  }

  function applyExperienceFilter() {
    filteredCompanies = companies.filter(
      (company) => company.experience >= experienceFilter
    );
    closeFilterModal();
  }
</script>

<div class="flex flex-col gap-4 p-4 bg-white">
  <button class="" on:click={() => Collapsible.update((state) => !state)}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="50"
      height="50"
      viewBox="0 0 50 50"
    >
      <path
        d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
      />
    </svg>
  </button>

  <button class="relative inline-block text-lg group" on:click={addNewCompany}>
    <span
      class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-gray-"
    >
      <span
        class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"
      />
      <span class="relative">Add </span>
    </span>
    <span
      class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
      data-rounded="rounded-lg"
    />
  </button>

  <div class="flex">
    <div
      class="flex items-center bg-gray-100 px-4 py-2 rounded-md space-x-3 w-96"
    >
      <input
        type="text"
        placeholder="Search Company"
        class="bg-gray-100 outline-none w-full"
        bind:value={searchTerm}
      />
      <button on:click={updateFilteredCompanies}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAfBJREFUaEPtmWFOBDEIhdmTqSfTPZl6Mg3JkjQEWh7Q3Zlk5s+q6VA+eNAt3ujkz+3k/tMF8OoMVjPwTkSfAwT/zs/P4/P38fm1CzQL8E1E4mzUtzsRtYOgAOzAGPGo8+O6VhAEIBN1D5Al9pGh1+9EAETnlmRE6xzVUfu8VtbPMsYQYiPFEwH4Myzzpux0dHNPeuVMrAAs2VQ2tUAq9qYHmbVZRwG22p1lQEunw3lRo5XZlRrMGvFesqKU2mBSmRoiJSXPqZ3RFybuUgwxPnCQrBeeEX1PSnBbjQB0al8rqiwjC0Ab3QmgZQTXQQQATitwpG4B0AUMFxYAwEtL+1nOlQyCzm8B0DXwTAkxEJTxV9eAbtlbihg2CshIA8Adz8pAuTMAAOUTP/pVYkcdtJz4HkD5hAxkoRz9VcXrDTproSX6K4DWi8eQkVa7q55rXTzgTjE47002Vn64ioy86G2KgMwmG+wcYgu+QFgXj9HIOFKRKYUeqUSmeCmISAZm99hAszGXMKgFBUMgAOxJ52jRswVBoAASzgyINQwrQ2QBRhD++e3xBz1elwKdTfBKEFWAbA3o99IQRwGY1de0Jo4EMINwv0weDcCCOFUGdJdbttQjZkAguKMt//9wZIBQh7sAQmHauOjKwMbghkyfPgP/ceZ8MX3RV60AAAAASUVORK5CYII="
          alt="srch"
        />
      </button>
    </div>
    <button class="ml-2" on:click={() => openFilterModal()}>
      <img
        class="w-8 h-8"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAXRJREFUaEPtmWEOwiAMhbub6cnUk+nNNDVuWUihLW0HM+WPicz2fTwoMBc4eVtOrh8SYLSD6cCMDlwA4AYA+DmyvQDgAQD4WW3UFHpOIH4VjOKvWoD3yGEncjfXKdX5dwBHV6pyAM0OJIByTbk7gKXsrhTR+zjmwRK+b+opRJXRIyAo8Wxeig43MIQoGxusd9h/Dpcjj+FwD1BvZPhDajTw+wgIU67W/DIFFrphzsGVSHOCBohLbA4gajq5iEdxEgBvCDfxGgAvCFfxWgArhLv4HoBeiBDxvQAtCGrjCRNvAahBUDeo0KOJtArVyrnk8FWeLl13cysAgnHHX65fuGnTjyVAOmCaQPKjRCsNN8e5fhNCroFcA6YJlGvgO3zcIuX6TR5ELOLy8j89QOt1PJ57VC+qtHZ4OFB7j1TT4pFzi+0ZrHbuL0E8c4ov9RpnOZDpAVbYGshpAEoQ0Z92GqutV0ptrpDnXe0MUcgETYARo77P+QGNkGMxnkjcPwAAAABJRU5ErkJggg=="
        alt="filter"
      />
    </button>
  </div>

  {#each filteredCompanies as company, i}
    <button m-4 on:click={() => selectCard(company.id)} class="">
      <Card {company} />
    </button>
  {/each}
</div>

{#if isOpen}
  <AddCompany />
{/if}

{#if isFilterModalOpen}
  <div
    class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
  >
    <div class="bg-white p-6 rounded-md w-96">
      <h3 class="text-xl font-semibold mb-4">Filter by Experience</h3>
      <input
        type="range"
        min="0"
        max="10"
        step="1"
        class="w-full"
        bind:value={experienceFilter}
      />
      <p class="text-center">{experienceFilter}</p>
      <div class="text-right mt-4">
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded-md"
          on:click={() => applyExperienceFilter()}
        >
          Apply
        </button>
        <button
          class="px-4 py-2 ml-2 bg-gray-300 rounded-md"
          on:click={() => closeFilterModal()}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
{/if}
