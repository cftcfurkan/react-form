import "./App.css";
import { useFormik } from "formik";

function App() {
  const { handleSubmit, values, handleChange } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "male",
      hobies: [],
      country: "tr",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="card">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">
            <strong>First Name</strong>
          </label>
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">
            <strong>Last Name</strong>
          </label>
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="example@example.com"
          />
        </div>

        <div className="inner-card">
          <span>
            <strong>Hobbies</strong>
          </span>
          <div>
            <input
              type="checkbox"
              name="hobbies"
              value="Football"
              onChange={handleChange}
            />
            Football
          </div>
          <div>
            <input
              type="checkbox"
              name="hobbies"
              value="Cinema"
              onChange={handleChange}
            />
            Cinema
          </div>
          <div>
            <input
              type="checkbox"
              name="hobbies"
              value="Photography"
              onChange={handleChange}
            />
            Photography
          </div>
        </div>
        <div className="inner-card">
          <span>
            <strong>Gender</strong>
          </span>
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={values.gender === "male"}
            />
            Male
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={values.gender === "female"}
            />
            Female
          </div>
        </div>
        <br />

        <div className="form-group">
          <label htmlFor="country">
            <strong>Country</strong>
          </label>
          <select
            name="country"
            defaultValue={values.country}
            onChange={handleChange}
          >
            <option value="tr">Turkey</option>
            <option value="en">England</option>
            <option value="usa">USA</option>
          </select>
        </div>
        <br />

        <button type="submit">
          <strong>Submit</strong>
        </button>
      </form>
    </div>
  );
}

export default App;
