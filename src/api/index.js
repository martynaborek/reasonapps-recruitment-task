import { apiInstance } from './configs';

export const getListOfProducts = async () => {
    const path = '/data.json';
    const { data } = await apiInstance.get(path);
    return data;
};
