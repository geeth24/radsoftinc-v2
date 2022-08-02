import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../theme/theme"
import dynamic from "next/dynamic"
const Layout = dynamic(() => import("../components/Layout"), {
    ssr: false,
})

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme} resetCSS>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )
}

export default MyApp