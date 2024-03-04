import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';

export default function Header() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <header>
      <Link to='/'>
        <h1>youtube</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          className='text-sm font-medium text-gray-900 border-solid border-2 border-indigo-600 rounded-md'
          type='text'
          value={text}
          placeholder='Search...'
          onChange={handleChange}
        />
        <button>
          <CiSearch />
        </button>
      </form>
    </header>
  );
}
