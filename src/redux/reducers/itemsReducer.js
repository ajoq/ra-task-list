import {
    ADD_ITEM,
    EDIT_ITEM,
    CHANGE_ITEM,
    DELETE_ITEM,
    CHANGE_FORM_FIELDS,
} from '../actions/actionTypes';

const initialState = {
    items: [
        { id: 1, service: 'Замена стекла', price: 21000 },
        { id: 2, service: 'Замена дисплея', price: 25000 },
        { id: 3, service: 'Замена аккумулятора', price: 4000 },
        { id: 4, service: 'Замена микрофона', price: 2500 },
    ],
    formFields: {
        id: null,
        service: '',
        price: '',
    },
};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        id: Date.now(),
                        service: action.payload.service,
                        price: action.payload.price,
                    },
                ],
                formFields: {
                    id: null,
                    service: '',
                    price: '',
                },
            };
        case EDIT_ITEM:
            const editId = action.payload.id;
            const editItem = state.items.find((item) => item.id === editId);
            return {
                ...state,
                formFields: {
                    id: editId,
                    service: editItem.service,
                    price: editItem.price,
                },
            };
        case CHANGE_ITEM:
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload.id
                        ? {
                              ...item,
                              service: action.payload.service,
                              price: action.payload.price,
                          }
                        : item
                ),
                formFields: {
                    id: null,
                    service: '',
                    price: '',
                },
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(
                    (item) => item.id !== action.payload.id
                ),
                formFields:
                    state.formFields.id !== null
                        ? {
                              id: null,
                              service: '',
                              price: '',
                          }
                        : state.formFields,
            };
        case CHANGE_FORM_FIELDS:
            const { name, value } = action.payload;
            return {
                ...state,
                formFields: { ...state.formFields, [name]: value },
            };
        default:
            return state;
    }
};

export default itemsReducer;
