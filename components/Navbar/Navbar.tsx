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
                            <chakra.h1
                                fontSize="xl"
                                fontWeight="medium"
                                ml="2"
                                bgClip="text"
                                bgGradient="linear(to-r, #419FDD,#2a4575)"
                                onClick={mobileNav.onClose}
                                cursor="pointer"
                                fontFamily="AVENGEANCE MIGHTIEST AVENGER"
                            >
                                RAD SOFT, INC.
                            </chakra.h1>
                        </Link>
                    </Flex>
                    <HStack display="flex" alignItems="center" spacing={1}>
                        <HStack
                            spacing={1}
                            mr={1}
                            color="brand"
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
                                colorScheme="brand"
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
                                colorScheme="brand"
                            >
                                Services
                            </Button>
                            <Button
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
                                colorScheme="brand"
                            >
                                Team
                            </Button>
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
                                colorScheme="brand"
                            >
                                Products
                            </Button>
                        </HStack>
                        <HStack spacing={1} mr={1}>
                            <Link href="/contact">
                                <Button colorScheme="brand" size="sm">
                                    Contact Us
                                </Button>
                            </Link>
                            <IconButton
                                colorScheme="brand"
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
                                color="brand"
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
                                    colorScheme="brand"
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
                                    colorScheme="brand"
                                >
                                    Services
                                </Button>
                                <Button
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
                                    colorScheme="brand"
                                >
                                    Team
                                </Button>
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
                                    colorScheme="brand"
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
