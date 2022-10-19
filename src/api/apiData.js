import axios from '@/api/axios.js';

const getDataAxios = () => {
  const limit = 20;
  const tsym = 'USD';
  const api_key =
    '96b3cbe243ed487e78905885dd0ddb7084b2ee60ffb942ffa07ffb24cf8f70eb';
  return axios.get(
    `data/top/totaltoptiervolfull?limit=${limit}&tsym=${tsym}&api_key=${api_key}`
  );
};

export { getDataAxios };
