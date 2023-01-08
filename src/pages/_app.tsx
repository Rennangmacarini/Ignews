import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Provider as NextAuthProviders } from 'next-auth/client'


import '../styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
   return(
    <NextAuthProviders session={pageProps.session}> 
    <Header/>
    <Component {...pageProps} />
    </NextAuthProviders>
   ) 

 
}
