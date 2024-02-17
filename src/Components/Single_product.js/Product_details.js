import React from "react";
import {
  Card,
  Row,
  Col,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "react-bootstrap";
import { FormGroup, Label } from "reactstrap";
import { useProductView } from "./useProductView";

const ProductDetails = () => {
  const {
    items,
    selectedColor,
    setSelectedColor,
    selectedCat,
    setSelectedCat,
    quantity,
    handleQuantityChange,
    getImages,
    increaseQuantity,
    decreaseQuantity,
  } = useProductView();

  console.log("items:", items); // Log items to check its value

  if (!items) {
    return null;
  }

  console.log("items.quantity:", items.quantity); // Log items.quantity to check its value

  return (
    <div>
      <Card
        className="product-details"
        style={{ fontFamily: "Lora, Serif", backgroundColor: "white" }}
      >
        <Row style={{ backgroundColor: "white" }}>
          <Col md="4">
            <CardImg top width="100%" src={getImages(selectedColor)} alt="" />
          </Col>
          <Col md="8">
            <CardBody>
              <CardTitle className="title">
                {items.name || "Product Name"}
              </CardTitle>
              <CardText>
                {" "}
                Product Description:
                {items.description || "Product Description"}
              </CardText>
              <hr />
              <CardSubtitle style={{ fontSize: "20px" }}>
                <strong>Price: {items.price || "Price"}</strong>
              </CardSubtitle>
              <CardSubtitle
                style={{ paddingTop: "15px", paddingBottom: "0px" }}
              >
                {items.quantity} items left
              </CardSubtitle>
              <FormGroup>
                <Label
                  for="sizeSelect"
                  style={{
                    paddingTop: "15px",
                    paddingBottom: "0px",
                    fontSize: "20px",
                  }}
                >
                  Select Size
                </Label>
                <div style={{ display: "flex", gap: "5px", marginTop: "5px" }}>
                  {items.sizes &&
                    items.sizes.map((size) => (
                      <Button
                        key={size}
                        style={{
                          border:
                            selectedCat === size ? "2px solid black" : "none",
                          width: "auto",
                        }}
                        onClick={() => setSelectedCat(size)}
                      >
                        {size}
                      </Button>
                    ))}
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="colorSelect">Select Color</Label>
                <div style={{ display: "flex", gap: "5px", marginTop: "5px" }}>
                  {items.colors &&
                    items.colors.map((color) => (
                      <Button
                        key={color}
                        style={{
                          width: "30px",
                          height: "30px",
                          backgroundColor: color,
                          border:
                            selectedColor === color
                              ? "2px solid black"
                              : "none",
                        }}
                        onClick={() => setSelectedColor(color)}
                      />
                    ))}
                </div>
              </FormGroup>

              <div style={{ display: "flex", alignItems: "center" }}>
  <div >
  <Button>Add to cart</Button>
    <Button
      onClick={decreaseQuantity}
      style={{
        backgroundColor: "white",
        color: "black",
        border: "white",
      }}
    >
      -
    </Button>
    <span>{quantity}</span>
    <Button
      onClick={increaseQuantity}
      style={{
        backgroundColor: "white",
        color: "black",
        border: "white",
      }}
    >
      +
    </Button>
  </div>
  
</div>

            </CardBody>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ProductDetails;
