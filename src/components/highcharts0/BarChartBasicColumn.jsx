import React from 'react'
import PropTypes from 'prop-types'
import HighCharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsFrame from './HighchartsFrame'

/*
	Props Notes:
		1.	width: number, string
				An explicit width for the chart. If number, the width is given in pixels.
				If given a percentage string (for example '56%'), the width is given as the percentage 
				of the container width.
				By default value is '50%' (50% of the container width).

		2.	height: number, string
				An explicit height for the chart. If a number, the height is given in pixels. 
				If given a percentage string (for example '56%'), the height is given as the percentage 
				of the actual chart width.
				By default value is 400px.
*/

const BarChartBasicColumn = ({ width, height }) => {
	const options = {
		chart: {
			height: height,
		},
		title: {
			text: null,
		},
		series: [
			{
				name: 'Đơn vị tham gia',
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
			title: {
				text: null,
			},
			tickAmount: 10,
		},
		legend: {
			enabled: false,
		},
		plotOptions: {
			column: {
				colorByPoint: true,
			},
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
		tooltip: {
			headerFormat:
				'<span style="font-size:10px">{point.key}: <span style="color:#000;font-weight: bold;">{point.y} lượt</span></span><table>',
			pointFormat:
				'<tr><td style="color:{series.color};padding:0"></td>' +
				'<td style="padding:0"></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true,
		},
	}

	return (
		<HighchartsFrame
			width={width}
			title='Đơn vị có lượt tham gia học nhiều nhất'
		>
			<HighchartsReact highcharts={HighCharts} options={options} />
		</HighchartsFrame>
	)
}

BarChartBasicColumn.propTypes = {
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

BarChartBasicColumn.defaultProps = {
	width: '50%',
	height: 400,
}

export default BarChartBasicColumn
