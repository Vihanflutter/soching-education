import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-2 md:col-span-1">
             <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-white font-bold">S</div>
                <span className="text-xl font-bold">Soching Education</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premier institute for NEET preparation. Committed to creating the next generation of doctors with ethical values and academic excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Courses</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-green-500">NEET - Class 11</a></li>
              <li><a href="#" className="hover:text-green-500">NEET - Class 12</a></li>
              <li><a href="#" className="hover:text-green-500">Dropper Batch</a></li>
              <li><a href="#" className="hover:text-green-500">Biology Special</a></li>
              <li><a href="#" className="hover:text-green-500">Test Series</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-green-500">NCERT Solutions</a></li>
              <li><a href="#" className="hover:text-green-500">Previous Year Papers</a></li>
              <li><a href="#" className="hover:text-green-500">Biology Mind Maps</a></li>
              <li><a href="#" className="hover:text-green-500">Topper's Talk</a></li>
              <li><a href="#" className="hover:text-green-500">Blog</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-lg mb-6">Contact Us</h4>
             <ul className="space-y-3 text-gray-400 text-sm">
                <li>support@sochingedu.com</li>
                <li>+91 8949193467</li>
                <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-1 shrink-0" />
                    <span>Kota, Rajasthan - The Education Hub of India</span>
                </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Soching Education. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;