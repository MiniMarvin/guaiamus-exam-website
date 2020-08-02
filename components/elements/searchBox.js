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
					<h4>escolha seus exames</h4>
					<div className="row">
						<Selector
							onChange={(value) => {
								console.log(`did select ${value}`)
							}}
							options={exams}
						/>
						<div className="btn">
						  <Button>add</Button>
            </div>
					</div>
				</div>
				<div className="part">
					<h4>ordenar por</h4>
					<div className="row">
						<Selector
							onChange={(value) => {
								console.log(`did select ${value}`)
							}}
							options={ordering}
						/>
            <div className="btn">
						  <Button height="100%">buscar</Button>
            </div>
					</div>
				</div>
			</div>

			<style jsx>{`
        h1,h2,h3,h4,h5 {
          margin: 5px 0px;
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
