import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  // If already logged in, send to the proper dashboard immediately
  useEffect(() => {
    if (!currentUser) return;
    switch (currentUser.role) {
      case 'superadmin':
        navigate('/superadmin/dashboard', { replace: true });
        break;
      case 'admin':
        navigate('/admin/dashboard', { replace: true });
        break;
      case 'technician':
        navigate('/technician/dashboard', { replace: true });
        break;
      case 'customer':
        navigate('/customer/dashboard', { replace: true });
        break;
      default:
        // Don't redirect if role is unknown, just stay on login
        break;
    }
  }, [currentUser, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await login(email, password);
    setLoading(false);

    if (result.success) {
      setRedirecting(true);
      switch (result.user.role) {
        case 'superadmin':
          navigate('/superadmin/dashboard');
          break;
        case 'admin':
          navigate('/admin/dashboard');
          break;
        case 'technician':
          navigate('/technician/dashboard');
          break;
        case 'customer':
          navigate('/customer/dashboard');
          break;
        default:
          // If role is unknown, navigate to customer dashboard as fallback
          navigate('/customer/dashboard');
      }
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Service Management System
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to your account
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded flex items-center gap-2">
              <span>{error}</span>
              {redirecting && (
                <div className="ml-auto flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-red-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="text-sm">Redirecting...</span>
                </div>
              )}
            </div>
          )}
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading || redirecting}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : redirecting ? (
                'Redirecting...'
              ) : (
                'Sign in'
              )}
            </button>
          </div>

          <div className="text-sm text-center space-y-2">
            <p className="text-gray-600">Don't have an account?</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setError('Super Admin login uses default credentials. Contact system owner for access.')}
                className="font-medium text-purple-600 hover:text-purple-500 px-3 py-2 border border-purple-300 rounded-md hover:bg-purple-50 transition-colors"
              >
                Login as Super Admin
              </button>
              <Link
                to="/register/admin"
                className="font-medium text-blue-600 hover:text-blue-500 px-3 py-2 border border-blue-300 rounded-md hover:bg-blue-50 transition-colors"
              >
                Register as Admin
              </Link>
              <Link
                to="/register/technician"
                className="font-medium text-green-600 hover:text-green-500 px-3 py-2 border border-green-300 rounded-md hover:bg-green-50 transition-colors"
              >
                Register as Technician
              </Link>
              <Link
                to="/register/customer"
                className="font-medium text-orange-600 hover:text-orange-500 px-3 py-2 border border-orange-300 rounded-md hover:bg-orange-50 transition-colors"
              >
                Register as Customer
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
