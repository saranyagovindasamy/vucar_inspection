export default function TableConfig(){
    return(
        <>
        <main className="flex min-h-screen flex-col items-center pt-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm ">
  <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="w-full text-left text-sm font-light">
            <thead className="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" className="px-6 py-4">S.NO</th>
                <th scope="col" className="px-6 py-4">CAR</th>
                <th scope="col" className="px-6 py-4">MODEL</th>
                <th scope="col" className="px-6 py-4">INSPECTION RESULT</th>
              </tr>
            </thead>
  
            <tbody>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td className="whitespace-nowrap px-6 py-4">Cell</td>
                <td className="whitespace-nowrap px-6 py-4">Cell</td>
                <td className="whitespace-nowrap px-6 py-4">Cell</td>
                <td className="whitespace-nowrap px-6 py-4">Cell</td>
              </tr>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4 font-medium ">2</td>
                <td className="whitespace-nowrap px-6 py-4">Cell</td>
                <td className="whitespace-nowrap px-6 py-4">Cell</td>
                <td className="whitespace-nowrap px-6 py-4">Cell</td>
                <td className="whitespace-nowrap px-6 py-4">Cell</td>
          
              </tr>
              <tr className="border-b ">
                <td className="whitespace-nowrap px-6 py-4 font-medium ">3</td>
                <td className="whitespace-nowrap px-6 py-4">Cell</td>
                <td className="whitespace-nowrap px-6 py-4">Cell</td>
                <td className="whitespace-nowrap px-6 py-4">Cell</td>
                <td className="whitespace-nowrap px-6 py-4">Cell</td>
              </tr>
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