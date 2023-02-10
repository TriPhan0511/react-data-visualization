import React from 'react'
import Box from '@mui/material/Box'
import { height } from '@mui/system'

const ProgressCircle = ({ progress = '0.75', size = '40' }) => {
	const colors = {
		primary: {
			400: '#1F2A40',
		},
		blueAccent: {
			500: '#6870fa',
		},
		greenAccent: {
			500: '#4cceac',
		},
	}
	const angle = progress * 360
	return (
		<Box
			sx={{
				background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
	          conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
	          ${colors.greenAccent[500]}`,
				borderRadius: '50%',
				width: `${size}px`,
				height: `${size}px`,
			}}
		/>
	)
}

export default ProgressCircle
