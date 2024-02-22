import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signIn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
      console.log(data);
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div
      className={`signin_container p-3 max-w-md mx-auto ${error ? 'error-_size' : 'noError_size'}`}
    >
      <h1
        className="uppercase text-[#27272a] text-3xl text-center font-semibold my-2"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        Sign in here:
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 m-4"
        data-aos="fade-left"
      >
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded-lg text-center"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded-lg text-center"
          id="password"
          onChange={handleChange}
        />
        {error && <p className="text-red-700 text-center">{error}</p>}
        <button
          disabled={loading}
          className="register_btn text-black font-bold rounded-lg uppercase"
        >
          {loading ? 'Loading...' : 'Sign in'}
        </button>
        <OAuth />
      </form>

      <div className="flex justify-center items-center gap-2 mt-3">
        <p>Dont have an account?</p>
        <Link to="/sign-up">
          <span className="font-semibold text-blue-600">Sign up here</span>
        </Link>
      </div>
    </div>
  );
}
