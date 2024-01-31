import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import c1 from '../images/c1.jpg';
import c2 from '../images/c2.jpg';
import c3 from '../images/c3.jpg';
import p1 from '../images/p1.jpg';
import p2 from '../images/p2.jpg';
import p3 from '../images/p3.jpg';
import "./Home.css";

const Home = () => {
  const pdata = [
    {
      id: 1,
      image: p1,
      time: "31-jan,2024",
      title: "Sofa lovers",
      description: "Elevate your style with our furniture"
    },
    {
      id: 2,
      image: p2,
      time: "31-jan,2024",
      title: "Sofa lovers",
      description: "Elevate your style with our furniture"
    },
    {
      id: 3,
      image: p3,
      time: "31-jan,2024",
      title: "Sofa lovers",
      description: "Elevate your style with our furniture"
    },
  ];

  return (
    <>
      
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={c1} alt="First slide" />
          <Carousel.Caption>
            <h3>Living Room</h3>
            <p>Making your space full of life</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={c2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={c3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section id="card" className="block blog-block">
        <Container fluid>
          <div className='title-holder'>
            <h2>Best Sellers</h2>
          </div>
          <Row style={{backgroundColor:'white'}}>
            {pdata.map(product => (
              <Col sm={4} key={product.id}>
                <div className='holder'>
                  <Card >
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title style={{fontWeight :'bold',fontSize:"larger"}}>{product.title}</Card.Title>
                      <time>{product.time}</time>
                      <Card.Text>
                        {product.description}
                      </Card.Text>
                      <a href='#' className="btn">Add to Cart <i className='fas fa-chevron-right'></i></a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
    </>
  );
}

export default Home;

