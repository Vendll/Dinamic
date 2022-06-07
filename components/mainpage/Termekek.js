import Card from "../ui/Card";

const people = [
  {
    name: "Jane Cooper",
    title: "305 000 Ft",
    role: "325 000 Ft",
    email: "350 000 Ft",
  },
  {
    name: "Cody Fisher",
    title: "105 000 Ft",
    role: "525 000 Ft",
    email: "450 000 Ft",
  },
  {
    name: "Jane Cooper",
    title: "305 000 Ft",
    role: "325 000 Ft",
    email: "350 000 Ft",
  },
  {
    name: "Cody Fisher",
    title: "105 000 Ft",
    role: "525 000 Ft",
    email: "450 000 Ft",
  },
  {
    name: "Jane Cooper",
    title: "305 000 Ft",
    role: "325 000 Ft",
    email: "350 000 Ft",
  },
  {
    name: "Cody Fisher",
    title: "105 000 Ft",
    role: "525 000 Ft",
    email: "450 000 Ft",
  },
  {
    name: "Jane Cooper",
    title: "305 000 Ft",
    role: "325 000 Ft",
    email: "350 000 Ft",
  },
  {
    name: "Cody Fisher",
    title: "105 000 Ft",
    role: "525 000 Ft",
    email: "450 000 Ft",
  },
  {
    name: "Jane Cooper",
    title: "305 000 Ft",
    role: "325 000 Ft",
    email: "350 000 Ft",
  },
  {
    name: "Cody Fisher",
    title: "105 000 Ft",
    role: "525 000 Ft",
    email: "450 000 Ft",
  },
  // More people...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Termekek = () => {
  return (
    <Card>
      <div className="w-full">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-500">
                  <tr className="text-xs font-medium text-white uppercase text-center">
                    <th
                      scope="col"
                      className="px-2 py-3 text-left tracking-wider"
                    >
                      Termék
                    </th>
                    <th scope="col" className="px-2 py-3 tracking-wider">
                      Kisker Nettó Ár
                    </th>
                    <th scope="col" className="px-2 py-3 tracking-wider">
                      Kisker Bruttó Ár
                    </th>
                    <th scope="col" className="px-2 py-3 tracking-wider">
                      Nagyker Nettó Ár
                    </th>
                    <th scope="col" className="px-2 py-3 tracking-wider">
                      Nagyker Bruttó Ár
                    </th>
                    <th scope="col" className="px-2 py-3 tracking-wider">
                      Speciál Ár
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {people.map((person, personIdx) => (
                    <tr
                      key={person.email}
                      className={classNames(
                        personIdx % 2 === 0 ? "bg-white" : "bg-white",
                        "whitespace-nowrap text-sm text-gray-500 text-center border-b hover:bg-blue-100"
                      )}
                    >
                      <td className="px-2 py-4 font-medium text-left text-gray-900">
                        {person.name}
                      </td>
                      <td className="px-2 py-4">{person.title}</td>
                      <td className="px-2 py-4">{person.email}</td>
                      <td className="px-2 py-4">{person.role}</td>
                      <td className="px-2 py-4">{person.role}</td>
                      <td className="px-2 py-4">{person.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="w-fit mx-auto my-2 flex justify-center items-center px-24 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-blue-200">
                Összes megtekintése
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Termekek;
