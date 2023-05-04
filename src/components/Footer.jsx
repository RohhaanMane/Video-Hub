import {
    Box,
    Button,
    HStack,
    Heading,
    Input,
    Stack,
    VStack,
    Text,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
    return (
        <Box bgColor={"blackAlpha.900"} color={"white"} p={"16"} minH={"40"}>
            <Stack direction={["column", "row"]}  >
                <VStack w={"full"} alignItems={"stretch"} px={"4"} my={["5"]}>
                    <Heading size={"md"} textTransform={"uppercase"} textAlign={["center", "left"]}>
                        Subscribe to get updates
                    </Heading>
                    <HStack borderBottom={"2px solid white"} py={"2"}>
                        <Input
                            placeholder="Enter Email Here..."
                            border={"none"}
                            borderRadius={"none"}
                            outline={"none"}
                            focusBorderColor="none"
                        />
                        <Button
                            p={"0"}
                            colorScheme="purple"
                            variant={"ghost"}
                            borderRadius={"0 20px 20px 0"}
                        >
                            <AiOutlineSend size={"20"} />
                        </Button>
                    </HStack>
                </VStack>
                <VStack
                    w={"full"}
                    my={["5"]}
                    borderLeft={["none", "1px solid white"]}
                    borderRight={["none", "1px solid white"]}
                >
                    <Heading textTransform={"uppercase"} textAlign={"center"}>
                        Video Hub
                    </Heading>
                    <Text>All Rights Reserved</Text>
                </VStack>

                <VStack w={"full"} my={["5"]}>
                    <Heading size={"md"} textTransform={"uppercase"}>
                        Social Media
                    </Heading>
                    <Button variant={"link"} colorScheme="white">
                        <a href="https://youtube.com">Youtube</a>
                    </Button>
                    <Button variant={"link"} colorScheme="white">
                        <a href="https://instagram.com/rohhaanmane">
                            Instagram
                        </a>
                    </Button>
                    <Button variant={"link"} colorScheme="white">
                        <a href="https://github.com/rohhaanmane">Github</a>
                    </Button>
                </VStack>
            </Stack>
        </Box>
    );
};

export default Footer;
