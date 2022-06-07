import Card from "../../components/ui/Cardz";
import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DownloadPage() {
  let [categories] = useState({
    PDF: [
      {
        id: 1,
        title: "Összes Varrógép",
      },
      {
        id: 2,
        title: "ÖSszes Olló",
      },
      {
        id: 3,
        title: "ÖSszes Vasaló",
      },
      {
        id: 4,
        title: "ÖSszes Tű",
      },
    ],
    Excel: [
      {
        id: 1,
        title: "Árlista",
      },
      {
        id: 2,
        title: "Adatbázis",
      },
    ],
    CSV: [
      {
        id: 1,
        title: "Adatbázis",
      },
    ],
  });
  return (
    <>
      <Card>
        <div className="text-center text-xl font-medium py-4 text-blue-500 uppercase border-b border-blue-500">
          Letöltés
        </div>
        <div className="w-full px-2 py-6 sm:px-0 bg-stone-50 rounded-b-lg">
          <Tab.Group>
            <Tab.List className="flex z-0 rounded-lg shadow-md sm:mx-14">
              {Object.keys(categories).map((category, tabIdx) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      selected
                        ? " shadow text-blue-500 border-blue-500 border-x-0"
                        : " hover:text-gray-700",
                      tabIdx === 0 ? "rounded-l-lg" : "",
                      tabIdx === Object.keys(categories).length - 1
                        ? "rounded-r-lg"
                        : "",
                      "relative flex-1 text-gray-500 overflow-hidden border-b-2  bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10 ring-transparent ring-opacity-60 ring-offset-0 focus:outline-none focus:ring-0"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl p-3 mx-14",
                    "ring-transparent ring-opacity-60 ring-offset-0 ring-offset-transparent focus:outline-none focus:ring-0"
                  )}
                >
                  <div className="grid grid-cols-3 gap-4">
                    {posts.map((post) => (
                      <div
                        key={post.id}
                        className="relative text-center rounded-md p-3 bg-blue-100 hover:bg-blue-200"
                      >
                        <h3 className="text-sm font-medium leading-5">
                          {post.title}
                        </h3>
                        <a
                          href="#"
                          className={classNames(
                            "absolute inset-0 rounded-md",
                            "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                          )}
                        />
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </Card>
    </>
  );
}
