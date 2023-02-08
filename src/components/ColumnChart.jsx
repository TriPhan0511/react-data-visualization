import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

// Menard-Chart-03
const ColumnChart = () => {
	const options = {
		title: {
			text: 'ĐƠN VỊ CÓ LƯỢT THAM GIA HỌC NHIỀU NHẤT',
		},
		series: [
			{
				name: '',
				type: 'column',
				color: 'orange',
				data: [340, 300, 225, 220, 215, 205, 180, 160, 150, 140],
			},
		],
		xAxis: {
			categories: [
				'HMS05',
				'HMS09',
				'HMS16',
				'HMS14',
				'HMS04',
				'HMS01',
				'HMS07',
				'HMS07A',
				'HMS08',
				'HMS03',
			],
		},
		yAxis: {
			min: 100,
		},
		legend: {
			enabled: false,
		},
		plotOptions: {
			column: {
				colorByPoint: true,
			},
			series: {
				// pointWidth: 50,
				groupPadding: 0
			}
		},
		colors: [
			'#BF3026',
			'#BF6326',
			'#BE8527',
			'#BCA327',
			'#BFC427',
			'#94B12C',
			'#29A433',
			'#2E7AA1',
			'#2E57A3',
			'#3E2DA2',
		],
	}

	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<div style={{width: '50vw'}}>
				<HighchartsReact highcharts={Highcharts} options={options} />
			</div>
		</div>
	)
}

export default ColumnChart
