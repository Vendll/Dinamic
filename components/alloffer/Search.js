import { Transition, Listbox } from "@headlessui/react";
import { SelectorIcon, CheckIcon } from "@heroicons/react/solid";
import { useState, Fragment } from "react";

const pageNums = [
  { name: "10" },
  { name: "25" },
  { name: "50" },
  { name: "100" },
];

const Search = () => {
  const [selected, setSelected] = useState(pageNums[0]);
  return (
    <div className="m-3 flex items-center text-sm text-gray-700">
      Showing
      <div className="w-20 px-1">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 border border-blue-500 focus:ring-0 focus:outline-none sm:text-sm">
              <span className="block ">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {pageNums.map((pageNum, pageNumIdx) => (
                  <Listbox.Option
                    key={pageNumIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active
                          ? "bg-blue-100 text-blue-900"
                          : "text-gray-900 text-right"
                      }`
                    }
                    value={pageNum}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block  ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {pageNum.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      of <span className="font-medium px-1">20</span> results
      {/* Search */}
      <div className="ml-24 w-full">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="search"
          name="search"
          id="email"
          className="shadow-sm focus:ring-blue-500 block w-full sm:text-sm border-blue-500 rounded-md"
          placeholder="Keresés"
        />
      </div>
    </div>
  );
};

export default Search;
