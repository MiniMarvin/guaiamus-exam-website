import TextBlock from '../elements/textBlock'
import theme from '../theme'
import Anchor from '../elements/anchor'

import Link from 'next/link'

export default function About() {
	return (
		<>
			<section>
				<TextBlock img="/exam-icon.svg" alt="ícone de exames">
					<h2>Acompanhe sua saúde</h2>
					<p>
						Guaimus é uma plataforma de saúde preventiva que lhe ajuda
						a marcar exames de forma simplificada e a acompanhar os
						resultados, hoje nós estamos realizando os agendamentos e
						a entrega dos resultados, mas estamos em negociação com
						médicos e profissionais de saúde para entregar diretamente
						para eles os resultados dos seus exames de forma mais
						simples.
					</p>
					<p>
						Você pode{' '}
						<a
							src="https://forms.gle/htHcD1bB6RsrNKDw8"
							about="_blank"
						>
							buscar por uma consulta
						</a>{' '}
						ou <Link href="/subscribe"><Anchor>se inscreva</Anchor></Link>  para receber informações
						sobre exames, para que servem, quando fazer os periódicos,
						quais os mais importantes e ficar atento a novidades sobre
						como estamos mudando a saúde.
					</p>
				</TextBlock>
				<TextBlock img="/time-icon.svg" alt="ícone de gastos">
					<h2>Mais cômodo e ágil</h2>
					<p>
						Ir a uma consulta ou fazer um exame é sempre uma atividade
						que causa ansiedade por demorar muito e ter muita espera,
						por isso queremos resolver esse problema, estamos em
						conversas com médicos, clínicas e laboratórios para que
						ter que fazer uma consulta não seja um processo cansativo
						problemático.
					</p>
					<p>
						Se você deseja acompanhar o processo e saber mais de como
						vamos facilitar o seu contato com a saúde!{' '}
						<Link href="/subscribe"><Anchor>se inscreva</Anchor></Link> aqui e vamos te manter
						informado ou informada.
					</p>
				</TextBlock>
			</section>

			<style jsx>{`
				section {
					display: flex;
					flex-direction: column;
					margin-top: 40px;
					padding: ${theme.constants.sectionPadding};
				}

				@media (min-width: 714px) {
					section {
						flex-direction: row;
					}
				}
			`}</style>
		</>
	)
}
