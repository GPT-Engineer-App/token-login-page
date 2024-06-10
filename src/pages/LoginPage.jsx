import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Input, Button, VStack, Text } from "@chakra-ui/react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      if (username === "admin" && password === "password") {
        localStorage.setItem("token", "your-token");
        navigate("/dashboard");
      } else {
        alert("Invalid credentials");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Login</Text>
        <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button isLoading={loading} onClick={handleLogin} colorScheme="teal" width="100%">
          Login
        </Button>
      </VStack>
    </Container>
  );
};

export default LoginPage;
