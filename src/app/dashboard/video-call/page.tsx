"use client";
import AgoraUIKit from "agora-react-uikit";
import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "@/firebase";

function page() {
  const [videoCall, setVideoCall] = useState(false);
  const [doctorsRaw, loading] = useCollection(collection(db, "doctors"));
  const doctors = doctorsRaw?.docs.map((doc) => ({
    address: doc.data().address,
    degree: doc.data().degree,
    fees: doc.data().fees,
    image: doc.data().image,
    name: doc.data().name,
    phone: doc.data().phone,
    id: doc.id,
  }));
  const handleVideoCall = () => {
    setVideoCall(true);
  };
  const rtcProps = {
    appId: "7f0147e560224b1c9b729cb73d8abfbf",
    channel: "test",
  };
  return (
    <div className="child-h-screen h-screen">
      {videoCall && <AgoraUIKit rtcProps={rtcProps} />}
      <div>
        {doctors?.map((doctor) => (
          <div key={doctor.id} className="flex flex-col gap-8 pb-4">
            <img
              src={doctor.image}
              className="h-80 w-96 object-cover rounded-t-xl"
              alt="image"
            />
            <div className="px-4 flex flex-col gap-4">
              <p className="font-bold text-2xl">{doctor.name}</p>
              <p>{doctor.address}</p>
              <p className="bg-black hover:bg-zinc-800 text-white rounded-md px-4 py-2">
                Price: {doctor.fees}
              </p>
              <button onClick={handleVideoCall}>Video Call</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
