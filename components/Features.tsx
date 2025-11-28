import React from 'react';
import { BookOpen, BrainCircuit, Target, Video } from 'lucide-react';

const featureList = [
  {
    icon: <Video className="w-8 h-8 text-green-600" />,
    title: "Interactive Live Classes",
    description: "Learn concepts directly from Dr. Anshuman Agarwal with real-time doubt solving and interaction."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-lime-600" />,
    title: "NCERT Decoded",
    description: "Line-by-line coverage of NCERT Biology to ensure nothing is missed for the NEET exam."
  },
  {
    icon: <Target className="w-8 h-8 text-teal-500" />,
    title: "Target 360/360",
    description: "Specialized strategies to score full marks in Zoology and Botany sections."
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-green-500" />,
    title: "Memory Maps",
    description: "Exclusive mnemonics and mind maps by Dr. Anshuman to retain vast syllabus easily."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Soching Education?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We don't just teach Biology; we program your mind to think like a Doctor. 
            Experience the unique teaching methodology of Dr. Anshuman Agarwal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureList.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-white border border-green-50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-green-200"
            >
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;