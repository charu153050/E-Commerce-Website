import React, { useEffect, useState } from "react";
import { Footer } from "./Assets/footer";
import { Navbar } from "./Navbar";

export const HomePage = () => {
  const [getuserdata, setUserdata] = useState([]);
  const [order, setorder] = useState("ASC");
  const [order1, setorder1] = useState("ASC");

  const getdata = async () => {
    const res = await fetch("http://localhost:9002/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application / json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      console.log("error ");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...getuserdata].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setUserdata(sorted);
      setorder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...getuserdata].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setUserdata(sorted);
      setorder("ASC");
    }
  };
  const sort = (col) => {
    if (order1 === "ASC") {
      const sorte = [...getuserdata].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setUserdata(sorte);
      setorder1("DSC");
    }
    if (order1 === "DSC") {
      const sorte = [...getuserdata].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setUserdata(sorte);
      setorder1("ASC");
    }
  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="mt-5">
        <div className="container">
          <form>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr className="table-success">
                    <th scope="col">id</th>
                    <th scope="col" onClick={() => sorting("productName")}>
                      ProductName
                    </th>
                    <th scope="col" onClick={() => sorting("category")}>
                      Category
                    </th>
                    <th scope="col" onClick={() => sorting("creationDate")}>
                      Creation Date
                    </th>
                    <th scope="col" onClick={() => sorting("expirationDate")}>
                      Expiration Date
                    </th>
                    <th scope="col" onClick={() => sort("mrp")}>
                      MRP
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {getuserdata.map((element, id) => {
                    return (
                      <>
                        <tr>
                          <th scope="row">{id + 1}</th>
                          <td>{element.productName}</td>
                          <td>{element.category}</td>
                          <td>{element.creationDate}</td>
                          <td>{element.expirationDate}</td>
                          <td>{element.mrp}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
