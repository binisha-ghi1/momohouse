import Footer from "../Footer/Footer";
import { FaLocationDot } from "react-icons/fa6";
import { MdPhoneInTalk } from "react-icons/md";
import { IoTime } from "react-icons/io5";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="text-center mb-10 mt-20">
        <p className="text-3xl text-teal-800 font-bold">Our Contact</p>
        <p className="text-2xl text-gray-500 mt-8">GET IN TOUCH</p>
        <h1 className="text-4xl mt-4">
          <span className="text-orange-600">Our Friendly Team</span> would love to hear from you
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-start w-full max-w-6xl space-y-8 md:space-y-0">
        <div className="rounded-3xl w-full md:w-1/3 p-5 shadow-2xl shadow-slate-300 flex flex-col items-center pb-10">
          <FaLocationDot className="text-4xl text-orange-600 mb-2" />
          <h2 className="text-2xl font-semibold">Location</h2>
          <p className="text-gray-600 text-center">
            New Baneshwor-41201, <br />
            Kathmandu, Bagmati, Nepal
          </p>
        </div>

        <div className="rounded-3xl w-full md:w-1/3 p-5 shadow-2xl shadow-slate-300 flex flex-col items-center pb-10">
          <MdPhoneInTalk className="text-4xl text-teal-800 mb-2" />
          <h2 className="text-2xl font-semibold">Phone</h2>
          <p className="text-gray-600">
            <span className="text-teal-800">Mobile: </span>(+977) 9805689789
          </p>
          <p className="text-gray-600">( +977 ) 9841275897</p>
          <p className="text-gray-600">
            <span className="text-teal-800">Tel: </span>01-4783972
          </p>
        </div>

        <div className="rounded-3xl w-full md:w-1/3 p-5 shadow-2xl shadow-slate-300 flex flex-col items-center pb-10">
          <IoTime className="text-4xl text-blue-800 mb-2" />
          <h2 className="text-2xl font-semibold">Service Time</h2>
          <p className="text-gray-600">
            <span className="text-teal-800">Mon - Fri:</span> 8:00 AM - 8:00 PM
          </p>
          <p className="text-gray-600">
            <span className="text-teal-800">Sat - Sun:</span> Closed
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-20 mb-20 w-full max-w-6xl bg-white shadow-2xl shadow-slate-300 rounded-lg">

        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10488.777485450102!2d85.34282895596081!3d27.670556269639885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1737472831890!5m2!1sen!2snp"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map Location"
            className="rounded-l-lg"
          ></iframe>
        </div>

        <div className="flex flex-col w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-6">
            Contact <span className="text-orange-600">Us</span>
          </h1>
          <p className="text-gray-600 mb-4">
            If you have any queries, send us a message. Our friendly team would
            love to hear from you.
          </p>

          <form className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex flex-col w-full">
                <label htmlFor="fname" className="text-sm font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="border-2 border-teal-800 rounded-md p-2"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="lname" className="text-sm font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  className="border-2 border-teal-800 rounded-md p-2"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="query" className="text-sm font-medium">
                What can we do for you?
              </label>
              <select
                id="query"
                name="query"
                className="border-2 border-teal-800 rounded-md p-2 w-full"
              >
                <option value="">Choose</option>
                <option value="support">Support</option>
                <option value="sales">Sales</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-2 border-teal-800 rounded-md p-2 w-full"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="border-2 border-teal-800 rounded-md p-2 w-full"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="border-2 border-teal-800 rounded-md p-2 w-full"
                placeholder="Write your message here"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-orange-600 text-white py-2 px-6 rounded-full hover:bg-orange-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    
    </div>
  );
}

export default Contact;


