import "./transaction.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Transaction() {
  const rows = [
    {
      id: 20152356,
      name: "Bikalpa",
      product: "HP Omen 16",
      // icon:<PersonOutlineOutlinedIcon className='wid-icon'/>,
      date: "01/21/2023",
      amount: "$1500",
    },
    {
      id: 21251341,
      name: "Adam",
      product: "Iphone 13",
      // img:<MonetizationOnOutlinedIcon className='wid-icon'/>,
      date: "12/27/2022",
      amount: "$700",
    },
    {
      id: 21111242,
      name: "Alex",
      product: "MI TV",
      // img:<ShoppingCartCheckoutOutlinedIcon className='wid-icon'/>,
      date: "12/17/2022",
      amount: "$1000",
    },
    {
      id: 12324126,
      name: "Bob",
      product: "GTX 1650",
      // img:<AccountBalanceWalletOutlinedIcon className='wid-icon'/>,
      date: "11/01/2022",
      amount: "$500",
    },
  ];
  return (
    <div className="table">
       <div className="history">Transaction History</div>
      <TableContainer sx={{ minWidth: 350 }} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="bold">ID</TableCell>
              <TableCell className="bold" align="center">Name</TableCell>
              <TableCell className="bold" align="center">Product</TableCell>
              <TableCell className="bold" align="center">Amount</TableCell>
              <TableCell className="bold" align="center">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
              >
                <TableCell>
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.product}</TableCell>
                <TableCell align="center">{row.amount}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
