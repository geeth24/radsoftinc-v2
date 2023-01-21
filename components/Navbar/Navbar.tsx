import React from "react"

import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    HStack,
    Button,
    useDisclosure,
    VStack,
    IconButton,
    CloseButton,
    useColorMode,
    Image,
} from "@chakra-ui/react"
import { AiOutlineMenu } from "react-icons/ai"
import Link from "next/link"
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs"
import { Link as ScrollLink } from "react-scroll"

function Navbar() {
    const bg = useColorModeValue("white", "gray.800")
    const { colorMode, toggleColorMode } = useColorMode()
    const mobileNav = useDisclosure()

    return (
        <React.Fragment>
            <chakra.nav
                bg={bg}
                w="full"
                px={{ base: 2, sm: 4 }}
                py={4}
                shadow="md"
                position="sticky"
                top={0}
                zIndex={10}
            >
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mx="auto"
                >
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
                                fontSize={{ base: "lg", lg: "xl" }}
                                fontWeight="black"
                                ml="2"
                                bgClip="text"
                                bgGradient="linear(to-r, #ED8936,#a1241e,#6B46C1,#a1241e, #ED8936)"
                                onClick={mobileNav.onClose}
                                cursor="pointer"
                                fontFamily="Lato"
                                mt={2}
                            >
                                RAD SOFT, INC.
                            </chakra.h1>
                        </Link>
                    </Flex>
                    <HStack display="flex" alignItems="center" spacing={1}>
                        <HStack
                            spacing={1}
                            mr={1}
                            color="red"
                            display={{ base: "none", md: "inline-flex" }}
                        >
                            <Button
                                w="full"
                                variant="ghost"
                                onClick={mobileNav.onClose}
                                cursor="pointer"
                                as={ScrollLink}
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                colorScheme="red"
                            >
                                About
                            </Button>
                            <Button
                                w="full"
                                variant="ghost"
                                onClick={mobileNav.onClose}
                                cursor="pointer"
                                as={ScrollLink}
                                to="services"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                colorScheme="red"
                            >
                                Services
                            </Button>
                            {/* <Button
                                w="full"
                                variant="ghost"
                                onClick={mobileNav.onClose}
                                cursor="pointer"
                                as={ScrollLink}
                                to="team"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                colorScheme="red"
                            >
                                Team
                            </Button> */}
                            <Button
                                w="full"
                                variant="ghost"
                                onClick={mobileNav.onClose}
                                cursor="pointer"
                                as={ScrollLink}
                                to="products"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                colorScheme="red"
                            >
                                Products
                            </Button>
                        </HStack>
                        <HStack spacing={1} mr={1}>
                            <Link href="/contact">
                                <Button colorScheme="red" size="sm">
                                    Contact Us
                                </Button>
                            </Link>
                            <IconButton
                                colorScheme="red"
                                icon={
                                    colorMode === "light" ? (
                                        <BsFillMoonFill />
                                    ) : (
                                        <BsFillSunFill />
                                    )
                                }
                                onClick={toggleColorMode}
                                aria-label={""}
                                size="sm"
                            />
                        </HStack>
                        <Box display={{ base: "inline-flex", md: "none" }}>
                            <IconButton
                                display={{ base: "flex", md: "none" }}
                                aria-label="Open menu"
                                fontSize="20px"
                                color={useColorModeValue("grey.800", "inherit")}
                                variant="ghost"
                                icon={<AiOutlineMenu />}
                                onClick={mobileNav.onOpen}
                            />

                            <VStack
                                pos="absolute"
                                top={mobileNav.isOpen ? "0" : "-100%"}
                                left={0}
                                right={0}
                                display={mobileNav.isOpen ? "flex" : "none"}
                                opacity={mobileNav.isOpen ? "1" : "0"}
                                transition="all 0.3s ease-in-out"
                                flexDirection="column"
                                p={2}
                                pb={4}
                                m={2}
                                bg={bg}
                                spacing={3}
                                rounded="sm"
                                shadow="sm"
                                color="red"
                            >
                                <CloseButton
                                    aria-label="Close menu"
                                    onClick={mobileNav.onClose}
                                />
                                <Button
                                    w="full"
                                    variant="ghost"
                                    onClick={mobileNav.onClose}
                                    cursor="pointer"
                                    as={ScrollLink}
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    colorScheme="red"
                                >
                                    About
                                </Button>
                                <Button
                                    w="full"
                                    variant="ghost"
                                    onClick={mobileNav.onClose}
                                    cursor="pointer"
                                    as={ScrollLink}
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    colorScheme="red"
                                >
                                    Services
                                </Button>
                                {/* <Button
                                    w="full"
                                    variant="ghost"
                                    onClick={mobileNav.onClose}
                                    cursor="pointer"
                                    as={ScrollLink}
                                    to="team"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    colorScheme="red"
                                >
                                    Team
                                </Button> */}
                                <Button
                                    w="full"
                                    variant="ghost"
                                    onClick={mobileNav.onClose}
                                    cursor="pointer"
                                    as={ScrollLink}
                                    to="products"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    colorScheme="red"
                                >
                                    Products
                                </Button>
                            </VStack>
                        </Box>
                    </HStack>
                </Flex>
            </chakra.nav>
        </React.Fragment>
    )
}
export default Navbar
