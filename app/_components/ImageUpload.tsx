"use client";
import { UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";
import { useState } from "react";
import { imageRemove } from "../actions/imageRemove";
import { useImageContext } from "@/context/ImageContext";

const ImageUpload = () => {
  const { imageUrl, setImageUrl } = useImageContext();
  // const [imageUrl, setImageUrl] = useState("")
  const [imageKey, setImageKey] = useState("");

  const handleRemoveImage = async () => {
    const res = await imageRemove(imageKey);
    if (res.success) {
      alert("One file is removed from server");
      setImageUrl("");
      setImageKey("");
    }
    console.log("removing image");
  };
  return (
    <div>
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          setImageUrl(res[0].ufsUrl);
          setImageKey(res[0].key);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

      <div className="py-8 space-y-5">
        <h1 className="text-sm font-semibold">Image preview</h1>
        {imageUrl && (
          <div className="space-y-4 w-[150px] ">
            <Image
              src={imageUrl}
              alt="image"
              width={100}
              height={80}
              className="object-cover h-auto w-full "
            />
            <button
              onClick={handleRemoveImage}
              className="text-white thext-sm font-bold px-4 py-1 rounded bg-red-500 "
            >
              Remove Image
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
