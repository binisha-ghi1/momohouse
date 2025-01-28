import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user, user)
  console.log("isAuthenticated", isAuthenticated)
  console.log("isLoading", isLoading)



  return (
    <div>
    {isAuthenticated ? (
      <div className="flex flex-col ml-10 mt-10 mb-10 h-64 w-32 border-slate-500">
        <h2 className="text-2xl font-bold mt-4 ">Welcome, {user.name}</h2>
        <p className="text-2xl font-bold mt-2">Email: {user.email}</p>
        <img className="rounded-lg border-black"
         src={user.picture} alt="profile_picture" />
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
