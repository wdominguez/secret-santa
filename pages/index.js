import { useState, useEffect } from 'react';
const axios = require('axios').default;

export default function Home() {
  const [value, setValue] = useState('');
  const [names, setNames] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [isAirika, setIsAirika] = useState(false);

  useEffect(() => {
    axios.get('api/hello').then(function (response) {
      setNames(response.data.names);
    });
  }, []);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleAirikaSubmit(event) {
    setIsAirika(true);

    event.preventDefault();
  }

  function handleSubmit(event) {
    axios
      .post('api/hello', {
        name: value,
      })
      .then(function (response) {
        console.log('response.data.names', response.data.names);
        setNames(response.data.names);
      })
      .catch(function (error) {
        console.log('error: ', error);
      });

    setSubmitted(true);

    event.preventDefault();
  }

  // console.log('isAirika: ', isAirika);
  // console.log('names: ', names);

  return (
    <div style={{ margin: 20 }}>
      {submitted ? (
        <p>Submitted</p>
      ) : (
        <>
          <form style={{ margin: 20 }} onSubmit={handleSubmit}>
            <label>
              Name:
              <input type='text' value={value} onChange={handleChange} />
            </label>
            <input type='submit' value='Submit' />
          </form>
          <form style={{ margin: 20 }} onSubmit={handleAirikaSubmit}>
            <input
              type='submit'
              value='Airika-only submit, dont press if youre not airika'
            />
          </form>
        </>
      )}
      {names.length == 4 && isAirika ? (
        <>
          <p>Names Taken: </p>
          <ul>
            {names.map((name) => (
              <li>{name}</li>
            ))}
          </ul>
        </>
      ) : names.length == 4 ? (
        <p>EVERYONE HAS SUBMITTED, TELL AIRIKA TO SUBMIT</p>
      ) : (
        <p>Names will be shown only to airika after everyone has submitted</p>
      )}
    </div>
  );
}
