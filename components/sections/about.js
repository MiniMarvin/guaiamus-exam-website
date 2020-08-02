import TextBlock from '../elements/textBlock'
import theme from '../theme'
import Anchor from '../elements/anchor'

export default function About() {
	return (
		<>
			<section>
				<TextBlock img='/exam-icon.svg' alt='ícone de exames'>
					<h2>Acompanhe sua saúde</h2>
					<p>Guaimus é uma plataforma de saúde preventiva que lhe ajuda a marcar exames, acompanhar os seus resultados e compartilhar os resultados com médicos de sua confiança e manter eles em mãos para o futuro e agilizando os diagnósticos no futuro.</p>
					<p>Você pode buscar por uma consulta no topo da página ou <Anchor>se inscreva</Anchor> para receber informações sobre exames e ficar atento a novidades como promoções que vão surgir na Guaiamus.</p>
				</TextBlock>
				<TextBlock img='/money-icon.svg' alt='ícone de gastos'>
					<h2>Reduza seu gasto</h2>
					<p>Saúde preventiva é a forma mais barata de lidar com sua saúde, afinal é sempre melhor prevenir do que remediar.</p>
					<p>Mas também sabemos que os tratamentos podem acabar sendo caros, e por isso ainda lhe damos uma vantagem, estamos construindo uma plataforma para fazer o governo pagar pela sua saúde! <Anchor>se inscrever</Anchor> aqui para saber quando essa parte da plataforma estiver pronta</p>
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
