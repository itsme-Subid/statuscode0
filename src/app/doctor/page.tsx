'use client'
import React from "react";
import UpdateProfile from "@/components/dialog/updateDocterProfile";
import Topbar from "@/components/topbar";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";

const Doctor = () => {
  const [requestsRaw, loading] = useCollection(collection(db, "requests"));
  const requests = requestsRaw?.docs.map((doc) => ({
    date: doc.data().date,
    doctorId: doc.data().doctorId,
    status: doc.data().status,
    id: doc.id
  }));

  const acceptRequest = async (id: string) => {
    await updateDoc(doc(db, "requests", id), {
      status: "accepted",
    });
  }

  const rejectRequest = async (id: string) => {
    await updateDoc(doc(db, "requests", id), {
      status: "rejected",
    });
  }

  return (
    <>
      <Topbar title="Requests" components={[UpdateProfile]} />
      <ul className="mt-8 grid grid-cols-1 gap-10">
        {requests?.map((request) => (
          <li
            key={request.id}
            className="flex flex-col gap-4 pb-4 bg-white rounded-3xl overflow-hidden shadow-md"
          >
            <div className="px-4 flex flex-col gap-2">
              <h3 className="flex justify-between items-center">
                <span className="text-2xl font-bold">
                  {new Date(request.date).toDateString()}
                </span>
                <span
                  className={`opacity-30 ${
                    request.status === "Accepted"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {request.status}
                </span>
              </h3>
              <div className="flex gap-4">
                <button onClick={() => acceptRequest(request.id)} className="btn btn-primary py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                  Accept
                </button>
                <button onClick={() => rejectRequest(request.id)} className="btn btn-secondary py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg">
                  Reject
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Doctor;
