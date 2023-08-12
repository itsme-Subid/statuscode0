import { useDropzone } from "react-dropzone";

const Dropzone = ({ onDrop }: { onDrop: (acceptedFiles: File[]) => void }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    // accept: {
    //   "image/*": [".png", ".jpg", ".jpeg"],
    // },
  });

  return (
    <div
      className="dropzone-div my-4 rounded-lg border border-dashed border-slate-400 bg-slate-100/50 p-4"
      {...getRootProps()}
    >
      <input className="dropzone-input hidden" {...getInputProps()} />
      <div className="text-center">
        {isDragActive ? (
          <p className="dropzone-content">Release to drop the file here</p>
        ) : (
          <p className="dropzone-content">
            Drag {"'n'"} drop an image file here, or click to select a file
          </p>
        )}
      </div>
    </div>
  );
};

export default Dropzone;
