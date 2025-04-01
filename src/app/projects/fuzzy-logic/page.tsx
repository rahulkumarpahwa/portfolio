import CompositionCal from "@/components/projects/fuzzy/CompositionCal";
import ImgCard from "@/components/projects/fuzzy/ImgCard";
import Operators from "@/components/projects/fuzzy/Operators";
import Reels from "@/components/projects/fuzzy/Reels";
import Text from "@/components/projects/fuzzy/Text";
import Image from "next/image";
import React from "react";

const BlogPage: React.FC = () => {
  return (
    <div className="font-sans bg-[#51abb2] dark:bg-black text-black dark:text-white min-h-screen p-5">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold">
            Fuzzy Logic
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl mt-3">
            Exploring the concepts of fuzzy logic in real-world applications.
          </p>
        </header>

        {/* Introduction Section */}

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 text-center">
          Introduction
        </h2>
        <Text>
          What do you think as a tech guy is the easiest way to learn the fuzzy
          logic? Just Goooooooooooooogle it! So that&apos;s what I did!
        </Text>

        <ImgCard src="/fuzzy-logic/1.png" caption="Meaning Of Fuzzy" />

        <ImgCard src="/fuzzy-logic/2.png" caption="Meaning Of Logic" />

        <Text>
          But both of these do not represent the meaning, so I then searched for
          Fuzzy Logic as:
        </Text>

        <div className="flex justify-center">
          <ImgCard src="/fuzzy-logic/3.png" caption="Meaning Of Fuzzy Logic" />
        </div>

        <Text>
          So, basically, fuzzy logic means something that makes the computer
          behave like a human brain.
        </Text>
        <Text>But how? Right!</Text>

        <Text>
          So, let&apos;s understand that with the help of an example of
          Instagram.
        </Text>

        <Text>How many of you use Instagram?</Text>
        <Text>I think a lot! Right!</Text>

        <Text>
          One day I was scrolling Instagram like you, and my IG Algo knows that:
        </Text>
        <Text>
          <ol className="list-decimal list-inside">
            <li>Rahul likes 90% cat videos.</li>
            <li>Rahul likes 70% memes.</li>
            <li>Rahul likes 80% food videos.</li>
          </ol>
        </Text>

        <Text>And based upon that, I get videos like: </Text>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
          <Reels
            title="Cat Video"
            url="https://res.cloudinary.com/dwtcjjxwc/video/upload/v1743419635/fuzzy-logic/Cat_pj2fsp.mp4"
          />
          <Reels
            title="Meme Video"
            url="https://res.cloudinary.com/dwtcjjxwc/video/upload/v1743419602/fuzzy-logic/Chin_tapak_dam_dam_ub1zs3.mp4"
          />
          <Reels
            title="Food Video"
            url="https://res.cloudinary.com/dwtcjjxwc/video/upload/v1743419604/fuzzy-logic/foodCheese_yofry8.mp4"
          />
        </div>

        <Text>
          Now, when IG wants to push a new video, a pic, or a reel in my feed,
          of course, it will have to think about what is engaging and
          interesting to me and show that on the feed, right?
        </Text>

        <Text>
          And to solve this problem, here comes our hero: FUZZY LOGIC!
        </Text>

        <div className="flex justify-center items-center mt-5">
          <div className="w-full sm:w-64">
            <Image
              src={"/fuzzy-logic/4.png"}
              alt={"Hero Fuzzy Logic"}
              className="w-full h-auto rounded-lg shadow-lg"
              width={400}
              height={300}
            />
          </div>
        </div>

        <Text>
          And based upon the percentage, it shows me the reel like a cat video
          having food and a meme as:
        </Text>

        <div className="flex justify-center items-center mt-5 mx-auto w-full sm:w-80">
          <Reels
            title="A Cat Video Having Food and A Meme"
            url="https://res.cloudinary.com/dwtcjjxwc/video/upload/v1743419604/fuzzy-logic/FrenchvsItalianCat_yesfur.mp4"
          />
        </div>

        <p className="text-xs sm:text-sm text-gray-500 mt-3 text-center">
          *Disclaimer: The videos displayed are not mine and are the property of
          their respective copyright holders.
        </p>
        <Text>
          But now the new question that comes to my mind is how we got the %age
          right?{" "}
        </Text>
        <ImgCard
          src="/fuzzy-logic/5.png"
          caption="Working of Instagram"
        ></ImgCard>
        <Text>
          And to do that again our HERO comes and based upon the various factors
          like watch time on the app, my likes, my comments, my followings and
          all that combine which are called as knowledge base which includes fuzzy rule base
          and and database and based upon the Algo decide and creates a fuzzy
          values for the content to be served and this loop goes on.
        </Text>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-5 text-center">
          Fuzzy
        </h2>
        <Operators />
        <CompositionCal />
      </div>
    </div>
  );
};

export default BlogPage;
