import {
    Box,
    Flex,
    Heading,
    SimpleGrid,
    Text,
    useColorModeValue,
} from "@chakra-ui/react"
import React from "react"

function About() {
    const bg = useColorModeValue("white", "gray.800")

    return (
        <Flex
            align="center"
            justify="center"
            direction="column"
            bg={bg}
            p={8}
            id="about"
        >
            <SimpleGrid columns={{ base: 1 }} spacing={4} maxWidth="6xl">
                <Box>
                    <Heading
                        fontSize="5xl"
                        fontFamily="AVENGEANCE MIGHTIEST AVENGER"
                    >
                        About
                    </Heading>
                </Box>
                <Box>
                    <Text fontSize={["lg", "2xl"]} color="gray.500">
                        Rad Soft, Inc. is a software & consulting company that
                        finds real-world problems and crafts a solution for
                        them. The company in 2005 was a consulting company by
                        Sreenivasa Rao Gunnampalli. Until March 2021, the
                        company was a consulting company. Now it is a software
                        company that makes software that solves real-world
                        problems. The University of Texas at Dallas freshman,
                        Geeth Gunnampalli has given ideas for the company. With
                        a successful product like MyPanchang, the company, has
                        expanded to include more products and work with new
                        clients to make life easier with the help of technology.
                    </Text>
                </Box>
            </SimpleGrid>
        </Flex>
    )
}

export default About
