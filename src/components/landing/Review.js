import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
//import Title from "components/landing/Title";

const Review = () => {
  return (
    <>
      <div className="container max-w-7xl mx-1 px-1 lg:pt-24 font-exo ">
        <h1 className="font-exo text-4xl font-bold text-center">
          Reseñas de nuestros clientes
        </h1>
      </div>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <TwitterTweetEmbed tweetId={"1562462485201842187"} />
            </article>
          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <TwitterTweetEmbed tweetId={"1562533128660750337"} />
            </article>
          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <TwitterTweetEmbed tweetId={"1561913123904307200"} />
            </article>
          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <TwitterTweetEmbed tweetId={"1561973095300304897"} />
            </article>
          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <TwitterTweetEmbed tweetId={"1555545141653512192"} />
            </article>
          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <TwitterTweetEmbed tweetId={"1562191685974900739"} />
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
