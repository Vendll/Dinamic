import { BiTrash } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/solid";

const products = [
  {
    name: "Nigga",
    title: "700 USD",
    role: "2022.05.12",
    email: "170 000 Ft",
    price1: "205 000 Ft",
    price2: "205 000 Ft",
    price3: "205 000 Ft",
    price4: "205 000 Ft",
    price5: "205 000 Ft",
  },
  {
    name: "Jane Cooper",
    title: "650 USD",
    role: "2022.05.12",
    email: "170 000 Ft",
    price1: "205 000 Ft",
    price2: "205 000 Ft",
    price3: "205 000 Ft",
    price4: "205 000 Ft",
    price5: "205 000 Ft",
  },
  // More people...
];
const Table = () => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-white">
                <tr className="text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  <th scope="col" className="px-6 py-3">
                    Termék
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Kisker Nettó Ár
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Kisker Bruttó Ár
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nagyker Nettó Ár
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nagyker Bruttó Ár
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Special
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Beker Valuta
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Beker huf
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Módosítva
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Műveletek</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr
                    key={product.email}
                    className="whitespace-nowrap text-sm text-gray-900 odd:bg-gray-100 hover:bg-blue-100"
                  >
                    <td className="px-6 py-4 font-medium">{product.name}</td>
                    <td className="px-6 py-4 ">{product.price1}</td>
                    <td className="px-6 py-4">{product.price2}</td>
                    <td className="px-6 py-4">{product.price3}</td>
                    <td className="px-6 py-4">{product.price4}</td>
                    <td className="px-6 py-4">{product.price5}</td>
                    <td className="px-6 py-4">{product.title}</td>
                    <td className="px-6 py-4">{product.email}</td>
                    <td className="px-6 py-4">{product.role}</td>
                    <td className="px-6 py-4 flex text-right text-base">
                      <a href="#" className="text-blue-500 hover:text-blue-700">
                        <FiEdit />
                      </a>
                      <p className=" text-transparent">|</p>
                      <a href="#" className="text-blue-500 hover:text-blue-700">
                        <BiTrash />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <nav className="border-t border-gray-200 px-4 flex items-center justify-between">
              <div className=" w-0 flex-1 flex">
                <a
                  href="#"
                  className="border-t-2 border-transparent py-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                >
                  <ArrowNarrowLeftIcon
                    className="mr-3 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Previous
                </a>
              </div>
              <div className="hidden md:flex">
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 py-4 px-4 inline-flex items-center text-sm font-medium"
                >
                  1
                </a>
                {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
                <a
                  href="#"
                  className="border-blue-500 text-blue-600 border-t-2 py-4 px-4 inline-flex items-center text-sm font-medium"
                  aria-current="page"
                >
                  2
                </a>
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 py-4 px-4 inline-flex items-center text-sm font-medium"
                >
                  3
                </a>
                <span className="border-transparent text-gray-500 border-t-2 py-4 px-4 inline-flex items-center text-sm font-medium">
                  ...
                </span>
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 py-4 px-4 inline-flex items-center text-sm font-medium"
                >
                  8
                </a>
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 py-4 px-4 inline-flex items-center text-sm font-medium"
                >
                  9
                </a>
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 py-4 px-4 inline-flex items-center text-sm font-medium"
                >
                  10
                </a>
              </div>
              <div className="w-0 flex-1 flex justify-end">
                <a
                  href="#"
                  className="border-t-2 border-transparent py-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                >
                  Next
                  <ArrowNarrowRightIcon
                    className="ml-3 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
