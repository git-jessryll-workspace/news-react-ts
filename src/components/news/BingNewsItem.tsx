import React from "react";
import { dateLong } from "@/utils/date";
import { ProviderSmall, ThumbnailImage } from "..";
import { IBingNews } from "@/@types/bing";

const BingNewsItem: React.FC<{ data: IBingNews }> = ({ data }) => {
  const { name, url, description, datePublished, provider, image } = data;
  const providerBy = provider[0];
  const providerImage = providerBy.image;

  return (
    <div className="flex space-x-2 p-3">
      <div className={`${image?.thumbnail ? "w-full md:w-[75%]" : "w-full"}`}>
        {image?.thumbnail && (
          <div className="flex items-center md:hidden">
            <ThumbnailImage imageSrc={image.thumbnail.contentUrl} altName={name} />
          </div>
        )}
        <ProviderSmall
          providerName={providerBy.name}
          providerImageSrc={providerImage?.thumbnail.contentUrl}
        />
        <div>
          <a href={url}>
            <h1 className="text-xl md:text-lg font-bold antialiased tracking-wide">{name}</h1>
          </a>
          <span className="text-xs font-semibold">
            {dateLong(datePublished)}
          </span>
          <p className="mt-4 pr-4 hidden md:block">{description}</p>
        </div>
      </div>
      {image?.thumbnail && (
        <div className="w-[25%] md:flex items-center hidden">
          <ThumbnailImage imageSrc={image.thumbnail.contentUrl} altName={name} />
        </div>
      )}
    </div>
  );
};

export default BingNewsItem;
