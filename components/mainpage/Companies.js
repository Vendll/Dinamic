import Card from "../ui/Card";
import { FaRegEye } from "react-icons/fa";

const people = [
  {
    name: "Medence Csoport Kft.",
    handle: "leonardkrasner",
  },
  {
    name: "VarrógépCentrum",
    handle: "floydmiles",
  },
  {
    name: "Securus Kft.",
    handle: "emilyselman",
  },
  {
    name: "All4Baby Kft.",
    handle: "kristinwatson",
  },
];

const Companies = () => {
  return (
    <Card>
      <div className="pt-10 mx-6">
        <div className=" text-base font-medium">Legutobbi ajánlatok</div>
        <ul role="list" className=" divide-y divide-gray-200">
          {people.map((person) => (
            <li key={person.handle} className="py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {person.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {"@" + person.handle}
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center text-2xl leading-5 font-medium text-gray-500 bg-white hover:text-blue-700"
                  >
                    <FaRegEye />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 mx-6 pb-10">
        <a
          href="#"
          className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-blue-200"
        >
          Összes megtekintése
        </a>
      </div>
    </Card>
  );
};

export default Companies;
