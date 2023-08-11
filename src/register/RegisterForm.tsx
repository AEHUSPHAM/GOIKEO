import React from "react";
import {Button, Container, Form} from "react-bootstrap";

const RegisterForm: React.FC = () => {
    return <Container>
        <div style={{textAlign: "center"}}>
            <h1>Hi</h1>
        </div>
        <Form style={{maxWidth: "30rem", marginInline: "auto"}}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="name">Tên</Form.Label>
                <Form.Control id="name" placeholder="Tên kèo"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
                <Form.Select id="disabledSelect">
                    <option>Disabled select</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Check
                    type="checkbox"
                    id="disabledFieldsetCheck"
                    label="Can't check this"
                />
            </Form.Group>
            <div style={{
                marginInline: "auto"
            }}>
                <Button type="submit">Submit</Button>
            </div>
        </Form>
    </Container>
}

export default RegisterForm;
