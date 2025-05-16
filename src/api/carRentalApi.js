import axios from 'axios';

export const carRentalApi = axios.create({
    baseURL: 'https://car-rental-api.goit.global',
    headers: {
        'Content-Type': 'application/json',
    },
});
