import Box from '@mui/material/Box'
import React from 'react'
import StatBoxMenard from './StatBoxMenard'

const StatBoxMenardDisplay = () => {
	return (
		<Box
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
				gap: '20px',
				marginTop: '50px',
				maxWidth: '80%',
				margin: 'auto',
			}}
		>
			<StatBoxMenard
				title='71'
				subtitle='Khóa học'
				iconType='barChart'
				linkTo='https://sample.com'
				textColor='#fff'
				backgroundColor='rgb(0, 192, 239)'
				readMoreBackgroundColor='rgb(0, 172, 215)'
			/>
			<StatBoxMenard
				title='2'
				subtitle='Kỳ thi'
				iconType='barChart'
				linkTo='https://sample.com'
				textColor='#fff'
				backgroundColor='#00A65A'
				readMoreBackgroundColor='#009551'
			/>
			<StatBoxMenard
				title='4'
				subtitle='Khảo sát'
				iconType='barChart'
				linkTo='https://sample.com'
				textColor='#fff'
				backgroundColor='#F39C12'
				readMoreBackgroundColor='#DA8C10'
			/>
			<StatBoxMenard
				title='455'
				subtitle='Người dùng'
				iconType='person'
				linkTo='https://sample.com'
				textColor='#fff'
				backgroundColor='#DD4B39'
				readMoreBackgroundColor='#C64333'
			/>
			<StatBoxMenard
				title='3316'
				subtitle='Lượt học'
				iconType='pieChart'
				textColor='#fff'
				backgroundColor='#39CCCC'
				readMoreBackgroundColor='#33B7B7'
			/>
			<StatBoxMenard
				title='163'
				subtitle='Lượt thi'
				iconType='pieChart'
				textColor='#fff'
				backgroundColor='#0073B7'
				readMoreBackgroundColor='#0067A4'
			/>
			<StatBoxMenard
				title='247'
				subtitle='Câu hỏi'
				iconType='barChart'
				linkTo='https://sample.com'
				textColor='#fff'
				backgroundColor='#605CA8'
				readMoreBackgroundColor='#565397'
			/>
			<StatBoxMenard
				title='0'
				subtitle='Người đạt chứng chỉ'
				iconType='person'
				textColor='#fff'
				backgroundColor='#FF851B'
				readMoreBackgroundColor='#E57718'
			/>
		</Box>
	)
}

export default StatBoxMenardDisplay
