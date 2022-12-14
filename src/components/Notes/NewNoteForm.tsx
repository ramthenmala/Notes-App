import React from 'react'
import { Button, Col, Form, FormGroup, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CreateReactSelect from 'react-select/creatable'

const NewNoteForm = () => {
    return (
        <Form>
            <Stack gap={4}>
                <Row>
                    <Col>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control required/>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId='tags'>
                            <Form.Label>Tags</Form.Label>
                            <CreateReactSelect isMulti/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="markDown">
                            <Form.Label>Body</Form.Label>
                            <Form.Control required as="textarea" rows={15}/>
                        </Form.Group>
                    </Col>
                </Row>

                <Stack direction="horizontal" gap={2} className='justify-content-end'>
                    <Button variant='primary' type="submit">Submit</Button>
                    <Link to="..">
                        <Button variant='outline-secondary' type="button">Cancel</Button>
                    </Link>
                </Stack>

            </Stack>
        </Form>
    )
}

export default NewNoteForm