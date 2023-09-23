import React from "react";
import { dateLong } from "@/utils/date";
import { Thumbnail } from "..";
import ProviderSmall from "../ProviderSmall";
import { IBingNews } from "@/@types/bing";

const BingNewsItem: React.FC<{ data: IBingNews }> = ({ data }) => {
  const { name, url, description, datePublished, provider, image } = data;
  const providerBy = provider[0];
  const providerImage = providerBy.image;

  return (
    <div className="flex space-x-2 p-3">
      <div className={`${image?.thumbnail ? "w-[75%]" : "w-full"}`}>
        <ProviderSmall
          providerName={providerBy.name}
          providerImageSrc={providerImage.thumbnail.contentUrl}
        />
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
      {image?.thumbnail && (
        <div className="w-[25%] flex items-center">
          <Thumbnail imageSrc={image.thumbnail.contentUrl} altName={name} />
        </div>
      )}
    </div>
  );
};

export default BingNewsItem;
