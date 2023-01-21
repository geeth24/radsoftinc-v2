import {
    Box,
    Flex,
    Heading,
    Link,
    SimpleGrid,
    chakra,
    Image,
} from "@chakra-ui/react"
import React from "react"

function Team() {
    return (
        <Flex
            p={8}
            w="auto"
            justifyContent="center"
            alignItems="center"
            id="team"
        >
            <SimpleGrid columns={{ base: 1 }} spacing={4} maxWidth="6xl">
                <Box>
                    <Heading fontSize="5xl" fontFamily="Lato">
                        Team
                    </Heading>
                </Box>
                <SimpleGrid
                    columns={{
                        base: 1,
                        md: 2,
                    }}
                    spacing={20}
                    px={{
                        base: 4,
                        lg: 16,
                        xl: 24,
                    }}
                >
                    <Box
                        w="xs"
                        bg="white"
                        _dark={{
                            bg: "gray.900",
                        }}
                        shadow="lg"
                        rounded="lg"
                        overflow="hidden"
                        mx="auto"
                        // bg="#edf3f8"

                        alignItems="center"
                        justifyContent="center"
                    >
                        <Image
                            w="full"
                            h={56}
                            fit="cover"
                            src="/SG.jpeg"
                            alt="SG"
                        />

                        <Box py={5} textAlign="center">
                            <Link
                                display="block"
                                fontSize="2xl"
                                color="gray.800"
                                _dark={{
                                    color: "white",
                                }}
                                fontWeight="bold"
                            >
                                Sreenivasa Rao Gunnampalli
                            </Link>
                            <chakra.span
                                fontSize="sm"
                                color="gray.700"
                                _dark={{
                                    color: "gray.200",
                                }}
                            >
                                CEO
                            </chakra.span>
                        </Box>
                    </Box>

                    <Box
                        w="xs"
                        bg="white"
                        _dark={{
                            bg: "gray.900",
                        }}
                        shadow="lg"
                        rounded="lg"
                        overflow="hidden"
                        mx="auto"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Image
                            w="full"
                            h={56}
                            fit="cover"
                            src="/GG.jpeg"
                            alt="GG"
                        />

                        <Box py={5} textAlign="center">
                            <Link
                                display="block"
                                fontSize="2xl"
                                color="gray.800"
                                _dark={{
                                    color: "white",
                                }}
                                fontWeight="bold"
                            >
                                Geeth Gunnampalli
                            </Link>
                            <chakra.span
                                fontSize="sm"
                                color="gray.700"
                                _dark={{
                                    color: "gray.200",
                                }}
                            >
                                Software Developer
                            </chakra.span>
                        </Box>
                    </Box>
                </SimpleGrid>
            </SimpleGrid>
        </Flex>
    )
}

export default Team
