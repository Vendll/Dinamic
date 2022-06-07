const OfferData = () => {
  return (
    <form action="#" method="POST">
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Ajánlat adatainak megadása
            </h3>
            <p className="mt-1 text-sm text-gray-500 sr-only">
              Use a permanent address where you can recieve mail.
            </p>
          </div>

          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Top text
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                defaultValue="Kérésére az alábbi árajánlatot küldöm ipari varrógépekre és berendezésekre. Az árak kompletten állvánnyal asztallappal üzembe helyezve értendőek! Az árajánlat szállítási költséget NEM tartalmaz!"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
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

            <div className="col-span-6 sm:col-span-1 flex justify-center">
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-gray-700 self-center"
              >
                Felár
              </label>
              <input
                type="checkbox"
                name="email-address"
                id="email-address"
                defaultValue="email"
                className="ml-1 block border border-gray-300 rounded-md self-center shadow-sm py-2 px-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-gray-700"
              >
                Érvényesség
              </label>
              <input
                type="text"
                name="street-address"
                id="street-address"
                defaultValue="30 nap"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                Szállítási idő
              </label>
              <input
                type="text"
                name="city"
                id="city"
                defaultValue="1-2 hét"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="region"
                className="block text-sm font-medium text-gray-700"
              >
                Fizetési határidő
              </label>
              <input
                type="text"
                name="region"
                id="region"
                defaultValue="8 nap"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Garancia
              </label>
              <select
                id="country"
                name="country"
                className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option>1 év</option>
                <option>2 év</option>
                <option>3 év</option>
              </select>
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium text-gray-700"
              >
                Fizetés típusa
              </label>
              <select
                type="text"
                name="postal-code"
                id="postal-code"
                defaultValue="postal-code"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option>Előreutalás</option>
                <option>Átutalás</option>
              </select>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="bg-blue-500 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent"
          >
            Tovább
          </button>
        </div>
      </div>
    </form>
  );
};

export default OfferData;
