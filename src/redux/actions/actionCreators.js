import {
    ADD_ITEM,
    EDIT_ITEM,
    CHANGE_ITEM,
    DELETE_ITEM,
    CHANGE_FORM_FIELDS,
    FILTER,
} from './actionTypes';

export const addItem = (service, price) => {
    return {
        type: ADD_ITEM,
        payload: { service, price },
    };
};

export const editItem = (id) => ({
    type: EDIT_ITEM,
    payload: { id },
});

export const changeItem = (id, service, price) => ({
    type: CHANGE_ITEM,
    payload: { id, service, price },
});

export const deleteItem = (id) => ({
    type: DELETE_ITEM,
    payload: { id },
});

export const changeFormFields = (name, value) => ({
    type: CHANGE_FORM_FIELDS,
    payload: { name, value },
});

export const filter = (text, items) => ({
    type: FILTER,
    payload: { text, items },
});
