import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./Users.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import { userRows } from "../../data";
// import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "adı",
    type: "string",
    headerName: "Adı",
    width: 150,
  },
  {
    field: "soyadı",
    type: "string",
    headerName: "Soyadı",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "ceptelefonu",
    type: "string",
    headerName: "Cep Telefonu",
    width: 200,
  },
  {
    field: "oluşturulmatarihi",
    headerName: "Oluşturulma Tarihi",
    width: 200,
    type: "string",
  },
  {
    field: "kabul",
    headerName: "Kabul",
    width: 150,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allusers"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/users").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="users">
      <div className="info">
        <h1>Kullanıcılar</h1>
        <button onClick={() => setOpen(true)}>Yeni Kullanıcı Ekle</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="kullanıcı" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;