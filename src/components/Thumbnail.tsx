import React from "react";

type Props = {
  imageSrc: string;
  altName: string | undefined;
};

const Thumbnail: React.FC<Props> = ({ imageSrc, altName }) => {
  return (
    <img
      src={imageSrc}
      alt={altName}
      className="h-[150px] w-full object-cover rounded-lg border border-gray-100"
    />
  );
};

export default Thumbnail;
