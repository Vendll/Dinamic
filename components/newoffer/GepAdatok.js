import Card from "../ui/Card";
import { Combobox, Transition } from "@headlessui/react";
import { SelectorIcon, CheckIcon, XIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";

const people = [
  { id: 1, name: "Jack A4F-D" },
  { id: 2, name: "Exatex EX-86" },
  { id: 3, name: "Siruba AA-6" },
  { id: 4, name: "Krafft KF-525C" },
  { id: 5, name: "Rotondi Mini 3" },
  { id: 6, name: "Comel BR/A" },
];

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

const GepAdatok = () => {
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Card>
      <div className="">
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
                      <th scope="col" className="relative px-6 py-3">
                        Műveletek
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
                        <td className="px-6 py-4 relative">
                          <input
                            type="number"
                            name="netpcs"
                            id="netpcs"
                            defaultValue="230000"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 mr-5 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />{" "}
                          <span className="absolute right-0 top-1/2 -translate-y-1/2 text-base">
                            Ft
                          </span>
                        </td>
                        <td className="px-6 py-4 relative">
                          <input
                            type="number"
                            name="netall"
                            id="netall"
                            defaultValue="230000"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 mr-5 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />{" "}
                          <span className="absolute right-0 top-1/2 -translate-y-1/2 text-base">
                            Ft
                          </span>
                        </td>
                        <td className="px-6 py-4">{person.afa}</td>
                        <td className="px-6 py-4 relative">
                          <input
                            type="number"
                            name="brutall"
                            id="brutall"
                            defaultValue="308610"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 mr-5 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />{" "}
                          <span className="absolute right-0 top-1/2 -translate-y-1/2 text-base">
                            Ft
                          </span>
                        </td>
                        <td className="px-6 py-4">{person.deal}</td>
                        <td className="px-6 py-4">
                          <a
                            href="#"
                            className="text-blue-600 hover:text-blue-700"
                          >
                            <XIcon className="h-6" />
                          </a>
                        </td>
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
                      <td className="px-6 py-3"></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Hozzáadási lehetőség */}
        <form className="w-full">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Termékek megadása
                </h3>
                <p className="mt-1 text-sm text-gray-500 sr-only">
                  Use a permanent address where you can recieve mail.
                </p>
              </div>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-1">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mennyiség
                  </label>
                  <input
                    type="number"
                    name="first-name"
                    id="first-name"
                    defaultValue="1"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <Combobox
                  value={selected}
                  onChange={setSelected}
                  className="grow col-span-2"
                >
                  <div className="relative mt-1">
                    <Combobox.Label
                      as="div"
                      className="text-sm font-medium text-gray-700"
                    >
                      Termék kiválasztása
                    </Combobox.Label>
                    <div className="relative w-full mt-1 cursor-default overflow-hidden rounded-lg bg-white border border-gray-300 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                      <Combobox.Input
                        className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                        displayValue={(person) => person.name}
                        onChange={(event) => setQuery(event.target.value)}
                      />
                      <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <SelectorIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </Combobox.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                      afterLeave={() => setQuery("")}
                    >
                      <Combobox.Options className="absolute mt-1 max-h-60 w-full max-w-lg overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredPeople.length === 0 && query !== "" ? (
                          <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                            Nothing found.
                          </div>
                        ) : (
                          filteredPeople.map((person) => (
                            <Combobox.Option
                              key={person.id}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-blue-500 text-white"
                                    : "text-gray-900"
                                }`
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {person.name}
                                  </span>
                                  {selected ? (
                                    <span
                                      className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                        active ? "text-white" : "text-blue-500"
                                      }`}
                                    >
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Combobox.Option>
                          ))
                        )}
                      </Combobox.Options>
                    </Transition>
                  </div>
                </Combobox>

                <div className="col-span-6 sm:col-span-1">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Százalék
                  </label>
                  <input
                    type="number"
                    name="szazalek"
                    id="szazalek"
                    defaultValue="0"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-1">
                  <label
                    htmlFor="deal"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Kedvezmény látszódik
                  </label>
                  <input
                    type="checkbox"
                    name="visible"
                    className="mt-1 border border-gray-300 rounded-md shadow-sm py-4 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-1">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Kedvezmény/Felár
                  </label>
                  <select
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    defaultValue="postal-code"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option>Kedvezmény</option>
                    <option>Felár</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="px-4 py-3 bg-gray-50 rounded-b-lg flex-inline flex gap-x-4 text-right sm:px-6">
        <button
          type="submit"
          className="bg-blue-500 border border-transparent w-full rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent"
        >
          Hozzáadás
        </button>
        <button
          type="submit"
          className="bg-blue-500 border border-transparent w-full rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent"
        >
          Befejezés
        </button>
      </div>
    </Card>
  );
};

export default GepAdatok;
