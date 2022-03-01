import "../styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";

import "../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss";
import "../node_modules/@glidejs/glide/src/assets/sass/glide.theme.scss";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
