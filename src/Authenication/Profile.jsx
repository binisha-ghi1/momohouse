import { useAuth0 } from "@auth0/auth0-react";


function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user, user)
  console.log("isAuthenticated", isAuthenticated)
  console.log("isLoading", isLoading)



  return (
    <div>
    {isAuthenticated ? (
      <div className="flex flex-col bg-gray-200  ml-10 mt-10 mb-10 h-64 w-full ">
        <h2 className="text-2xl font-bold mt-4 ">Welcome, <br/>
        <img className="rounded-full border-white"
         src={user.picture} alt="profile_picture" /> </h2>
         

         <div className="flex flex-col justify-center items-center mt-6 font-bold text-2xl">
          <h2> {user.name}</h2>
         </div>
        <div className="flex flex-col justify-center items-center mt-6 font-bold text-2xl"> 
        <p className="text-2xl font-bold mt-2">Email: {user.email}</p>
        </div>
        <button
          onClick={() =>
            loginWithRedirect()
          }
          type="button"
          className="flex items-center gap-2 justify-center border-2 border-slate-500 mt-3 w-full py-2 px-4 text-black font-medium rounded-md hover:text-white hover:bg-green-700"
        >
          </button>
      </div>
    ) : (
      <div>
       Loading...........
      </div>
    )}
  </div>


  );
}

export default Profile;


