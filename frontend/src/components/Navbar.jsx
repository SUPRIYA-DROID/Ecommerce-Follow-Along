import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser && storedUser !== "undefined") {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);  // ✅ Set user state
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user"); // Remove corrupted data
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="h-16 fixed top-0 left-0 right-0 z-10 w-full bg-pink-100 text-rose-900 flex items-center justify-between px-8 shadow-md">
      <h1 className="text-3xl font-bold tracking-wide">
        Sup's <span className="text-rose-500">Chaos.</span>
      </h1>

      <div className="space-x-4 flex items-center">
        {user ? (
          <>
            <span className="text-lg font-medium">
              Welcome, <span className="text-rose-600 font-semibold">{user.name}</span>!
            </span>
            <button
              onClick={() => navigate('/products')}
              className="bg-rose-500 text-white px-5 py-2 rounded-full shadow-md transition-transform duration-300 hover:bg-rose-600 hover:scale-105"
            >
              Add Products
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-400 text-white px-5 py-2 rounded-full shadow-md transition-transform duration-300 hover:bg-red-500 hover:scale-105"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate('/signup')}
              className="bg-white text-rose-700 border border-rose-300 px-5 py-2 rounded-full shadow-sm transition-transform duration-300 hover:bg-rose-50 hover:scale-105"
            >
              Signup
            </button>
            <button
              onClick={() => navigate('/login')}
              className="bg-rose-600 text-white px-5 py-2 rounded-full shadow-md transition-transform duration-300 hover:bg-rose-700 hover:scale-105"
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
