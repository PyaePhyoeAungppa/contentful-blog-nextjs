import React from 'react';

import NavBar from '../components/NavBar';

const Price: React.FC = () => {
  return (
    <div className="font-inter min-h-screen bg-blue-50">
      <NavBar />

      <div className="bg-gray-900 lg:h-[767px]">
        <div className="mx-auto min-h-screen max-w-7xl p-4 sm:p-10 lg:py-20">
          <div className="mx-auto max-w-5xl pb-10 text-center tracking-widest text-white lg:pb-20">
            <p className="pb-4 text-xl text-gray-200">PRICING</p>
            <h1 className="text-3xl font-black sm:text-5xl">
              The right price for you, whoeveryou are
            </h1>
            <p className="px-10 py-6 text-xl font-light text-gray-200 sm:text-2xl">
              Lorem ipsum has been the industry&apos;'&apos;s standard dummy text ever since , when
              an unknown printer took a galley of type and scrambled.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-8  lg:mt-4 lg:flex-row lg:gap-0">
            <div className="mb-6 w-full flex-1 rounded-xl bg-white shadow-xl lg:scale-95">
              <div className="p-12 text-center">
                <p className="pb-4 text-3xl lg:text-2xl xl:text-3xl">Hobby</p>
                <div className="justify flex items-center justify-center">
                  <span className="align-text-middle px-3 text-5xl font-extrabold lg:text-4xl xl:text-6xl">
                    $ 79
                  </span>
                  <span className="align-text-middle inline-block text-xl font-normal text-gray-500">
                    /month
                  </span>
                </div>
              </div>
              <div className="rounded-b-xl border-t-2 border-gray-200/20 bg-gray-100 p-10">
                <ul className="space-y-4">
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3 h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-500">when an unknown printer took a galley.</span>
                  </li>
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3 h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-500">
                      leap into electronic typesetting remaining.{' '}
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3 h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-500">ontaining Lorem Ipsum passages and more.</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="mt-8 w-full rounded bg-white p-3 text-center text-lg text-indigo-600 shadow-xl transition hover:bg-indigo-600 hover:text-white"
                >
                  Start your trial
                </button>
              </div>
            </div>
            <div className="relative z-10 mb-6 w-full rounded-xl border-2 border-indigo-600 bg-white shadow-xl lg:max-w-max lg:scale-110">
              <div className="p-12 text-center">
                <p className="pb-4 text-3xl font-semibold lg:text-2xl xl:text-3xl">Growth</p>
                <div className="justify flex items-center justify-center">
                  <span className="align-text-middle px-3 text-5xl font-extrabold lg:text-4xl xl:text-6xl">
                    $ 149
                  </span>
                  <span className="align-text-middle inline-block text-xl font-normal text-gray-500">
                    /month
                  </span>
                </div>
              </div>
              <div className="rounded-b-xl border-t-2 border-gray-200/20 bg-gray-100 p-10">
                <ul className="space-y-4">
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3 h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-500">when an unknown printer took a galley.</span>
                  </li>
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3 h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-500">
                      leap into electronic typesetting remaining.{' '}
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3 h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-500">ontaining Lorem Ipsum passages and more.</span>
                  </li>
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3 h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-500">
                      leap into electronic typesetting remaining.{' '}
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3 h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-500">ontaining Lorem Ipsum passages and more.</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="mt-8 w-full rounded bg-indigo-600 p-3 text-center text-lg text-white shadow-xl transition hover:bg-indigo-700 hover:text-white"
                >
                  Start your trial
                </button>
              </div>
              <div className="absolute inset-x-0 -top-3 mx-auto w-40 rounded-full bg-indigo-600 px-4 py-1 text-center text-sm tracking-wider text-white">
                MOST POPULAR
              </div>
            </div>
            <div className="mb-6 w-full flex-1 rounded-xl bg-white shadow-xl lg:scale-95">
              <div className="p-12 text-center">
                <p className="pb-4 text-3xl lg:text-2xl xl:text-3xl">Hobby</p>
                <div className="justify flex items-center justify-center">
                  <span className="align-text-middle px-3 text-5xl font-extrabold lg:text-4xl xl:text-6xl">
                    $ 349
                  </span>
                  <span className="align-text-middle inline-block text-xl font-normal text-gray-500">
                    /month
                  </span>
                </div>
              </div>
              <div className="rounded-b-xl border-t-2 border-gray-200/20 bg-gray-100 p-10">
                <ul className="space-y-4">
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3 h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-500">when an unknown printer took a galley.</span>
                  </li>
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3 h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-500">
                      leap into electronic typesetting remaining.{' '}
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3 h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-500">ontaining Lorem Ipsum passages and more.</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="mt-8 w-full rounded bg-white p-3 text-center text-lg text-indigo-600 shadow-xl transition hover:bg-indigo-600 hover:text-white"
                >
                  Start your trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
