import CompositionCal from "@/components/projects/fuzzy/CompositionCal";
import ImgCard from "@/components/projects/fuzzy/ImgCard";
import Operators from "@/components/projects/fuzzy/Operators";
import Reels from "@/components/projects/fuzzy/Reels";
import Text from "@/components/projects/fuzzy/Text";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const BlogPage: React.FC = () => {
  return (
    <div className="font-sans bg-[#51abb2] dark:bg-black text-black dark:text-white min-h-screen p-5">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-10">
            <a
              href="./fuzzy_logic.pptx"
              className="text-4xl sm:text-5xl lg:text-7xl font-bold"
              download
            >
              Fuzzy Logic
            </a>
          <p className="text-sm sm:text-lg lg:text-xl mt-3">
            Exploring the concepts of fuzzy logic in real-world applications.
          </p>
        </header>
        {/* Introduction Section */}
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold mb-3 text-center">
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
          all that combine which are called as knowledge base which includes
          fuzzy rule base and and database and based upon the Algo decide and
          creates a fuzzy values for the content to be served and this loop goes
          on.
        </Text>
        <Text>Now, our next topic is :</Text>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-5 text-center">
          Fuzzy Set
        </h2>
        <Text>
          Before understanding the fuzzy set, lets understand the topic of crisp
          set, which is nothing but a nornal set as:
        </Text>
        <div className="flex items-center justify-center">
          <code className="bg-black text-white dark:border border-white p-5">
            A = &#x2774; 1,2,3,4,5,6......... &#x2775;
            <br />
            Set of Numbers
          </code>
        </div>
        <Text>
          And, it is part of the Universe of Discourse of Numbers as:{" "}
        </Text>
        <ImgCard
          src="/fuzzy-logic/6.png"
          caption="Universe of discourse of Numbers"
        ></ImgCard>
        <Text>Likewise, We can have the Universe of Discourse of Cats:</Text>
        <ImgCard
          src="/fuzzy-logic/7.png"
          caption="Universe of Discourse of Cats"
        ></ImgCard>
        <Text>
          Okay! Let us see the fuzzy sets: so fuzzy sets are similar crisp ones
          but they have values between 0 and 1 and these are generated from the
          crisp set with the help of membership function.
        </Text>
        <div className="flex items-center justify-center">
          <code className="bg-black text-white dark:border border-white  p-5">
            μA&#x2768;x&#x2769;
          </code>
        </div>
        <ImgCard
          src="/fuzzy-logic/8.png"
          caption="Crisp to Fuzzy Set"
        ></ImgCard>
        <Text>
          Fuzzy value tell us how much an element/ notation belongs to a set or
          not!
        </Text>
        <ImgCard
          src="/fuzzy-logic/9.png"
          caption="Crisp vs Fuzzy Set"
        ></ImgCard>
        <Text>Now, Lets us talk about the operations on the Fuzzy Set as:</Text>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-5 text-center">
          Operations on Fuzzy set
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-black dark:border-white w-full text-left">
            <thead>
              <tr>
                <th className="border border-black dark:border-white px-4 py-2">
                  Operation
                </th>
                <th className="border border-black dark:border-white px-4 py-2">
                  Formula (Membership Function μ_A(x))
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black dark:border-white px-4 py-2">
                  Union (A ∪ B)
                </td>
                <td className="border border-black dark:border-white px-4 py-2">
                  μ<sub>A ∪ B</sub>(x) = max(μ<sub>A</sub>(x), μ<sub>B</sub>(x))
                </td>
              </tr>
              <tr>
                <td className="border border-black dark:border-white px-4 py-2">
                  Intersection (A ∩ B)
                </td>
                <td className="border border-black dark:border-white px-4 py-2">
                  μ<sub>A ∩ B</sub>(x) = min(μ<sub>A</sub>(x), μ<sub>B</sub>(x))
                </td>
              </tr>
              <tr>
                <td className="border border-black dark:border-white px-4 py-2">
                  Complement (¬A)
                </td>
                <td className="border border-black dark:border-white px-4 py-2">
                  μ<sub>¬A</sub>(x) = 1 - μ<sub>A</sub>(x)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Text>So, the above operations can be done on the website as :</Text>
        <Operators />
        <Text>Let&#x27;s us talk about the membership functions:</Text>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-5 text-center">
          Membership Functions
        </h2>
        <Text>
          Membership functions are the one which make the find the fuzziness of
          a value and define the fuzzy set. The values represented by the
          membership functions are between 0 and 1 (including both 0 and 1){" "}
        </Text>
        <Text>
          we can represent a fuzzy set as, the ordered pair of the element and
          its membership value:
        </Text>
        <div className="flex items-center justify-center">
          <code className="bg-black text-white dark:border border-white p-5">
            A = &#123;( x , μ<sub>A</sub>(x) ) | x ∈ X &#125;
          </code>
        </div>
        <ImgCard
          src="/fuzzy-logic/11.png"
          caption="Membership Function"
        ></ImgCard>
        <ImgCard
          src="/fuzzy-logic/12.png"
          caption="Values of Crisp Membership vs Fuzzy Membership"
        ></ImgCard>
        <Text>Now, our last topic is Composition:</Text>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-5 text-center">
          Composition of Fuzzy Relations
        </h2>
        <Text>
          Composition refers to a mathematical operation that combines two fuzzy
          relations to form a new relation. It essentially captures how the
          relations interact with each other, enabling us to analyze multi-step
          relationships.
        </Text>
        <ImgCard
          src="/fuzzy-logic/13.png"
          caption="Composition of Fuzzy Relations"
        ></ImgCard>
        <Text>Let&#x27;s understand with the help of an example:</Text>
        <Text>
          Suppose we have to go to from Chandigarh to Delhi via Karnal and we
          will decide the route based upon the road quality and for that we will
          assign each path a fuzzy value.
        </Text>
        <ImgCard
          src="/fuzzy-logic/14.png"
          caption="Chandigarh To Delhi Via Karnal"
        ></ImgCard>
        <Text>
          Now we have different options of going from the Chandigarh as A to
          Delhi as C
        </Text>
        <ImgCard
          src="/fuzzy-logic/15.png"
          caption="Route from A to C"
        ></ImgCard>
        <Text>
          And if we represent this in the form of Relational Matric we can
          represent it as:{" "}
        </Text>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-black dark:border-white w-full text-left">
            <thead>
              <tr>
                <th className="border border-black dark:border-white px-4 py-2"></th>
                <th className="border border-black dark:border-white px-4 py-2">
                  B
                </th>
                <th className="border border-black dark:border-white px-4 py-2">
                  D
                </th>
                <th className="border border-black dark:border-white px-4 py-2">
                  E
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black dark:border-white px-4 py-2">
                  A
                </td>
                <td className="border border-black dark:border-white px-4 py-2">
                  0.8
                </td>
                <td className="border border-black dark:border-white px-4 py-2">
                  0.6
                </td>
                <td className="border border-black dark:border-white px-4 py-2">
                  0.5
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-center text-sm text-black-500 mt-2">
            From A to Diff. Routes
          </p>
        </div>
        <div className="overflow-x-auto mt-5">
          <table className="table-auto border-collapse border border-black dark:border-white w-full text-left text-sm sm:text-base">
            <thead>
              <tr>
                <th className="border border-black dark:border-white px-2 sm:px-4 py-2"></th>
                <th className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  B
                </th>
                <th className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  D
                </th>
                <th className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  E
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  C
                </td>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  0.7
                </td>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  0.5
                </td>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  0.4
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-center text-xs sm:text-sm text-black-500 mt-2">
            From Diff. Routes to C
          </p>
        </div>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold my-3 text-center">
          Max-Min Composition
        </h3>
        <div className="overflow-x-auto mt-5">
          <table className="table-auto border-collapse border border-black dark:border-white w-full text-left text-sm sm:text-base">
            <thead>
              <tr>
                <th className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  Route
                </th>
                <th className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  First Link
                </th>
                <th className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  Second Link
                </th>
                <th className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  Minimum
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  A → B → C
                </td>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  0.8
                </td>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  0.7
                </td>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  0.7
                </td>
              </tr>
              <tr>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  A → D → C
                </td>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  0.6
                </td>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  0.5
                </td>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  0.5
                </td>
              </tr>
              <tr>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  A → E → C
                </td>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  0.5
                </td>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  0.4
                </td>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  0.4
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-center text-xs sm:text-sm text-black-500 mt-2">
            Maximum value of all minimums: <strong>0.7</strong>. Best route:{" "}
            <strong>A → B → C</strong>.
          </p>
        </div>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold my-3 text-center">
          Max-Product Composition
        </h3>
        <div className="overflow-x-auto mt-5">
          <table className="table-auto border-collapse border border-black dark:border-white w-full text-left text-sm sm:text-base">
            <thead>
              <tr>
                <th className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  Route
                </th>
                <th className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  First Link
                </th>
                <th className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  Second Link
                </th>
                <th className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  Product
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  A → B → C
                </td>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  0.8
                </td>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  0.7
                </td>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  0.56
                </td>
              </tr>
              <tr>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  A → D → C
                </td>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  0.6
                </td>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  0.5
                </td>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  0.3
                </td>
              </tr>
              <tr>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  A → E → C
                </td>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  0.5
                </td>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  0.4
                </td>
                <td className="border border-black dark:border-white px-2 sm:px-4 py-2">
                  0.2
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-center text-xs sm:text-sm text-black-500 mt-2">
            Best route: <strong>A → B → C</strong>, with a fuzzy value of{" "}
            <strong>0.56</strong>.
          </p>
        </div>
        <Text>
          The composition result tells us the overall quality of the route from
          City A to City C, considering intermediate cities. This can help
          decide which route to take when there are multiple options, ensuring
          the smoothest journey.
        </Text>
        <Text>
          The above calculations can be done using the values as well as below:
        </Text>
        <CompositionCal />
        <Text>
          Thanks for reading the article. If you want to contribute you can
          connect me{" "}
          <Link href="/#connect" className="underline">
            here
          </Link>
        </Text>{" "}
      </div>
    </div>
  );
};
export default BlogPage;
