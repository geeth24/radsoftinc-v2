import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { theme } from "../theme/theme"

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {" "}
                    <meta charSet="utf-8" />
                    <link rel="icon" href="/RadCircle.png" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
                        rel="stylesheet"
                    />
                    <link href="/fonts/fonts_style.css" rel="stylesheet" />
                    <link rel="apple-touch-icon" href="/RadCircle.png" />
                    <meta property="og:title" content="Rad Soft, Inc." />
                    <meta
                        name="image"
                        property="og:image"
                        content="/RadBackS.png"
                    />
                    <meta name="author" content="Geeth Gunnampalli" />
                    <meta
                        property="og:description"
                        content="Rad Soft, Inc is a software & consulting company that finds real world problems and crafts a solution for it."
                    />
                    <meta property="og:url" content="https://radsoftinc.com" />
                </Head>
                <body>
                    {/* 👇 Here's the script */}
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
