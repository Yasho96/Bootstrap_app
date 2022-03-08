import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import '../styles/Cards.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faCartShopping,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
export const Cards = () => {
    return (
        
      <ReactBootStrap.Container center className="my-card-container">   
        <ReactBootStrap.Card.Title className="title-1">NEW PRODUCTS</ReactBootStrap.Card.Title>     
        <ReactBootStrap.Row xs={1} md={4} className="cards-row-1">
        <ReactBootStrap.Carousel>
             <ReactBootStrap.Carousel.Item interval={1000}>
                <ReactBootStrap.Col>
                    <ReactBootStrap.Card className="card1">
                    <ReactBootStrap.Card.Img className="card1-img" src= "https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/03/1*u_ULYT4pOBHhBx5bO4596Q.png" />
                        <ReactBootStrap.Card.Body className="card-body">
                            <ReactBootStrap.Card.Text className= "card-price">LKR 1000</ReactBootStrap.Card.Text>
                            <ReactBootStrap.Card.Title className="title">SHERLOCK HOLMES <br/> The man with the twisted lip</ReactBootStrap.Card.Title>
                            <ReactBootStrap.Card.Text className="card-discription">
                                    Be the first one to write a review
                        </ReactBootStrap.Card.Text>                            
                            <div className="rating-group">
                                <div className="star-group">
                                    <FontAwesomeIcon className="star" icon={faStar} color="#FFCC00" />
                                    <FontAwesomeIcon className="star" icon={faStar} color="#FFCC00" />
                                    <FontAwesomeIcon className="star" icon={faStar} color="#FFCC00" />
                                    <FontAwesomeIcon
                                        className="star"
                                        icon={faStarHalfAlt}
                                        color="#FFCC00"
                                    />
                                    <FontAwesomeIcon className="star" icon={faStar} color="#d9d9d9" />
                                </div>
                                <div className="rating-amount">4.8</div>
                            </div>
                            <div className="icon-section">
                                <div className="icon-group">
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faCartShopping}
                                            color="#d9d9d9"
                                        />
                                </div>
                                <div className="icon-group">
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faDownload}
                                            color="#d9d9d9"
                                        />
                                        <div className="iconText">125</div>
                                </div>
                            </div>                                                            
                        </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>                    
                </ReactBootStrap.Col>
                </ReactBootStrap.Carousel.Item>
                <ReactBootStrap.Carousel.Item interval={1000}>
                <ReactBootStrap.Col>
                    <ReactBootStrap.Card className="card2">
                        <ReactBootStrap.OverlayTrigger overlay={ <ReactBootStrap.Tooltip id={'tootlip'}> Limited </ReactBootStrap.Tooltip> }>
                            <ReactBootStrap.Card.Img className="card2-img" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/a7159230480213.56057cb033583.png" />
                        </ReactBootStrap.OverlayTrigger>                       
                        <ReactBootStrap.Card.Body className="card-body">
                            <ReactBootStrap.Card.Text className= "card-price">LKR 1000</ReactBootStrap.Card.Text>
                            <ReactBootStrap.Card.Title className="title" >THE LORD OF THE RINGS <br/> The return of the king</ReactBootStrap.Card.Title>
                            <ReactBootStrap.Card.Text className="card-discription">
                                        Be the first one to write a review
                            </ReactBootStrap.Card.Text>                            
                            <div className="rating-group">
                                <div className="star-group">
                                    <FontAwesomeIcon className="star" icon={faStar} color="#FFCC00" />
                                    <FontAwesomeIcon className="star" icon={faStar} color="#FFCC00" />
                                    <FontAwesomeIcon className="star" icon={faStar} color="#FFCC00" />
                                    <FontAwesomeIcon
                                        className="star"
                                        icon={faStarHalfAlt}
                                        color="#FFCC00"
                                    />
                                    <FontAwesomeIcon className="star" icon={faStar} color="#d9d9d9" />
                                </div>
                                <div className="rating-amount">4.8</div>
                            </div> 
                            <div className="icon-section">
                                <div className="icon-group">
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faCartShopping}
                                            color="#d9d9d9"
                                        />
                                </div>
                                <div className="icon-group">
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faDownload}
                                            color="#d9d9d9"
                                        />
                                        <div className="iconText">125</div>
                                </div>
                            </div>                               
                        </ReactBootStrap.Card.Body> 
                    </ReactBootStrap.Card>
                </ReactBootStrap.Col>
                </ReactBootStrap.Carousel.Item>
                <ReactBootStrap.Carousel.Item interval={1000}>
                <ReactBootStrap.Col>
                    <ReactBootStrap.Card className="card3">
                        <ReactBootStrap.OverlayTrigger overlay={ <ReactBootStrap.Tooltip id={'tootlip'}> Limited </ReactBootStrap.Tooltip> }>
                        <ReactBootStrap.Card.Img className="card3-img" src="https://assets.mugglenet.com/wp-content/uploads/2021/02/De-Lucchi-all-Harry-Potter-covers.jpg" />
                        </ReactBootStrap.OverlayTrigger>                        
                        <ReactBootStrap.Card.Body className="card-body">
                        <ReactBootStrap.Card.Text className= "card-price">LKR 1000</ReactBootStrap.Card.Text>
                        <ReactBootStrap.Card.Title className="title" >HARRY POTTER <br/> Deathly Hollows</ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text className="card-discription">
                                    Be the first one to write a review
                        </ReactBootStrap.Card.Text>                            
                            <div className="rating-group">
                                <div className="star-group">
                                    <FontAwesomeIcon className="star" icon={faStar} color="#FFCC00" />
                                    <FontAwesomeIcon className="star" icon={faStar} color="#FFCC00" />
                                    <FontAwesomeIcon className="star" icon={faStar} color="#FFCC00" />
                                    <FontAwesomeIcon
                                        className="star"
                                        icon={faStarHalfAlt}
                                        color="#FFCC00"
                                    />
                                    <FontAwesomeIcon className="star" icon={faStar} color="#d9d9d9" />
                                </div>
                                <div className="rating-amount">4.8</div>
                            </div>  
                            <div className="icon-section">
                                <div className="icon-group">
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faCartShopping}
                                            color="#d9d9d9"
                                        />
                                </div>
                                <div className="icon-group">
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faDownload}
                                            color="#d9d9d9"
                                        />
                                        <div className="iconText">125</div>
                                </div>
                            </div>                                
                        </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>
                </ReactBootStrap.Col>
                </ReactBootStrap.Carousel.Item>
                <ReactBootStrap.Carousel.Item interval={1000}>
                <ReactBootStrap.Col>
                    <ReactBootStrap.Card className="card4">
                        <ReactBootStrap.Card.Img className="card4-img" src="https://agathachristie.imgix.net/image-store/Landing-Pages-2021/Square_DOTNWebsite.jpg?auto=compress,format&fit=crop&q=80&w=300" />
                        <ReactBootStrap.Card.Body className="card-body">
                        <ReactBootStrap.Card.Text className= "card-price">LKR 1000</ReactBootStrap.Card.Text>
                        <ReactBootStrap.Card.Title className="title" >AGATHA CHRISTIE <br/> Death of the Nile </ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text className="card-discription">
                                    Be the first one to write a review
                        </ReactBootStrap.Card.Text>                            
                            <div className="rating-group">
                                <div className="star-group">
                                    <FontAwesomeIcon className="star" icon={faStar} color="#FFCC00" />
                                    <FontAwesomeIcon className="star" icon={faStar} color="#FFCC00" />
                                    <FontAwesomeIcon className="star" icon={faStar} color="#FFCC00" />
                                    <FontAwesomeIcon
                                        className="star"
                                        icon={faStarHalfAlt}
                                        color="#FFCC00"
                                    />
                                    <FontAwesomeIcon className="star" icon={faStar} color="#d9d9d9" />
                                </div>
                                <div className="rating-amount">4.8</div>
                            </div> 
                            <div className="icon-section"> 
                                <div className="icon-group">
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faCartShopping}
                                            color="#d9d9d9"
                                        />
                                </div>
                                <div className="icon-group">
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faDownload}
                                            color="#d9d9d9"
                                        />
                                        <div className="iconText">125</div>
                                </div>
                            </div>                                
                        </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>
                </ReactBootStrap.Col>
                </ReactBootStrap.Carousel.Item>
                 <ReactBootStrap.Carousel.Item interval={1000}>
                <ReactBootStrap.Col>
                    <ReactBootStrap.Card className="card4">
                        <ReactBootStrap.Card.Img className="card4-img" src="https://agathachristie.imgix.net/news/Inline_ABCExtract.png" />
                        <ReactBootStrap.Card.Body className="card-body">
                        <ReactBootStrap.Card.Text className= "card-price">LKR 1000</ReactBootStrap.Card.Text>
                        <ReactBootStrap.Card.Title className="title" >AGATHA CHRISTIE <br/> The ABC Murders </ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text className="card-discription">
                                    Be the first one to write a review
                        </ReactBootStrap.Card.Text>                            
                            <div className="rating-group">
                                <div className="star-group">
                                    <FontAwesomeIcon className="star" icon={faStar} color="#FFCC00" />
                                    <FontAwesomeIcon className="star" icon={faStar} color="#FFCC00" />
                                    <FontAwesomeIcon className="star" icon={faStar} color="#FFCC00" />
                                    <FontAwesomeIcon
                                        className="star"
                                        icon={faStarHalfAlt}
                                        color="#FFCC00"
                                    />
                                    <FontAwesomeIcon className="star" icon={faStar} color="#d9d9d9" />
                                </div>
                                <div className="rating-amount">4.8</div>
                            </div> 
                            <div className="icon-section"> 
                                <div className="icon-group">
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faCartShopping}
                                            color="#d9d9d9"
                                        />
                                </div>
                                <div className="icon-group">
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faDownload}
                                            color="#d9d9d9"
                                        />
                                        <div className="iconText">125</div>
                                </div>
                            </div>                                
                        </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>
                </ReactBootStrap.Col>
                </ReactBootStrap.Carousel.Item>
            </ReactBootStrap.Carousel>
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
      
    );
  };

