"use client";
import { useState,useEffect } from "react";
import Link from "next/link";
import InspectionList from "@/app/static/js/inspectionList.jsx";
import { useRouter } from 'next/navigation';

export default function Create() {
const [errid,setErrId] = useState<any>([])
const [insData,setInsData] = useState<any>([])
const router = useRouter();
var car_Id:any = undefined;

useEffect(()=>{
 car_Id = localStorage.getItem("carId")
})


  const handleEditformsubmit = async(e: any) =>{
    e.preventDefault();
    var errids = [];
   var arr_length = InspectionList.length;
  var chkbx = "chkbx_";
  var notes = "notes_";
      var data = [];
     var user_data = Object()

      for (var i = 0; i < arr_length; i++) {
        let chkbx_state: any = (document.getElementById(chkbx + (i+1)) as HTMLInputElement).checked;
        let user_note: any = (
          document.getElementById(notes + (i+1)) as HTMLInputElement
        )?.value;
      
        if (!chkbx_state && !user_note){
          document.getElementById(notes + (i+1))
          console.log(notes+(i+1))
         errids.push(notes+(i+1))
         setErrId(errids)
        }

        let check_key = "is_"+InspectionList[i].key
        user_data[check_key] = chkbx_state
        if(user_note)
        {
          let note_key = InspectionList[i].key+"_note"
          user_data[note_key] = user_note
        }
      
      }
      const inspec_points = Object.values(user_data).filter((i)=> i == true).length;
      const dataset = {...user_data, "user_name":"test","car_id":car_Id}
      errids = []
    const response = await fetch("http://localhost:8000/new/inspection",
    {method: 'POST',
    body: JSON.stringify({
      dataset,
      inspec_points,
      car_Id,
    }),
        headers: {"Content-Type": "application/json",}
  }).then((res)=>{console.log(res) }).catch((err)=>console.log(err))
    router.push("/dashboard")
  }


  return (
    <>
      <div className="h-screen w-full pt-10">
        <h1 className="flex align-center justify-center ">INSPECTION REPORT</h1>
        <h2 className="flex align-center justify-center pt-10">Vehicle records and documents (11 points)</h2>
        <main className="flex min-h-screen flex-col items-center pt-10">
          <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm ">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <form onSubmit={handleEditformsubmit}>
                      <table
                        className="w-full text-left text-sm font-light"
                        id="inspect_table"
                      >
                        <thead className="border-b border-t font-medium dark:border-neutral-500">
                          <tr>
                            <th scope="col" className="px-6 py-4">
                              S.NO
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Inspection CheckList
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Is Good
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Note
                            </th>
                          </tr>
                        </thead>

                        <tbody id={"table_body"}>
                          {InspectionList?.map((item: any,index) => (
                            <tr
                              className="border-b dark:border-neutral-500"
                              key={item.id}
                              id={item.id}
                            >
                              <td className="whitespace-nowrap px-6 py-4 font-medium">
                                {item.id}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {item.title}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                <input
                                  type="checkbox" name="checkbox_group"
                                  id={"chkbx_" + `${item.id}`}
                                />
                              </td>
                              <td className="whitespace-nowrap px-6 py-4 text-black">
                                <input
                                  type="text"
                                  id={"notes_" + `${item.id}`}
                                />{" "}
                              </td>
                              {errid.includes("notes_"+ `${item.id}`) ?  "please enter valid credentials" : " " }
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="text-center">
                      <div className="space-y-2 space-x-4 pt-10 ">
                        <button  type="submit" className= "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Submit</button>
                        <button type="reset" className= "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Clear</button>
                        <Link href={"/dashboard"}><button type="submit" className= "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">cancel</button></Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
