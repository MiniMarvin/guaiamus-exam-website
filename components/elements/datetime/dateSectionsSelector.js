import { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles';

import Button from '../button'
import theme from '../../theme'

import {
  DatePicker,
	TimePicker,
	MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import moment from 'moment'
moment.locale('pt-br')

function SelectTime() {
	const beginDefault = new Date()
  beginDefault.setHours(7, 0, 0, 0, 0)

	const endDefault = new Date()
	endDefault.setHours(8, 0, 0, 0, 0)

	const [date, setDate] = useState(new Date())
	const [begin, setBegin] = useState(beginDefault)
	const [end, setEnd] = useState(endDefault)

	const minDate = new Date()
	minDate.setHours(0, 0, 0, 0, 0)

	const maxDate = new Date()
	maxDate.setDate(maxDate.getDate() + 30)

	const save = () => {
		props.onSave(date, begin, end)
	}

	return (
    <ThemeProvider theme={theme.materialTheme}>
		<MuiPickersUtilsProvider utils={MomentUtils}>
			<div>
				<div>
					<DatePicker
						value={date}
						onChange={setDate}
						minDate={minDate}
						maxDate={maxDate}
            label="data disponível"
					/>
				</div>
				<div>
					<TimePicker
						value={begin}
						onChange={setBegin}
						minDate={minDate}
						maxDate={maxDate}
						label="a partir do horário"
					/>
				</div>
				<div>
					<TimePicker
						value={end}
						onChange={setEnd}
						minDate={minDate}
						maxDate={maxDate}
            label="até o horário"
            className="custom"
            color="white"
					/>
				</div>
				<div>
					<Button>salvar</Button>
				</div>
			</div>
			<style jsx>{`
				div {
					margin-top: 20px;
					display: flex;
					flex-direction: row;
				}

				@media (max-width: 540px) {
					div {
						flex-direction: column;
					}
				}
			`}</style>
		</MuiPickersUtilsProvider>
    </ThemeProvider>
	)
}

function SelectedTime() {}

export default function DateSectionsSelector() {
	// {
	//   date: new Date()
	//   begin: new Date()
	//   end: new Date()
	// }
	const [intervals, setIntervals] = useState([])

	return (
		<>
			{/* Selector */}
			<div>
				<SelectTime />
			</div>

			{/* Selected */}
			<div></div>

			<style jsx>{``}</style>
		</>
	)
}
