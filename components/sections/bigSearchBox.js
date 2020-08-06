import { useState } from 'react'
import theme from '../theme'
import Selector from '../elements/selector'
import Button from '../elements/button'
import TopImage from '../elements/topImage'
import Tag from '../elements/tag'

export default function SearchBox(props) {
	// TODO: query data from database
	// TODO: selected list
	// TODO: unselected list
	const [exams, setExams] = useState([
		'retinoplastia',
		'sorologia',
		'psicologia',
	])

	const [ordering, setOrdering] = useState([
		'preço',
		'distância',
		'comodidade',
		'agilidade',
	])

	const [selectedItems, setSelectedItems] = useState([
		'titulo 1',
		'titulo 2',
		'titulo 3',
		'titulo 4',
		'titulo 5',
	])

	const imageAsset = '/hide.svg'
	const toggle = () => {}
	const tags = selectedItems.map((item, id) => (
		<Tag
			title={item}
			key={id+'-tag'}
			action={() => {
				console.log(`click ${item}`)
			}}
		/>
	))

	return (
		<>
			<section className="box">
				<TopImage />
				<div className="inputs">
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
					<div className="part">
						<p>ordenar por</p>
						<div className="row">
							<Selector
								onChange={(value) => {
									console.log(`did select ${value}`)
								}}
								options={ordering}
								label="escolha o método de ordenação"
							/>
							<div className="btn">
								<Button height="100%">buscar</Button>
							</div>
						</div>
					</div>
				</div>
				{/* TODO: insert here the selected and selectable items */}
				<div className="selected-items">
					{tags}
				</div>
				<div className="bottom">
					<button onClick={toggle}>
						<span>esconder</span>
						<img src={imageAsset} />
					</button>
				</div>
			</section>

			<style jsx>{`
				section {
					color: #fff;
				}

				p {
					margin: 10px 0px;
					font-size: 1.1em;
					color: #fff;
				}

				.row {
					display: flex;
					flex-direction: row;
				}

				.box {
					border-radius: 0px 0px 10px 10px;
					background-color: ${theme.colors.baseGreen};
					padding: 10px 20px 20px;
					width: 100%;
					text-align: left;
				}

				.inputs {
					display: flex;
					flex-direction: column;
				}

				.part {
					margin: 10px 0px;
					flex-grow: 1;
				}

				.bottom {
					margin: 30px 0px 0px;
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.bottom button {
					display: flex;
					flex-direction: column;
					align-items: center;
					border: none;
					background-color: transparent;
					color: #fafafa;
					cursor: pointer;
					font-size: 1em;
				}

				.btn {
					margin: 0px 0px 0px 5px;
				}

				@media (min-width: 714px) {
					.inputs {
						flex-direction: row;
					}

					.part {
						margin-right: 40px;
					}
				}
			`}</style>
		</>
	)
}
