import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecentNews } from "../store/recentnews/actions/actionsCreators";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";


const PressRecentNewComponent = () => {
  const savedTheme = localStorage.getItem("theme");
  const Dispatch = useDispatch();
  const { recentNewsData, isLoading } = useSelector((state) => state.news);

  // State to manage how many items to display
  const [visibleNewsCount, setVisibleNewsCount] = useState(3);

  useEffect(() => {
    Dispatch(getRecentNews());
  }, [Dispatch]);

  const handleLoadMore = () => {
    setVisibleNewsCount((prevCount) => prevCount + 3); 
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Recent news</h2>
      <div className="space-y-4">
        {isLoading ? (
          [...Array(3)].map((_, index) => (
            <div key={index} className="flex justify-between border-b pb-4">
              <div className="w-full">
                <Skeleton width="60%" height={20} className="mb-2" />
                <Skeleton width="100%" height={25} />
              </div>
              <Skeleton width={100} height={20} />
            </div>
          ))
        ) : recentNewsData?.recentNewsData?.length > 0 ? (
          recentNewsData.recentNewsData
            .slice(0, visibleNewsCount)
            .map((news, index) => {
              const date = new Date(news.newsDate);
              const formattedDate = date.toLocaleDateString("en-US", {
                month: "short", 
                day: "numeric", 
                year: "numeric",
              });

              return (
                <div key={index} className="flex justify-between border-b pb-4">
                  <div>
                    <p className="text-sm">{news.publisher}</p>
                    <Link to={news.websiteLink}>
                      <p className="text-lg font-semibold hover:underline">{news.newsText}</p>
                    </Link>
                  </div>
                  <p className="text-sm">{formattedDate}</p>
                </div>
              );
            })
        ) : (
          <p className="text-sm">There is No News</p>
        )}
      </div>


      {!isLoading && recentNewsData?.recentNewsData?.length > visibleNewsCount && (
        <div className="mt-6 text-center">
          <button
            onClick={handleLoadMore}
            className="px-4 py-2 text-sm font-medium bg-black text-white"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default PressRecentNewComponent;
