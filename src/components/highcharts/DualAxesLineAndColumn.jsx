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

const DualAxesLineAndColumn = ({ width, height }) => {
	const options = {
		chart: {
			zoomType: 'xy',
			height: height,
		},
		title: {
			text: 'Average Monthly Precipitation and Temperature in Karasjok, 2021',
			align: 'left',
		},
		subtitle: {
			text:
				'Source: ' +
				'<a href="https://www.yr.no/nb/historikk/graf/5-97251/Norge/Troms%20og%20Finnmark/Karasjok/Karasjok?q=2021"' +
				'target="_blank">YR</a>',
		},
		legend: {
			align: 'left',
			x: 80,
			verticalAlign: 'top',
			y: 80,
			floating: true,
			backgroundColor: 'rgba(255,255,255,0.25)', // theme
		},
		tooltip: {
			shared: true,
		},
		xAxis: [
			{
				categories: [
					'Jan',
					'Feb',
					'Mar',
					'Apr',
					'May',
					'Jun',
					'Jul',
					'Aug',
					'Sep',
					'Oct',
					'Nov',
					'Dec',
				],
				crosshair: true,
			},
		],
		yAxis: [
			{
				// Primary yAxis
				labels: {
					format: '{value}°C',
					style: {
						color: '#6F4E7C',
					},
				},
				title: {
					text: 'Temperature',
					style: {
						color: '#6F4E7C',
					},
				},
			},
			{
				// Secondary yAxis
				labels: {
					format: '{value} mm',
					style: {
						color: '#0B84A5',
					},
				},
				title: {
					text: 'Precipitation',
					style: {
						color: '#0B84A5',
					},
				},
				opposite: true,
			},
			{
				// Tertiary yAxis
				labels: {
					format: '{value} km/h',
					style: {
						color: '#F6C85F',
					},
				},
				title: {
					text: 'WindSpeed',
					style: {
						color: '#F6C85F',
					},
				},
				opposite: true,
			},
		],
		series: [
			{
				name: 'Precipitation',
				type: 'column',
				color: '#0B84A5',
				yAxis: 1,
				data: [
					27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0, 60.0, 28.6,
					32.1,
				],
				tooltip: {
					valueSuffix: ' mm',
				},
			},
			{
				name: 'Wind Speed',
				type: 'spline',
				color: '#F6C85F',
				yAxis: 2,
				data: [
					22.6, 38.8, 11.7, 44.1, 59.0, 18.4, 35.6, 31.7, 34.0, 40.0, 48.6,
					32.1,
				],
				tooltip: {
					valueSuffix: ' km/h',
				},
				marker: {
					symbol: 'square',
					// symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)',
				},
			},
			{
				name: 'Temperature',
				type: 'spline',
				color: '#6F4E7C',
				data: [
					-13.6, -14.9, -5.8, -0.7, 3.1, 13.0, 14.5, 10.8, 5.8, -0.7, -11.0,
					-16.4,
				],
				tooltip: {
					valueSuffix: '°C',
				},
			},
		],
	}

	return (
		<HighchartsFrame title='Biểu đồ lưu lượng người dùng' width={width}>
			<HighchartsReact highcharts={HighCharts} options={options} />
		</HighchartsFrame>
	)
}

DualAxesLineAndColumn.propTypes = {
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

DualAxesLineAndColumn.defaultProps = {
	width: '50%',
	height: 400,
}

export default DualAxesLineAndColumn
