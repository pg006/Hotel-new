import React, { FC, useState } from 'react';
import styles from './Tabs.module.scss';
import { Tabs, Tab, Row, Col, Nav, Card, Form, Collapse } from 'react-bootstrap';
// import PageHeader from '../../../Layouts/PageHeader/PageHeader';

const FrontOffice = () => {
    return (
        <div>
            <Col xl={12}>
                <Card>
                    {/* <Card.Header>
                        <Card.Title>Secondary Tabs style</Card.Title>
                        <Form className="ms-auto">
                            <Form.Check type="switch" label="Show Code" id="custom-switch" className="showcode d-flex ms-auto mx-2" />
                        </Form>
                    </Card.Header> */}
                    <Card.Body>
                        <div className="panel panel-secondary">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                                <Nav variant="pills" className='panel-tabs nav-tabs panel-secondary'>
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><i className="fe fe-user me-1"></i>Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><i className="fe fe-calendar me-1"></i>Tab 2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"><i className="fe fe-settings me-1"></i>Tab 3</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth"><i className="fe fe-bell me-1"></i>Tab 4</Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
                                            by accident, sometimes on purpose (injected humour and the like</p>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <p> default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
                                            humour and the like</p>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <p>over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
                                            by accident, sometimes on purpose (injected humour and the like</p>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                                    </Tab.Pane>
                                </Tab.Content>

                            </Tab.Container>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}

export default FrontOffice;