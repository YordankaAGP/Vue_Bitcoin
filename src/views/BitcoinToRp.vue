<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

  let usdRate = 0
  const text = ref('0')
  const bitcoin = computed(() => parseInt(text.value))
  const rupiah = computed(() => bitcoin.value * usdRate * 14000)

  onMounted(async() => {
    const res = await fetch('https://blockchain.info/ticker');
    const resData = await res.json()
    usdRate = resData.USD.last
  })
</script>

<template>
  <div class="btr">
    <h1>Konversi Bitcoin ke Rupiah</h1>
    <h2>Kurs 1 USD = 14000 IDR</h2>
    <input v-model="text">
    <h2>BTC {{ bitcoin }} = Rp {{ rupiah }}</h2>
  </div>
</template>

<style>
  .btr {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  input {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid black;
  }
</style>