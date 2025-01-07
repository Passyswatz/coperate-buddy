"use client";
import Link from "next/link";

export default function Home() {
  return (
    //to apply gradient in next js use bg-gradient to r from via to
    <div className="min-h-screen py-40 bg-gradient-to-r from-purple-500 via-pink-300 to-pink-100">
      <div className="mx-auto ">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden ">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: "url('/images/resume.jpg')" }}
          >
            <h2 className="text-white text-3xl mb-3  ">Welcome</h2>
            <p className="text-white">
              Make the most out of your style ....
            </p>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register</h2>
            <p className="mb-4">
              create your account, It's free and only take a minute
            </p>
            <form>
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Firstname"
                  className="border border-gray-400 py-1 px-2"
                />
                <input
                  type="text"
                  placeholder="Surname"
                  className="border border-gray-400 py-1 px-2"
                />
              </div>
              <div className="mt-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2 w-full"
                />

                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="password"
                    className="border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="comfirm password"
                    className="border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                <div className="mt-5">
                  <input type="checkbox" className="border border-gray-400" />
                  <span>
                        I accept the
                    <Link
                      href="/terms-of-use"
                      className="text-purple-500 font-semibold"
                    >
                      Terms of Use
                    </Link>
                    &
                    <Link
                      href="/privacy-policy"
                      className="text-purple-500 font-semibold"
                    >
                      Privacy Policy
                    </Link>
                  </span>
                </div>
                <div className="mt-5">
                  <button className="py-3 px-12 bg-purple-500 w-full rounded-xl text-center tect-white ">Register Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
