import UpdateProfile from "@/components/dialog/updateDocterProfile";
import Topbar from "@/components/topbar";

const Docter = () => {
  return (
    <>
      <Topbar title="Requests" components={[UpdateProfile]} />
    </>
  );
};

export default Docter;
