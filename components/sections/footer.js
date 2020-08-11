import theme from '../theme'
import SocialMedia from '../elements/socialMedia'
import Anchor from '../elements/anchor'
import Link from 'next/link'

export default function Footer() {
	return (
		<>
			<section>
				<div className="top" />
				<div className="row">
					<div className="clinics">
						<h1>para clínicas e profissionais</h1>
						<p>
							se você está interessado em ser nosso parceiro você pode
							entrar em contato e nós podemos fazer um acordo para
							aumentar seus exames e consultas!{' '}
						</p>
					</div>
					<div className="contact">
						<h1>contato</h1>
						<p>
							@guaiamus em todas as redes <br />
							ou contato por email: contato@guaiamus.com
						</p>
						<SocialMedia email twitter instagram />
					</div>
				</div>
				<div className="privacy">
					<h1>Política de privacidade</h1>
					<p>
						Clique{' '}
						<Link href="/privacy">
							<Anchor>aqui</Anchor>
						</Link>{' '}
						para visualizar nossa política de privacidade
					</p>
				</div>
			</section>

			<style jsx>{`
				section {
					background-image: url('/bottom-curve.svg');
					background-color: ${theme.colors.baseGreen};
					background-position: top;
					background-repeat: no-repeat;
					background-size: contain;
					padding: ${theme.constants.sectionPadding};
					display: flex;
					flex-direction: column;
					color: white;
				}

				.top {
					height: calc(
						1.2 * calc(100vw * 0.103 + 67.14px) -
							max(
								calc(100vw * 0.103 + 67.14px) / 100,
								calc(100vw * 0.103 + 67.14px) / 10
							)
					);
					width: 100%;
				}

				.row {
					display: flex;
					flex-direction: row;
				}

				.row div {
					flex: 1 1 0px;
					margin-right: 20px;
				}

				.privacy {
					margin: 40px 0px;
				}

				@media (max-width: 714px) {
					.row {
						flex-direction: column;
					}

					.row div {
						flex: 1 1 0px;
						margin-right: 0px;
					}
				}
			`}</style>
		</>
	)
}
