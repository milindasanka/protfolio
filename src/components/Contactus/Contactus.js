import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Particle from "../Particle";
import { Col, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { RingLoader } from "react-spinners";
import Swal from 'sweetalert2'
function ShowAlert(){
    Swal.fire({
        icon: "success",
        title: "Message Send Successfully",
        showConfirmButton: false,
        color: "#716add",
        timer: 2500
    });
}
function Contactus() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false); // Loader state

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    //submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Show loader
        console.log(JSON.stringify(formData));
        try {
            const response = await fetch('https://codemeets.com/apix', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Success:', result);

            setLoading(false); // Hide loader
            ShowAlert(); // Show success alert
        } catch (error) {
            console.error('Error:', error);
            setLoading(false); // Hide loader
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                color: "#716add",
                timer: 2500
            });
        }
    };

    return (
        <Container fluid className="about-section">
            <Row style={{ justifyContent: "center", padding: "10px" }}>
                <Col
                    md={7}
                    style={{
                        justifyContent: "center",
                        paddingTop: "1px",
                        paddingBottom: "0px",
                        position: "relative",
                    }}
                >
                    <h1 style={{ fontSize: "2.1em", paddingBottom: "10px" }}>
                        Contact <strong className="purple">Here</strong>
                    </h1>

                    <div style={{ position: "relative" }}>
                        {loading && (
                            <div style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                zIndex: 10,
                                borderRadius: "10px",
                            }}>
                                <RingLoader size={280} color={"#123abc"} />
                            </div>
                        )}

                        {/* FORM */}
                        <Form onSubmit={handleSubmit} style={{ position: "relative", zIndex: 1 }}>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Enter your message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" disabled={loading}>
                                {loading ? "Submitting..." : "Submit"}
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>

            <Particle />
        </Container>
    );
}

export default Contactus;
