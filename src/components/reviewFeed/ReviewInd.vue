<template>
  <div v-if="review" class="review-feed">
    <p class="has-text-primary">"{{ review.review | textLimit(180) }}"</p>
    <p class="has-text-primary">{{ review.client }}</p>
    <p class="has-text-primary">{{ review.staff }}</p>
  </div>
</template>

<script>
export default {
  props: ['review']
}
</script>
