import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, VStack, Text } from "@chakra-ui/react";
import { FaSignOutAlt } from "react-icons/fa";

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Dashboard</Text>
        <Button leftIcon={<FaSignOutAlt />} onClick={handleLogout} colorScheme="red">
          Logout
        </Button>
      </VStack>
    </Container>
  );
};

export default DashboardPage;
