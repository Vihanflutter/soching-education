import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 1000);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center border-t-4 border-green-500">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Registration Successful!</h3>
        <p className="text-gray-600">Our academic counselor will call you shortly to discuss your NEET preparation.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Get Free NEET Counseling</h3>
        <p className="text-gray-500 text-sm">Talk to experts about your preparation strategy</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Student's Name</label>
          <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition-all" placeholder="Enter name" required />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition-all">
                <option>Class 11</option>
                <option>Class 12</option>
                <option>Dropper/Repeater</option>
                <option>Class 9-10</option>
              </select>
            </div>
            <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">Target Year</label>
               <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition-all">
                <option>NEET 2025</option>
                <option>NEET 2026</option>
                <option>NEET 2027</option>
              </select>
            </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
          <div className="flex">
            <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                +91
            </span>
            <input type="tel" className="w-full px-4 py-3 rounded-r-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition-all" placeholder="89491 93467" required />
          </div>
        </div>

        <button type="submit" className="w-full py-4 bg-green-600 text-white font-bold rounded-xl shadow-lg hover:bg-green-700 transition-colors text-lg">
          Book Free Session
        </button>
        
        <p className="text-xs text-gray-400 text-center mt-4">
            Join the Soching Education community today.
        </p>
      </form>
    </div>
  );
};

export default BookingForm;