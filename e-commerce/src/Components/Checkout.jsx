import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";

export function Checkout({ cart, checkoutHandler }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button
        rounded={"none"}
        w={"full"}
        mt={8}
        size={"lg"}
        py={"7"}
        bg={useColorModeValue("gray.900", "gray.50")}
        color={useColorModeValue("white", "gray.900")}
        textTransform={"uppercase"}
        _hover={{
          transform: "translateY(2px)",
          boxShadow: "lg",
        }}
        onClick={onOpen}
      >
        Checkout
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Purchase</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {cart.map((product) => {
              return (
                <Box key={product.id} mb="1rem">
                  <Flex>
                    <Box>
                      <Image
                        border={"1px solid black"}
                        rounded="lg"
                        src={product.image}
                        objectFit={"contain"}
                        alt="image"
                        boxSize={"100px"}
                      />
                    </Box>
                    <Box>
                      <Text maxW={"250px"} ml={"1rem"} fontSize={"lg"}>
                        {product.title}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              );
            })}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={checkoutHandler}>
              Confirm
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
