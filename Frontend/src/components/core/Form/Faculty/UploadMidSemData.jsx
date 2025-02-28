
import React from 'react'
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { FiUploadCloud, FiX, FiFile } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import LoadingBtn from '../../../common/LoadingBtn';
import { uploadMidSemData } from '../../../../operations/faculty';

export default function UploadMidSemData({ action }) {
  const dispatch = useDispatch();
  const fetching = useSelector(store => store.fetching);
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const maxSize = 10 * 1024 * 1024; // 10MB

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors
  } = useForm();

  const onDrop = useCallback((acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    if (selectedFile) {
      if (selectedFile.size > maxSize) {
        setUploadStatus("error");
        return;
      }

      const fileType = selectedFile.name.split(".").pop().toLowerCase();
      if (!["csv", "xls", "xlsx"].includes(fileType)) {
        setUploadStatus("error");
        return;
      }

      setFile(selectedFile);
      setUploadStatus("success");
      setValue("file", selectedFile);
      clearErrors("file");
    }
  }, [setValue, clearErrors]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"]
    },
    maxSize,
    multiple: false
  });

  const removeFile = () => {
    setFile(null);
    setUploadStatus("");
    setValue("file", null);
  };

  const onSubmit = async (data) => {
    if (!file) {
      setUploadStatus("error");
      return;
    }
    return await uploadMidSemData(dispatch, data);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">{action}</h2>
          <p className="mt-2 text-sm text-gray-600">
            Upload your .csv, .xls, or .xlsx file (Max 10MB)
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div
            {...getRootProps()}
            className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg ${isDragActive
                ? "border-blue-400 bg-blue-50"
                : "border-gray-300 hover:border-gray-400"
              } ${uploadStatus === "error" ? "border-red-500" : ""}
              transition-all duration-200 ease-in-out cursor-pointer`}
          >
            <div className="space-y-1 text-center">
              <input {...getInputProps()} aria-label="File upload input" />
              <div className="flex flex-col items-center">
                {!file ? (
                  <>
                    <FiUploadCloud
                      className="mx-auto h-12 w-12 text-gray-400"
                      aria-hidden="true"
                    />
                    <p className="mt-2 text-sm text-gray-600">
                      <span className="font-medium">Drop your file here</span> or
                      click to browse
                    </p>
                  </>
                ) : (
                  <div className="flex items-center space-x-2">
                    <FiFile className="h-8 w-8 text-blue-500" />
                    <div className="flex flex-col items-start">
                      <p className="text-sm text-gray-700">{file.name}</p>
                      <p className="text-xs text-gray-500">
                        {formatFileSize(file.size)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile();
                      }}
                      className="ml-2 text-gray-400 hover:text-gray-500"
                    >
                      <FiX className="h-5 w-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {uploadStatus === "error" && (
            <p className="mt-2 text-sm text-red-600" role="alert">
              Please upload a valid file (.csv, .xls, .xlsx) under 10MB
            </p>
          )}

          {uploadStatus === "success" && (
            <p className="mt-2 text-sm text-green-600" role="alert">
              File ready for upload
            </p>
          )}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              disabled={!file || fetching}
            >{fetching ?
              <LoadingBtn working={'Uploading'} /> :
              'Upload File'
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

