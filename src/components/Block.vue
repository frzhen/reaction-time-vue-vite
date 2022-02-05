<template>
  <div class="card block bg-light text-center mx-auto my-5 shadow" >
    <div class="card-body p-0">
      <div class="card-header mb-3">
        click me
      </div>
      <div class="card-title">
        click me
      </div>
      <div class="card-text p-2 m-1">
        click me
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['delay']
}
</script>

<style>
  .block {
    max-width: 25rem;
    /* border-radius: 20px;
    background: #0faf87;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto; */
  }
</style>