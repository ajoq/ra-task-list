import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addItem,
    editItem,
    changeItem,
    deleteItem,
    changeFormFields,
    filter,
} from '../redux/actions/actionCreators';
import AddItem from './AddItem';
import Filter from './Filter';
import ItemsList from './ItemsList';

function Main() {
    const dispatch = useDispatch();
    const { items, formFields } = useSelector((state) => state.services);
    const { filteredItems, filterText } = useSelector((state) => state.filter);
    const [data, setData] = useState(items);

    const handleFormChange = (evt) => {
        const { name, value } = evt.target;
        dispatch(changeFormFields(name, value));
    };

    const handleAddItem = (evt) => {
        evt.preventDefault();
        const { id, service, price } = formFields;
        if (formFields.id === null) {
            dispatch(addItem(service, price));
            return;
        }
        dispatch(changeItem(id, service, price));
    };

    const handleEditClick = (id) => {
        dispatch(editItem(id));
    };

    const handleRemoveClick = (id) => {
        dispatch(deleteItem(id));
    };

    const handleFilter = (evt) => {
        const { value } = evt.target;
        dispatch(filter(value, items));
    };

    useEffect(() => {
        filterText !== '' ? setData(filteredItems) : setData(items);
    }, [filterText, filteredItems]);

    useEffect(() => {
        dispatch(filter(filterText, items));
    }, [items]);

    return (
        <>
            <AddItem
                formData={formFields}
                onFormChange={handleFormChange}
                onAddItem={handleAddItem}
            />
            <Filter inputData={filterText} onFilter={handleFilter} />
            <ItemsList
                items={data}
                onEditClick={handleEditClick}
                onRemoveClick={handleRemoveClick}
            />
        </>
    );
}

export default Main;
