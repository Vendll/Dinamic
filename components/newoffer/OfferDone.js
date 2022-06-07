import Card from "../ui/Card";
import {
  BsFileImage,
  BsFillFileEarmarkTextFill,
  BsFillFileEarmarkExcelFill,
} from "react-icons/bs";

const peopl = [
  {
    name: "1 db",
    title: "Jack",
    role: "84522900",
    email: "A4F-D",
    netpcs: "230 000 Ft",
    netall: "230 000 Ft",
    afa: "65 610 Ft",
    brutall: "308 610 Ft",
    deal: "-",
  },
  // More people...
];

const OfferDone = () => {
  return (
    <div className="mx-4 my-4">
      <Card>
        <div className="grid grid-cols-2">
          <div className="px-12 py-12">
            <Card>
              <div className="p-4">
                <div className="text-xl font-semibold">Ügyfél adatai:</div>
                <div className="grid grid-cols-4 gap-2 my-2">
                  <div className="text-right col-span-1">Név:</div>
                  <div className="col-span-3">Törő István</div>
                </div>
                <div className="grid grid-cols-4 gap-2 my-2">
                  <div className="text-right col-span-1">Név:</div>
                  <div className="col-span-3">Exa SM Kft</div>
                </div>
                <div className="grid grid-cols-4 gap-2 my-2">
                  <div className="text-right col-span-1">Cím:</div>
                  <div className="col-span-3">2011 Budakalász Budai út 73.</div>
                </div>
                <div className="grid grid-cols-4 gap-2 my-2">
                  <div className="text-right col-span-1">Adószám:</div>
                  <div className="col-span-3">12508897-2-42</div>
                </div>
                <div className="grid grid-cols-4 gap-2 my-2">
                  <div className="text-right col-span-1">Telefon:</div>
                  <div className="col-span-3">+36707738119</div>
                </div>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  <div className="text-right col-span-1">Email:</div>
                  <div className="col-span-3">exa.varrogep@gmail.com</div>
                </div>
              </div>
            </Card>
          </div>
          <div className="px-12 py-12">
            <Card>
              <div className="p-4">
                <div className="text-xl font-semibold">Ajánlat adatai:</div>
                <div className="grid grid-cols-4 gap-2 my-2">
                  <div className="text-right col-span-1">Kedvezmény:</div>
                  <div className="col-span-3">Nincs</div>
                </div>
                <div className="grid grid-cols-4 gap-2 my-2">
                  <div className="text-right col-span-1">Érvényesség:</div>
                  <div className="col-span-3">30 nap</div>
                </div>
                <div className="grid grid-cols-4 gap-2 my-2">
                  <div className="text-right col-span-1">Szállítási idő:</div>
                  <div className="col-span-3">1-2 hét</div>
                </div>
                <div className="grid grid-cols-4 gap-2 my-2">
                  <div className="text-right col-span-1">
                    Fizetési határidő:
                  </div>
                  <div className="col-span-3">8 nap</div>
                </div>
                <div className="grid grid-cols-4 gap-2 my-2">
                  <div className="text-right col-span-1">Garancia:</div>
                  <div className="col-span-3">1 év</div>
                </div>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  <div className="text-right col-span-1">Fizetés típusa:</div>
                  <div className="col-span-3">Átutalás</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        {/* <div className="text-center my-6">
          <h2 className="text-xl font-bold">Köszönjük a megrendelést!</h2>
          <p className="text-lg">Hamarosan felvesszük Önnel a kapcsolatot.</p>
        </div> */}
        {/* Összesítés */}
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-t-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <th scope="col" className="px-6 py-3">
                        Mennyiség
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Gyártó
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Név
                      </th>
                      <th scope="col" className="px-6 py-3">
                        VTSZ
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Nettó/db
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Nettó összesen
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Áfa összesen
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Bruttó össz
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Kedvezmény
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {peopl.map((person) => (
                      <tr
                        key={person.email}
                        className="whitespace-nowrap text-sm text-gray-900"
                      >
                        <td className="px-6 py-4">{person.name}</td>
                        <td className="px-6 py-4">{person.title}</td>
                        <td className="px-6 py-4">{person.email}</td>
                        <td className="px-6 py-4">{person.role}</td>
                        <td className="px-6 py-4">{person.netpcs}</td>
                        <td className="px-6 py-4">{person.netall}</td>
                        <td className="px-6 py-4">{person.afa}</td>
                        <td className="px-6 py-4">{person.brutall}</td>
                        <td className="px-6 py-4">{person.deal}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="">
                    <tr className="text-left text-sm font-medium uppercase tracking-wider">
                      <td className="px-6 py-3" colSpan="5">
                        Összesen:
                      </td>
                      <td className="px-6 py-3">230 000 Ft</td>
                      <td className="px-6 py-3">65 610 Ft</td>
                      <td className="px-6 py-3">308 610 Ft</td>
                      <td className="px-6 py-3">-</td>
                    </tr>
                  </tfoot>
                </table>
                <div className="px-6 pt-4 pb-4">
                  <button className="px-4 py-2 rounded-md bg-blue-500 w-full my-1 text-white hover:bg-blue-600">
                    Vissza a termékek szerkesztéséhez
                  </button>
                </div>
                <div className="px-5 pb-4 flex">
                  <button className="flex px-4 py-2 justify-center rounded-md bg-blue-500 w-full mx-1 text-white hover:bg-blue-600">
                    <BsFileImage className="self-center mr-2" /> Képes PDF
                  </button>
                  <button className="flex px-4 py-2 justify-center rounded-md bg-blue-500 w-full mx-1 text-white hover:bg-blue-600">
                    <BsFillFileEarmarkTextFill className="self-center mr-2" />{" "}
                    Sima PDF
                  </button>
                  <button className="flex px-4 py-2 justify-center rounded-md bg-blue-500 w-full mx-1 text-white hover:bg-blue-600">
                    <BsFillFileEarmarkExcelFill className="self-center mr-2" />{" "}
                    Excel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OfferDone;
