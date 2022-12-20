import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../styles/sidebar.scss";
import "../styles/header.scss";
import "../styles/doughnutchart.scss";
import "../styles/linechart.scss"
import "../styles/profile.scss"
import "../styles/headerlayout.scss"
import "../styles/layout.scss"
import "../styles/notification.scss"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
