import { IBingNews } from "@/@types/news";
import React from "react";
import BingNewsItem from "./BingNewsItem";

const views: any = {
    bing: BingNewsItem
}

const NewsItem: React.FC<{ data: IBingNews; type: string }> = ({ data, type }) => {
    console.log(data);
    const Component = views[type];
    
    return <Component data={data}/>
};

export default NewsItem;
