import { createAction } from 'redux-actions';

import { call, put, takeEvery } from 'redux-saga/effects';
import types from './types';
import * as Api from '../../../apis/API';

//= ============== ACTIONS ===============//
const getAllOrders = createAction(types.GET_ALL_ORDER);

const editOrder = createAction(types.EDIT_ORDER_ID);
const storeEdit = createAction(types.STORE_EDIT);

const updateOrder = createAction(types.UPDATE_ORDER);

const storeOrder = createAction(types.STORE_ORDER);
const success = createAction(types.SUCCESS);
const fail = createAction(types.FAIL);

export const actions = {
    getAllOrders,
    editOrder,
    updateOrder
};

//= =============== SAGAS ===============//
function* getOrders() {
    try {
        const response = yield call(Api.getAllOrder);
        yield put(storeOrder(response.data));
        yield put(success());
    } catch (error) {
        yield put(fail());
    }
}

function* getEditOrder(action) {
    try {
        console.log(action);
        const response = yield call(Api.editOrder, action.payload);
        yield put(storeEdit(response.data));
    } catch (error) {
        yield put(fail());
    }
}

function* postUpdateOrder(action) {
    try {
        console.log(action.payload);
        const res = yield call(Api.postUpdateOrder, action.payload);
        console.log('[postUpdateOrder]', res);
        yield put(success(res.data));
    } catch (error) {
        yield put(fail());
    }
}

export function* sagas() {
    yield takeEvery(types.GET_ALL_ORDER, getOrders);
    yield takeEvery(types.EDIT_ORDER_ID, getEditOrder);
    yield takeEvery(types.UPDATE_ORDER, postUpdateOrder);
}
