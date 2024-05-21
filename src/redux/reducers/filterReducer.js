import { FILTER } from '../actions/actionTypes';

const initialState = {
    filteredItems: [],
    filterText: '',
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER:
            const { text, items } = action.payload;
            return {
                ...state,
                filteredItems: items.filter((item) =>
                    item.service.toLowerCase().includes(text.toLowerCase())
                ),
                filterText: text,
            };
        default:
            return state;
    }
};

export default filterReducer;
