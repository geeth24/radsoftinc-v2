import {
    Box,
    chakra,
    Container,
    Flex,
    HStack,
    Link as ChakraLink,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    VStack,
    Image,
} from "@chakra-ui/react"
import { ReactNode } from "react"
import {
    SiChakraui,
    SiInstagram,
    SiLinkedin,
    SiNextdotjs,
} from "react-icons/si"
import Link from "next/link"

const Logo = () => {
    return (
        <Flex>
            <Link href="/">
                <Image
                    src="/Bird.png"
                    alt="Rad Soft, Inc"
                    boxSize="35px"
                    objectFit="cover"
                    cursor="pointer"
                />
            </Link>

            <Link href="/">
                <chakra.h1
                    fontSize="xl"
                    fontWeight="black"
                    ml="2"
                    bgClip="text"
                    bgGradient="linear(to-r, #ED8936,#a1241e,#6B46C1,#a1241e, #ED8936)"
                    cursor="pointer"
                    fontFamily="Lato"
                    mt={2}
                >
                    RAD SOFT, INC.
                </chakra.h1>
            </Link>
        </Flex>
    )
}

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode
    label: string
    href: string
}) => {
    return (
        <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
            href={href}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
                bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

function Footer() {
    return (
        <Box
            bg={useColorModeValue("gray.200", "gray.800")}
            color={useColorModeValue("red.700", "red.200")}
        >
            <Container
                as={Stack}
                maxW={"6xl"}
                py={4}
                spacing={4}
                justify={"center"}
                align={"center"}
            >
                <Logo />

                <Text>
                    © {new Date().getFullYear()} Rad Soft, Inc. All rights
                    reserved.
                </Text>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.300", "gray.700")}
            >
                <Container
                    as={Stack}
                    maxW={"6xl"}
                    py={4}
                    direction={{ base: "column", md: "row" }}
                    spacing={4}
                    justify={{ base: "center", md: "space-between" }}
                    align={{ base: "center", md: "center" }}
                >
                    <VStack spacing={4}>
                        <HStack>
                            <Text>Built with</Text>{" "}
                            <ChakraLink isExternal href="https://nextjs.org">
                                <SiNextdotjs />
                            </ChakraLink>
                            <ChakraLink isExternal href="https://chakra-ui.com">
                                <SiChakraui />
                            </ChakraLink>
                            <Text>by</Text>
                            <ChakraLink href="https://geethg.com">
                                <Text>Geeth Gunnampalli</Text>
                            </ChakraLink>
                        </HStack>
                    </VStack>
                    <Stack direction={"row"} spacing={6}>
                        <SocialButton
                            label={"Linkedin"}
                            href={
                                "https://www.linkedin.com/company/radsoftinc/"
                            }
                        >
                            <SiLinkedin />
                        </SocialButton>
                        <SocialButton
                            label={"Instagram"}
                            href={"https://instagram.com/radsoftinc"}
                        >
                            <SiInstagram />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}

export default Footer
