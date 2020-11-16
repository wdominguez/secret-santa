import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState} from 'react'
const axios = require('axios').default;

export default function Home() {
  const [value, setValue] = useState('')
  

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) { 
    // alert('A name was submitted: ' + value);

    axios.post('api/hello', {
      name: value
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
  )
}
