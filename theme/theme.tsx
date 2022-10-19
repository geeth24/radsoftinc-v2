import { extendTheme } from "@chakra-ui/react"

const config = {
    initialColorMode: "light",
    useSystemColorMode: true,
}
const colors = {
    brand: {
        "50": "#fdf6f5",
        "100": "#f8d9d7",
        "200": "#f2b7b4",
        "300": "#ea8c87",
        "400": "#e5726b",
        "500": "#dd4840",
        "600": "#c72d25",
        "700": "#a1241e",
        "800": "#891f19",
        "900": "#641712",
    },
}

// 3. extend the theme
export const theme = extendTheme({ config, colors })
