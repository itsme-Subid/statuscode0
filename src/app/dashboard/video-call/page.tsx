"use client";

// import AgoraUIKit from "agora-react-uikit";
// import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "@/firebase";
import Topbar from "@/components/topbar";
import RequestMeet from "@/components/dialog/requestMeet";

function Page() {
  // const [videoCall, setVideoCall] = useState(false);
  const [doctorsRaw, loading] = useCollection(collection(db, "doctors"));
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
  // const rtcProps = {
  //   appId: "7f0147e560224b1c9b729cb73d8abfbf",
  //   channel: "test",
  // };
  return (
    <>
      <Topbar title="Schedule a Meeting" />
      {/* {videoCall && <AgoraUIKit rtcProps={rtcProps} />} */}
      <ul className="mt-8 grid grid-cols-3 gap-10">
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
                  {doctor.fees}
                </span>
              </p>
              <RequestMeet id={doctor.id}/>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Page;