import { useState, Fragment } from "react";
import { Disclosure, Menu, Transition, Listbox } from "@headlessui/react";
import {
  ChevronDownIcon,
  FilterIcon,
  SelectorIcon,
  CheckIcon,
} from "@heroicons/react/solid";

const filters = {
  company: [
    { value: "Jack" },
    { value: "Siruba" },
    { value: "ExaTex" },
    { value: "Rotondi" },
  ],
  category: [
    { value: "Varrógép" },
    { value: "Olló" },
    { value: "Tű" },
    { value: "Vasaló" },
  ],
};
const sortOptions = [
  { name: "Most Popular", current: true },
  { name: "Best Rating", current: false },
  { name: "Newest", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Filters = () => {
  const [selectedCompany, setSelectedCompany] = useState([
    filters.company[0],
    filters.company[1],
  ]);
  const [selectedCateg, setSelectedCateg] = useState([
    filters.category[0],
    filters.category[1],
  ]);
  return (
    <Disclosure
      as="section"
      aria-labelledby="filter-heading"
      className="relative border-t border-b border-gray-200 grid items-center"
    >
      <h2 id="filter-heading" className="sr-only">
        Filters
      </h2>
      <div className="relative col-start-1 row-start-1 py-4">
        <div className="max-w-7xl mx-auto flex space-x-6 divide-x divide-gray-200 items-center text-sm px-4 sm:px-6 lg:px-8">
          <div>
            <Disclosure.Button className="group text-gray-700 font-medium flex items-center">
              <FilterIcon
                className="flex-none w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
              2 Filters
            </Disclosure.Button>
          </div>
          <div className="pl-6">
            <button type="button" className="text-gray-500">
              Clear all
            </button>
          </div>
          <div className="pl-6">
            <button
              type="button"
              className="relative bg-blue-500 py-2 px-4 rounded-md text-white hover:bg-blue-600"
            >
              Új árajánlat
            </button>
            <a className="inset-0 absolute" href="/offer/offer"></a>
          </div>
        </div>
        <div className=""></div>
      </div>
      <Disclosure.Panel className="border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 text-sm sm:px-6 lg:px-8">
          <div className="grid  gap-y-10 auto-rows-min md:grid-cols-2 md:gap-x-6">
            <fieldset className="w-full">
              <legend className="block font-medium">Márka</legend>
              <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                <Listbox
                  value={selectedCompany}
                  label="Kategória"
                  onChange={setSelectedCompany}
                  className="relative"
                  multiple
                  as="div"
                >
                  <div className="relative mt-1"></div>
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white border-blue-500 border py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 sm:text-sm">
                    <span className="block min-h-[20px]">
                      {selectedCompany
                        .map((company) => company.value)
                        .join(", ")}
                    </span>
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
                    <Listbox.Options className="absolute left-0 right-0 mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {filters.company.map((company, companyIdx) => (
                        <Listbox.Option
                          key={companyIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-20 pr-4 ${
                              active
                                ? "bg-amber-100 text-amber-900"
                                : "text-gray-900"
                            }`
                          }
                          value={company}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {company.value}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </Listbox>
              </div>
            </fieldset>
            <fieldset>
              <legend className="block font-medium">Kategória</legend>
              <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                <Listbox
                  value={selectedCateg}
                  label="Kategória"
                  className="relative"
                  onChange={setSelectedCateg}
                  multiple
                  as="div"
                >
                  <div className="relative mt-1"></div>
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white border-blue-500 border py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 sm:text-sm">
                    <span className="block min-h-[20px]">
                      {selectedCateg
                        .map((category) => category.value)
                        .join(", ")}
                    </span>
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
                    <Listbox.Options className="absolute mt-1 max-h-60 left-0 right-0 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {filters.category.map((category, categoryIdx) => (
                        <Listbox.Option
                          key={categoryIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-amber-100 text-amber-900"
                                : "text-gray-900"
                            }`
                          }
                          value={category}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {category.value}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </Listbox>
              </div>
            </fieldset>
          </div>
        </div>
      </Disclosure.Panel>
      <div className="col-start-1 row-start-1 py-4">
        <div className="flex justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Menu as="div" className="relative inline-block">
            <div className="flex">
              <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Sort
                <ChevronDownIcon
                  className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <Menu.Item key={option.name}>
                      {({ active }) => (
                        <p
                          className={classNames(
                            option.current
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {option.name}
                        </p>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </Disclosure>
  );
};

export default Filters;
