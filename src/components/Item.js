import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Item({ item, onEdit, onRemove }) {
    const { id, service, price } = item;
    return (
        <ListGroup.Item className="d-flex row row-cols-lg-auto gx-4">
            <div className="col-sm-auto align-self-center">{service}</div>
            <div className="col-sm-auto align-self-center">{price}</div>
            <ButtonGroup
                aria-label="Basic example"
                className="d-flex mt-0 col-sm-auto w-auto"
            >
                <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => onEdit(id)}
                >
                    Редактировать
                </Button>
                <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => onRemove(id)}
                >
                    Удалить
                </Button>
            </ButtonGroup>
        </ListGroup.Item>
    );
}

export default Item;
