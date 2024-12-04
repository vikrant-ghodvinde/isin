import AppLayout from "@/components/AppLayout/AppLayout";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <AppLayout>
      <section className="relative w-full py-10">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-5">
            <div className="relative">
              <div className="relative w-full">
                <h2 className="text-4xl font-bold">
                  Our story
                </h2>
              </div>
            </div>
            <div className="relative">
              <div className="space-y-4">
                <p>
                  LEI Register India emerged from our CEO Rahul Jha's personal
                  struggle with the complex process of obtaining Legal Entity
                  Identifiers (LEIs). Realizing the need for a simpler approach,
                  he took the initiative to streamline the LEI acquisition
                  process for legal entities.
                </p>
                <p>
                  Our dedication to exceptional customer service and streamlined
                  procedures quickly set us apart, establishing LEI Register
                  India as a benchmark of efficiency and quality. Today, we
                  proudly hold the position of the top LEI Registration Agent in
                  India, serving companies with the same passion for simplifying
                  the application process that fuelled our creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full py-10 bg-green-50/30">
        <div className="container">
          <div className="grid grid-cols-12 gap-5 items-center">
            <div className="col-span-12 lg:col-span-4">
              <Image
                src="/images/our-mission.jpg"
                alt=""
                width={500}
                height={500}
                className="w-full h-full rounded-xl"
              />
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2 className="text-3xl font-medium mb-5">
                Our mission
              </h2>
              <p>
                At LEI Register India, we're committed to providing seamless,
                efficient, and affordable services without sacrificing quality.
                Our aim is to simplify the process, ensuring it's accessible and
                understandable for everyone. With innovative solutions like
                LEIAdmin and Multiyear plans, we're constantly setting new
                industry standards, providing clients with convenient, long-term
                solutions.
              </p>
              <div className="relative w-full bg-white border border-orange-100 rounded-md mt-8">
                <div className="p-4 flex items-center justify-center gap-5 flex-wrap">
                  <div className="relative min-w-48 flex flex-col items-center justify-center">
                    <h4 className="text-3xl font-bold">2019</h4>
                    <p className="font-semibold text-orange-500">Founded</p>
                  </div>
                  <div className="relative min-w-48 flex flex-col items-center justify-center">
                    <h4 className="text-3xl font-bold">40+</h4>
                    <p className="font-semibold text-orange-500">Employees</p>
                  </div>
                  <div className="relative min-w-48 flex flex-col items-center justify-center">
                    <h4 className="text-3xl font-bold">93k+</h4>
                    <p className="font-semibold text-orange-500">
                      Local customers
                    </p>
                  </div>
                  <div className="relative min-w-48 flex flex-col items-center justify-center">
                    <Image
                      src="/images/rapidlei.png"
                      alt=""
                      width={300}
                      height={300}
                      className="w-40"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full py-10">
        <div className="container">
          <div className="grid grid-cols-12 gap-5 items-center">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="text-3xl font-medium mb-5">
                Our Team
              </h2>
              <div className="space-y-4">
                <p>
                  The team at LEI Register India comprises diverse individuals,
                  each bringing their unique expertise and passion to the table.
                  Our story is one of collaboration, dedication, and a shared
                  commitment to excellence in providing you with the best LEI
                  registration services in India.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sequi exercitationem consectetur et sint hic facere molestias,
                  rerum similique recusandae explicabo! Et nam, illum vero
                  repellat ea consectetur aliquid quisquam illo.
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <Image
                src="/images/team.png"
                alt=""
                width={500}
                height={500}
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default About;
