import React from 'react'
import PropTypes from 'prop-types'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import MuiTableFrame from './MuiTableFrame'

const MuiTable = ({ title, width }) => {
	const CourseInfo = ({ courseName, imageUrl }) => {
		return (
			<div
				style={{
					display: 'flex',
					gap: '10px',
					alignItems: 'start',
				}}
			>
				{imageUrl ? (
					<>
						<img src={imageUrl} width={150} />
						{courseName}
					</>
				) : (
					<>{courseName}</>
				)}
			</div>
		)
	}

	const createData = (
		courseName,
		numberOfStudents,
		notStart,
		started,
		completed,
		imageUrl
	) => {
		return {
			courseName,
			numberOfStudents,
			notStart,
			started,
			completed,
			imageUrl,
		}
	}

	// Data includes images
	const rows = [
		createData(
			'GIÁO TRÌNH DA',
			232,
			199,
			31,
			2,
			'https://via.placeholder.com/150x100.jpg'
		),
		createData(
			'GIÁO TRÌNH MẶT NẠ',
			178,
			161,
			0,
			17,
			'https://via.placeholder.com/150x100.jpg'
		),
		createData(
			'GIÁO TRÌNH TRANG ĐIỂM',
			175,
			165,
			0,
			10,
			'https://via.placeholder.com/150x100.jpg'
		),
		createData(
			'KIẾN THỨC COLLAGEN VIDEO',
			120,
			81,
			32,
			7,
			'https://via.placeholder.com/150x100.jpg'
		),
		createData(
			'GIÁO TRÌNH CHƯƠNG TRÌNH KHUYẾN MÃI',
			116,
			104,
			0,
			12,
			'https://via.placeholder.com/150x100.jpg'
		),
	]

	// // Data without images
	// const rows = [
	//   createData('GIÁO TRÌNH DA', 232, 199, 31, 2),
	//   createData('GIÁO TRÌNH MẶT NẠ', 178, 161, 0, 17),
	//   createData('GIÁO TRÌNH TRANG ĐIỂM', 175, 165, 0, 10),
	//   createData('KIẾN THỨC COLLAGEN VIDEO', 120, 81, 32, 7),
	//   createData('GIÁO TRÌNH CHƯƠNG TRÌNH KHUYẾN MÃI', 116, 104, 0, 12)
	// ];

	return (
		<MuiTableFrame title={title} width={width}>
			<TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
				<Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
								STT
							</TableCell>
							<TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
								TÊN KHÓA HỌC
							</TableCell>
							<TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
								HỌC VIÊN
							</TableCell>
							<TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
								CHƯA HỌC
							</TableCell>
							<TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
								ĐANG HỌC
							</TableCell>
							<TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
								HOÀN THÀNH
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row, i) => (
							<TableRow
								key={i}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell
									component='th'
									scope='row'
									sx={{ verticalAlign: 'top' }}
								>
									{i + 1}
								</TableCell>
								<TableCell align='left' sx={{ verticalAlign: 'top' }}>
									<CourseInfo
										courseName={row.courseName}
										imageUrl={row.imageUrl}
									/>
								</TableCell>
								<TableCell
									align='center'
									sx={{ color: '#FF0E13', verticalAlign: 'top' }}
								>
									{row.numberOfStudents}
								</TableCell>
								<TableCell
									align='center'
									sx={{ color: '#A267BB', verticalAlign: 'top' }}
								>
									{row.notStart}
								</TableCell>
								<TableCell
									align='center'
									sx={{ color: '#ff9800', verticalAlign: 'top' }}
								>
									{row.started}
								</TableCell>
								<TableCell
									align='center'
									sx={{ color: '#25B7A3', verticalAlign: 'top' }}
								>
									{row.completed}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</MuiTableFrame>
	)
}

MuiTable.propTypes = {
	title: PropTypes.string.isRequired,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MuiTable.defaultProps = {
	title: 'Báo Cáo',
	width: '50vw',
}

export default MuiTable
