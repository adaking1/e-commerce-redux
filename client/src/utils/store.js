import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../components/ProductList';
import cartReducer from '../components/Cart';
import categoryReducer from '../components/CategoryMenu';

export default configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        categories: categoryReducer
    }
});