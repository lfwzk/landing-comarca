import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { Card } from "@material-tailwind/react";
import Title from "components/landing/Title";

const Review = () => {
  return (
    <>
      <div className="container max-w-7xl mx-1 px-1 lg:pt-24">
        <Title heading="Reseñas de nuestros clientes"></Title>
      </div>
      <div className=" grid grid-cols-3 content-center p-5">
        <Card className="w-96 ">
          <TwitterTweetEmbed tweetId={"1561913123904307200"} />
        </Card>
        <Card className="w-96 ">
          <TwitterTweetEmbed tweetId={"1562191685974900739"} />
        </Card>
        <Card className="w-96 h-96">
          <TwitterTweetEmbed tweetId={"1561973095300304897"} />
        </Card>
      </div>
    </>
  );
};

export default Review;
