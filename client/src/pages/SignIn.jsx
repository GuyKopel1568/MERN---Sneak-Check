import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      const res = await fetch('/api/auth/signin', {
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
      navigate('/');
      console.log(data);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div
      className={`signin_container p-3 max-w-md mx-auto ${error ? 'error-_size' : 'noError_size'}`}
    >
      <h1 className="uppercase text-white text-3xl text-center font-semibold my-2">
        Sign in here:
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 m-4">
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
      </form>
      <div className="flex justify-center items-center gap-2 mt-3">
        <p>Dont have an account?</p>
        <Link to="/signUp">
          <span className="font-semibold text-blue-500">Sign up here</span>
        </Link>
      </div>
    </div>
  );
}
