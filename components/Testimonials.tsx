import React from 'react';
import { Quote, Stethoscope } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Rahul Verma",
    college: "AIIMS, New Delhi",
    text: "Dr. Anshuman Sir made biology so simple. His NCERT decoding method is the reason I scored 355/360 in Biology.",
    year: "Batch 2022",
    imageUrl: "https://picsum.photos/seed/doctor1/100/100"
  },
  {
    id: 2,
    name: "Sneha Gupta",
    college: "SMS Medical College, Jaipur",
    text: "I was a dropper and had lost hope. Soching Education's biology lectures revived my confidence. Forever grateful!",
    year: "Batch 2023",
    imageUrl: "https://picsum.photos/seed/doctor2/100/100"
  },
  {
    id: 3,
    name: "Vikram Singh",
    college: "KGMU, Lucknow",
    text: "The conceptual clarity given by Anshuman Sir is unmatched. He connects every topic with real-life medical examples.",
    year: "Batch 2023",
    imageUrl: "https://picsum.photos/seed/doctor3/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Success Stories</h2>
        <p className="text-center text-gray-600 mb-16 text-lg">Proud Sochians now in Top Medical Colleges</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-green-50 rounded-2xl p-8 relative hover:bg-green-100 transition-colors border border-green-100">
              <Quote className="w-10 h-10 text-green-200 absolute top-6 left-6 -z-10" />
              <div className="flex items-center mb-6">
                <img src={t.imageUrl} alt={t.name} className="w-14 h-14 rounded-full border-2 border-white shadow-sm mr-4" />
                <div>
                  <h4 className="font-bold text-gray-900 flex items-center gap-1">
                    {t.name}
                  </h4>
                  <div className="flex items-center text-xs text-green-700 font-bold">
                     <Stethoscope className="w-3 h-3 mr-1" />
                     {t.college}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">"{t.text}"</p>
              <div className="inline-block px-3 py-1 bg-white rounded-full text-xs font-bold text-gray-500 shadow-sm">
                {t.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;