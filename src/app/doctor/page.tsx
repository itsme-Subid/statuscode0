"use client";

import React from "react";
import UpdateProfile from "@/components/dialog/updateDocterProfile";
import Topbar from "@/components/topbar";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { CheckIcon, CrossIcon } from "@/icons/index";
import Link from "next/link";

const Doctor = () => {
  const [requestsRaw] = useCollection(collection(db, "requests"));
  const requests = requestsRaw?.docs
    .map((doc) => ({
      date: doc.data().date,
      doctorId: doc.data().doctorId,
      status: doc.data().status,
      userId: doc.data().userId,
      name: doc.data().name,
      id: doc.id,
    }))
    .filter((request) => request.doctorId === localStorage.getItem("doctorId"));

  const [accepted, setAccepted] = React.useState<Boolean>(false);
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let roomId = '';
for (let i = 0; i < 4; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  roomId += characters[randomIndex];
}


  const acceptRequest = async (id: string) => {
    await updateDoc(doc(db, "requests", id), {
      status: "accepted",
      roomId: roomId
    });
  };

  const rejectRequest = async (id: string) => {
    await deleteDoc(doc(db, "requests", id));
  };

  return (
    <>
      <Topbar title="Requests" components={[UpdateProfile]} />
      {/* <main className="mt-8 flex flex-col gap-4 rounded-lg bg-white">
        {!loading ? (
          <ul className="border-between flex flex-col"></ul> */}
      <main className="mt-8 flex flex-col gap-4 rounded-3xl bg-white">
        <ul className="border-between flex flex-col">
          {requests?.map((request) => (
            <li key={request.id} className="flex flex-col gap-4 p-4">
              <div className="px-4 flex justify-between gap-2">
                <div className="flex">
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-semibold">
                      {request.name} -{" "}
                      {new Date(request.date).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-500">{request.userId}</p>
                  </div>
                </div>
                {!accepted && request.status !== "accepted" ? (
                  <div className="flex gap-4 mr-14">
                    <button
                      onClick={() => {
                        acceptRequest(request.id);
                        setAccepted(true);
                      }}
                      className="bg-green-500/30 aspect-square grid place-content-center rounded-full"
                    >
                      <CheckIcon />
                    </button>
                    <button
                      onClick={() => rejectRequest(request.id)}
                      className="bg-red-500/30 aspect-square grid place-content-center rounded-full"
                    >
                      <CrossIcon />
                    </button>
                  </div>
                ) : (
                  <Link
                    href={``}
                    className="flex items-center py-2 px-6 rounded-full bg-blue-800 text-white"
                  >
                    Join Video Call
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Doctor;
