import ListGroup from 'react-bootstrap/ListGroup';
import Item from './Item';

function ItemsList({ items, onEditClick, onRemoveClick }) {
    return (
        <ListGroup variant="flush" className="mt-4">
            {items.map((item) => (
                <Item
                    item={item}
                    onEdit={onEditClick}
                    onRemove={onRemoveClick}
                    key={item.id}
                />
            ))}
        </ListGroup>
    );
}

export default ItemsList;
