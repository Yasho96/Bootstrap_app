import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import '../styles/GridsBootStrap.css';

export const Grids = () => {
  return (
    <ReactBootStrap.Container center className="my-grid-container">        
        <ReactBootStrap.Row  className="row-1" md= {4} >        
            <ReactBootStrap.Col className="row-1-col-1" xs={12} md={6}>  </ReactBootStrap.Col>
            <ReactBootStrap.Col className="row-1-col-2" xs={12} md={6}>  </ReactBootStrap.Col>           
        </ReactBootStrap.Row>
        <ReactBootStrap.Row className="row-2" md= {4}>        
            <ReactBootStrap.Col className="row-2-col-1" xs={12} md={4}>   </ReactBootStrap.Col>
            <ReactBootStrap.Col className="row-2-col-2" xs={12} md={8}>  </ReactBootStrap.Col>           
        </ReactBootStrap.Row>
        <ReactBootStrap.Row className="row-3" md= {4}>        
            <ReactBootStrap.Col className="row-3-col-1" xs={12} md={4}>  </ReactBootStrap.Col>
            <ReactBootStrap.Col className="row-3-col-2" xs={6} md={4}>  </ReactBootStrap.Col>
            <ReactBootStrap.Col className="row-3-col-3" xs={6} md={4}>  </ReactBootStrap.Col>             
        </ReactBootStrap.Row>
    </ReactBootStrap.Container>
    
  );
};
