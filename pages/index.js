import Head from "next/head";
import Image from "next/image";
import Valutas from "../components/mainpage/Valutas";
import Companies from "../components/mainpage/Companies";
import Termekek from "../components/mainpage/Termekek";
import { Menu, Transition } from "@headlessui/react";
import { MenuAlt2Icon, PlusSmIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";

export default function MainPage() {
  return (
    <div className="-mt-16 mx-4 z-10">
      <div className="flex-1 w-full">
        <Valutas />
      </div>
      <div className="grid grid-rows md:grid-cols-3 gap-4 mt-4">
        <main className="md:col-span-2 ">
          <Termekek />
        </main>

        <aside className="md:col-span-1">
          <Companies />
        </aside>
      </div>
    </div>
  );
}
