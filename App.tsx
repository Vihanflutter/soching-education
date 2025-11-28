import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AIPlanner from './components/AIPlanner';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  const bookingRef = useRef<HTMLDivElement>(null);

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero onBookDemo={scrollToBooking} />
        <Features />
        
        {/* The Gemini AI Feature - Highlighting Innovation */}
        <AIPlanner />
        
        <Testimonials />
        
        {/* Call to Action Section with Form */}
        <section className="py-20 bg-green-50">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                   <h2 className="text-4xl font-bold text-gray-900 mb-6">Begin Your Journey to Medical College</h2>
                   <p className="text-xl text-gray-600 mb-8">
                      Secure your future with the best biology mentorship in India. Join Dr. Anshuman Agarwal's elite batch today.
                   </p>
                   <ul className="space-y-4 mb-8">
                      {[
                        "Free NEET Counselling Session",
                        "Biology Scholarship Assessment",
                        "Demo Lecture Access"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                           <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 font-bold">
                             ✓
                           </div>
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
                
                <div ref={bookingRef}>
                   <BookingForm />
                </div>
             </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;