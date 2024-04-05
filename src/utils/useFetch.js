import axios from 'axios';
import { useState } from 'react';

export const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetcher(url) {
        try {
            setIsLoading(true);
            const { data: dataRes } = await axios({
                method: 'GET',
                baseURL: import.meta.env.VITE_ENDPOINT_WEATHER,
                url: url,
                headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key": import.meta.env.VITE_API_KEY
                }
            });
            setData(dataRes);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    }

    return { fetcher, isLoading, data };
}