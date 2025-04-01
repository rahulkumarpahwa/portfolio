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
          <h1 className="text-4xl sm:text-6xl lg:text-9xl font-bold">
            Fuzzy Logic
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mt-3">
            Exploring the concepts of fuzzy logic in real-world applications.
          </p>
        </header>

        {/* Introduction Section */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3 text-center">
            Introduction
          </h2>
          <Text>
            What do you think as a tech guy is the easiest way to learn the
            fuzzy logic? Just Goooooooooooooogle it! So that&apos;s what I did!
          </Text>
        </section>

        <ImgCard src="/fuzzy-logic/1.png" caption="Meaning Of Fuzzy" />

        <ImgCard src="/fuzzy-logic/2.png" caption="Meaning Of Logic" />

        <Text>
          But both of these do not represent the meaning, so I then searched for
          Fuzzy Logic as:
        </Text>

        <ImgCard src="/fuzzy-logic/3.png" caption="Meaning Of Fuzzy Logic" />

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
          <ol>
            <li>1. Rahul likes 90% cat videos.</li>
            <li>2. Rahul likes 70% memes.</li>
            <li>3. Rahul likes 80% food videos.</li>
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
          <div className="w-64">
            <Image
              src={"/fuzzy-logic/4.png"}
              alt={"Hero Fuzzy Logic"}
              className="w-full h-auto rounded-lg shadow-lg"
              width={400} // Adjusted width to match Reels
              height={300} // Adjusted height to match Reels
            />
          </div>
        </div>

        <Text>
          And Based Upon the %age it shows me the Reel like a cat video having
          food and a meme as:
        </Text>

        <div className="flex justify-center items-center mt-5 mx-auto w-80">
            <Reels
              title="A Cat Video Having Food and A Meme"
              url="https://res.cloudinary.com/dwtcjjxwc/video/upload/v1743419604/fuzzy-logic/FrenchvsItalianCat_yesfur.mp4"
            />
        </div>

        <p className="text-sm text-gray-500 mt-3 text-center">
          *Disclaimer: The videos displayed are not mine and are the property of
          their respective copyright holders.
        </p>

        {/* Application Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-3">Applications</h2>
          <ul className="list-disc list-inside">
            <li>Control systems (e.g., air conditioners, washing machines)</li>
            <li>Artificial intelligence and machine learning</li>
            <li>Decision-making in uncertain environments</li>
          </ul>
        </section>

        {/* Footer Section */}
        <footer className="mt-10 border-t border-gray-300 pt-5 text-center">
          <p>&copy; 2023 My Blog. All rights reserved.</p>
        </footer>
      </div>
      <Operators />
      <CompositionCal />
    </div>
  );
};

export default BlogPage;
