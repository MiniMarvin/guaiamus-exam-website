import SearchBox from '../elements/searchBox'
import Link from 'next/link'
import theme from '../theme'
import Anchor from '../elements/anchor'

export default function Home() {
	// TODO: solve the problem for the line
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
							<Anchor src="#">se inscreva</Anchor> para poder acompanhar exames
							e fazer exames gratuitos
						</p>
					</div>
					<SearchBox />
					<div className="bottomDiv"></div>
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
				img {
					margin: 30px 0px 0px;
				}

				section {
					background-color: ${theme.colors.baseGreen};
					color: ${theme.colors.lightFontColor};
					background-image: url('curve-home.svg');
					background-position: bottom;
					background-repeat: no-repeat;
					background-size: contain;
					padding: ${theme.constants.sectionPadding};
					display: flex;
					flex-direction: row;
				}

				.bottomDiv {
					height: calc(
						calc(100vw * 0.103 + 67.14px) -
							max(
								calc(100vw * 0.103 + 67.14px) / 100,
								calc(100vw * 0.103 + 67.14px) / 10
							)
					);
					width: 100%;
					margin: 0px;
					padding: 0px;
					border: none;
				}

				.top img {
					height: 3em;
					margin: 0px 10px 0px 0px;
				}

				.home {
					padding: 20px;
					display: flex;
					flex-direction: row;
				}

				.logo {
					display: flex;
					flex-direction: row;
				}

				.info {
					display: flex;
					flex-direction: column;
					align-items: left;
				}

				@media (max-width: 714px) {
					.image {
						display: none;
					}

					.info {
						align-items: center;
						text-align: center;
					}
				}
			`}</style>
		</>
	)
}
