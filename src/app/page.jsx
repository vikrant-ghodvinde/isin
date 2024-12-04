import AppLayout from "@/components/AppLayout/AppLayout";
import FAQs from "@/components/FAQs/FAQs";
import ISINSearchBox from "@/Isinsearchbox/ISINSearchBox";
import {
  KeyRoundIcon,
  LandmarkIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <AppLayout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <section className="relative w-full z-10 bg-[url('/images/in.webp')] bg-no-repeat bg-cover after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-green-800 after:opacity-80 after:-z-10">
        <div className="container">
          <div className="min-h-[70vh] py-10 flex items-center text-white">
            <div className="grid grid-cols-12 gap-5 max-lg:gap-y-10">
              <div className="col-span-12 lg:col-span-6">
                <div className="space-y-5">
                  <h1 className="text-4xl">
                    Official Legal Entity Identifier (LEI) registration service
                    for Indian companies
                  </h1>
                  <p>Apply in 2 minutes and receive your LEI code today</p>
                  <button type="button" className="btn btn-primary">
                    Apply for new ISIN
                  </button>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <div className="w-full max-w-80 max-lg:max-w-full ml-auto max-lg:mx-auto bg-white rounded-md shadow overflow-hidden">
                  <div className="p-5 text-black">
                    <div className="flex items-center gap-5">
                      <Image
                        src="/images/icons/Green_shield.svg"
                        alt=""
                        width={200}
                        height={200}
                        className="w-10"
                      />
                      <h6 className="text-lg font-medium leading-snug">
                        Official Registration Agent
                      </h6>
                    </div>
                  </div>
                  <div className="p-5 text-black">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <span className="text-orange-500">
                          <ShieldCheckIcon size={20} />
                        </span>
                        Trusted by 92 832 customers
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-orange-500">
                          <KeyRoundIcon size={20} />
                        </span>
                        Secure payments
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-orange-500">
                          <LandmarkIcon size={20} />
                        </span>
                        Globally valid
                      </li>
                    </ul>
                  </div>
                  <div className="p-5 bg-black text-center text-sm">
                    <span className="block font-bold text-lg">
                      Free LEI certificate
                    </span>{" "}
                    Valued ₹599 PER YEAR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full py-10">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-10">
            <div className="relative">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 lg:col-span-6">
                  <h2 className="text-3xl font-medium mb-5">
                    About the Company
                  </h2>
                  <p className="mb-5">
                    Indian LEI offers convenient and secure registration
                    services. We are an official LEI number Registration Agent
                    for Indian companies.
                  </p>
                  <ul className="space-y-6">
                    <li className="flex items-center gap-4">
                      <span className="text-orange-500">
                        <ShieldCheckIcon size={24} />
                      </span>
                      100% of applications with pre-validated data checks
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="text-orange-500">
                        <KeyRoundIcon size={24} />
                      </span>
                      Secure payment via Netbanking or by invoice
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="text-orange-500">
                        <ServerIcon size={24} />
                      </span>
                      Integrated with the Ministry of Corporate Affairs
                    </li>
                  </ul>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 lg:col-span-6">
                      <div className="relative w-full bg-orange-500 text-white shadow rounded-md">
                        <div className="p-4 space-y-2">
                          <h5 className="text-lg font-semibold">08 Nov 2024</h5>
                          <p>
                            Why use an official registration agent when applying
                            for an LEI code?
                          </p>
                          <Link href="" className="block text-green-600">
                            Read More...
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                      <div className="relative w-full bg-orange-500 text-white shadow rounded-md">
                        <div className="p-4 space-y-2">
                          <h5 className="text-lg font-semibold">08 Nov 2024</h5>
                          <p>
                            Why use an official registration agent when applying
                            for an LEI code?
                          </p>
                          <Link href="" className="block text-green-600">
                            Read More...
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                      <div className="relative w-full bg-orange-500 text-white shadow rounded-md">
                        <div className="p-4 space-y-2">
                          <h5 className="text-lg font-semibold">08 Nov 2024</h5>
                          <p>
                            Why use an official registration agent when applying
                            for an LEI code?
                          </p>
                          <Link href="" className="block text-green-600">
                            Read More...
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                      <div className="relative w-full bg-orange-500 text-white shadow rounded-md">
                        <div className="p-4 space-y-2">
                          <h5 className="text-lg font-semibold">08 Nov 2024</h5>
                          <p>
                            Why use an official registration agent when applying
                            for an LEI code?
                          </p>
                          <Link href="" className="block text-green-600">
                            Read More...
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full py-10 bg-green-50/30">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-10">
            <div className="relative">
              <div className="relative w-full text-center">
                <h2 className="text-3xl font-medium mb-2">
                  Applying for an LEI is fast and secure
                </h2>
                <p>We issue over 95% of codes in less than 24 hours.</p>
              </div>
            </div>
            <div className="relative">
              <ul className="relative w-full flex items-start justify-between before:absolute before:left-1/2 before:-translate-x-1/2 before:top-20 before:w-full before:max-w-[80%] before:h-px before:bg-black max-lg:flex-col max-lg:before:h-full max-lg:before:w-px max-lg:before:left-2 max-lg:before:-translate-x-0 max-lg:before:top-1/2 max-lg:before:-translate-y-1/2">
                <li>
                  <div className="relative w-full max-w-72 px-5 space-y-16 max-lg:space-y-5 max-lg:mb-6 max-lg:pl-10">
                    <div className="text-xl uppercase text-center max-lg:text-start">
                      Step{" "}
                      <span className="text-5xl font-bold text-green-600">
                        1
                      </span>
                    </div>
                    <span className="block absolute -top-1 left-1/2 -translate-x-1/2 w-10 h-10 bg-green-50 border border-green-600 rounded-full before:absolute before:left-1/2 before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2 before:w-2.5 before:h-2.5 before:bg-green-600 before:rounded-full max-lg:left-2"></span>
                    <div className="w-full">
                      <h5 className="font-semibold mb-2">
                        ENTER COMPANY DETAILS
                      </h5>
                      <p>
                        We request the required data from the Ministry of
                        Corporate Affairs to ensure your application complies
                        with LEI code standards.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="relative w-full max-w-72 px-5 space-y-16 max-lg:space-y-5 max-lg:mb-6 max-lg:pl-10">
                    <div className="text-xl uppercase text-center max-lg:text-start">
                      Step{" "}
                      <span className="text-5xl font-bold text-green-600">
                        2
                      </span>
                    </div>
                    <span className="block absolute -top-1 left-1/2 -translate-x-1/2 w-10 h-10 bg-green-50 border border-green-600 rounded-full before:absolute before:left-1/2 before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2 before:w-2.5 before:h-2.5 before:bg-green-600 before:rounded-full max-lg:left-2"></span>
                    <div className="w-full">
                      <h5 className="font-semibold mb-2">
                        SELECT LEI CODE VALIDITY PERIOD
                      </h5>
                      <p>
                        Select one of our convenient extended-length LEI
                        packages. We offer LEI codes with a validity of up to 5
                        years.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="relative w-full max-w-72 px-5 space-y-16 max-lg:space-y-5 max-lg:mb-6 max-lg:pl-10">
                    <div className="text-xl uppercase text-center max-lg:text-start">
                      Step{" "}
                      <span className="text-5xl font-bold text-green-600">
                        3
                      </span>
                    </div>
                    <span className="block absolute -top-1 left-1/2 -translate-x-1/2 w-10 h-10 bg-green-50 border border-green-600 rounded-full before:absolute before:left-1/2 before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2 before:w-2.5 before:h-2.5 before:bg-green-600 before:rounded-full max-lg:left-2"></span>
                    <div className="w-full">
                      <h5 className="font-semibold mb-2">
                        PAY NOW VIA RAZORPAY OR LATER BY INVOICE
                      </h5>
                      <p>
                        We will automatically send you a receipt after a
                        successful payment or an invoice after choosing bank
                        transfer as a payment solution.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full py-10">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-10">
            <div className="relative">
              <div className="relative w-full">
                <h2 className="text-3xl font-medium mb-2">
                  Questions and answers
                </h2>
                <p>
                  Do you have an additional question?{" "}
                  <Link href="/faqs" className="text-green-600">
                    See More
                  </Link>
                </p>
              </div>
            </div>
            <div className="relative">
              <FAQs sliced />
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
