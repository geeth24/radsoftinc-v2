import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import React from "react"

function About() {
    return (
        <Flex
            align="center"
            justify="center"
            direction="column"
            p={8}
            id="about"
            bg="#edf3f8"
            _dark={{
                bg: "gray.900",
            }}
        >
            <SimpleGrid columns={{ base: 1 }} spacing={4} maxWidth="5xl">
                <Box>
                    <Heading fontSize="5xl" fontFamily="Lato">
                        About
                    </Heading>
                </Box>
                <Box>
                    <Text fontSize={["md", "lg"]} color="gray.500">
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
