import {
    useColorModeValue,
    chakra,
    Flex,
    Stack,
    Heading,
    Box,
} from "@chakra-ui/react"
import React from "react"

function Hero() {
    const bg = useColorModeValue("white", "gray.800")
    return (
        <chakra.header bg={bg} id="home">
            <Box
                w="full"
                h="container.sm"
                backgroundImage="/Back.jpeg"
                bgPos="center"
                bgSize="cover"
                bgRepeat="no-repeat"
                bgAttachment="fixed"
            >
                <Flex
                    align="center"
                    pos="relative"
                    justify="center"
                    boxSize="full"
                    bg="blackAlpha.700"
                >
                    <Stack textAlign="center" alignItems="center" spacing={0}>
                        <Heading
                            fontSize={["5xl", "6xl", "8xl"]}
                            color="white"
                            textTransform="uppercase"
                            fontFamily="Lato"
                        >
                            RAD SOFT, INC.
                        </Heading>
                        <Heading
                            fontSize="4xl"
                            color="white"
                            textTransform="uppercase"
                            fontFamily="Lato"
                        >
                            {" "}
                            Find it & Fix it
                        </Heading>
                    </Stack>
                </Flex>
            </Box>
        </chakra.header>
    )
}

export default Hero
