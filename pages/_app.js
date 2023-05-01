import "../styles/globals.css";
import { Navbar } from "./../components/navbar";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Home - Atomus Dev | Product Design Agency & Web Solutions</title>
        <meta
          name="description"
          content="Atomus Developers is a digital product design agency that provides a range of services to help businesses enhance their online presence and achieve their goals in the digital world."
        />
        <meta
          name="keywords"
          content="Atomus Dev, Product Design Agency, Web Solutions, marketing website design, mobile and web product design, search-engine optimization, web app development"
        />
        <meta name="author" content="Atomus Developers" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Atomus Dev | Product Design Agency & Web Solutions"
        />
        <meta
          property="og:description"
          content="Atomus Developers is a digital product design agency that provides a range of services to help businesses enhance their online presence and achieve their goals in the digital world."
        />
        <meta property="og:image" content="your-image-url.jpg" />
        <meta property="og:url" content="https://www.atomusdev.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <ToastContainer toastStyle={{ backgroundColor: "#eee", color: "#111" }} />
    </div>
  );
}

export default MyApp;
