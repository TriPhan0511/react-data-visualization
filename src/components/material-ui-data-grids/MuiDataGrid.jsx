import * as React from 'react'
import PropTypes from 'prop-types'
import { DataGrid } from '@mui/x-data-grid'
import MuiDataGridFrame from './MuiDataGridFrame'

import { faFileLines } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const columns = [
	{ field: 'id', headerName: 'ID', width: 90 },
	{ field: 'account', headerName: 'Tài khoản đăng nhập', width: 150 },
	{ field: 'fullName', headerName: 'Họ và tên', width: 250 },
	{ field: 'email', headerName: 'Email', width: 230 },
	{ field: 'phoneNumber', headerName: 'SĐT', width: 120 },
	{ field: 'proctorId', headerName: 'Mã cán bộ', width: 150 },
	{ field: 'registerDateTime', headerName: 'Ngày đăng ký', width: 180 },
	{ field: 'status', headerName: 'Trạng thái', width: 120 },
	{ field: 'durationOfStudying', headerName: 'Thời gian học', width: 110 },
	{ field: 'score', headerName: 'Điểm thi', type: 'number', width: 90 },
	{ field: 'result', headerName: 'Kết quả', width: 120 },
	{
		field: 'numberOfMedals',
		headerName: 'Số huy chương',
		type: 'number',
		width: 120,
	},
	{ field: 'startingDateTime', headerName: 'Ngày bắt đầu học', width: 180 },
	{ field: 'endingDateTime', headerName: 'Ngày kết thúc học', width: 180 },
	{
		field: 'commentFromTeacher',
		headerName: 'Nhận xét của giáo viên',
		width: 180,
	},
]

const rows = [
	{
		id: 1,
		account: 'phuong.nguyenyen',
		fullName: 'Nguyễn Yến Phương',
		email: 'phuong.nguyenyen@gmail.com',
		phoneNumber: null,
		proctorId: null,
		registerDateTime: '21/03/2022 11:43:22 SA',
		status: 'Đã hoàn thành',
		durationOfStudying: '19585 phút',
		score: null,
		result: null,
		numberOfMedals: 0,
		startingDateTime: '21/03/2022 11:43:23 SA',
		endingDateTime: '26/03/2022 09:13:11 SA',
		commentFromTeacher: null,
	},
	{
		id: 2,
		account: 'newbie',
		fullName: 'NewBie',
		email: 'newbie@gmail.com',
		phoneNumber: '0905123456',
		proctorId: null,
		registerDateTime: '24/03/2022 09:39:24 SA',
		status: 'Đang học',
		durationOfStudying: '740 phút',
		score: null,
		result: null,
		numberOfMedals: 0,
		startingDateTime: '24/03/2022 09:39:24 SA',
		endingDateTime: '24/03/2022 11:33:19 SA',
		commentFromTeacher: null,
	},
	{
		id: 3,
		account: 'tham.hathi',
		fullName: 'Hà Thị Thắm',
		email: 'tham.hathi@gmail.com',
		phoneNumber: '0905123456',
		proctorId: null,
		registerDateTime: '24/03/2022 09:39:24 SA',
		status: 'Đang học',
		durationOfStudying: '740 phút',
		score: null,
		result: null,
		numberOfMedals: 0,
		startingDateTime: '24/03/2022 09:39:24 SA',
		endingDateTime: '24/03/2022 11:33:19 SA',
		commentFromTeacher: null,
	},
	{
		id: 4,
		account: 'tham.hathi',
		fullName: 'Hà Thị Thắm',
		email: 'tham.hathi@gmail.com',
		phoneNumber: '0905123456',
		proctorId: null,
		registerDateTime: '24/03/2022 09:39:24 SA',
		status: 'Đang học',
		durationOfStudying: '740 phút',
		score: null,
		result: null,
		numberOfMedals: 0,
		startingDateTime: '24/03/2022 09:39:24 SA',
		endingDateTime: '24/03/2022 11:33:19 SA',
		commentFromTeacher: null,
	},
	{
		id: 5,
		account: 'tham.hathi',
		fullName: 'Hà Thị Thắm',
		email: 'tham.hathi@gmail.com',
		phoneNumber: '0905123456',
		proctorId: null,
		registerDateTime: '24/03/2022 09:39:24 SA',
		status: 'Đang học',
		durationOfStudying: '740 phút',
		score: null,
		result: null,
		numberOfMedals: 0,
		startingDateTime: '24/03/2022 09:39:24 SA',
		endingDateTime: '24/03/2022 11:33:19 SA',
		commentFromTeacher: null,
	},
	{
		id: 6,
		account: 'tham.hathi',
		fullName: 'Hà Thị Thắm',
		email: 'tham.hathi@gmail.com',
		phoneNumber: '0905123456',
		proctorId: null,
		registerDateTime: '24/03/2022 09:39:24 SA',
		status: 'Đang học',
		durationOfStudying: '740 phút',
		score: null,
		result: null,
		numberOfMedals: 0,
		startingDateTime: '24/03/2022 09:39:24 SA',
		endingDateTime: '24/03/2022 11:33:19 SA',
		commentFromTeacher: null,
	},
	{
		id: 7,
		account: 'tham.hathi',
		fullName: 'Hà Thị Thắm',
		email: 'tham.hathi@gmail.com',
		phoneNumber: '0905123456',
		proctorId: null,
		registerDateTime: '24/03/2022 09:39:24 SA',
		status: 'Đang học',
		durationOfStudying: '740 phút',
		score: null,
		result: null,
		numberOfMedals: 0,
		startingDateTime: '24/03/2022 09:39:24 SA',
		endingDateTime: '24/03/2022 11:33:19 SA',
		commentFromTeacher: null,
	},
	{
		id: 8,
		account: 'tham.hathi',
		fullName: 'Hà Thị Thắm',
		email: 'tham.hathi@gmail.com',
		phoneNumber: '0905123456',
		proctorId: null,
		registerDateTime: '24/03/2022 09:39:24 SA',
		status: 'Đang học',
		durationOfStudying: '740 phút',
		score: null,
		result: null,
		numberOfMedals: 0,
		startingDateTime: '24/03/2022 09:39:24 SA',
		endingDateTime: '24/03/2022 11:33:19 SA',
		commentFromTeacher: null,
	},
	{
		id: 9,
		account: 'tham.hathi',
		fullName: 'Hà Thị Thắm',
		email: 'tham.hathi@gmail.com',
		phoneNumber: '0905123456',
		proctorId: null,
		registerDateTime: '24/03/2022 09:39:24 SA',
		status: 'Đang học',
		durationOfStudying: '740 phút',
		score: null,
		result: null,
		numberOfMedals: 0,
		startingDateTime: '24/03/2022 09:39:24 SA',
		endingDateTime: '24/03/2022 11:33:19 SA',
		commentFromTeacher: null,
	},
	{
		id: 10,
		account: 'tham.hathi',
		fullName: 'Hà Thị Thắm',
		email: 'tham.hathi@gmail.com',
		phoneNumber: '0905123456',
		proctorId: null,
		registerDateTime: '24/03/2022 09:39:24 SA',
		status: 'Đang học',
		durationOfStudying: '740 phút',
		score: null,
		result: null,
		numberOfMedals: 0,
		startingDateTime: '24/03/2022 09:39:24 SA',
		endingDateTime: '24/03/2022 11:33:19 SA',
		commentFromTeacher: null,
	},
	{
		id: 11,
		account: 'tham.hathi',
		fullName: 'Hà Thị Thắm',
		email: 'tham.hathi@gmail.com',
		phoneNumber: '0905123456',
		proctorId: null,
		registerDateTime: '24/03/2022 09:39:24 SA',
		status: 'Đang học',
		durationOfStudying: '740 phút',
		score: null,
		result: null,
		numberOfMedals: 0,
		startingDateTime: '24/03/2022 09:39:24 SA',
		endingDateTime: '24/03/2022 11:33:19 SA',
		commentFromTeacher: null,
	},
	{
		id: 12,
		account: 'tham.hathi',
		fullName: 'Hà Thị Thắm',
		email: 'tham.hathi@gmail.com',
		phoneNumber: '0905123456',
		proctorId: null,
		registerDateTime: '24/03/2022 09:39:24 SA',
		status: 'Đang học',
		durationOfStudying: '740 phút',
		score: null,
		result: null,
		numberOfMedals: 0,
		startingDateTime: '24/03/2022 09:39:24 SA',
		endingDateTime: '24/03/2022 11:33:19 SA',
		commentFromTeacher: null,
	},
]

// export default function MuiDataGrid({ title, width }) {
const MuiDataGrid = ({ title, width }) => {
	return (
		<MuiDataGridFrame width={width} title={title}>
			<div style={{ height: 400, width: '100%' }}>
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[5]}
					sx={{ border: 'none' }}
				/>
			</div>
		</MuiDataGridFrame>
	)
}

MuiDataGridFrame.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MuiDataGridFrame.defaultProps = {
	title: 'Báo Cáo',
	width: '100vw',
}

export default MuiDataGrid

// // ----------------------------------------------------
// export default function MuiDataGrid() {
// 	return (
// 		<div>
// 			<h3
// 				style={{
// 					backgroundColor: '#00A65A',
// 					color: '#fff',
// 					margin: 0,
// 					padding: '15px 10px',
// 					letterSpacing: '0.01071em',
// 					fontWeight: 400,
// 					fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
// 					fontSize: '1.4rem',
// 				}}
// 			>
// 				<FontAwesomeIcon icon={faFileLines} />
// 				<span style={{ marginLeft: '5px' }}>BÁO CÁO KHÓA HỌC</span>
// 			</h3>
// 			<div style={{ height: 400, width: '100%' }}>
// 				<DataGrid
// 					rows={rows}
// 					columns={columns}
// 					pageSize={5}
// 					rowsPerPageOptions={[5]}
// 					sx={{ border: 'none' }}
// 				/>
// 			</div>
// 		</div>
// 	)
// }

// // ----------------------------------------------------
// export default function MuiDataGrid() {
// 	return (
// 		<div>
// 			<h3
// 				style={{
// 					backgroundColor: '#00A65A',
// 					color: '#fff',
// 					margin: 0,
// 					padding: '15px 10px',
// 					letterSpacing: '0.01071em',
// 					fontWeight: 400,
// 					fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
// 					fontSize: '1.4rem',
// 				}}
// 			>
// 				<FontAwesomeIcon icon={faFileLines} />
// 				<span style={{ marginLeft: '5px' }}>BÁO CÁO KHÓA HỌC</span>
// 			</h3>
// 			<div style={{ height: 400, width: '100%' }}>
// 				<DataGrid
// 					rows={rows}
// 					columns={columns}
// 					pageSize={5}
// 					rowsPerPageOptions={[5]}
// 					sx={{ border: 'none' }}
// 				/>
// 			</div>
// 		</div>
// 	)
// }