import { createMuiTheme } from '@material-ui/core/styles';

export default {
	colors: {
		baseGreen: '#1CAAB4',
		background: '#EAEAEA',
		linkColor: '#280786',
		buttonBgColor: '#280786',
		buttonColor: '#FFFFFF',
		darkFontColor: '#333333',
		lightFontColor: '#FAFAFA',
		darkGreen: '#057F86'
	},
	constants: {
		sectionPadding: '20px 20px 0px;',
	},
	materialTheme: createMuiTheme({
		palette: {
			primary: {
				main: '#1CAAB4',
			},
			secondary: {
				main: '#057F86',
			},
		},
	})
}
