import React from 'react';
import { PlayCircle, Award, Users, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onBookDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookDemo }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#f0fdf4]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-200 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 font-bold text-sm mb-6 border border-green-200">
              <span className="flex h-2 w-2 rounded-full bg-green-600 mr-2 animate-pulse"></span>
              Crack NEET with Biology Guru
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              NEET Biology by <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Dr. Anshuman Agarwal</span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              12+ Years Experience | Ex-HOD Resonance | Ex-Biology Faculty eSaral. <br/>
              Join the league of top rankers and secure your seat in a Government Medical College.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button 
                onClick={onBookDemo}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-green-600 text-white font-bold text-lg shadow-green-200 shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-200"
              >
                Book Your Seat Now
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-gray-700 font-bold text-lg border border-gray-200 hover:bg-gray-50 flex items-center justify-center gap-2 transition-all">
                <PlayCircle className="w-5 h-5 text-green-600" />
                Sample Lecture
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>NCERT Based</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-green-600" />
                <span>Best Selection Ratio</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-600" />
                <span>Mentored Thousands of Doctors</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-12 lg:mt-0">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
              <img 
                src="image/Dr Anshuman Sir.png" 
                alt="Dr. Anshuman Agarwal Teaching" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Cards - Desktop/Tablet Only */}
            <div className="hidden md:block absolute -bottom-6 -left-10 bg-white p-4 rounded-xl shadow-xl animate-bounce duration-[3000ms] z-20 border border-green-50 max-w-[180px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold shrink-0">360</div>
                <div>
                  <p className="text-xs text-gray-500">Target Score</p>
                  <p className="font-bold text-gray-800 text-sm">360/360 Bio</p>
                </div>
              </div>
            </div>

             <div className="hidden md:block absolute top-12 -right-10 bg-white p-4 rounded-xl shadow-xl animate-pulse z-20 border border-blue-50 max-w-[180px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <span className="text-xl">🩺</span>
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">Future Doctors</p>
                  <p className="text-xs text-gray-500">Join the Batch</p>
                </div>
              </div>
            </div>

            {/* Mobile Cards - Static Row below image */}
            <div className="flex md:hidden justify-between gap-4 mt-6">
                 {/* Card 1 */}
                 <div className="bg-white p-3 rounded-xl shadow-lg border border-green-50 flex-1 flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold shrink-0">360</div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-bold">Target</p>
                      <p className="font-bold text-gray-800 text-sm leading-tight">360/360 Bio</p>
                    </div>
                 </div>
                 
                 {/* Card 2 */}
                 <div className="bg-white p-3 rounded-xl shadow-lg border border-blue-50 flex-1 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <span className="text-lg">🩺</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm leading-tight">Future Doctors</p>
                      <p className="text-[10px] text-gray-500 uppercase font-bold">Join Now</p>
                    </div>
                 </div>
            </div>
            
            {/* Dots Pattern */}
            <div className="absolute -z-10 -bottom-10 -right-10 text-green-200">
               <svg width="150" height="150" fill="currentColor" viewBox="0 0 100 100">
                    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="2"></circle>
                    </pattern>
                    <rect width="100" height="100" fill="url(#dots)"></rect>
               </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;