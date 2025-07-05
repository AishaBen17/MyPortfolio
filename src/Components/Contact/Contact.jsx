import React from "react";
import Title from "./../Title/Title";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "fcac63ac-74dc-427a-be51-38a0c83ea95f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully ✨");
      event.target.reset();
    } else {
      toast.error(`Error: ${data.message}`);
    }
  };

  return (
    <section id="contact" className="py-24 scroll-mt-32 " data-aos="zoom-in-up">
      <div className="container mx-auto px-6 max-w-6xl pt-10">
        {/* Title */}
        <Title title="Get in touch" />

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 mt-16 items-start">
          {/* Left */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#FD54DD]">Let's talk</h2>
            <p className="text-gray-300 leading-relaxed text-justify">
              Looking for a Front-End Developer to bring your designs to life?
              I'm available for remote work and exciting collaborations.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 text-[#c471ed]">
                <div className="bg-white rounded-full p-3 shadow-md hover:bg-[#FC53DE]/20 transition duration-300">
                  <MdEmail className="text-2xl text-[#c471ed]" />
                </div>
                <p className="bg-white/10 backdrop-blur-md text-white text-lg px-4 py-2 rounded-xl w-[260px]">
                  aisha.ahmedben@gmail.com
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 text-[#c471ed]">
                <div className="bg-white rounded-full p-3 shadow-md hover:bg-[#FC53DE]/20 transition duration-300">
                  <MdLocationOn className="text-2xl text-[#c471ed]" />
                </div>
                <p className="bg-white/10 backdrop-blur-md text-white text-lg px-4 py-2 rounded-xl w-[260px]">
                  Alexandria - Egypt
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 text-[#c471ed]">
                <div className="bg-white rounded-full p-3 shadow-md hover:bg-[#FC53DE]/20 transition duration-300">
                  <MdPhone className="text-2xl text-[#c471ed]" />
                </div>
                <p className="bg-white/10 backdrop-blur-md text-white text-lg px-4 py-2 rounded-xl w-[260px]">
                  +20 12 0042 6267 <br /> +966 55 645 7724
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <form onSubmit={onSubmit} className="space-y-6 w-full">
            <div>
              <label className="block mb-2 text-white font-medium">
                Your Name :
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl bg-[#3f0b52] border border-[#c471ed] text-white placeholder:text-[#b39ddb] focus:outline-none focus:ring-2 focus:ring-[#d3444e]"
              />
            </div>
            <div>
              <label className="block mb-2 text-white font-medium">
                Your Email :
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-[#3f0b52] border border-[#c471ed] text-white placeholder:text-[#b39ddb] focus:outline-none focus:ring-2 focus:ring-[#d3444e]"
              />
            </div>
            <div>
              <label className="block mb-2 text-white font-medium">
                Your Message :
              </label>
              <textarea
                name="message"
                rows="6"
                required
                placeholder="Enter your message"
                className="w-full px-4 py-3 rounded-xl bg-[#3f0b52] border border-[#c471ed] text-white placeholder:text-[#b39ddb] focus:outline-none focus:ring-2 focus:ring-[#d3444e]"
              ></textarea>
            </div>
            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
                className="flex items-center gap-2 bg-gradient-to-r from-[#c471ed] to-[#d3444e] text-white px-8 py-3 rounded-full hover:from-[#d3444e] hover:to-[#c471ed] transition font-semibold"
              >
                Submit
                <FaPaperPlane className="text-white" />
              </button>
            </div>
          </form>
        </div>

        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    </section>
  );
};

export default Contact;
