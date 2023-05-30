"use client"

import React from "react"
import { Disclosure, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/20/solid"
import cx from "clsx"
import Tips from "./icon/Tips"
import CoolOff from "./icon/CoolOff"

export default function Questions() {
  return (
    <section className="px-8 md:px-20 lg:px-48 py-40 bg-white relative z-10">
      <h1 className="text-8xl font-bold">Good to know~</h1>

      <div className="w-full px-4 mt-48 text-primary-black relative">
        <div className="absolute -top-[8.25rem] transform -rotate-[30deg] scale-[65%] hover:rotate-0 transition-transform duration-300">
          <Tips />
        </div>

        <div className="absolute right-24 bottom-48 transform -rotate-[30deg] scale-[65%] hover:rotate-0 transition-transform duration-300">
          <CoolOff />
        </div>

        <div className="mx-auto w-full rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-8 text-left text-sm font-medium border-t focus:outline-none focus-visible:ring focus-visible:ring-neutral-500 focus-visible:ring-opacity-75">
                  <h1 className="text-6xl font-bold mr-auto flex-1">
                    What is your refund policy?
                  </h1>
                  <XMarkIcon
                    className={cx(
                      `transition-transform duration-300 delay-0 transform h-12 w-12`,
                      open ? "rotate-0" : "rotate-45",
                    )}
                  />
                </Disclosure.Button>

                <Transition
                  enter="transition-all duration-300 ease-out"
                  enterFrom="transform opacity-0 max-h-0"
                  enterTo="transform scale-100 opacity-100 max-h-full"
                  leave="transition-all duration-300 ease-out"
                  leaveFrom="transform opacity-100 max-h-full"
                  leaveTo="transform opacity-0 max-h-0"
                >
                  <Disclosure.Panel className="max-w-2xl px-4 pb-8 py-2 text-sm font-ps font-medium leading-7 text-secondary-black">
                    Mandatory requirements (for ETHCC AHH only): ZKML-Engineers
                    or ZK-enthusiasts who’s willing to combine ZKML with their
                    field of expertise (such as AI engineer or game developer).
                    Building ZKML-related open-source project during ETHCC.
                    Anyone excited to make new friends!
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-8 text-left text-sm font-medium border-t focus:outline-none focus-visible:ring focus-visible:ring-neutral-500 focus-visible:ring-opacity-75">
                  <h1 className="text-6xl font-bold mr-auto flex-1">Location & Dates</h1>
                  <XMarkIcon
                    className={cx(
                      `transition-transform duration-300 delay-0 transform h-12 w-12`,
                      open ? "rotate-0" : "rotate-45",
                    )}
                  />
                </Disclosure.Button>

                <Transition
                  enter="transition-all duration-300 ease-out"
                  enterFrom="transform opacity-0 max-h-0"
                  enterTo="transform scale-100 opacity-100 max-h-full"
                  leave="transition-all duration-300 ease-out"
                  leaveFrom="transform opacity-100 max-h-full"
                  leaveTo="transform opacity-0 max-h-0"
                >
                  <Disclosure.Panel className="max-w-2xl px-4 pb-8 py-2 text-sm font-ps font-medium leading-7 text-secondary-black">
                    Mandatory requirements (for ETHCC AHH only): ZKML-Engineers
                    or ZK-enthusiasts who’s willing to combine ZKML with their
                    field of expertise (such as AI engineer or game developer).
                    Building ZKML-related open-source project during ETHCC.
                    Anyone excited to make new friends!
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-8 text-left text-sm font-medium border-t focus:outline-none focus-visible:ring focus-visible:ring-neutral-500 focus-visible:ring-opacity-75">
                  <h1 className="text-6xl font-bold mr-auto flex-1">Who are WE?</h1>
                  <XMarkIcon
                    className={cx(
                      `transition-transform duration-300 delay-0 transform h-12 w-12`,
                      open ? "rotate-0" : "rotate-45",
                    )}
                  />
                </Disclosure.Button>

                <Transition
                  enter="transition-all duration-300 ease-out"
                  enterFrom="transform opacity-0 max-h-0"
                  enterTo="transform scale-100 opacity-100 max-h-full"
                  leave="transition-all duration-300 ease-out"
                  leaveFrom="transform opacity-100 max-h-full"
                  leaveTo="transform opacity-0 max-h-0"
                >
                  <Disclosure.Panel className="max-w-2xl px-4 pb-8 py-2 text-sm font-ps font-medium leading-7 text-secondary-black">
                    Mandatory requirements (for ETHCC AHH only): ZKML-Engineers
                    or ZK-enthusiasts who’s willing to combine ZKML with their
                    field of expertise (such as AI engineer or game developer).
                    Building ZKML-related open-source project during ETHCC.
                    Anyone excited to make new friends!
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-8 text-left text-sm font-medium border-t focus:outline-none focus-visible:ring focus-visible:ring-neutral-500 focus-visible:ring-opacity-75">
                  <h1 className="text-6xl font-bold mr-auto flex-1">
                    What events will happen?
                  </h1>
                  <XMarkIcon
                    className={cx(
                      `transition-transform duration-300 delay-0 transform h-12 w-12`,
                      open ? "rotate-0" : "rotate-45",
                    )}
                  />
                </Disclosure.Button>

                <Transition
                  enter="transition-all duration-300 ease-out"
                  enterFrom="transform opacity-0 max-h-0"
                  enterTo="transform scale-100 opacity-100 max-h-full"
                  leave="transition-all duration-300 ease-out"
                  leaveFrom="transform opacity-100 max-h-full"
                  leaveTo="transform opacity-0 max-h-0"
                >
                  <Disclosure.Panel className="max-w-2xl px-4 pb-8 py-2 text-sm font-ps font-medium leading-7 text-secondary-black">
                    Mandatory requirements (for ETHCC AHH only): ZKML-Engineers
                    or ZK-enthusiasts who’s willing to combine ZKML with their
                    field of expertise (such as AI engineer or game developer).
                    Building ZKML-related open-source project during ETHCC.
                    Anyone excited to make new friends!
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-8 text-left text-sm font-medium border-t focus:outline-none focus-visible:ring focus-visible:ring-neutral-500 focus-visible:ring-opacity-75">
                  <h1 className="text-6xl font-bold mr-auto flex-1">What is Hacker State?</h1>
                  <XMarkIcon
                    className={cx(
                      `transition-transform duration-300 delay-0 transform h-12 w-12`,
                      open ? "rotate-0" : "rotate-45",
                    )}
                  />
                </Disclosure.Button>

                <Transition
                  enter="transition-all duration-300 ease-out"
                  enterFrom="transform opacity-0 max-h-0"
                  enterTo="transform scale-100 opacity-100 max-h-full"
                  leave="transition-all duration-300 ease-out"
                  leaveFrom="transform opacity-100 max-h-full"
                  leaveTo="transform opacity-0 max-h-0"
                >
                  <Disclosure.Panel className="max-w-2xl px-4 pb-8 py-2 text-sm font-ps font-medium leading-7 text-secondary-black">
                    Mandatory requirements (for ETHCC AHH only): ZKML-Engineers
                    or ZK-enthusiasts who’s willing to combine ZKML with their
                    field of expertise (such as AI engineer or game developer).
                    Building ZKML-related open-source project during ETHCC.
                    Anyone excited to make new friends!
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </section>
  )
}
