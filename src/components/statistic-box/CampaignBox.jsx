import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ProgressCircle from './ProgressCircle'

const CampaignBox = ({ width = '520px', color: textColor = '#FFF' }) => {
	const colors = {
		primary: {
			400: '#1F2A40',
		},
		greenAccent: {
			500: '#4cceac',
		},
	}

	return (
		<Box
			width={width}
			color={textColor}
			backgroundColor={colors.primary[400]}
			p='30px'
		>
			<Typography variant='h5' fontWeight='600'>
				Campaign
			</Typography>
			<Box display='flex' flexDirection='column' alignItems='center' mt='25px'>
				<ProgressCircle size='125' />
				<Typography
					variant='h5'
					color={colors.greenAccent[500]}
					sx={{ mt: '15px' }}
				>
					$48, 352 revenue generated
				</Typography>
				<Typography>Includes extra misc expenditures and costs</Typography>
			</Box>
		</Box>
	)
}

export default CampaignBox
