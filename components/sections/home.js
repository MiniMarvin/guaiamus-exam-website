import SearchBox from '../elements/searchBox'
import Link from 'next/link'
import theme from '../theme'
import Anchor from '../elements/anchor'
import TopImage from '../elements/topImage'

export default function Home() {
	// TODO: solve the problem for the line
	return (
		<>
			<section>
				<div className="info">
					<TopImage />
					<div className="content">
						<h1>agende seus exames em um clique</h1>
						<p>
							<Anchor src="#">se inscreva</Anchor> para poder
							acompanhar as novidades da guaiamus, notícias sobre
							saúde e fazer exames gratuitos
						</p>
					</div>
					<SearchBox />
					<div className="bottomDiv"></div>
				</div>
				<div className="image">
					<img src="/home-art.svg" alt="" />
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
					flex-basis: 0px;
					overflow: hidden;
				}

				.content h1 {
					margin: 40px 0px;
				}
				
				p {
					margin-bottom: 60px;
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

				.home {
					padding: 20px;
					display: flex;
					flex-direction: row;
				}

				.info {
					display: flex;
					flex-direction: column;
					align-items: left;
				}

				.image {
					width: 100%;
					display: flex;
					align-items: right;
					padding: 0px 0px 0px 100px;
				}

				.image img {
					width: 100%;
					max-height: 650px;
					margin: 0px;
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

				@media (min-width: 714px) {
					.info {
						margin-left: 50px;
					}
				}
			`}</style>
		</>
	)
}
