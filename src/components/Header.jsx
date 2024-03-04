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
    <header className='w-full flex p-4 text-l border-b'>
      <Link className='p-2' to='/'>
        <img className='w-32' src='/images/youtube.png' alt='youtube' />
      </Link>
      <form className='w-full flex justify-center' onSubmit={handleSubmit}>
        <input
          className='w-2/5 bg-white text-gray-800 px-3 rounded-l-3xl border border-stone-300'
          type='text'
          value={text}
          placeholder='Search...'
          onChange={handleChange}
        />
        <button className='p-2.5 pl-3.5 bg-gray-200 rounded-r-3xl border-y border-r border-stone-300'>
          <CiSearch color='grey' size={23} />
        </button>
      </form>
    </header>
  );
}
