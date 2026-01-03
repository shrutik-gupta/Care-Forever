import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-400 bottom-0 sticky -z-10">
      <div className="max-w-7xl mx-auto px-6 py-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <h3 className="text-5xl font-bold text-white mb-4">
              Care Forever <br></br> Chemist & Mart
            </h3>
            <p className="text-sm mb-6">
              Your trusted neighborhood pharmacy, committed to your health and wellness.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+918928886235"
                className="flex items-start gap-3 hover:text-white transition"
              >
                <Phone size={18} className="mt-0.5 shrink-0" />
                <span className="text-sm">+91 89288 86235</span>
              </a>

              <a
                href="mailto:careforever.contact@gmail.com"
                className="flex items-start gap-3 hover:text-white transition"
              >
                <Mail size={18} className="mt-0.5 shrink-0" />
                <span className="text-sm">careforever.contact@gmail.com</span>
              </a>

              <a
                href="https://maps.app.goo.gl/ysSjNYCwxEsYyrKK8"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 hover:text-white transition"
              >
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span className="text-sm">
                  123 Main Street, Bhayandar<br />Maharashtra, India
                </span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
              Opening Hours
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p>Monday - Saturday</p>
                  <p className="text-neutral-500">11:30 AM - 11:30 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-neutral-800 pt-8">
          <p className="text-sm text-center">
            © {currentYear} CareForever. All rights reserved.
          </p>
          <p className="text-sm text-center">
            Developed by <span><a href="https://www.shrutik.online" target='_blank'>Shrutik Gupta</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
}
