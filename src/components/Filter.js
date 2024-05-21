import Form from 'react-bootstrap/Form';

function Filter({ onFilter, filterText }) {
    return (
        <Form
            className="row gx-5 gy-3"
            onSubmit={(evt) => evt.preventDefault()}
        >
            <Form.Group className="md-12 pt-4" controlId="search">
                <Form.Label>Фильтр</Form.Label>
                <Form.Control
                    type="text"
                    name="search"
                    value={filterText}
                    onChange={onFilter}
                />
            </Form.Group>
        </Form>
    );
}

export default Filter;
