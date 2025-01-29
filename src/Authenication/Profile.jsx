import { useAuth0 } from "@auth0/auth0-react";


function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user, user)
  console.log("isAuthenticated", isAuthenticated)
  console.log("isLoading", isLoading)



  return (
    <div>
    {isAuthenticated ? (
      <div className="flex flex-col bg-gray-200   mt-10 mb-10 h-64 w-full ">
        <h2 className="text-2xl font-bold mt-4 ">Welcome, <br/>
        <img className="rounded-full border-white"
         src={user.picture} alt="profile_picture" /> </h2>
         

         <div className="flex flex-col  mt-6 font-bold text-2xl">
          <h2> Name : {user.name}</h2>
         </div>
        <div className="flex flex-col  mt-6 font-bold text-2xl"> 
        <p className="text-2xl font-bold mt-2">Email: {user.email}</p>
        </div>
        
          
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


