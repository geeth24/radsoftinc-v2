import type { NextPage } from "next"
import Head from "next/head"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Services from "../components/Services/Services"
import Team from "../components/Team/Team"
import Products from "../components/Products/Products"

const Home: NextPage = () => {
    return (
        <>
            <Head>
                s<title>Rad Soft, Inc. | Home</title>
            </Head>

            <Hero />
            <About />
            <Services />
            {/* <Team /> */}
            <Products />
        </>
    )
}

export default Home
