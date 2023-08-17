import './App.css'
import { Formik, Field, Form } from "formik";


function App() {

  return (
    <>
       <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={(value) => {
        console.log(value);
      }}
    >
      {
        ({ handleSubmit, handleChange}) => (
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" onChange={handleChange} />
        <br/><br/>
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" onChange={handleChange} />
        <br/><br/>
        <label htmlFor="email">Email</label>
        <Field
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <br/><br/>
        <button type="submit">Submit</button>
      </form>
        )
      }
    </Formik>
  </div>

    </>
  )
}

export default App
