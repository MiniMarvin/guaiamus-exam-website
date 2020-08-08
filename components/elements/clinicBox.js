import theme from '../theme'
import Button from './button'
import RowTitle from './RowTitle'

export default function ClinicBox(props) {
	const price = props.clinic.exams.reduce((acc, p) => acc + p.price, 0)

	return (
		<>
			<div>
				<h1>{props.clinic.name}</h1>
				<h2>{props.clinic.subtitle}</h2>
				<RowTitle title="total" content={`R$ ${price}`} />
				<RowTitle title="tempo estimado" content={'02:00:00'} />
				<RowTitle title="local" content={props.clinic.local} />
				<RowTitle title="planos" content={props.clinic.plans} />

				<Button onClick={()=>{console.log('click no botão')}} width="100%">botão</Button>
			</div>

			<style jsx>{`
				div {
					border-radius: 15px;
					background-color: white;
					padding: 20px;
				}

        h1 {
          font-size: 1.8em;
          margin: 0px;
        }

        h2 {
          font-size: 1.2em;
          margin: 0px 0px 20px 0px;
        }
			`}</style>
		</>
	)
}
