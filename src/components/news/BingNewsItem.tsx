import { IBingNews } from "@/@types/news";
import { dateLong } from "@/utils/date";
import React from "react";

const BingNewsItem: React.FC<{ data: IBingNews }> = ({ data }) => {
  const {
    name,
    url,
    description,
    datePublished,
    provider,
    image: {
      thumbnail: { contentUrl },
    },
  } = data;
  const providerBy = provider[0];
  const providerImage = providerBy.image;
  return (
    <div className="flex space-x-2 p-3">
      <div className="w-[75%]">
        <div className="flex items-center space-x-2">
          <div>
            <img
              src={providerImage.thumbnail.contentUrl}
              className="h-[32px] w-[32px] object-cover"
            />
          </div>
          <h5 className="text-sm font-semibold">{providerBy.name}</h5>
        </div>
        <a href={url}>
          <h1 className="text-lg font-bold text-gray-700">{name}</h1>
        </a>
        <div className="text-xs font-semibold text-gray-500">
          {dateLong(datePublished)}
        </div>
        <div>{description}</div>
      </div>
      <div className="w-[25%] flex items-center">
        <img
          src={contentUrl}
          className="h-[150px] w-full object-cover rounded-lg border border-gray-100"
        />
      </div>
    </div>
  );
};

export default BingNewsItem;
