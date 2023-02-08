import MuiDataGrid from './components/material-ui-data-grids/MuiDataGrid'
import MuiTable from './components/material-ui-tables/MuiTable'
import BarChartBasicColumn from './components/highcharts/BarChartBasicColumn'
import DualAxesLineAndColumn from './components/highcharts/DualAxesLineAndColumn'

function App() {
	return (
		<>
			<DualAxesLineAndColumn />
			{/* <BarChartBasicColumn /> */}
			{/* <MuiDataGrid title='Báo cáo khóa học' width='100%' /> */}
			{/* <MuiTable title='Report' width={'50vw'} /> */}
		</>
	)
}

export default App
