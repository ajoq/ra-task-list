import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddItem({ formData, onFormChange, onAddItem }) {
    return (
        <Form className="row gx-5 gy-3" onSubmit={(evt) => onAddItem(evt)}>
            <Form.Group className="col-md-5 col-sm-12" controlId="service">
                <Form.Label>Услуга</Form.Label>
                <Form.Control
                    type="text"
                    name="service"
                    value={formData.service}
                    onChange={onFormChange}
                    required
                />
            </Form.Group>

            <Form.Group className="col-md-5 col-sm-12" controlId="price">
                <Form.Label>Стоимость</Form.Label>
                <Form.Control
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={onFormChange}
                    required
                />
            </Form.Group>

            <Form.Group className="col-md-2 col-sm-12 align-self-end">
                <Button variant="primary" type="submit">
                    Сохранить
                </Button>
            </Form.Group>
        </Form>
    );
}

export default AddItem;
