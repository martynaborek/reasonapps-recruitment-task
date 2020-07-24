import { useDispatch } from 'react-redux';

import { getListOfProducts } from '../api/index';
import { dispatchSetData, dispatchSetDataSuccess,
    dispatchSetDataError } from '../store/slices/config.slice';

const useFetchListOfProducts = () => {
    const dispatch = useDispatch();

    const getAllProducts = async () => {
        dispatch(dispatchSetData());
        try {
            const res = await getListOfProducts();
            const data = res.map(({ id, name, price }) => {
                const [header, desc] = name.split('-');
                return {
                    id,
                    name: header ? header.trim() : null,
                    desc: desc ? desc.trim() : null,
                    price
                }
            })
            dispatch(dispatchSetDataSuccess({ data }));
        } catch (error) {
            dispatch(dispatchSetDataError({ error }));
        }
    };

    return { getAllProducts };
};

export default useFetchListOfProducts;
