import axios from 'axios';

const BASE_URL = 'https://min-api.cryptocompare.com';

axios.defaults.baseURL = `${BASE_URL}/`;
axios.defaults.params;

export default axios;
