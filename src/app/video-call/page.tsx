"use client";
import AgoraUIKit from "agora-react-uikit";
import React, { useState } from "react";

function page() {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: "7f0147e560224b1c9b729cb73d8abfbf",
    channel: "test",
  };
  return (
    <div className="child-h-screen h-screen">
      <AgoraUIKit rtcProps={rtcProps} />
    </div>
  );
}

export default page;
