import React, { PropsWithChildren, ReactElement } from "react"
import Card from "./Card"
import RightArrow from "./RightArrow"
import Button from "./Button"
import HouseBook from "./icon/HouseBook"
import Bulb from "./icon/Bulb"
import cx from "clsx"
import Furniture from "./icon/Furniture"
import { ReactNode } from "react"
import DinnerBackground from "./icon/DinnerBackground"
import Heart from "./icon/Heart"
import Accommodation from "./icon/Accommodation"
import Link from "next/link"
import HaveFunCircle from "./icon/HaveFunCircle"

const DescriptionCard = ({
  icon,
  heading,
  title,
  content,
  link,
  bgIcon,
  lamp = false,
  color = "green",
}: PropsWithChildren<{
  icon: ReactElement
  heading: string
  title: string
  content: ReactNode
  link: string
  bgIcon: ReactElement
  lamp?: boolean
  color?: "green" | "pink" | "purple"
}>) => {
  return (
    <Card
      className={cx({
        "bg-[#A3F7F770]": color === "green",
        "bg-[#F0C5FF70]": color === "pink",
        "bg-[#9290F266]": color === "purple",
      })}
    >
      <div className="flex items-end gap-3">
        {icon}
        <h5 className="text-secondary-black uppercase">{heading}</h5>
      </div>

      <h1 className="mt-8 text-7xl font-bold max-w-sm">{title}</h1>

      <p className="mt-7 text-xl font-medium">{content}</p>

      <div className="flex w-full justify-between mt-48 pb-">
        <a href={link} className="-ml-6 z-10" target="_blank" rel="noreferral">
          <Button
            className="text-secondary-black tracking-wide uppercase inline-flex justify-center items-center gap-4 hover:translate-x-2"
            variant="ghost"
          >
            Learn More <RightArrow />
          </Button>
        </a>
      </div>

      <div className="absolute z-0 right-0 bottom-0">{bgIcon}</div>

      {lamp && (
        <div className="absolute z-0 top-0 right-20">
          <svg
            width="192"
            height="385"
            viewBox="0 0 192 385"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M90.4971 0.737305H84.2324V178.473H90.4971V0.737305Z"
              fill="#9290F2"
            />
            <path
              d="M120.819 178.474H53.9141V219.872H120.819V178.474Z"
              fill="#9290F2"
            />
            <path
              style={{ mixBlendMode: "soft-light" }}
              d="M191.32 384.737H0.320312L53.9131 219.872H120.819L191.32 384.737Z"
              fill="url(#paint0_linear_3384_3046)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3384_3046"
                x1="87.3523"
                y1="219.571"
                x2="87.3523"
                y2="381.776"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}
    </Card>
  )
}

export default function Description() {
  return (
    <section className="p-10 sm:32 md:p-48 text-primary-black relative bg-white">
      <div className="flex flex-wrap gap-24 items-center mb-16">
        <HaveFunCircle className="hover:animate-spin-medium" />

        <div className="text-6xl mb-20">
          <h1>If you have missed the</h1>
          <span className="bg-[#A3F7F7] text-secondary-black p-1 rounded-2xl">
            Zuzalu Vibes
          </span>
          <h1>
            We bring them to <span className="text-[#E497FF]">Paris</span> for{" "}
            <span className="text-[#E497FF]">YOU</span>
          </h1>
        </div>
      </div>

      <div className="mx-auto flex flex-wrap gap-10">
        <div className="flex-[45%] space-y-10">
          <div className="space-y-2">
            <h1 className="font-bold text-6xl">
              Network state 🪩 but for hackers ?! Hell’ya LFG !
            </h1>

            <p className="text-xl">
              In July, a worldwide group of developers, designers, creators, and
              thinkers will unite at 🤌{" "}
              <Link
                href="https://www.ethcc.io/"
                target="_blank"
                className="text-[#9290F2] underline"
              >
                ETHCC
              </Link>{" "}
              to shape the decentralized future.
            </p>
          </div>

          <DescriptionCard
            icon={<Bulb />}
            heading="What events will happen?"
            title="Workshops & Sessions"
            content="Learn, exchange, and collaborate with experts and peers in your field."
            link="/learn-more"
            bgIcon={
              <div className="pr-2">
                <HouseBook />
              </div>
            }
          />
        </div>

        <div className="flex-[45%] space-y-10">
          <DescriptionCard
            icon={<Accommodation />}
            heading="What events will happen?"
            title="Workshops & Sessions"
            content="Learn, exchange, and collaborate with experts and peers in your field."
            link="/learn-more"
            bgIcon={<Furniture />}
            color="purple"
            lamp
          />

          <DescriptionCard
            icon={<Heart />}
            heading="What events will happen?"
            title="Workshops & Sessions"
            content="Learn, exchange, and collaborate with experts and peers in your field."
            link="/learn-more"
            bgIcon={<DinnerBackground />}
            color="pink"
          />
        </div>
      </div>
    </section>
  )
}
