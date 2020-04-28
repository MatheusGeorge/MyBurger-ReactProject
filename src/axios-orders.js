import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburgerreact-834ed.firebaseio.com/'
});

export default instance;