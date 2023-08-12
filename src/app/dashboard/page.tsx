import Topbar from "@/components/topbar";
import { BotIcon, StoreIcon, VideoCallIcon } from "@/icons";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <Topbar />
      <div className="mt-8 grid grid-cols-2 gap-10">
        <div className="card">
          <Link
            href={"/dashboard/video-call"}
            className="inline-block cursor-pointer rounded-3xl border border-transparent bg-[#ddefe0] p-12 py-16 transition-all hover:border-white active:scale-95"
            shallow
          >
            <div className="icon mb-8 ml-auto">
              <VideoCallIcon size="2.5rem" />
            </div>
            <div className="content">
              <h3 className="font-montserrat text-2xl font-bold">
                Schedule a Video Call
              </h3>
              <p className="mt-4 font-montserrat text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
          </Link>
        </div>
        <div className="card">
          <Link
            href={"/dashboard/store"}
            className="inline-block cursor-pointer rounded-3xl border border-transparent bg-[#f4ecdd] p-12 py-16 transition-all hover:border-white active:scale-95"
            shallow
          >
            <div className="icon mb-8 ml-auto">
              <StoreIcon size="2.5rem" />
            </div>
            <div className="content">
              <h3 className="font-montserrat text-2xl font-bold">
                Buy Medicines
              </h3>
              <p className="mt-4 font-montserrat text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
          </Link>
        </div>
        <div className="card col-span-2">
          <Link
            href={"/dashboard/ask-for-help"}
            className="block cursor-pointer rounded-3xl border border-transparent bg-[#efdada] p-12 py-16 transition-all hover:border-white active:scale-95"
            shallow
          >
            <div className="icon mb-8 ml-auto">
              <BotIcon size="2.5rem" />
            </div>
            <div className="content">
              <h3 className="font-montserrat text-2xl font-bold">
                Ask for Help
              </h3>
              <p className="mt-4 font-montserrat text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
