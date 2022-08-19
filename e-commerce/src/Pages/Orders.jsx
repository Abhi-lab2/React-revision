import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductSimple from "../Components/ProductSimple";
import { fetchOrders } from "../Redux/products/action";

export const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.ecommerceData.orders);
  console.log(orders);

  useEffect(() => {
    useDispatch(fetchOrders());
  }, [dispatch]);

  return (
    <Box>
      <Heading as={"h2"} size={"xl"} textAlign={"center"}>
        Your Orders
      </Heading>
      <Box>
        {orders.map((product) => {
          console.log(orders);
          return (
            <ProductSimple
              key={product.id}
              image={product.image}
              price={product.price}
              title={product.title}
            />
          );
        })}
      </Box>
    </Box>
  );
};
