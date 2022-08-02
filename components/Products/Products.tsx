import {
    Flex,
    SimpleGrid,
    Heading,
    Box,
    chakra,
    Link,
    Button,
} from "@chakra-ui/react"
import React from "react"

function Products() {
    return (
        <Flex
            bg="#edf3f8"
            _dark={{
                bg: "gray.900",
            }}
            p={8}
            w="auto"
            justifyContent="center"
            alignItems="center"
            id="products"
        >
            <SimpleGrid columns={{ base: 1 }} spacing={4} maxWidth="6xl">
                <Box>
                    <Heading
                        fontSize="5xl"
                        fontFamily="AVENGEANCE MIGHTIEST AVENGER"
                    >
                        Products
                    </Heading>
                </Box>
                <SimpleGrid
                    spacing={20}
                    px={{
                        base: 4,
                        lg: 16,
                        xl: 24,
                    }}
                    py={20}
                    bg="white"
                    _dark={{
                        bg: "gray.800",
                    }}
                    shadow="xl"
                >
                    {" "}
                    <Box
                        bg="white"
                        _dark={{
                            bg: "gray.900",
                        }}
                        mx={{
                            lg: 8,
                        }}
                        display={{
                            lg: "flex",
                        }}
                        maxW={{
                            lg: "5xl",
                        }}
                        shadow={{
                            lg: "lg",
                        }}
                        rounded={{
                            lg: "lg",
                        }}
                    >
                        <Box
                            w={{
                                lg: "50%",
                            }}
                        >
                            <Box
                                h={{
                                    base: 64,
                                    lg: "full",
                                }}
                                rounded={{
                                    lg: "lg",
                                }}
                                style={{
                                    backgroundImage: "url('/MYP.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            ></Box>
                        </Box>

                        <Box
                            py={12}
                            px={6}
                            maxW={{
                                base: "xl",
                                lg: "5xl",
                            }}
                            w={{
                                lg: "50%",
                            }}
                        >
                            <chakra.h2
                                fontSize={{
                                    base: "2xl",
                                    md: "3xl",
                                }}
                                color="gray.800"
                                _dark={{
                                    color: "white",
                                }}
                                fontWeight="bold"
                            >
                                MyPanchang
                            </chakra.h2>
                            <chakra.p
                                mt={4}
                                color="gray.600"
                                _dark={{
                                    color: "gray.400",
                                }}
                            >
                                MyPanchang displays the three elements things in
                                the Hindu Panchangam. First, it shows the Tithi.
                                Second, it shows the Nakshatra. Finally, it
                                shows the current Hindu Festival for the day.
                                However, the best part of the app is viewing the
                                Panchangam just from your home screen using
                                widgets! Currently, MyPanchang is the only app
                                that displays your live Panchanga right from
                                your home screen with Widgets.
                            </chakra.p>

                            <Box mt={8}>
                                <Button
                                    as={Link}
                                    px={5}
                                    py={3}
                                    fontWeight="semibold"
                                    colorScheme="brand"
                                    href="https://mypanchang.app"
                                >
                                    Learn More
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        bg="white"
                        _dark={{
                            bg: "gray.900",
                        }}
                        mx={{
                            lg: 8,
                        }}
                        display={{
                            lg: "flex",
                        }}
                        maxW={{
                            lg: "5xl",
                        }}
                        shadow={{
                            lg: "lg",
                        }}
                        rounded={{
                            lg: "lg",
                        }}
                    >
                        <Box
                            w={{
                                lg: "50%",
                            }}
                        >
                            <Box
                                h={{
                                    base: 64,
                                    lg: "full",
                                }}
                                rounded={{
                                    lg: "lg",
                                }}
                                bgSize="cover"
                                style={{
                                    backgroundImage: "url('/WTK.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            ></Box>
                        </Box>

                        <Box
                            py={12}
                            px={6}
                            maxW={{
                                base: "xl",
                                lg: "5xl",
                            }}
                            w={{
                                lg: "50%",
                            }}
                        >
                            <chakra.h2
                                fontSize={{
                                    base: "2xl",
                                    md: "3xl",
                                }}
                                color="gray.800"
                                _dark={{
                                    color: "white",
                                }}
                                fontWeight="bold"
                            >
                                Work Tracker
                            </chakra.h2>
                            <chakra.p
                                mt={4}
                                color="gray.600"
                                _dark={{
                                    color: "gray.400",
                                }}
                            >
                                Work Tracker - Coppell West & Flower Mound East,
                                built by Geeth Gunnampalli using SwiftUI is an
                                app that helps Mrs. Anupa Varshney and staff
                                track their students. It&apos;s built to track
                                if the student picked up their homework for the
                                upcoming week.
                            </chakra.p>
                        </Box>
                    </Box>
                </SimpleGrid>
            </SimpleGrid>
        </Flex>
    )
}

export default Products
