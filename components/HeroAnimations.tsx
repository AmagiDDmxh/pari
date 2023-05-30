import React from "react"
import { SVGProps } from "react"
import CircleBackground from "./CircleBackground"
import HeroAnimationBackground from "./icon/HeroAnimationBackground"

const Hat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={394}
    height={390}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M381.466 135.01C327.793 55.307 231.218 19.322 189.639 11.293L130.811 138.34c36.684 9.663 120.412 43.835 161.845 103.216l88.81-106.545Z"
    />
    <path
      fill="url(#b)"
      fillRule="evenodd"
      d="m292.656 241.555-11.633 13.956c-16.648 15.018-67.321 2.74-90.577-5.277l-87.174-52.421 27.539-59.474c36.684 9.663 120.412 43.835 161.845 103.216Z"
      clipRule="evenodd"
    />
    <path
      fill="#C48BDB"
      d="m190.446 250.234 63.265 38.043 27.312-32.766c-16.648 15.018-67.321 2.74-90.577-5.277Z"
    />
    <path
      fill="url(#c)"
      d="M189.639 11.293c41.579 8.03 138.154 44.014 191.826 123.718l-61.975 74.351c.42-55.35-86.393-155.108-129.851-198.069Z"
    />
    <path
      fill="url(#d)"
      d="M290.829 344.613c-11.892 18.521-78.529-8.115-149.8-53.878-71.27-45.764-120.184-93.325-108.292-111.846 11.892-18.52 79.308 3.565 150.578 49.328 71.271 45.763 119.406 97.876 107.514 116.396Z"
    />
    <path
      fill="#282C29"
      d="M232.827 307.492c-4.131 6.434-38.505-12.603-76.753-37.162-38.247-24.559-65.884-45.34-61.753-51.774 4.13-6.433 38.485 8.26 76.733 32.819 38.247 24.56 65.904 49.684 61.773 56.117Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={148.215}
        x2={373.832}
        y1={133.569}
        y2={153.438}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F0C7FF" />
        <stop offset={1} stopColor="#D790F3" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={206.199}
        x2={151.729}
        y1={173.081}
        y2={227.963}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F4FFFF" />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={366.109}
        x2={284.965}
        y1={136.543}
        y2={167.265}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C979E9" />
        <stop offset={1} stopColor="#E3AAF9" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={183.315}
        x2={129.775}
        y1={228.217}
        y2={315.281}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E5B1F9" />
        <stop offset={1} stopColor="#AAA8F4" />
      </linearGradient>
    </defs>
  </svg>
)

export default function HeroAnimations() {
  return (
    <div className="absolute left-0 top-0 right-0 bottom-0 overflow-hidden z-0">
      <div className="absolute -left-[7rem] -top-[87rem]">
        <CircleBackground className="animate-spin-slow" />
      </div>
      <HeroAnimationBackground className="absolute z-10 bottom-0" />
    </div>
  )
}
