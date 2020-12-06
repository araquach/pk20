<template>
  <div class="section columns is-centered">
    <div class="section column is-8">
      <h1 class="title is-2">Your Stylists</h1>
      <p class="is-size-4">Here are the stylists that fit your budget</p>
      <ul>
        <li v-for="stylist in selectedStylists">
          {{ stylist.name }}
        </li>
      </ul>

      <p class="is-size-4">The total estimated cost is: {{ price | toCurrency }}</p>

      <p class="is-size-4">Are you happy with your selection or do you want to adapt your options?</p>
      <br><br>
      <button @click="" class="button is-primary">Change Choices</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>