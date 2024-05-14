import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

// const columns = [
//   { id: "stt", label: "STT", minWidth: 50, align: "center" },
//   { id: "msdg", label: "Mã độc giả", minWidth: 50, align: "center" },
//   { id: "hoten", label: "Họ tên", minWidth: 170, align: "center" },
//   { id: "ngaysinh", label: "Ngày sinh", minWidth: 120, align: "center" },
//   { id: "loaidocgia", label: "Loại Độc giả", minWidth: 50, align: "center" },
//   { id: "email", label: "Email", minWidth: 170, align: "center" },
//   { id: "diachi", label: "Địa chỉ", minWidth: 170, align: "center" },
//   { id: "ngaylapthe", label: "Ngày Lập thẻ", minWidth: 120, align: "center" },
// ];

// function createData(
//   stt,
//   msdg,
//   hoten,
//   ngaysinh,
//   loaidocgia,
//   email,
//   diachi,
//   ngaylapthe
// ) {
//   return { stt, msdg, hoten, ngaysinh, loaidocgia, email, diachi, ngaylapthe };
// }

// const rows = [
//   createData(
//     "1",
//     "MSDG001",
//     "Nguyễn Văn A",
//     "1990-01-15",
//     "X",
//     "vana@gmail.com",
//     "123 Đường ABC, Phường 1, TP HCM",
//     "2022-03-01"
//   ),
//   createData(
//     "2",
//     "MSDG002",
//     "Trần Thị B",
//     "1982-05-22",
//     "X",
//     "ttb@gmail.com",
//     "234 Đường XYZ, Phường 2, TP Hà Nội",
//     "2022-05-12"
//   ),
//   createData(
//     "3",
//     "MSDG003",
//     "Lê Văn C",
//     "1975-03-30",
//     "X",
//     "lvc@gmail.com",
//     "345 Đường DEF, Quận 3, TP Đà Nẵng",
//     "2022-07-23"
//   ),
//   createData(
//     "4",
//     "MSDG004",
//     "Phạm Thị D",
//     "2001-08-19",
//     "Y",
//     "ptd@gmail.com",
//     "456 Đường GHI, Quận 4, TP Cần Thơ",
//     "2022-09-05"
//   ),
//   createData(
//     "5",
//     "MSDG005",
//     "Hoàng Minh E",
//     "1995-12-12",
//     "X",
//     "hme@gmail.com",
//     "567 Đường JKL, Quận 5, TP Huế",
//     "2022-11-15"
//   ),
//   createData(
//     "6",
//     "MSDG006",
//     "Nguyễn Thị F",
//     "1989-11-25",
//     "Y",
//     "ntf@gmail.com",
//     "678 Đường MNO, Phường 6, TP Nha Trang",
//     "2023-01-20"
//   ),
//   createData(
//     "7",
//     "MSDG007",
//     "Võ Văn G",
//     "1972-04-17",
//     "X",
//     "vvg@gmail.com",
//     "789 Đường PQR, Phường 7, TP Vũng Tàu",
//     "2023-03-18"
//   ),
//   createData(
//     "8",
//     "MSDG008",
//     "Đặng Hồng H",
//     "1968-09-06",
//     "X",
//     "dhh@gmail.com",
//     "890 Đường STU, Quận 8, TP Hải Phòng",
//     "2023-05-22"
//   ),
//   createData(
//     "9",
//     "MSDG009",
//     "Bùi Thị I",
//     "2002-06-13",
//     "X",
//     "bti@gmail.com",
//     "901 Đường VWX, Phường 9, TP Biên Hòa",
//     "2023-07-31"
//   ),
//   createData(
//     "10",
//     "MSDG010",
//     "Trương Đình J",
//     "1985-07-20",
//     "Y",
//     "tdj@gmail.com",
//     "012 Đường YZA, Quận 10, TP Quy Nhơn",
//     "2023-10-09"
//   ),
// ];

export default function StickyHeadTable(props) {
  const { columns, rows } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.stt}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[3, 5, 10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
