import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import OAuth from '../components/OAuth';

export default function Register() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      setLoading(true);
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
      console.log(data);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div
      className={`register_container p-3 max-w-md mx-auto ${error ? 'error-_size' : 'noError_size'}`}
    >
      <h1
        className="uppercase text-[#27272a] text-3xl text-center font-semibold my-2"
        data-aos="fade-left"
      >
        Sign up here:
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 m-4 "
        data-aos="fade-left"
      >
        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 rounded-lg text-center"
          id="fullname"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Username"
          className="border p-2 rounded-lg text-center"
          id="username"
          onChange={handleChange}
        />
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
          {loading ? 'Loading...' : 'Sign up'}
        </button>
        <div className="flex items-center">
          <hr className="flex-grow border-gray-300" />
          <div className="mx-3 text-white uppercase">or continue with:</div>
          <hr className="flex-grow border-gray-300" />
        </div>
        <OAuth />
      </form>
      <div className="flex justify-center items-center gap-2 mt-3">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="font-semibold text-blue-600">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
