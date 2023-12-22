import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import styles from "./centers.module.css";
import Failed from "./Failed.jsx";
import TempImg from "../../assets/tempimg.jpg";

const Centers = ({ centersData, centersError }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className={`p-4 ${styles.container} `}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>List of Centers</h1>
      </div>

      {centersError !== "" && <Failed message={centersError} />}

      <Row xs={1} md={2} lg={3} className="p-2 g-4 mb-4">
        {centersData.map(({ center_id, city, state, address, center_name }) => {
          return (
            <Col key={center_id}>
              <Card style={{ height: "100%", border: "2px solid black" }}>
                <Card.Img variant="top" src={TempImg} />

                <Card.Body className={styles.cardBody}>
                  <Card.Title>
                    <h4>{center_name}</h4>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      {address}, {city}, {state}
                    </p>
                  </Card.Text>
                </Card.Body>

                <Card.Footer
                  className="fs-5"
                  style={{ backgroundColor: "#FF8080", fontWeight: "600" }}
                >
                  Center Id : {center_id}
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Centers;
