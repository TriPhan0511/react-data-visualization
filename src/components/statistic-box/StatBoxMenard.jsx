import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import BarChartIcon from '@mui/icons-material/BarChart'
import PieChartIcon from '@mui/icons-material/PieChart'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'

const StatBoxMenard = ({
	title = '71',
	subtitle = 'Khóa học',
	iconType = 'bar-chart',
	linkTo = '',
	readMoreText = 'Xem thêm',
	readMoreIcon = <ArrowCircleRightIcon />,
	backgroundColor = 'rgb(0, 192, 239)',
	textColor = '#fff',
	readMoreBackgroundColor = 'rgb(0, 172, 215)',
}) => {
	return (
		<Box
			sx={{
				color: textColor,
				backgroundColor: backgroundColor,
				borderRadius: '3px',
				minWidth: '320px',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'flex-start',
					padding: '20px',
				}}
			>
				<Box>
					<Typography variant='h5' sx={{ fontSize: '4rem', fontWeight: '700' }}>
						{title}
					</Typography>
					<Typography variant='h6' sx={{ letterSpacing: '1px' }}>
						{subtitle}
					</Typography>
				</Box>
				{iconType === 'barChart' ? (
					<BarChartIcon sx={{ fontSize: '8rem' }} />
				) : iconType === 'pieChart' ? (
					<PieChartIcon sx={{ fontSize: '8rem' }} />
				) : (
					<PersonAddAlt1Icon sx={{ fontSize: '8rem' }} />
				)}
			</Box>
			<Box
				sx={{
					backgroundColor: readMoreBackgroundColor,
					borderRadius: '3px',
					padding: '5px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '3px',
				}}
			>
				{linkTo ? (
					<>
						<Typography variant='h6' letterSpacing='1px'>
							{readMoreText}
						</Typography>
						{readMoreIcon}
					</>
				) : (
					<Typography sx={{ height: '32px' }} />
				)}
			</Box>
		</Box>
	)
}

export default StatBoxMenard

// ------------------------------------------------------------------------------------
// import React from 'react'
// import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'
// import BarChartIcon from '@mui/icons-material/BarChart'
// import PieChartIcon from '@mui/icons-material/PieChart'
// import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
// import { Link } from 'react-router-dom'

// const StatBoxMenard = ({
// 	title = '71',
// 	subtitle = 'Khóa học',
// 	iconType = 'bar-chart',
// 	readMoreText = 'Xem thêm',
// 	readMoreIcon = <ArrowCircleRightIcon />,
// 	backgroundColor = 'rgb(0, 192, 239)',
// 	textColor = '#fff',
// 	readMoreBackgroundColor = 'rgb(0, 172, 215)',
// }) => {
// 	return (
// 		<Box
// 			sx={{
// 				color: textColor,
// 				backgroundColor: backgroundColor,
// 				borderRadius: '3px',
// 				minWidth: '320px',
// 			}}
// 		>
// 			<Box
// 				display='flex'
// 				justifyContent='space-between'
// 				alignItems='flex-start'
// 				paddingLeft='20px'
// 			>
// 				<Box>
// 					<Typography variant='h5' fontSize='4rem' fontWeight='700'>
// 						{title}
// 					</Typography>
// 					<Typography variant='h6' letterSpacing='1px'>
// 						{subtitle}
// 					</Typography>
// 				</Box>
// 				{iconType === 'barChart' ? (
// 					<BarChartIcon sx={{ fontSize: '8rem' }} />
// 				) : iconType === 'pieChart' ? (
// 					<PieChartIcon sx={{ fontSize: '8rem' }} />
// 				) : (
// 					<PersonAddAlt1Icon sx={{ fontSize: '8rem' }} />
// 				)}
// 			</Box>
// 			<Box
// 				sx={{
// 					backgroundColor: readMoreBackgroundColor,
// 					borderRadius: '3px',
// 					padding: '5px',
// 				}}
// 				display='flex'
// 				justifyContent='center'
// 				alignItems='center'
// 				gap='3px'
// 			>
// 				<Typography variant='h6' letterSpacing='1px'>
// 					{readMoreText}
// 				</Typography>
// 				{readMoreIcon}
// 			</Box>
// 		</Box>
// 	)
// }

// export default StatBoxMenard
