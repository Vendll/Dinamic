import Card from "../../components/ui/Cardz";

export default function ValutakPage() {
  return (
    <>
      <Card>
        <div className="grid grid-rows-3 py-2 text-center px-4 divide-y">
          <div className="grid grid-cols-2 py-2">
            <p className="text-2xl font-semibold self-center">USD: </p>
            <input
              type="search"
              name="search"
              id="email"
              defaultValue="368"
              className="shadow-md focus:ring-blue-500 text-center w-full font-semibold text-xl border-blue-500 rounded-md"
              placeholder="Keresés"
            />
          </div>
          <div className="grid grid-cols-2 py-2">
            <p className="text-2xl font-semibold self-center">EUR: </p>
            <input
              type="search"
              name="search"
              id="email"
              defaultValue="385"
              className="shadow-md focus:ring-blue-500 text-center w-full font-semibold text-xl border-blue-500 rounded-md"
              placeholder="Keresés"
            />
          </div>
          <div className="grid grid-cols-2 py-2">
            <p className="text-2xl font-semibold self-center">HUF:</p>
            <input
              type="search"
              name="search"
              id="email"
              defaultValue="1"
              className="shadow-md focus:ring-blue-500 text-center w-full font-semibold text-xl border-blue-500 rounded-md"
              placeholder="Keresés"
            />
          </div>
        </div>
      </Card>
    </>
  );
}
