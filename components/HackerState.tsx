"use client"

import React, { useRef } from "react"
import cx from "clsx"

import Button from "./Button"
import Link from "next/link"

export default function HackerState() {
  const containerRef = useRef(null)

  return (
    <section className="" ref={containerRef}>
      <div className="-z-20 relative">
        <div className="h-11 bg-secondary-black relative z-30" />

        <div className="h-[100vh] md:h-[80vh] w-[100vw] bg-[#9290F2] overflow-hidden">
          <div
            className={cx(
              "fixed top-0 left-auto right-auto z-10 w-full h-full",
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hackerstate-background.svg"
              alt="Chill hacker state background"
              className="absolute left-0 right-0 -bottom-32 z-20 object-cover w-full h-full transform rotate-[2deg] scale-125"
            />
          </div>

          <div className="w-full flex items-center justify-end">
            <div className="max-w-sm lg:max-w-screen-sm mt-40 mr-20 md:sm-32 relative z-0 text-primary-black text-3xl space-y-4">
              <h1 className="font-bold">Our Hacker State Includes...</h1>
              <p className="font-medium bg-white rounded-2xl px-4 py-6 max-w-fit">
                Hack Zk by Lambda Class
              </p>
              <p className="font-medium bg-white rounded-2xl px-4 py-6 max-w-fit">
                Autonomous World gaming House
              </p>
              <p className="font-medium bg-white rounded-2xl px-4 py-6 max-w-fit">
                Sozu Haus
              </p>
              <h1 className="text-8xl text-white">...</h1>
              <h1 className="font-bold">
                And no need to FOMO as we bring people together on hacker
                village gatherings.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-40 bg-secondary-black text-white py-24 px-20 flex flex-col">
        <h1 className="text-5xl font-bold">Why ZKML ?</h1>

        <div className="flex flex-wrap justify-between mt-8 -mr-20">
          <div className="mb-12 md:w-1/2 lg:w-1/3 pr-20 space-y-6">
            <h5 className="text-xl font-ps font-medium">Risky</h5>
            <h1 className="text-5xl font-bold leading-tight">
              The flaws of Traditional Platforms
            </h1>

            <p className="text-lg text-white/80 font-ps font-medium leading-7">
              Machine learning developers can use bounty platforms to get
              rewarded for their solutions. However, these platforms often
              require full model disclosure for verification, which can expose
              their privacy and security.
            </p>
          </div>

          <div className="mb-12 md:w-1/2 lg:w-1/3 pr-20 space-y-6">
            <h5 className="text-xl font-ps font-medium">Innovative</h5>
            <h1 className="text-5xl font-bold leading-tight">
              The Solution of ZKML
            </h1>

            <p className="text-lg text-white/80 font-ps font-medium leading-7">
              ZKML is a new programming language that uses zero-knowledge proofs
              (ZKPs) to verify private models with public data. ZKML also has
              many features that make machine learning easier and more
              accessible.
            </p>
          </div>

          <div className="mb-12 md:w-1/2 lg:w-1/3 pr-20 space-y-6">
            <h5 className="text-xl font-ps font-medium">Promising</h5>
            <h1 className="text-5xl font-bold leading-tight">
              The Benefits of ZKML
            </h1>

            <p className="text-lg text-white/80 font-ps font-medium leading-7">
              ZKML offers verifiable, private, and efficient machine learning
              models. ZKML can also attract Web2 developers to the Web3
              ecosystem, where they can enjoy the benefits of decentralized and
              distributed computing.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="https://www.youtube.com/watch?v=GYWkRIZeANE"
            target="_blank"
            rel="external"
          >
            <Button
              className={cx("bg-[#B2ADF4] text-secondary-black uppercase")}
            >
              How to get involed {"  ->"}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
