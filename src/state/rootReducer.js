import { combineReducers } from 'redux-immutable';

// import example from './modules/example';
import category from './modules/category';
import product from './modules/product';
import cart from './modules/cart';
import order from './modules/order';

/**
 * Creates the root reducer with the asynchronously loaded ones
 */
export default function rootReducer(asyncReducers) {
    return combineReducers({
        // example,
        category,
        product,
        cart,
        order,
        ...asyncReducers
    });
}
