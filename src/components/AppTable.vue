<template>
  <div class="app-table__wrapper">
    <table class="app-table">
      <thead>
        <app-table-head
          v-for="(th, idx) in headData"
          :key="`${idx}${th}`"
          :class="[{ left: th === 'price' }]"
        >
          <span>{{ th }}</span>
        </app-table-head>
      </thead>
      <tbody>
        <app-table-row v-for="(tr, idx) in props.data" :key="`${idx}${tr}`">
          <app-table-column :class="[{ left: tr?.CoinInfo?.Name }]">
            <img
              class="app-table-column__img"
              :src="`https://www.cryptocompare.com/${tr?.CoinInfo.ImageUrl}`"
              :alt="tr?.CoinInfo?.Name"
            />
            <span>{{ tr?.CoinInfo?.Name }}</span>
          </app-table-column>
          <app-table-column>
            <span>{{ tr?.RAW?.USD?.PRICE }}</span>
          </app-table-column>
          <app-table-column>
            <span>{{ tr?.DISPLAY?.USD?.CHANGE24HOUR }}</span>
          </app-table-column>
        </app-table-row>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import AppTableHead from '@/components/AppTableHead.vue';
import AppTableRow from '@/components/AppTableRow.vue';
import AppTableColumn from '@/components/AppTableColumn.vue';
import { ref, reactive, onMounted } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const headData = ref(['name', 'price', '24 H Change']);
</script>

<style scoped lang="scss">
.app-table {
  width: 100%;
  max-width: 800px;

  &__wrapper {
    height: 465px;
    position: relative;
    overflow: auto;
    width: 100%;
    max-width: 800px;
  }
  &-column__img {
    width: 24px;
    height: 24px;
  }
}
</style>
