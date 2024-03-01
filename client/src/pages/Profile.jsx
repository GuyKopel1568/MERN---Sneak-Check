import { useDispatch, useSelector } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from 'react';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import {
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from '../redux/user/userSlice';

function Profile() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    console.log('File uploading...');
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload progress: ${progress}%`);
        setFilePerc(Math.round(progress));
      },
      (error) => {
        console.log('Error uploading file:', error);
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, photo: downloadURL }),
        );
      },
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  return (
    <div className="flex justify-center items-center" data-aos="zoom-in-up">
      <div className="profile_container text-center max-w-lg mx-auto">
        <h1 className="profile_title uppercase font-semibold text-5xl text-[#a8a29e] mb-4">
          Profile
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
          />

          <img
            onClick={() => fileRef.current.click()}
            src={formData.photo || currentUser.photo}
            alt="profile"
            className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          />

          <p className="text-sm self-center">
            {fileUploadError ? (
              <span className="text-red-700">
                Error Image upload (image must be less than 2 mb)
              </span>
            ) : filePerc > 0 && filePerc < 100 ? (
              <span className="text-white">{`Uploading ${filePerc}%`}</span>
            ) : filePerc === 100 ? (
              <span className="text-green-700">
                Image successfully uploaded!
              </span>
            ) : (
              ''
            )}
          </p>

          <input
            type="text"
            defaultValue={currentUser.fullname}
            className="bg-[#404040] text-white rounded-3xl hover:opacity-80 block mx-auto border p-3 w-full"
            onChange={handleChange}
            id="fullname"
          />

          <input
            type="text"
            placeholder="Username"
            defaultValue={currentUser.username}
            className="bg-[#404040] text-white rounded-3xl hover:opacity-80 block mx-auto border p-3 w-full"
            onChange={handleChange}
            id="username"
          />

          <input
            type="text"
            placeholder="Email"
            defaultValue={currentUser.email}
            className="bg-[#404040] text-white rounded-3xl hover:opacity-80 block mx-auto border p-3 w-full"
            onChange={handleChange}
            id="email"
          />

          <input
            type="password"
            placeholder="Password"
            id="password"
            className="bg-[#404040] text-white rounded-3xl hover:opacity-80 block mx-auto border p-3 w-full"
            onChange={handleChange}
          />

          <button
            disabled={loading}
            className="update_btn font-semibold uppercase"
          >
            {loading ? 'Loading...' : 'Update'}
          </button>
        </form>
        <div className="flex justify-between m-1 pl-3 pr-3">
          <span className="account_dlt font-semibold text-[#7f1d1d] cursor-pointer ">
            Delete Account
          </span>
          <span className="account_out font-semibold text-[#7f1d1d] cursor-pointer ">
            Sign-Out
          </span>
        </div>
        <p className="text-white font-bold">{error ? error : ''}</p>
        <p className="text-green-700 font-bold">
          {updateSuccess ? 'Profile updated successfully!' : ''}
        </p>
      </div>
    </div>
  );
}

export default Profile;
