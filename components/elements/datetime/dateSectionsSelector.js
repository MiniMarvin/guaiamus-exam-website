import { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import Button from '../button'
import theme from '../../theme'
import Tag from '../tag'
import utils from './utils'

import {
	DatePicker,
	TimePicker,
	MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import moment from 'moment'
moment.locale('pt-br')

/**
 *
 * @param {{intervals: {date: Date, begin: Date, end: Date}[], setIntervals: Function}} props
 */
function SelectTime(props) {
	const dateDefault = new Date()
	dateDefault.setHours(0, 0, 0, 0)

	const beginDefault = new Date()
	beginDefault.setHours(7, 0, 0, 0)

	const endDefault = new Date()
	endDefault.setHours(8, 0, 0, 0)

	const [date, setDate] = useState(dateDefault)
	const [begin, setBegin] = useState(beginDefault)
	const [end, setEnd] = useState(endDefault)

	const minDate = new Date()
	minDate.setHours(0, 0, 0, 0)

	const maxDate = new Date()
	maxDate.setDate(maxDate.getDate() + 30)

	const save = () => {
    console.log(props.intervals)
    console.log(date)
    console.log(begin)
    console.log(end)

    const x = moment().toDate()
    const dt = new Date()

		const intervals = props.intervals.filter(
			(val) =>
				!utils.isEqual(val.date, date) ||
				!utils.isEqual(val.begin, begin) ||
				!utils.isEqual(val.end, end),
		)
		props.intervals.forEach((val) => {
      console.log(date, val.date)
			console.log(
				!utils.isEqual(val.date, date),
				!utils.isEqual(val.begin, begin),
				!utils.isEqual(val.end, end),
			)
		})

		const newIntervals = [
			...intervals,
			{
				date: date,
				begin: begin,
				end: end,
			},
		]
		props.setIntervals(newIntervals)

		// const dateDefault = new Date()
		// dateDefault.setHours(0, 0, 0, 0)

		// const beginDefault = new Date()
		// beginDefault.setHours(7, 0, 0, 0, 0)

		// const endDefault = new Date()
		// endDefault.setHours(8, 0, 0, 0, 0)

		// setDate(dateDefault)
		// setBegin(beginDefault)
		// setEnd(endDefault)
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
						/>
					</div>
					<div>
						<Button onClick={save}>salvar</Button>
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

/**
 *
 * @param {{intervals: {date: Date, begin: Date, end: Date}[], setIntervals: Function}} props
 */
function SelectedTime(props) {
	const removeInterval = (interval) => {
		;() => {
			const newIntervals = props.intervals.filter(
				(val) =>
					!utils.isEqual(val.date, interval.date) ||
					!utils.isEqual(val.begin, interval.begin) ||
					!utils.isEqual(val.end, interval.end),
			)

			props.setIntervals(newIntervals)
		}
	}

	const tagFromInterval = (interval, key) => {
		const title = `${utils.dateString(
			interval.date,
		)} [${utils.timeString(interval.begin)} - ${utils.timeString(
			interval.end,
		)}]`
		return (
			<Tag
				title={title}
				key={`${key}-interval`}
				action={removeInterval(interval)}
			/>
		)
	}

	const tags = props.intervals.map((interval, idx) =>
		tagFromInterval(interval, idx),
	)
	return (
		<>
			<div>{tags}</div>
		</>
	)
}

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
				<SelectTime
					intervals={intervals}
					setIntervals={setIntervals}
				/>
			</div>

			{/* Selected */}
			<div>
				<SelectedTime
					intervals={intervals}
					setIntervals={setIntervals}
				/>
			</div>

			<style jsx>{``}</style>
		</>
	)
}
