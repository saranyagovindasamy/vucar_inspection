"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [carList, setCarList] = useState<any>([]);

  const handleLogout = () => {
    localStorage.removeItem("carId");
  };
  const storeCarData = (car_id: any) => {
    localStorage.setItem("carId", car_id);
  };
  const getList = async () => {
    const response = await fetch("http://localhost:8000/cars");
    const res = await response.json();
    setCarList(res.data);
  };

  
  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <div className="flex flex-row justify-between  py-8 px-8">
        <div className="space-x-3  ">
        <Link href="/dashboard/newcar">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              {" "}
              CREATE CAR
            </button>
          </Link>
          </div>
          <Link href="/">
            <button
              onClick={handleLogout}
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              {" "}
              Logout
            </button>
          </Link>

     
      </div>
      <main className="flex min-h-screen flex-col items-center pt-4">
        <div className="z-10 p-24 w-full items-center justify-center font-mono text-sm ">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          S.NO
                        </th>
                        <th scope="col" className="px-6 py-4">
                          CAR
                        </th>
                        <th scope="col" className="px-6 py-4">
                          MODEL
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Inspection_points
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Inspection
                        </th>
                        <th scope="col" className="px-6 py-4">
                          CREATED_AT
                        </th>
                        <th scope="col" className="px-6 py-4">
                          UPDATED_AT
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {carList.length > 0
                        ? carList?.map((item: any, index: any) => (
                            <tr
                              className="border-b dark:border-neutral-500"
                              key={index}
                            >
                              <td className="whitespace-nowrap px-6 py-4 font-medium">
                                {item.car_id}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {item.car_name}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {item.car_modal}
                              </td>
                              <td className="whitespace-nowrap px-12 py-6  ">
                                {item.inspect_point}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                <Link href="/dashboard/create">
                                  <button
                                    onClick={(e) => storeCarData(item.car_id)}
                                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                                  >
                                  {item.inspect_point == 0 ? "Create Inspection":"Update Inspection"}
                                  </button>
                                </Link>
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {item.created_at}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {item.updated_at}
                              </td>
                             
                            </tr>
                          ))
                        : " "}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
