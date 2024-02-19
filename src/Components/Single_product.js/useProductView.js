import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../Data"; // Assuming your data file is named data.js

export const useProductView = () => {
  const { id: productId } = useParams();
  const [items, setItems] = useState({});
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedCat, setSelectedCat] = useState("");
  const [quantity, setQuantity] = useState(1); // Changed to number type

  const handleQuantityChange = ({ target: { value } }) => {
    setQuantity(parseInt(value)); // Parse the value to integer
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const getImages = (color) => {
    const product = Data.find((item) => item.id === Number(productId));
    if (product && product.linkImg && product.linkImg[color]) {
      return product.linkImg[color];
    }
    return "";
  };

  useEffect(() => {
    const product = Data.find((item) => item.id === Number(productId));
    if (product) {
      setItems(product);
      setSelectedColor(product.selectedColor);
      setSelectedCat(product.category);
    }
  }, [productId]);

  return {
    items,
    getImages,
    selectedColor,
    selectedCat,
    setSelectedCat,
    quantity,
    handleQuantityChange,
    increaseQuantity,
    decreaseQuantity,
    setSelectedColor,
  };
};
