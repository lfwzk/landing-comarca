import React from "react";

import { ElfsightWidget } from "react-elfsight-widget";

const Review = () => {
  return (
    <>
      <div className="container max-w-7xl mx-1 px-1 lg:pt-8 text-center ">
        <h1 className="text-xl font-exo lg:text-5xl font-semibold">
          Cómo nos califican nuestros clientes
        </h1>
      </div>
      <div className="flex items-center justify-center p-10 font-exo">
        <ElfsightWidget widgetID="8b97384f-bb02-48d4-9ccd-3684245556f5" />
      </div>
    </>
  );
};

export default Review;
