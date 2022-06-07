import Card from "../../components/ui/Card";
import Valutas from "../../components/dinamic/Valutas";
import Filters from "../../components/dinamic/Filters";
import Search from "../../components/dinamic/Search";
import Table from "../../components/dinamic/Table";

export default function DinamicPage() {
  return (
    <>
      {/* Valuta */}
      <Valutas />
      {/* Filter */}
      <div className="bg-white">
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
