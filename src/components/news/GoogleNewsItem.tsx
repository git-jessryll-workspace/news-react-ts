import React from "react";
import { dateLong } from "@/utils/date";
import { Thumbnail } from "..";
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
      <div className={`${images ? "w-[75%]" : "w-full"}`}>
        <ProviderSmall providerName={publisher} />
        <div>
          <a href={url}>
            <h1 className="text-lg font-bold text-gray-700">{name}</h1>
          </a>
          <span className="text-xs font-semibold text-gray-500">
            {dateLong(datePublished)}
          </span>
          <p>{description}</p>
        </div>
      </div>
      {images?.thumbnail && (
        <div className="w-[25%] flex items-center">
          <Thumbnail imageSrc={images.thumbnail} altName={name} />
        </div>
      )}
    </div>
  );
};

export default GoogleNewsItem;
