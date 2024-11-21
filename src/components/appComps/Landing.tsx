"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import HyperText from "@/components/ui/hyper-text";

export function Landing() {
  return (
    <>
      <div className="h-[100vh] bg-neutral-950 relative antialiased">
        <div className="p-8 flex justify-between">
          <h1 className="bg-neutral-950 antialiased relative z-10  text-left text-2xl md:text-3xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
            SEND AI
          </h1>
          {/* <button className="relative z-10 text-sm md:text-2xl p-2 px-4 rounded-md  text-black bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">Join Waitlist</button> */}
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-40">
          <div className="max-w-4xl mx-auto p-4">
            <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
              Accelerating the Solana AI Ecosystem
            </h1>
            <p></p>

            <div className="flex gap-4 mt-16 justify-center">
              <HyperText
                className="relative z-10 text-sm md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold"
                text="OpenAI of Solana"
              />
              <HyperText
                className="relative z-10 text-sm md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold"
                text="X"
              />
              <HyperText
                className="relative z-10 text-sm md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold"
                text="Superteam of AI"
              />
            </div>
            {/* <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
          </p> */}
            {/* <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          /> */}
          </div>
          <BackgroundBeams />
        </div>
      </div>
    </>
  );
}
