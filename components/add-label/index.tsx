import React, { useCallback, ReactNode, useState } from "react";
import { StyledPlus } from "../../ui/icons";
import { AddLabelRoot, Label, ContainerLabel } from "./styled";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

interface Props {
  label: string;
  type: "small" | "big";
  children: ReactNode;
  className?: string;
  onLoad: (params?: any, params2?: any) => any;
}

export function AddLabelComponent(props: Props) {
  const [files, setFiles] = useState<any>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      const mapped = acceptedFiles.map((file) => {
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
        props.onLoad(file, props.label);
        return file;
      });
      setFiles(mapped);
    },
  });

  const thumbs = files.map((file: any) => (
    <div key={file.name}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          alt="img-thumb"
          width={115}
          height={115}
          src={file.preview}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
        <ContainerLabel>
          <Label>{props.label}</Label>
        </ContainerLabel>
      </div>
    </div>
  ));
  return (
    <AddLabelRoot
      {...getRootProps()}
      className={props.className}
      type={props.type}
    >
      <input {...getInputProps()} />
      {files.length > 0 ? (
        thumbs
      ) : (
        <>
          <StyledPlus />
          {props.children}
          {props.label ? (
            <ContainerLabel>
              <Label>{props.label}</Label>
            </ContainerLabel>
          ) : null}
        </>
      )}
    </AddLabelRoot>
  );
}
