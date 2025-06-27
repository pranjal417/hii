import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, Clock, Video, CheckCircle, Star } from 'lucide-react';

const SignupModal = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    countryCode: '+1',
    email: '',
    workAuthorization: ''
  });

  const countryCodes = [
    { code: '+1', country: 'US/CA', pattern: /^1/ },
    { code: '+91', country: 'India', pattern: /^91/ },
    { code: '+44', country: 'UK', pattern: /^44/ },
    { code: '+61', country: 'Australia', pattern: /^61/ },
    { code: '+49', country: 'Germany', pattern: /^49/ },
    { code: '+33', country: 'France', pattern: /^33/ },
    { code: '+86', country: 'China', pattern: /^86/ },
    { code: '+81', country: 'Japan', pattern: /^81/ }
  ];

  const closeModal = () => {
    const modal = document.getElementById('signup-modal');
    if (modal) modal.classList.add('hidden');
    setStep(1);
    setFormData({ fullName: '', phone: '', countryCode: '+1', email: '', workAuthorization: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.phone && formData.email && formData.workAuthorization && formData.phone.length === 10) {
      setStep(2);
    }
  };

  const detectCountryFromPhone = (phoneNumber: string) => {
    for (const country of countryCodes) {
      if (country.pattern && country.pattern.test(phoneNumber)) {
        return country.code;
      }
    }
    return '+1';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      if (numericValue.length <= 10) {
        const detectedCountry = detectCountryFromPhone(numericValue);
        setFormData({
          ...formData,
          [name]: numericValue,
          countryCode: detectedCountry
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div id="signup-modal" className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl">
        {step === 1 ? (
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex justify-between items-start sm:items-center mb-6 sm:mb-8">
              <div className="flex-1 pr-4">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Get Started for Free</h2>
                <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Tell us about yourself to schedule your consultation</p>
              </div>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0">
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" /> Full Name
                </label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base" placeholder="Enter your full name" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" /> Phone Number (10 digits only)
                </label>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <select name="countryCode" value={formData.countryCode} onChange={handleInputChange} className="w-full sm:w-auto px-3 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base">
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.code} ({country.country})
                      </option>
                    ))}
                  </select>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base" placeholder="Enter 10-digit phone number" pattern="[0-9]{10}" inputMode="numeric" maxLength={10} required />
                </div>
                {formData.phone && formData.phone.length !== 10 && (
                  <p className="text-red-500 text-sm mt-1">Phone number must be exactly 10 digits</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" /> Email Address
                </label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base" placeholder="Enter your email address" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Are you authorized to work in USA?
                </label>
                <select name="workAuthorization" value={formData.workAuthorization} onChange={handleInputChange} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base" required>
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <button type="submit" disabled={formData.phone.length !== 10} className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base">
                Continue to Schedule Call
              </button>
            </form>

            <p className="text-center text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">No spam, ever. We respect your privacy.</p>
          </div>
        ) : (
          <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 sm:p-6 lg:p-8 text-white relative overflow-hidden order-2 lg:order-1">
              <button onClick={closeModal} className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white transition-colors z-10">
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <div className="relative z-10">
                <div className="mb-6 sm:mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4">
                    <div className="p-2 sm:p-3 bg-white/20 rounded-lg sm:rounded-xl backdrop-blur-sm w-fit">
                      <Video className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold">FlashFire Webinar</h2>
                      <div className="flex items-center space-x-3 sm:space-x-4 text-orange-100 text-sm sm:text-base">
                        <span className="flex items-center space-x-1">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" /> <span>1 Hour</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4" /> <span>Free</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-orange-100 text-sm sm:text-base lg:text-lg leading-relaxed">
                    Join our expert-led webinar on how FlashFire can automate your job search and land interviews faster.
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">What You'll Learn:</h3>

                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">LinkedIn Optimization</h4>
                      <p className="text-orange-100 text-xs sm:text-sm">Learn how to attract recruiters organically</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">Resume Tailoring</h4>
                      <p className="text-orange-100 text-xs sm:text-sm">Craft resumes that bypass ATS filters</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">Job Automation</h4>
                      <p className="text-orange-100 text-xs sm:text-sm">Apply to 100s of jobs daily with one click</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">Interview Planning</h4>
                      <p className="text-orange-100 text-xs sm:text-sm">Get calls and prep tips from top recruiters</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                    <div>
                      <div className="text-lg sm:text-2xl font-bold">95%</div>
                      <div className="text-orange-100 text-xs">Success Rate</div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-2xl font-bold">10K+</div>
                      <div className="text-orange-100 text-xs">Jobs Landed</div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-2xl font-bold">220+</div>
                      <div className="text-orange-100 text-xs">Hours Saved</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white relative order-1 lg:order-2">
              <iframe
                src="https://calendly.com/tripathipranjal01/flashfire"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule a meeting"
                className="rounded-none sm:rounded-br-2xl lg:rounded-br-3xl h-[400px] sm:h-[500px] lg:h-[600px] w-full"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupModal;