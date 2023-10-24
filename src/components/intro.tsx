import * as React from "react";
import GGH from "../assets/ggh.svg";
import LocalChamp from "../assets/localChampions.svg";
import ArrowButton from "../assets/button.svg";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Intro() {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-white pl-5 pr-5">
      <div className="ml-3 mt-16 max-w-[301px] text-3xl font-bold text-black max-md:ml-2.5 max-md:mt-10">
        Intro to Freelance Quiz
      </div>
      <Image
        loading="lazy"
        src={GGH}
        className="mt-10 aspect-[1.06] w-[193px] max-w-full self-center overflow-hidden object-cover object-center"
        alt=""
      />
      <div className="self-center text-4xl font-thin leading-[70%] text-black">
        x
      </div>
      <Image
        loading="lazy"
        src={LocalChamp}
        className="mt-10 aspect-[3.79] w-[250px] max-w-full self-center overflow-hidden object-cover object-center"
        alt=""
      />
      <div className="mt-5 w-[343px] max-w-full text-3xl leading-[114.286%] text-black max-md:ml-2.5">
        Take our quiz to understand the basics of freelancing and where you
        stand
      </div>
      <div className="mt-9 w-[319px] max-w-full text-xl font-bold leading-7 text-black max-md:ml-1">
        <ul>
          <li>
            <span className="">This quiz is divided into </span>
          </li>
          <li>
            <span className="font-bold">6 sections</span>
          </li>
          <li>
            <span className="">
              {" "}
              tailored to provide insights about your freelancing journey.
            </span>
          </li>
          <li>Set aside approximately </li>
          <li>
            <span className="font-bold">30 minutes</span>
          </li>
          <li>
            <span className="">
              {" "}
              to complete the quiz. This ensures you can thoughtfully answer
              each question.
            </span>
          </li>
          <li>Once you've completed the quiz, you'll receive a </li>
          <li>
            <span className="font-bold">personalised report</span>
          </li>
          <li>
            <span className=""> offering suggestions for improvement.tt</span>
          </li>
          <li>
            We'll guide you on the next steps, which may include a consultation{" "}
          </li>
          <li>
            <span className="font-bold">1-2-1 call</span>
          </li>
          <li>
            <span className=""> with our team.</span>
          </li>
        </ul>
      </div>{" "}
      <div
        className="relative mt-10 cursor-pointer"
        onClick={() => router.push("/info")}
      >
        <Image
          loading="lazy"
          src={ArrowButton}
          className="mb-12 mt-0 aspect-[4.61] w-[341px] max-w-full overflow-hidden object-cover object-center max-md:mb-10"
          alt=""
        />
        <div className=" absolute left-[5%] top-[25px] text-white">
          <p>Take Quiz</p>
        </div>
      </div>
    </div>
  );
}
