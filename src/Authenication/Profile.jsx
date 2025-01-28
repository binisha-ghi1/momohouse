import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user, user)
  console.log("isAuthenticated", isAuthenticated)
  console.log("isLoading", isLoading)



  return (
    <div>
    {isAuthenticated ? (
      <div>
        <h2>Welcome, {user.name}</h2>
        <p>Email: {user.email}</p>
        <img src={user.picture} alt="profile_picture" />
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
