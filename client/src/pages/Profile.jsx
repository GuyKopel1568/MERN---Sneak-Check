import { useSelector } from 'react-redux';
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

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});

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

  return (
    <div className="flex justify-center items-center" data-aos="zoom-in-up">
      <div className="profile_container text-center max-w-lg mx-auto">
        <h1 className="profile_title uppercase font-semibold text-5xl text-[#a8a29e] mb-4">
          Profile
        </h1>

        <form className="flex flex-col gap-4">
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
            className="profile_img rounded-full h-24 w-24 object-cover cursor-pointer mx-auto mb-4"
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
            placeholder="Fullname"
            className="bg-[#404040] text-white rounded-3xl hover:opacity-80 block mx-auto border p-3 w-full"
            id="username"
          />
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
