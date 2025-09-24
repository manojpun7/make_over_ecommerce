import React from "react";
import { Mail, Calendar, MapPin, Phone, Shield } from "lucide-react";

const PersonalInformation = () => {
  return (
    <div>
      {/* Main Content */}
      <div className="flex-1 p-10 ">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-6 h-6 text-pink-600" />
          <h2 className="text-xl font-bold text-gray-800">
            Personal Information
          </h2>
        </div>
        <p className="text-gray-600 mb-6 ">
          In order to access some features of the Service, you will have to fill
          your account details. You may use it for buying things, also for
          shipping process.
        </p>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="First Name"
            className="border rounded-lg px-4 py-2"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border rounded-lg px-4 py-2"
          />
          <div className="flex items-center border rounded-lg px-3 py-2">
            <Mail className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 bg-transparent outline-none"
            />
          </div>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <Phone className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="tel"
              placeholder="(+977) ---- --- ---"
              className="flex-1 bg-transparent outline-none"
            />
          </div>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <Calendar className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="DD/MM/YYYY"
              className="flex-1 bg-transparent outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Address"
            className="border rounded-lg px-4 py-2"
          />
          <input
            type="text"
            placeholder="City"
            className="border rounded-lg px-4 py-2"
          />
          <input
            type="text"
            placeholder="Zip Code"
            className="border rounded-lg px-4 py-2"
          />

          {/* Gender */}
          <div className="col-span-2 flex gap-3 mt-2">
            <button
              type="button"
              className="flex-1 border rounded-lg py-2 hover:bg-gray-100"
            >
              Male
            </button>
            <button
              type="button"
              className="flex-1 border rounded-lg py-2 bg-pink-600 text-white"
            >
              Female
            </button>
            <button
              type="button"
              className="flex-1 border rounded-lg py-2 hover:bg-gray-100"
            >
              Other
            </button>
          </div>

          {/* Terms */}
          <div className="col-span-2 flex items-center gap-2 mt-4">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms" className="text-sm text-gray-600">
              Agree to the{" "}
              <a href="#" className="text-pink-600 underline">
                Terms and Conditions
              </a>
            </label>
          </div>

          {/* Buttons */}
          <div className="col-span-2 flex gap-3 mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-pink-600 text-white rounded-lg shadow hover:opacity-90"
            >
              Save
            </button>
            <button
              type="reset"
              className="px-6 py-2 border rounded-lg text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInformation;
