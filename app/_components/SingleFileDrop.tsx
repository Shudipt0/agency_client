"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  image: string;
};

export default function SingleFileDrop({ image }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFile = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const selectedFile = files[0];
    setFile(selectedFile);
  };

  const removeFile = () => {
    setFile(null);
    setPreview(null);
    if (inputRef.current) {
      inputRef.current.value = ""; // clear form value
    }
  };

  // Create preview URL
  useEffect(() => {
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return (
    <div>
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          handleFile(e.dataTransfer.files);
        }}
        className={`flex items-center justify-center h-36 border-2 border-dashed rounded-lg cursor-pointer
          ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-400"}`}
      >
        {!preview ? (
          <p className="text-gray-600 dark:text-blue-500">
            Drag & drop a file or click
          </p>
        ) : (
          <img
            src={preview}
            alt="Preview"
            className="h-full object-contain rounded-md"
          />
        )}

        <input
          ref={inputRef}
          type="file"
          name={image}
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFile(e.target.files)}
        />
      </div>

      {file && (
        <button
          type="button"
          onClick={removeFile}
          className="mt-2 text-sm text-red-500"
        >
          Remove file
        </button>
      )}
    </div>
  );
}
