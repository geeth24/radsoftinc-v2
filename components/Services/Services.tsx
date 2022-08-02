import { Icon, chakra, Flex, SimpleGrid, Box, Heading } from "@chakra-ui/react"
import React from "react"
import { SiApple, SiReact } from "react-icons/si"
const Feature = (props: {
    icon:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined
    title:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined
    children:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined
}) => {
    return (
        <Box>
            <Icon
                boxSize={12}
                _light={{
                    color: "brand.700",
                }}
                mb={4}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                {props.icon}
            </Icon>
            <chakra.h3
                mb={3}
                fontSize="lg"
                lineHeight="shorter"
                fontWeight="bold"
                _light={{
                    color: "gray.900",
                }}
            >
                {props.title}
            </chakra.h3>
            <chakra.p
                lineHeight="tall"
                color="gray.600"
                _dark={{
                    color: "gray.400",
                }}
            >
                {props.children}
            </chakra.p>
        </Box>
    )
}
function Services() {
    return (
        <Flex
            bg="#edf3f8"
            _dark={{
                bg: "gray.900",
            }}
            p={20}
            w="auto"
            justifyContent="center"
            alignItems="center"
            id="services"
        >
            <SimpleGrid
                columns={{ base: 1 }}
                spacing={4}
                id="about"
                maxWidth="6xl"
            >
                <Box>
                    <Heading
                        fontSize="5xl"
                        fontFamily="AVENGEANCE MIGHTIEST AVENGER"
                    >
                        Services
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
                    py={20}
                  
                    bg="white"
                    _dark={{
                        bg: "gray.800",
                    }}
                    shadow="xl"
                >
                    <Feature title="iOS App Development" icon={<SiApple />}>
                        We develop iOS, iPadOS, and WatchOS apps using Swift.
                    </Feature>

                    <Feature title="React Web Development" icon={<SiReact />}>
                        We develop React web apps using Next.js, Chakra-UI.
                    </Feature>
                </SimpleGrid>
            </SimpleGrid>
        </Flex>
    )
}

export default Services
