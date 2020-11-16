import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
const axios = require('axios').default;

export default function Home() {
  const [value, setValue] = useState('');
  const [names, setNames] = useState([]);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    axios
      .post('api/hello', {
        name: value,
      })
      .then(function (response) {
        console.log('response', response);
        setNames(response.data.names);
      })
      .catch(function (error) {
        console.log(error);
      });

    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' value={value} onChange={handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
      <p>Names Taken: </p>
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </>
  );
}
