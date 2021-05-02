// import React from 'react';
// import SearchTable from './Table';
// import { Link } from 'react-router-dom'

// const Search = () => {
//     return(
//         <Link path='/table' exact component={SearchTable} >
//         </Link>
//     )
// }

// export default Search

import React from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

class SearchTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			buildings: [],
		};
	}

	componentDidMount() {
		const apiUrl = 'http://localhost:49861/api/Search/SearchBuildings';

		fetch(apiUrl)
			.then((res) => res.json())
			.then(
				(result) => {
					this.setState({
						buildings: result,
					});
				},
				(error) => {
					this.setState({ error });
				}
			);
	}

	render() {
		const { error, buildings } = this.state;

		if (error) {
			return <div>Error: {error.message}</div>;
		} else {
			return (
				<div>
					<Table className="table table-bordered">
						<thead>
							<tr>
								<th>ID</th>
								<th>Title</th>
								<th>Building</th>
								<th>Location</th>
								<th>ConstructionDate</th>
								<th>BuildUpArea</th>
								<th>DateOfCompletion</th>
							</tr>
						</thead>
						<tbody>
							{buildings.map((buildings) => (
								<tr key={buildings.id}>
									<td>{buildings.id}</td>
									<td>{buildings.title}</td>
									<td>{buildings.building}</td>
									<td>{buildings.location}</td>
									<td>{buildings.constructionDate}</td>
									<td>{buildings.buildUpArea}</td>
									<td>{buildings.dateOfCompletion}</td>
								</tr>
							))}
						</tbody>
					</Table>
					<Button style={{ marginLeft: 650 }} variant="primary" href="/meeting">
						Fix Appointment
					</Button>
				</div>
			);
		}
	}
}

export default SearchTable;

// import React from "react";
// import { withStyles, makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import Button from 'react-bootstrap/Button';
// import axios from 'axios';

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// function createData(name, Building, Loc, Date, Area) {
//   return { name, Building, Loc, Date, Area };
// }

// const rows = [
//   createData("Simplex", "ABC", "dfg", "12/09/1998", "23456SQFT"),
//   createData("Simplex", "ABC", "dfg", "12/09/1998", "23456SQFT"),
//   createData("Simplex", "ABC", "dfg", "12/09/1998", "23456SQFT"),
//    createData("Simplex", "ABC", "dfg", "12/09/1998", "23456SQFT"),
//  ];

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });

// export default function CustomizedTables() {
//   const classes = useStyles();

//   axios.post("http://localhost:49861/api/Search/SearchTypesandBuildings",{
//     headers: {
//         "Content-Type": "application/json"
//     }
// }).then((response) => {
//     console.log(response)
// }).catch((response) => {
//     console.log(response)
// } )

//   return (
//     <div>
//     <TableContainer component={Paper}>
//     <Table className={classes.table} aria-label="customized table">
//       <TableHead>
//         <TableRow>
//           <StyledTableCell>Title</StyledTableCell>
//           <StyledTableCell align="center">Building</StyledTableCell>
//           <StyledTableCell align="center">Loc</StyledTableCell>
//           <StyledTableCell align="center">Date</StyledTableCell>
//           <StyledTableCell align="center">Area</StyledTableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {rows.map((row) => (
//           <StyledTableRow key={row.name}>
//             <StyledTableCell component="th" scope="row">
//               {row.name}
//             </StyledTableCell>
//             <StyledTableCell align="center">{row.Building}</StyledTableCell>
//             <StyledTableCell align="center">{row.Loc}</StyledTableCell>
//             <StyledTableCell align="center">{row.Date}</StyledTableCell>
//             <StyledTableCell align="center">{row.Area}</StyledTableCell>
//           </StyledTableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </TableContainer>
//   <br/>
//   <Button variant="primary" href="appointment"
//   >
//      Fix Appointment</Button>
// </div>
//   );
// }
