import { useState } from "react";
import { Container, Text, VStack, Button, Box, Image, Input, FormControl, FormLabel, Switch, HStack, Avatar, List, ListItem, ListIcon, IconButton } from "@chakra-ui/react";
import { FaAmbulance, FaFireExtinguisher, FaUserShield, FaMapMarkerAlt, FaCheckCircle, FaRocket } from "react-icons/fa";

const emergencies = [
  { id: 1, type: "Fire", location: "Addis Ababa", icon: FaFireExtinguisher },
  { id: 2, type: "Medical", location: "Adama", icon: FaAmbulance },
  { id: 3, type: "Police", location: "Hawassa", icon: FaUserShield },
];

const resolvedEmergencies = [
  { id: 1, type: "Fire", location: "Bahir Dar", details: "Resolved in 30 mins" },
  { id: 2, type: "Medical", location: "Gondar", details: "Resolved in 20 mins" },
  { id: 3, type: "Police", location: "Mekelle", details: "Resolved in 40 mins" },
];

const Index = () => {
  const [isWorker, setIsWorker] = useState(false);
  const [isOnline, setIsOnline] = useState(false);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Image src="https://images.unsplash.com/photo-1676969048242-0669dcb69762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjBmbGFnJTIwbG9nb3xlbnwwfHx8fDE3MTYyOTIzNjN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Ethio Alert Logo" boxSize="100px" />
        <Text fontSize="4xl" fontWeight="bold">
          Ethio Alert
        </Text>
        <HStack spacing={4}>
          <Button colorScheme="teal" size="lg" onClick={() => setIsWorker(false)}>
            User
          </Button>
          <Button colorScheme="orange" size="lg" onClick={() => setIsWorker(true)}>
            Worker
          </Button>
        </HStack>
        {isWorker ? (
          <VStack spacing={4} width="100%">
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="online-mode" mb="0">
                Online Mode
              </FormLabel>
              <Switch id="online-mode" isChecked={isOnline} onChange={() => setIsOnline(!isOnline)} />
            </FormControl>
            <Text fontSize="2xl">Resolved Emergencies</Text>
            <List spacing={3} width="100%">
              {resolvedEmergencies.map((emergency) => (
                <ListItem key={emergency.id}>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  {emergency.type} at {emergency.location} - {emergency.details}
                </ListItem>
              ))}
            </List>
          </VStack>
        ) : (
          <VStack spacing={4} width="100%">
            <Text fontSize="2xl">Nearby Emergencies</Text>
            <List spacing={3} width="100%">
              {emergencies.map((emergency) => (
                <ListItem key={emergency.id}>
                  <ListIcon as={emergency.icon} color="red.500" />
                  {emergency.type} at {emergency.location}
                </ListItem>
              ))}
            </List>
            <Text fontSize="2xl">Available Emergency Stations</Text>
            <List spacing={3} width="100%">
              {emergencies.map((emergency) => (
                <ListItem key={emergency.id}>
                  <ListIcon as={FaMapMarkerAlt} color="blue.500" />
                  {emergency.type} Station at {emergency.location}
                </ListItem>
              ))}
            </List>
          </VStack>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
