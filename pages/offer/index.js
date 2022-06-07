import Card from "../../components/ui/Card";
import Filters from "../../components/alloffer/Filters";
import Search from "../../components/alloffer/Search";
import Table from "../../components/alloffer/Table";

const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "jane.cooper@example.com",
  },
  // More people...
];

export default function Example() {
  return (
    <>
      <div className="bg-white -mt-12">
        {/* Filters */}
        <Filters />
      </div>

      <div className="mt-4 mx-4 gap-y-4 grid">
        {/* Kereső */}
        <Card>
          <Search />
        </Card>

        {/* Termékek */}
        <Card>
          <Table />
        </Card>
      </div>
    </>
  );
}
