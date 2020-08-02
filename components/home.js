import SearchBox from './searchBox'
import Link from 'next/link'
import theme from '../components/theme'

export default function Home() {
	return (
		<>
			<section>
				<div className="info">
					<div className="top">
						<Link href="#">
							<div className="logo">
								<img src="/logo_guaiamus.svg" alt="logo guaiamus" />
								<h1>Guaiamus</h1>
							</div>
						</Link>
					</div>
					<div className="content">
						<h1>agende seus exames em um clique</h1>
						<p>
							<a src="#">se inscreva</a> para poder acompanhar exames
							e fazer exames gratuitos
						</p>
					</div>
					<SearchBox />
				</div>
				<div className="image">
					<div className="top">
						<Link href="#">
							<img src="/logo_guaiamus.svg" alt="logo guaiamus" />
						</Link>
					</div>
				</div>
			</section>

			<style jsx>{`
				a {
					color: ${theme.colors.linkColor};
					font-weight: bold;
					cursor: pointer;
				}

				.top img {
					height: 3em;
					margin: 0px 10px 0px 0px;
				}

				section {
					background-color: ${theme.colors.baseGreen};
					color: ${theme.colors.lightFontColor};
					padding: 20px;
					display: flex;
					flex-direction: row;
				}

				.logo {
					display: flex;
					flex-direction: row;
				}

				@media (max-width: 714px) {
					.image {
						display: none;
					}
				}
			`}</style>
		</>
	)
}
