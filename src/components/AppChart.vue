<template>
  <div class="wrapper">
    <VueApexCharts
      width="100%"
      type="line"
      :options="options"
      :series="series"
      class="graph"
    />
  </div>
</template>
<script setup>
import VueApexCharts from 'vue3-apexcharts';
import { ref, watch } from 'vue';

watch(
  () => props.data,
  () => setSeries()
);

watch(
  () => props.rain,
  () => setSeries()
);

const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
});

function setSeries() {
  series.value = [];
}

const options = ref({
  chart: {
    id: 'vuechart-example',
    foreColor: '#ffffff',
    height: '200px',
  },
  stroke: {
    curve: 'smooth',
    colors: ['#0ACEF9', '#8A0067FF'],
    width: 5,
  },
  grid: {
    borderColor: '#696969FF',
  },

  xaxis: {
    categories: props.times,
  },
  markers: {
    colors: ['#0ACEF9', '#8A0067FF'],
  },
  legend: {
    markers: {
      width: 15,
      height: 15,
      fillColors: ['#0ACEF9', '#8A0067FF'],
    },
  },
  yxaxis: {
    type: "datetime",
    categories: [
      "2019-01-01",
      "2019-02-01",
      "2019-03-01",
      "2019-04-01",
      "2019-05-01",
      "2019-06-01",
      "2019-07-01"
    ]
  },
});

let series = ref([
  {
    name: 'WebsiteHits',
    data: [15, 20, 21, 25, 60, 120, 93],
  },
]);
</script>

<style scoped>
.wrapper {
  max-width: 800px;
}
</style>
