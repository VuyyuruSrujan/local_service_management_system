import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [expandedRole, setExpandedRole] = useState(null);

  const roles = [
    {
      title: 'Customer',
      icon: '👤',
      description: 'Register and manage service complaints',
      features: [
        'Submit service complaints easily',
        'Track complaint status in real-time',
        'View service timeline',
        'Make online payments',
        'Provide feedback on services',
        'Access complaint history'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Technician',
      icon: '🔧',
      description: 'Handle and resolve customer complaints',
      features: [
        'View assigned complaints',
        'Update complaint status',
        'Provide service solutions',
        'Manage work schedule',
        'Track completed services',
        'Communicate with customers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Admin',
      icon: '⚙️',
      description: 'Manage technicians and complaints',
      features: [
        'Monitor all complaints',
        'Manage technician assignments',
        'View service reports',
        'Generate performance reports',
        'Approve complaints',
        'System configuration'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Super Admin',
      icon: '👑',
      description: 'Full system control and analytics',
      features: [
        'Complete system access',
        'Manage multiple admins',
        'View all services',
        'Advanced analytics dashboard',
        'User management',
        'System monitoring'
      ],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">ServiceHub</h1>
              <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                v1.0
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/login')}
                className="px-6 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate('/register/customer')}
                className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Service Management
            <span className="block text-blue-600">Made Simple</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A comprehensive platform for managing service complaints, tracking progress, and ensuring customer satisfaction with real-time updates and seamless communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/register/customer')}
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Register as Customer
            </button>
            <button
              onClick={() => navigate('/login')}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Platform Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📝</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Easy Complaint Filing</h4>
              <p className="text-gray-600">Submit service complaints with detailed descriptions and images</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Real-time Tracking</h4>
              <p className="text-gray-600">Monitor complaint status and service progress in real-time</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💳</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Online Payments</h4>
              <p className="text-gray-600">Secure payment gateway for service fees and charges</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⭐</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Feedback & Rating</h4>
              <p className="text-gray-600">Rate services and provide feedback for continuous improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
            User Roles & Responsibilities
          </h3>
          <p className="text-center text-gray-600 mb-12 text-lg">
            ServiceHub supports four different user roles, each with specific features and capabilities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role) => (
              <div
                key={role.title}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setExpandedRole(expandedRole === role.title ? null : role.title)}
              >
                <div className={`bg-gradient-to-r ${role.color} p-6 text-white`}>
                  <div className="text-5xl mb-3">{role.icon}</div>
                  <h4 className="text-2xl font-bold mb-2">{role.title}</h4>
                  <p className="text-sm opacity-90">{role.description}</p>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${
                  expandedRole === role.title ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="p-6 bg-gray-50">
                    <h5 className="font-semibold text-gray-900 mb-4">Key Features:</h5>
                    <ul className="space-y-3">
                      {role.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="text-blue-600 font-bold mr-3">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-sm mt-8">
            Click on any role card to see detailed features
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: 1, title: 'Register', desc: 'Create your account' },
              { step: 2, title: 'Submit', desc: 'File a complaint' },
              { step: 3, title: 'Assign', desc: 'Technician assigned' },
              { step: 4, title: 'Resolve', desc: 'Service completed' },
              { step: 5, title: 'Feedback', desc: 'Rate & review' }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-center text-gray-900 mb-2">{item.title}</h4>
                <p className="text-center text-gray-600 text-sm">{item.desc}</p>
                {idx < 4 && (
                  <div className="hidden lg:block absolute top-6 left-[60%] w-[40%] h-0.5 bg-blue-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Application Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                About ServiceHub
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                ServiceHub is a modern, comprehensive service management platform designed to streamline the complaint handling process and improve customer satisfaction.
              </p>
              <p className="text-gray-600 mb-4 text-lg">
                Our platform connects customers, technicians, admins, and super admins in a seamless workflow that ensures:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Fast and efficient complaint resolution
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Transparent communication at every step
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Real-time progress tracking
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Secure payment processing
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Performance analytics and reporting
                </li>
              </ul>
              <button
                onClick={() => navigate('/register/customer')}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Using ServiceHub
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-8 text-white flex flex-col justify-center">
              <div className="text-6xl mb-4">🏢</div>
              <h4 className="text-2xl font-bold mb-3">Enterprise-Grade Solution</h4>
              <p className="mb-4">
                Built with modern technologies and best practices to ensure reliability, security, and scalability.
              </p>
              <div className="space-y-2 text-sm">
                <p>✓ Secure authentication & authorization</p>
                <p>✓ 24/7 uptime monitoring</p>
                <p>✓ Scalable infrastructure</p>
                <p>✓ Real-time notifications</p>
                <p>✓ Comprehensive audit logs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Platform Statistics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <p className="text-gray-600">Uptime Guarantee</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-gray-600">Complaints Resolved</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4.8★</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg mb-8 opacity-90">
            Join hundreds of satisfied customers and experience seamless service management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/register/customer')}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Sign Up as Customer
            </button>
            <button
              onClick={() => navigate('/login')}
              className="px-8 py-4 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors border border-blue-500"
            >
              Sign In
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">ServiceHub</h4>
              <p className="text-sm text-gray-400">
                A modern service management platform for efficient complaint handling and customer satisfaction.
              </p>
            </div>

            {/* Product */}
            <div>
              <h5 className="text-white font-semibold mb-4">Product</h5>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#roles" className="hover:text-white transition-colors">Roles</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h5 className="text-white font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:support@servicehub.com" className="hover:text-white transition-colors">Email Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h5 className="text-white font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400 mb-4 md:mb-0">
                © 2024 ServiceHub. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.029 3.756 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
