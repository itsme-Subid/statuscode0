"use client";

import AddMedicine from "@/components/dialog/addMedicine";
import Topbar from "@/components/topbar";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "@/firebase";
import { LoaderIcon } from "@/icons";

const Seller = () => {
  const [medicinesRaw, loading] = useCollection(collection(db, "medicines"));
  const medicines = medicinesRaw?.docs.map((doc) => ({
    description: doc.data().description,
    image: doc.data().image,
    name: doc.data().name,
    price: doc.data().price,
    id: doc.id,
  }));
  return (
    <>
      <Topbar title="My Store" components={[AddMedicine]} />
      <main className="mt-8 flex flex-col gap-4">
        {!loading ? (
          <ul className="border-between flex gap-8">
            {medicines?.map((medicine: any) => (
              <li key={medicine.id} className="w-96 bg-white rounded-xl">
                <div className="flex flex-col gap-8 pb-4">
                  <img
                    src={medicine.image}
                    className="w-full aspect-video object-cover rounded-t-xl"
                    alt="image"
                  />
                  <div className="px-4 flex flex-col gap-4">
                    <p className="font-bold text-2xl">{medicine.name}</p>
                    <p>{medicine.description}</p>
                    <p className="bg-black hover:bg-zinc-800 text-white rounded-md px-4 py-2">
                      Price : {medicine.price}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <LoaderIcon size="3rem" />
          </div>
        )}
      </main>
    </>
  );
};

export default Seller;
