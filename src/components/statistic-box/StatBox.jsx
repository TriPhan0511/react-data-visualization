import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import EmailIcon from '@mui/icons-material/Email'
import ProgressCircle from './ProgressCircle'

// const StatBox = ({ title, subtitle, icon, progress, increase }) => {
const StatBox = ({
	title = '12,361',
	subtitle = 'Email Sent',
	icon = <EmailIcon />,
	progress = '0.75',
	increase = '+14%',
	colorText = '#fff',
}) => {
	const colors = {
		grey: {
			100: '#e0e0e0',
		},
		greenAccent: {
			500: '#4cceac',
		},
	}

	return (
		<Box width='325px' m='0 30px' backgroundColor='#1F2A40' color={colorText}>
			<Box display='flex' justifyContent='space-between'>
				<Box>
					{icon}
					<Typography
						variant='h4'
						fontWeight='bold'
						sx={{ color: colors.grey[100] }}
					>
						{title}
					</Typography>
				</Box>
				<ProgressCircle progress={progress} />
			</Box>
			<Box
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				mt='2px'
			>
				<Typography variant='h5' sx={{ color: colors.greenAccent[500] }}>
					{subtitle}
				</Typography>
				<Typography fontStyle='italic' color={colors.greenAccent[500]}>
					{increase}
				</Typography>
			</Box>
		</Box>
	)
}

export default StatBox
