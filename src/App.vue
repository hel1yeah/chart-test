<template>
  <div class="container">
    <app-chart></app-chart>
    <app-table :data="store.getComputedData"></app-table>
  </div>
</template>

<script setup>
import AppTable from './components/AppTable.vue';
import { useCryptocompareStore } from './stores/cryptocompare.js';
import AppChart from '@/components/AppChart.vue';
const store = useCryptocompareStore();
store.getData();
</script>

<style scoped></style>