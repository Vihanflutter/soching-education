import React from 'react';
import { Star, GraduationCap, Award, Briefcase } from 'lucide-react';

const Teachers: React.FC = () => {
  return (
    <section id="faculty" className="py-20 bg-green-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Your Mentor</h2>
          <p className="text-xl text-gray-600">Guidance from India's renowned Biology expert</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2">
            <div className="h-full min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Anshuman Agarwal" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold mb-4 w-fit">
                    <Star className="w-3 h-3 mr-1 fill-green-800" /> Top Rated Faculty
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Dr. Anshuman Agarwal</h3>
                <p className="text-green-600 font-bold text-lg mb-6">Founder & Lead Biology Faculty</p>
                
                <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-lg mr-4 text-green-700">
                             <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">12+ Years Experience</p>
                            <p className="text-sm text-gray-500">Ex-HOD at Resonance Classes</p>
                            <p className="text-sm text-gray-500">Ex-Biology Faculty at eSaral</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-lg mr-4 text-green-700">
                             <GraduationCap className="w-5 h-5" />
                        </div>
                         <div>
                            <p className="font-bold text-gray-800">Academic Excellence</p>
                            <p className="text-sm text-gray-500">MBBS Qualified Expert</p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-lg mr-4 text-green-700">
                             <Award className="w-5 h-5" />
                        </div>
                         <div>
                            <p className="font-bold text-gray-800">Proven Track Record</p>
                            <p className="text-sm text-gray-500">Mentored students to AIIMS & Govt. Colleges</p>
                        </div>
                    </div>
                </div>

                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors">
                    Watch Demo Lecture
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;