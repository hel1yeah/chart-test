import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';
import { getDataAxios } from '@/api/apiData.js';
import { RESPONSE_STATUS } from '@/common/constants.js';

export const useCryptocompareStore = defineStore('cryptocompare', () => {
  const data = reactive([]);
  const error = ref(false);
  const loader = ref(false);

  async function getData() {
    data.value = [];
    error.value = false;
    loader.value = true;
    try {
      const response = await getDataAxios();
      if (response.status === RESPONSE_STATUS[200] && response?.data?.Data) {
        data.value = response?.data?.Data;
        error.value = false;
        loader.value = false;
      }
    } catch (e) {
      data.value = [];
      error.value = e;
      loader.value = false;
    }
  }

  const getComputedData = computed(() => {
    return data.value;
  });

  return { getData, getComputedData };
});
