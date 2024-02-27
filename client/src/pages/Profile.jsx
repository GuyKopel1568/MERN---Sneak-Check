import { useSelector } from 'react-redux';

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="flex justify-center items-center">
      <div className="profile_container text-center max-w-lg mx-auto">
        <h1 className="profile_title uppercase font-semibold text-5xl text-[#a8a29e] mb-4">
          Profile
        </h1>
        <img
          src={currentUser.photo}
          alt="profile"
          className="profile_img rounded-full h-24 w-24 object-cover cursor-pointer mx-auto mb-4"
        />
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="bg-[#404040] text-white rounded-3xl hover:opacity-80 block mx-auto border p-3 w-full"
            id="username"
          />
          <input
            type="text"
            placeholder="Email"
            className="bg-[#404040] text-white rounded-3xl hover:opacity-80 block mx-auto border p-3 w-full"
            id="email"
          />
          <input
            type="text"
            placeholder="Password"
            className="bg-[#404040] text-white rounded-3xl hover:opacity-80 block mx-auto border p-3 w-full"
            id="password"
          />
          <button className="update_btn font-semibold uppercase">update</button>
        </form>
        <div className="flex justify-between m-1 pl-3 pr-3">
          <span className="account_dlt font-semibold text-[#7f1d1d] cursor-pointer ">
            Delete Account
          </span>
          <span className="account_out font-semibold text-[#7f1d1d] cursor-pointer ">
            Sign-Out
          </span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
