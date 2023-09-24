import React from "react";
import { dateLong } from "@/utils/date";
import { ThumbnailImage } from "..";
import ProviderSmall from "../ProviderSmall";
import { IGoogleNews } from "@/@types/google";

const GoogleNewsItem: React.FC<{ data: IGoogleNews }> = ({ data }) => {
  const {
    title: name,
    newsUrl: url,
    snippet: description,
    timestamp: datePublished,
    publisher,
    images,
  } = data;
  return (
    <div className="flex space-x-2 p-3">
      <div className={`${images ? "w-full md:w-[75%]" : "w-full"}`}>
        {images?.thumbnail && (
          <div className="md:hidden flex items-center">
            <ThumbnailImage imageSrc={images.thumbnail} altName={name} />
          </div>
        )}
        <ProviderSmall providerName={publisher} />
        <div>
          <a href={url}>
            <h1 className="text-lg font-bold ">{name}</h1>
          </a>
          <span className="text-xs font-semibold ">
            {dateLong(datePublished)}
          </span>
          <p className="mt-4 pr-4 hidden md:block">{description}</p>
        </div>
      </div>
      {images?.thumbnail && (
        <div className="w-[25%] hidden md:flex items-center">
          <ThumbnailImage imageSrc={images.thumbnail} altName={name} />
        </div>
      )}
    </div>
  );
};

export default GoogleNewsItem;
