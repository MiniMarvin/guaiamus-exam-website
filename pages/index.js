import Head from "next/head";
import Home from "../components/home";

export default function HomePage() {
	return (
		<div>
			<Head>
				<title>Guaiamus | marque exames com um clique</title>
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Home></Home>
		</div>
	);
}
