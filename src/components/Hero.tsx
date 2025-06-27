import React from 'react';
import { ArrowRight, Sparkles, Target, Clock, Users } from 'lucide-react';

const Hero = () => {
  const openModal = () => {
    const modal = document.getElementById('signup-modal');
    if (modal) modal.classList.remove('hidden');
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-100/40 to-red-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-orange-800 text-sm font-medium">Save 220+ Hours Every Month</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
            Land Your Dream Jobs
            <br />
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              in USA 10x Faster
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl lg:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Expert Team Applies to{' '}
            <span className="text-orange-600 font-semibold">1000+ USA Jobs</span>{' '}
            Tailored for International Students & Professionals in 6-7 Weeks
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={openModal}
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2"
            >
              <span>Get Started for Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#how-it-works"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
            >
              See How It Works
            </a>
          </div>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">FAANG Expert Resume</h3>
              <p className="text-gray-600 text-sm">Professional crafted resumes</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <Target className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fresh Job Applications</h3>
              <p className="text-gray-600 text-sm">Apply within 1-4 days</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <Sparkles className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tailored Applications</h3>
              <p className="text-gray-600 text-sm">Custom resume per job</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Save 220+ Hours</h3>
              <p className="text-gray-600 text-sm">Focus on interviews</p>
            </div>
          </div>

          {/* No Credit Card Required */}
          <p className="text-gray-500 text-lg">
            No credit card required • Cancel anytime
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;