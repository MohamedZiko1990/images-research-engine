import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID b3ff1dbb7ed9926c489a2280796c6a88f5b3f5722cfe8ad2355e532e71253d2f'
    }
})