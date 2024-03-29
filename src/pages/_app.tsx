import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import NextNProgress from "nextjs-progressbar"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container mx-auto font-sans">
        <NextNProgress color="#A13333" />
        <Navbar />
        <main className="pb-32">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
