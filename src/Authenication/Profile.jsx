import { useAuth0 } from "@auth0/auth0-react";
import { GoMoon } from "react-icons/go";
import { useState } from "react";

function Profile() {
  const { user, isAuthenticated, isLoading, loginWithRedirect,logout } = useAuth0();
  const [darkMode, setDarkMode] = useState(false);

  console.log(user, user);
  console.log("isAuthenticated", isAuthenticated);
  console.log("isLoading", isLoading);

  return (
    <div
      className={`border-2 flex justify-center h-[600px] transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-600"
        }`}
    >
      {isAuthenticated ? (
        <div
          className={`border-2 rounded-xl h-screen mb-4 shadow-2xl p-2 font-bold mt-16 transition-colors duration-300 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
        >
          <div className="flex">
            <img
              src={user.picture}
              alt="profile_picture"
              className="shadow-md shadow-black ml-20 mt-20 rounded-full justify-center items-center border-2"  />
              <GoMoon
                size="30"
                className="ml-16 mb-10 cursor-pointer"
                color={darkMode ? "white" : "black"} 
                onClick={() => setDarkMode(!darkMode)} 
              />
            </div>
  
            <div className="mt-5 flex flex-col items-center justify-center gap-5">
              <h2>Name: {user.name}</h2>
              <p>Nickname: {user.nickname}</p>
              <p>Email: {user.email}</p>
              
              <button
               onClick={() => {
                logout();
              }}
               className="bg-teal-800 rounded-sm text-white h-10 w-36 mt-6 ">
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="border border-blue-300 shadow  rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    );
  }
  
export default Profile ;



