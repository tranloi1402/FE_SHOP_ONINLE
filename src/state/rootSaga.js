import {
    all,
    fork
} from 'redux-saga/effects';
// import { exampleSagas } from './modules/example';
import { categorySagas } from './modules/category';
import { productSagas } from './modules/product';
import { cartSagas } from './modules/cart';
import { orderSagas } from './modules/order';

export default function* rootSaga() {
    yield all([
        // fork(exampleSagas),
        fork(categorySagas),
        fork(productSagas),
        fork(cartSagas),
        fork(orderSagas)
    ]);
}
