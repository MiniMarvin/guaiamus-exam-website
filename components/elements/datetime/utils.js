import moment from 'moment'

/**
 *
 * @param {number} n
 */
function pad(n) {
	if (n < 10) {
		return `0${n}`
	}
	return `${n}`
}

/**
 *
 * @param {moment.Moment} date
 */
function dateString(date) {
	return date.format('DD/MM/YYYY')
}

/**
 *
 * @param {moment.Moment} date
 */
function timeString(date) {
	return date.format('HH:mm')
}

/**
 *
 * @param {moment.Moment} date1
 * @param {moment.Moment} date2
 */
function isEqual(date1, date2) {
	return Math.abs(date1.diff(date2)) < 1000
}

export default {
	dateString,
	timeString,
	isEqual,
}
