import { useState } from "react";
import "./Products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Görsel",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "başlık",
    type: "string",
    headerName: "Başlık",
    width: 250,
  },
  {
    field: "renk",
    type: "string",
    headerName: "Renk",
    width: 150,
  },
  {
    field: "fiyat",
    type: "string",
    headerName: "Fiyat",
    width: 200,
  },
  {
    field: "marka",
    headerName: "Marka",
    type: "string",
    width: 200,
  },
  {
    field: "yüklenmetarihi",
    headerName: "Yüklenme Tarihi",
    width: 200,
    type: "string",
  },
  {
    field: "stok",
    headerName: "Stok Durumu",
    width: 150,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allproducts"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/products").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="products">
      <div className="info">
        <h1>Ürünler</h1>
        <button onClick={() => setOpen(true)}>Yeni Ürün Ekle</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="products" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="ürün" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;