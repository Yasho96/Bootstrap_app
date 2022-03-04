import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import '../styles/Cards.css';
import "../assets/book1.jpg"
export const Cards = () => {
    return (
      <ReactBootStrap.Container center className="my-card-container">        
        <ReactBootStrap.Row xs={1} md={4} className="cards-row-1">
                <ReactBootStrap.Col>
                <ReactBootStrap.Card className="card1">
                    <ReactBootStrap.Card.Img className="card1-img" src= "https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/03/1*u_ULYT4pOBHhBx5bO4596Q.png" />
                    <ReactBootStrap.Card.Body>
                    <ReactBootStrap.Card.Title>Card title</ReactBootStrap.Card.Title>
                    <ReactBootStrap.Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </ReactBootStrap.Card.Text>
                    </ReactBootStrap.Card.Body>
                </ReactBootStrap.Card>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col>
                <ReactBootStrap.Card>
                    <ReactBootStrap.Card.Img className="card2-img" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/a7159230480213.56057cb033583.png" />
                    <ReactBootStrap.Card.Body>
                    <ReactBootStrap.Card.Title>Card title</ReactBootStrap.Card.Title>
                    <ReactBootStrap.Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </ReactBootStrap.Card.Text>
                    </ReactBootStrap.Card.Body>
                </ReactBootStrap.Card>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col>
                <ReactBootStrap.Card>
                    <ReactBootStrap.Card.Img className="card3-img" src="https://assets.mugglenet.com/wp-content/uploads/2021/02/De-Lucchi-all-Harry-Potter-covers.jpg" />
                    <ReactBootStrap.Card.Body>
                    <ReactBootStrap.Card.Title>Card title</ReactBootStrap.Card.Title>
                    <ReactBootStrap.Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </ReactBootStrap.Card.Text>
                    </ReactBootStrap.Card.Body>
                </ReactBootStrap.Card>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col>
                <ReactBootStrap.Card>
                    <ReactBootStrap.Card.Img className="card4-img" src="https://images-na.ssl-images-amazon.com/images/I/51+CDvA-KxL.jpg" />
                    <ReactBootStrap.Card.Body>
                    <ReactBootStrap.Card.Title>Card title</ReactBootStrap.Card.Title>
                    <ReactBootStrap.Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </ReactBootStrap.Card.Text>
                    </ReactBootStrap.Card.Body>
                </ReactBootStrap.Card>
                </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
      
    );
  };