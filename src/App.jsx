import MuiDataGrid from './components/material-ui-data-grids/MuiDataGrid'
import MuiTable from './components/material-ui-tables/MuiTable'

import BarChartBasicColumn from './components/highcharts/BarChartBasicColumn'
import DualAxesLineAndColumn from './components/highcharts/DualAxesLineAndColumn'
import PieChart3D from './components/highcharts/PieChart3D'
import StatBoxMenardDisplay from './components/statistic-box/StatBoxMenardDisplay'

function App() {
	return <StatBoxMenardDisplay />
	// return (
	// 	<div style={{ display: 'flex', justifyContent: 'center' }}>
	// 		<MuiDataGrid title='Báo cáo khóa học' />
	// 		{/* <MuiTable title='Khóa học nhiều người tham gia nhất' /> */}
	// 		{/* <PieChart3D title='Biểu đồ khóa học' /> */}
	// 		{/* <DualAxesLineAndColumn title='Biểu đồ lưu lượng người dùng' /> */}
	// 		{/* <BarChartBasicColumn title='Đơn vị có lượt tham gia học nhiều nhất' /> */}
	// 	</div>
	// )
}

export default App
