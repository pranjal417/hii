import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Clock, Briefcase } from 'lucide-react';

const RealTimeMetrics = () => {
  const [metrics, setMetrics] = useState({
    jobsApplying: 1200,
    interviewsToday: 5,
    activeUsers: 847,
    totalApplications: 45230
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        jobsApplying: prev.jobsApplying + Math.floor(Math.random() * 3),
        interviewsToday: prev.interviewsToday + (Math.random() > 0.8 ? 1 : 0),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 2),
        totalApplications: prev.totalApplications + Math.floor(Math.random() * 5)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const metricsData = [
    {
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      label: "Jobs being applied now",
      value: `${metrics.jobsApplying.toLocaleString()}+`,
      color: "text-orange-600"
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      label: "Users got interviews today",
      value: metrics.interviewsToday,
      color: "text-green-600"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
      label: "Active job seekers",
      value: `${metrics.activeUsers.toLocaleString()}+`,
      color: "text-purple-600"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-red-600" />,
      label: "Total applications sent",
      value: `${metrics.totalApplications.toLocaleString()}+`,
      color: "text-red-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Live Activity</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            FlashFire is Working Right Now
          </h2>
          <p className="text-xl text-gray-600">
            Real-time metrics showing our AI in action
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricsData.map((metric, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gray-50 rounded-lg">
                  {metric.icon}
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              
              <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                {metric.value}
              </div>
              
              <p className="text-gray-600 text-sm">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🔥 Join the Action
            </h3>
            <p className="text-gray-600 mb-6">
              While you read this, our AI is applying to jobs for hundreds of professionals
            </p>
            <button
              onClick={() => {
                const modal = document.getElementById('signup-modal');
                if (modal) modal.classList.remove('hidden');
              }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:scale-105"
            >
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeMetrics;