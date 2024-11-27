import React from 'react';

const newsData = [
  {
    source: "PR Newswire",
    title: "SimplyCodes Launches iOS Safari Extension Enabling Coupons on iPhone",
    date: "November 15, 2021",
  },
  {
    source: "Yahoo!",
    title: "Why do we spend so much each year on holiday shopping?",
    date: "November 11, 2021",
  },
  {
    source: "Adweek",
    title: "Americans are shopping more on Nov. 11, but don’t call it Singles Day",
    date: "November 4, 2021",
  },
  {
    source: "Databox blog",
    title: "OKR reporting: Best practices shared by 29 marketers",
    date: "October 20, 2021",
  },
  {
    source: "Record Nations",
    title: "Tips for choosing a cloud service",
    date: "October 7, 2021",
  },
  {
    source: "GOBankingRates blog",
    title:
      "Gen Z’s impact on the economy is leading to major changes with credit, investing and more",
    date: "September 16, 2021",
  },
];
const savedTheme = localStorage.getItem("theme");

const PressRecentNewComponent = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Recent news</h2>
      <div className="space-y-4">
        {newsData.map((news, index) => (
          <div key={index} className="flex justify-between border-b pb-4">
            <div>
              <p className="text-sm ">{news.source}</p>
              <p className="text-lg font-semibold">{news.title}</p>
            </div>
            <p className="text-sm ">{news.date}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className={`px-4 py-2 text-sm font-medium  ${savedTheme === 'dark' ? "bg-white text-black" :"bg-black text-white"}`}>
          Load more
        </button>
      </div>
    </div>
  );
};

export default PressRecentNewComponent;
