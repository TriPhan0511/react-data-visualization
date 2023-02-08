import React from 'react'
import PropTypes from 'prop-types'
import HighCharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsFrame from './HighchartsFrame'

import Highcharts3d from 'highcharts/highcharts-3d.js' // 3D
Highcharts3d(HighCharts) // 3D

const PieChart3D = ({ width, height, chartTypeIcon, title }) => {
	const options = {
		chart: {
			type: 'pie',
			height: height,
			// 3D
			options3d: {
				enabled: true,
				alpha: 45,
				beta: 0,
			},
		},
		title: {
			text: null,
			// text: 'BIỂU ĐỒ KHÓA HỌC',
			align: 'left',
		},
		// subtitle: {
		// 	text:
		// 		'Source: ' +
		// 		'<a href="https://www.counterpointresearch.com/global-smartphone-share/"' +
		// 		'target="_blank">Counterpoint Research</a>',
		// 	align: 'left',
		// },
		tooltip: {
			pointFormat:
				'Số lượng: <b>{point.y} học viên ({point.percentage: .1f}%)</b>',
			// pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
		},
		accessibility: {
			point: {
				valueSuffix: '%',
			},
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				depth: 45, // 3D
				// dataLabels: {
				// 	enabled: true,
				// 	format: '<b>{point.name}</b>: {point.percentage:.1f} %',
				// },
				dataLabels: {
					enabled: false,
				},
				showInLegend: true,
			},
		},
		legend: {
			align: 'right',
			verticalAlign: 'middle',
			layout: 'vertical',
			itemMarginBottom: 10,
		},
		series: [
			{
				name: 'Status',
				colorByPoint: true,
				data: [
					{
						name: 'Đang học',
						y: 50,
						// sliced: true,
						// selected: true,
					},
					{
						name: 'Chưa học',
						y: 20,
					},
					{
						name: 'Đã hoàn thành',
						y: 100,
					},
				],
			},
		],
		colors: [
			'#F15C80',
			'#95CEFF',
			'#8085E9',
			'#F7A35C',
			'#90ED7D',
			'#5C5C61',
			'#29A433',
			'#2E7AA1',
			'#2E57A3',
			'#3E2DA2',
		],
	}
	return (
		<HighchartsFrame width={width} chartTypeIcon={chartTypeIcon} title={title}>
			<HighchartsReact highcharts={HighCharts} options={options} />
		</HighchartsFrame>
	)
}

PieChart3D.propTypes = {
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	chartTypeIcon: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}

PieChart3D.defaultProps = {
	width: 500,
	height: 400,
	chartTypeIcon: 'pie',
	title: 'Báo cáo',
}

export default PieChart3D
