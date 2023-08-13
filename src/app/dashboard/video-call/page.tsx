"use client";

import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "@/firebase";
import Topbar from "@/components/topbar";
import RequestMeet from "@/components/dialog/requestMeet";

function Page() {
  const [doctorsRaw, loading] = useCollection(collection(db, "doctors"));
  const [requestsRaw, loading2] = useCollection(collection(db, "requests"));
  const doctors = doctorsRaw?.docs.map((doc) => ({
    address: doc.data().address,
    degree: doc.data().degree,
    fees: doc.data().fees,
    image: doc.data().image,
    name: doc.data().name,
    phone: doc.data().phone,
    time: doc.data().time,
    id: doc.id,
  }));
  const requests = requestsRaw?.docs
    .map((doc) => ({
      date: doc.data().date,
      doctorId: doc.data().doctorId,
      status: doc.data().status,
      userId: doc.data().userId,
      name: doc.data().name,
      id: doc.id,
    }))
  return (
    <>
      <Topbar title="Schedule a Meeting" />
      <div className="grid grid-cols-2">
      <ul className="mt-8 grid grid-cols-1 gap-10">
        {doctors?.map((doctor) => (
          <li
            key={doctor.id}
            className="flex flex-col gap-4 pb-4 bg-white rounded-3xl overflow-hidden"
          >
            <img
              src={doctor.image}
              className="w-full aspect-video object-cover"
              alt="image"
            />
            <div className="px-4 flex flex-col gap-2">
              <h3 className="flex justify-between items-center">
                <span className="text-2xl font-bold">{doctor.name}</span>
                <span className="opacity-30">{doctor.degree}</span>
              </h3>
              <p className="flex justify-between">
                <span>{doctor.address}</span>
                <span>{doctor.phone}</span>
              </p>
              <p className="flex justify-between items-center">
                <span>{doctor.time}</span>
                <span className="text-2xl font-medium w-fit">
                  Fees/-{doctor.fees}
                </span>
              </p>
              <RequestMeet id={doctor.id}/>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <h1 className="text-2xl font-bold text-center mt-8">Your Requests</h1>
          <ul className="mt-8 grid grid-cols-1 gap-10">
            {requests?.map((request) => (
              <li
                key={request.id}
                className="flex flex-col gap-4 p-4 bg-white rounded-3xl overflow-hidden"
              >
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
                  {request.status === "accepted" ? (
                    <div className="flex gap-4 mr-14">
                      <button
                        className="bg-green-500/30 aspect-square grid place-content-center rounded-full"
                      >
                        Join
                      </button>
                    </div>
                  ) : request.status === "rejected" ? (
                    <div className="flex gap-4 mr-14">
                      Rejected
                      <button
                        className="bg-red-500/30 aspect-square grid place-content-center rounded-full"
                      >
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-4 mr-14 place-content-center">
                      Pending
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
      </div>
      </div>
    </>
  );
}

export default Page;