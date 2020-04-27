<script>
  import Child from "./Child.svelte";
  export let name = "Russell";

  function handleClick() {
    name = "Yeet";
  }
</script>

<style>
  h1 {
    text-align: center;
    font-size: 4em;
  }
</style>

<h1 on:click={handleClick}>Hello {name}!</h1>
<!-- <Child /> -->
