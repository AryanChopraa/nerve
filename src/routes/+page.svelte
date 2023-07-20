<script>
  import Sidebar from "../components/Sidebar.svelte";
  import Content from "../components/Content.svelte";
  import { Collapsible } from "../components/Collapsible";
</script>

<div class="flex">
  {#if $Collapsible}
    <Sidebar />
  {/if}
  {#if !$Collapsible}
    <button
      on:click={() => Collapsible.update((state) => !state)}
      class="bg-gray-100 flex items-start p-10"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30"
        height="30"
        viewBox="0 0 30 30"
      >
        <path
          d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"
        />
      </svg></button
    >
  {/if}
  <Content />
</div>
