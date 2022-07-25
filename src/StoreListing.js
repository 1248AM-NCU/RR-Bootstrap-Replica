import React, {Fragment} from "react";
import { Container, Row, Col, Image, Card } from 'react-bootstrap'

function StoreListing() {
    return (
        <Fragment>
            <Card style={{width:"100%", backgroundColor:"#dfeed6"}}>
                <Card.Title style={{position:"relative", left:"20%", top:"20%"}}>
                    <b style={{ fontSize:"40px", fontWeight:"400px"}}>Order groceriers for delivery or pickup today</b>
                    <p>Whatever you want from local stores, brought right to your door.</p>
                </Card.Title>
                <Card.Img style={{position:"relative",right:"-85%", height:"100%"}} variant="top" src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg"></Card.Img>
            </Card>
            <h2 style={{textAlign: "center"}}>Browse stores in Houston</h2>
            <Container style={{ marginTop: "40px", textAlign: "center" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }} >
                    <Row>
                        <Col xs=".5" >
                            <Image src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5">
                            <Image src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/57/29520839-7042-45a0-af82-54f973b4abe5.png" roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>Publix</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5" >
                            <Image src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/352/ccc727b7-ba99-477d-8170-450fdb3307ef.jpg" roundedCircle />
                        </Col>
                        <Col md="6">
                            <h5 style={{ fontWeight: "bold" }}>Sam's Club</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </Fragment>
    );
}


export default StoreListing;