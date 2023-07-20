<script>
  export let company;
</script>

<div
  class="max-w-sm mx-auto bg-white overflow-hidden transition duration-500 ease-in-out transform rounded-lg shadow-2xl hover:shadow-black"
>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{company.name}</div>
    <p class="text-gray-700 text-l font-semibold mb-2">
      Experience :{company.experience}
    </p>
    <p class="text-gray-700 text-base">{company.description}</p>
  </div>
</div>

<style>
</style>
