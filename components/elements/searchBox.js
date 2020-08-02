import { useState } from 'react'
import theme from '../theme'
import Selector from './selector'
import Button from './button'

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

	return (
		<>
			<div className="box">
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

			<style jsx>{`
				p {
					margin: 10px 0px;
					font-size: 1.1em;
					color: #111;
				}

        .row {
          display: flex;
          flex-direction: row;
        }

        .box {
          border-radius: 10px;
          background-color: #28C5CE;
          padding: 10px 20px 20px;
          width: 100%;
          text-align: left;
        }

        .part {
          margin: 10px 0px;
        }

        .btn {
          margin: 0px 0px 0px 10px;
        }
      `}</style>
		</>
	)
}
