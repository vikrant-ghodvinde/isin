import AppLayout from "@/components/AppLayout/AppLayout";
import { Input } from "@/ui/components/input";
import { Textarea } from "@/ui/components/textarea";
import React from "react";

const ContactUs = () => {
  return (
    <AppLayout>
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-5">
            <div className="relative">
              <div className="relative w-full">
                <h2 className="text-4xl font-bold">
                  Feel Free to Ask Questions
                </h2>
              </div>
            </div>
            <div className="relative">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio assumenda nisi placeat laboriosam, beatae aspernatur
                deleniti eligendi saepe mollitia voluptatum ab consequuntur
                molestiae commodi sint provident eos quam dolorem dolores.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 lg:col-span-6">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-6">
                      <div className="relative w-full h-full p-3 bg-orange-500 text-white shadow rounded-md text-sm">
                        <h4 className="font-bold">ISIN Organization</h4>
                        <p>
                          <strong>Location:</strong> Europe
                        </p>
                        <p>
                          <strong>Hours:</strong> 8AM - 6PM
                        </p>
                        <p>
                          <strong>Tel:</strong> 44 (0) 20 3002 0717
                        </p>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <div className="relative w-full h-full p-3 bg-orange-500 text-white shadow rounded-md text-sm">
                        <h4 className="font-bold">ISIN Organization</h4>
                        <p>
                          <strong>Location:</strong> Asia
                        </p>
                        <p>
                          <strong>Hours:</strong> 9AM - 5PM
                        </p>
                        <p>
                          <strong>Tel:</strong> +852 3018 4861
                        </p>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <div className="relative w-full h-full p-3 bg-orange-500 text-white shadow rounded-md text-sm">
                        <h4 className="font-bold">ISIN Organization</h4>
                        <p>
                          <strong>Location:</strong> Cayman
                        </p>
                        <p>
                          <strong>Hours:</strong> 9AM - 5PM
                        </p>
                        <p>
                          <strong>Tel:</strong> 345-749-8307
                        </p>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <div className="relative w-full h-full p-3 bg-orange-500 text-white shadow rounded-md text-sm">
                        <h4 className="font-bold">ISIN Organization</h4>
                        <p>
                          <strong>Location:</strong> United States & Canada
                        </p>
                        <p>
                          <strong>Hours:</strong> 8AM - 6PM
                        </p>
                        <p>
                          <strong>Tel:</strong> 212-904-0218
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="relative w-full p-4 bg-white shadow-full shadow-black/5 rounded-md">
                    <form className="grid grid-cols-12 gap-4">
                      <div className="col-span-12 lg:col-span-6">
                        <div className="relative w-full">
                          <label className="block text-sm font-medium mb-1.5">
                            Name
                          </label>
                          <Input type="text" required />
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-6">
                        <div className="relative w-full">
                          <label className="block text-sm font-medium mb-1.5">
                            Phone
                          </label>
                          <Input type="number" required />
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-6">
                        <div className="relative w-full">
                          <label className="block text-sm font-medium mb-1.5">
                            Primary Email
                          </label>
                          <Input type="email" required />
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-6">
                        <div className="relative w-full">
                          <label className="block text-sm font-medium mb-1.5">
                            Secondary Email
                          </label>
                          <Input type="email" required />
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-12">
                        <div className="relative w-full">
                          <label className="block text-sm font-medium mb-1.5">
                            Subject
                          </label>
                          <Input type="text" required />
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-12">
                        <div className="relative w-full">
                          <label className="block text-sm font-medium mb-1.5">
                            Body*
                          </label>
                          <Textarea required />
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-12">
                        <div className="relative w-full">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default ContactUs;
