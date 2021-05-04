import { AppProps } from 'next/app'
import '../../styles/global.scss'

if (typeof window === 'undefined') {
    const { server } = require('../mocks/server')
    server.listen()
} else {
    const { worker } = require('../mocks/browser')
    worker.start()    
}

const MyApp = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />
}

export default MyApp;