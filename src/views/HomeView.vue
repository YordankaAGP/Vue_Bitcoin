<script setup lang="ts">
import { onMounted, reactive } from 'vue';

type TransactionType = {
  ['15m']: string
  last: string
  buy: string
  sell: string
  symbol: string
}

type DataType = { [k: string]: TransactionType }

const data: DataType = reactive({})

onMounted(async () => {
  const res = await fetch('https://blockchain.info/ticker');
  const resData = await res.json()

  Object.assign(data, resData)
})
</script>

<template>
  <main>
    <li class="table-head">
      <div>Mata Uang</div>
      <div>Harga Beli Bitcoin</div>
      <div>Harga Jual Bitcoin</div>
    </li>
    <li v-for="d in data" :key="d.symbol">
      <div>
        {{ d.symbol }}
      </div>
      <div>
        {{ d.buy }}
      </div>
      <div>
        {{ d.sell }}
      </div>
    </li>
  </main>
</template>

<style>
.table-head {
  background-color: lightgrey;
}

.table-head > div {
  font-size: 1.25rem;
  font-weight: bold;
}

li {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

li > div {
  border: 1px solid black;
  font-size: 1rem;
  padding: 0.75rem;
}
</style>