import { useState } from 'react'

import Link from 'next/link'

import TopImage from '../../../components/elements/topImage'
import theme from '../../../components/theme'
import RowTitle from '../../../components/elements/RowTitle'
import Selector from '../../../components/elements/selector'
import Button from '../../../components/elements/button'
import Tag from '../../../components/elements/tag'

import DateSectionsSelector from '../../../components/elements/datetime/dateSectionsSelector'

export default function ClinicExamDetails() {
	const [exams, setExams] = useState([
		'posologia',
		'hematologia',
		'glicologia',
	])

	const details = {
		name: 'dasa',
		subtitle: 'afonso olindense',
		local: 'avenida afonso olindense 201',
		// maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25055.84210451484!2d-34.93508754539014!3d-8.039142433211929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab19168d3d4b2b%3A0xf652db64eb013eb2!2sHospital%20Get%C3%BAlio%20Vargas!5e0!3m2!1spt-BR!2sbr!4v1596749380292!5m2!1spt-BR!2sbr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
		maps:
			'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25055.84210451484!2d-34.93508754539014!3d-8.039142433211929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab19168d3d4b2b%3A0xf652db64eb013eb2!2sHospital%20Get%C3%BAlio%20Vargas!5e0!3m2!1spt-BR!2sbr!4v1596749380292!5m2!1spt-BR!2sbr',
		exams: [
			{
				name: 'exame 1',
				price: 150,
			},
			{
				name: 'exame 2',
				price: 73.5,
			},
		],
		plans: ['unimed', 'cisco'],
	}

	const [selectedItems, setSelectedItems] = useState([
		'titulo 1',
		'titulo 2',
		'titulo 3',
		'titulo 4',
		'titulo 5',
	])

	const price = details.exams.reduce((acc, p) => acc + p.price, 0)
	const toggle = () => {}
	const tags = selectedItems.map((item, id) => (
		<Tag
			title={item}
			key={id + '-tag'}
			action={() => {
				console.log(`click ${item}`)
			}}
		/>
	))

	const [schedule, setSchedule] = useState([])

	return (
		<>
			<div className="top">
				{/* TODO: change the link */}
				<Link href="/">
					<a>
						<img src="/closeDark.svg" />
					</a>
				</Link>
			</div>
			<div className="content">
				<h1>{details.name}</h1>
				<h2>{details.subtitle}</h2>
				<div className="part">
					<p>escolha seus exames</p>
					<div className="row">
						<Selector
							onChange={(value) => {
								console.log(`did select ${value}`)
							}}
							options={exams}
							label="escolha seus exames"
						/>
						<div className="btn">
							<Button>add</Button>
						</div>
					</div>
				</div>
				<div className="selected-items">{tags}</div>
				<RowTitle title="total" content={`R$ ${price}`} />
				{/* <RowTitle title="tempo estimado" content={'02:00:00'} /> */}
				<RowTitle title="local" content={details.local} />
				<RowTitle title="planos" content={details.plans.join(', ')} />
				<DateSectionsSelector intervals={schedule} setIntervals={setSchedule} />
				{/* Insert your name */}
				{/* Insert your email */}
				{/* Insert your whatsapp */}
				{/* Insert the payment method */}
				{/* Insert the prefered location */}
				{/* Insert the medical requirement */}
			</div>

			<style jsx>{`
				.top,
				.content {
					margin: 20px;
					background-color: ${theme.colors.background};
				}

				h1 {
					font-size: 1.8em;
					margin: 0px;
				}

				h2 {
					font-size: 1.2em;
					margin: 0px 0px 20px 0px;
				}

				.top {
					display: flex;
					flex-direction: row;
					justify-content: flex-end;
				}

				.top img {
					width: 36px;
				}

				.row {
					display: flex;
					flex-direction: row;
					width: 100%;
					max-width: 500px;
				}

				.btn {
					margin: 0px 0px 0px 20px;
				}
			`}</style>
		</>
	)
}
