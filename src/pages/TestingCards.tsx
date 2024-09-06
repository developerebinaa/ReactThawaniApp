import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function createData(
    name: string,
    message: string,

) {
    return { name, message };
}

const rows = [
    createData('4242 4242 4242 4242', "Always accept."),
    createData('4000 0000 0000 0002', 'Always reject.'),
    createData('4456 5300 0000 1096', 'To test 3D Secure (Credit Card). Always accept.'),
    createData('4456 5300 0000 1104', 'To test 3D Secure (Credit Card). Always reject.'),
];

export default function Page() {
    return (
        <>
            <Box sx={{width:660 , margin: '0 auto'}}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>CARD NUMBER</TableCell>
                                <TableCell align="right">DESCRIPTION</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.message}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
}
