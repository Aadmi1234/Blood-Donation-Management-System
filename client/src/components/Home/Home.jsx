import { Container, Button, Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import BloodDonationImage from "/blood-donation.png"
import BloodDonationStat from "/blood-donation-stats.png"
import styles from "./home.module.css"

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <div
                className="hero bg-light text-center py-5"
                style={{ maxWidth: "35%" }}
            >
                <Container>
                    <h1 className={`${styles.heroTitle}`}>
                        Donate Blood, Save Lives
                    </h1>
                    <Image
                        src={BloodDonationStat}
                        alt=""
                        className={styles.bloodDonationStat}
                    />
                    <p className={styles.heroText}>
                        Your blood donation is a lifeline to many in need. It
                        can save lives in emergencies, support medical
                        treatments, and give hope to those battling illnesses.
                        Your simple act of donating blood can make a significant
                        impact, providing a precious gift that costs nothing but
                        means everything. 
                    </p>
                    <Button as={Link} to="/donate" variant="primary" size="lg">
                        Donate Now
                    </Button>
                </Container>
            </div>

            {/* Information Sections */}
            <Container>
                <Row>
                    <img
                        src={BloodDonationImage}
                        alt=""
                        className={styles.homeImage}
                    />
                </Row>
                <Row>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Why Donate Blood?</Card.Title>
                                <Card.Text>
                                    Learn about the importance of blood donation
                                    and how it saves lives.
                                </Card.Text>
                                <Button
                                    as={Link}
                                    to="/why-donate"
                                    variant="primary"
                                >
                                    Learn More
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Find a Donation Center</Card.Title>
                                <Card.Text>
                                    Find the nearest blood donation center to
                                    you and schedule an appointment.
                                </Card.Text>
                                <Button
                                    as={Link}
                                    to="/centers"
                                    variant="primary"
                                >
                                    Find Centers
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Check Status</Card.Title>
                                <Card.Text>
                                    Check the status of your appointment and the
                                    details of the registration.
                                </Card.Text>
                                <Button as={Link} to="/check" variant="primary">
                                    Check Now
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;
