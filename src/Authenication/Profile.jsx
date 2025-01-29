import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaRegMoon, FaMoon } from "react-icons/fa";

function Profile() {
  const [darkMode, setDarkMode] = useState(false);
  const [gender, setGender] = useState('');

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={darkMode ? 'bg-black text-white' : 'bg-stone-200 text-black'}>
      {isAuthenticated ? (
        <div className="flex justify-center items-center min-h-screen">

          <div className="w-full flex justify-end p-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="border-2 border-black p-2 rounded-full transition"
              style={{ backgroundColor: darkMode ? 'white' : 'black', color: darkMode ? 'black' : 'white' }}
            >
              {darkMode ? <FaMoon size={24} /> : <FaRegMoon size={24} />}
            </button>
          </div>

          <div className="flex flex-col items-center bg-gray-200 mt-10 mb-10 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Welcome,</h2>
            <img className="rounded-full border-4 border-white mb-4" src={user.picture} alt="profile_picture" width="150" />
            <div className="flex flex-col items-center">
              <div className="font-bold text-2xl mb-2">
                <p>Name: {user.name}</p>
              </div>
              <div className="font-bold text-2xl mb-2">
                <p>Email: {user.email}</p>
              </div>

              <div className="font-bold text-2xl mb-4">
                <label className="mr-4">Gender:</label>
                <select
                  className="p-2 rounded border-2 border-black"
                  value={gender}
                  onChange={handleGenderChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">Please log in to view your profile.</div>
      )}
    </div>
  );
}

export default Profile;




