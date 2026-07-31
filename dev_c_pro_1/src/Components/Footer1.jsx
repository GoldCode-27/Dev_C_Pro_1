import React from 'react';
import { SiAdidas } from "@icons-pack/react-simple-icons";
import { FaCcVisa, FaCcMastercard, FaCcAmex } from 'react-icons/fa6';

export default function Footer1() {
  return (
    <footer className="w-full bg-[#1e1e1e] text-white py-8 sm:py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* TOP SECTION: RESPONSIVE NAVIGATION GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 text-left sm:text-center mb-8 sm:mb-12">
          
          {/* Column 1: Info */}
          <div>
            <h4 className="font-extrabold uppercase tracking-wider text-sm sm:text-base mb-3 sm:mb-4 text-white">
              Info
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#" className="hover:underline hover:text-white transition-colors">Terms and Conditions</a></li>
              <li><a href="#" className="hover:underline hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:underline hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 2: Collections */}
          <div>
            <h4 className="font-extrabold uppercase tracking-wider text-sm sm:text-base mb-3 sm:mb-4 text-white">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#" className="hover:underline hover:text-white transition-colors">Ultraboost</a></li>
              <li><a href="#" className="hover:underline hover:text-white transition-colors">Confirmed</a></li>
              <li><a href="#" className="hover:underline hover:text-white transition-colors">NMD</a></li>
              <li><a href="#" className="hover:underline hover:text-white transition-colors">Originals</a></li>
            </ul>
          </div>

          {/* Column 3: Sports (With Logo Above) */}
          <div className="col-span-2 sm:col-span-1 flex flex-col items-start sm:items-center">
            <div className="mb-2 text-white">
              <SiAdidas size={32} />
            </div>
            <h4 className="font-extrabold uppercase tracking-wider text-sm sm:text-base mb-3 sm:mb-4 text-white">
              Sports
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#" className="hover:underline hover:text-white transition-colors">Football</a></li>
              <li><a href="#" className="hover:underline hover:text-white transition-colors">Basketball</a></li>
              <li><a href="#" className="hover:underline hover:text-white transition-colors">Running</a></li>
              <li><a href="#" className="hover:underline hover:text-white transition-colors">Training</a></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4 className="font-extrabold uppercase tracking-wider text-sm sm:text-base mb-3 sm:mb-4 text-white">
              Support
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#" className="hover:underline hover:text-white transition-colors">Customer Service</a></li>
              <li><a href="#" className="hover:underline hover:text-white transition-colors">F.A.Q.</a></li>
              <li><a href="#" className="hover:underline hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:underline hover:text-white transition-colors">adiClub</a></li>
            </ul>
          </div>

          {/* Column 5: Follow Us */}
          <div className="col-span-2 sm:col-span-1 flex flex-col items-start sm:items-center">
            <h4 className="font-extrabold uppercase tracking-wider text-sm sm:text-base mb-3 sm:mb-4 text-white">
              Follow Us
            </h4>
            <div className="flex items-center gap-4 text-gray-300">
              {/* Facebook */}
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Twitter / X */}
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: PAYMENT METHODS & COPYRIGHT */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-800 text-gray-400 text-xs">
          <p className="text-center sm:text-left">© 2026 adidas Inc. All Rights Reserved.</p>
          
          <div className="flex items-center gap-4">
            <FaCcAmex size={32} className="hover:text-white transition-colors" />
            <FaCcMastercard size={32} className="hover:text-white transition-colors" />
            <FaCcVisa size={32} className="hover:text-white transition-colors" />
          </div>
        </div>

      </div>
    </footer>
  );
}