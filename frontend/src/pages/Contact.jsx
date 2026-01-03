import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const mapStyle = {
  width: "100%",
  height: "100%",
};

const pinPoint = {
  lat: 19.292354,
  lng: 72.863803,
};

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen bg-[#ffffe3] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        <div className="p-8 md:p-12 flex flex-col justify-center gap-8 bg-linear-to-br from-white to-gray-50">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Get in Touch
            </h2>
            <div className="w-20 h-1 bg-[#4a4a4a] rounded-full"></div>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            Feel free to reach out to us. We are always happy to help and answer
            your questions.
          </p>

          <div className="space-y-6">

            <a href="tel:+918928886235" className="flex items-start gap-4 p-4 rounded-xl hover:bg-red-50 transition-all duration-300 group">
              <div className="p-3 bg-red-100 rounded-lg group-hover:bg-[#4a4a4a] transition-colors duration-300">
                <Phone className="text-[#4a4a4a] group-hover:text-white transition-colors duration-300" size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Phone</p>
                <p className="text-gray-600 group-hover:text-[#4a4a4a] transition-colors">+91 89288 86235</p>
              </div>
            </a>

            <a href="mailto:careforever.contant@gmail.com" className="flex items-start gap-4 p-4 rounded-xl hover:bg-red-50 transition-all duration-300 group">
              <div className="p-3 bg-red-100 rounded-lg group-hover:bg-[#4a4a4a] transition-colors duration-300">
                <Mail className="text-[#4a4a4a] group-hover:text-white transition-colors duration-300" size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Email</p>
                <p className="text-gray-600 group-hover:text-[#4a4a4a] transition-colors break-all">careforever.contant@gmail.com</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-4 rounded-xl">
              <div className="p-3 bg-red-100 rounded-lg">
                <MapPin className="text-[#4a4a4a]" size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Address</p>
                <p className="text-gray-600 leading-relaxed">
                  Shop No. 8/ Ground Floor/ Poonam Orbit CHSL./ Queen's Park Road/ Mira Road (East) - 401107
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl">
              <div className="p-3 bg-red-100 rounded-lg">
                <Clock className="text-[#4a4a4a]" size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Working Hours</p>
                <p className="text-gray-600">Mon – Sat : 11:30 AM – 11:30 PM</p>
              </div>
            </div>

          </div>
        </div>

        <div className="h-96 md:h-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
          <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}>
            <GoogleMap
              mapContainerStyle={mapStyle}
              center={pinPoint}
              zoom={15}
            >
              <Marker position={pinPoint} />
            </GoogleMap>
          </LoadScript>
        </div>

      </div>
      
    </div>
  );
};

export default Contact;