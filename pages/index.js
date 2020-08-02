import Head from 'next/head'
import Home from '../components/sections/home'
import About from '../components/sections/about'
import Footer from '../components/sections/footer'

export default function HomePage() {
	return (
		<div>
			<Head>
				<title>Guaiamus | marque exames com um clique</title>
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Home />
			<About />
			<Footer />
		</div>
	)
}
