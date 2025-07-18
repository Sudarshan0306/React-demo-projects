import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

const AddressInfo = () => {
  const [step, setStep] = useState(1);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().when("$step", {
        is: 1,
        then: (schema) => schema.min(2, "Too short").required("Required"),
        otherwise: (schema) => schema,
      }),
      email: Yup.string().when("$step", {
        is: 1,
        then: (schema) => schema.email("Invalid email").required("Required"),
        otherwise: (schema) => schema,
      }),
      age: Yup.number().when("$step", {
        is: 2,
        then: (schema) => schema.min(1, "Invalid").required("Required"),
        otherwise: (schema) => schema,
      }),
      password: Yup.string().when("$step", {
        is: 2,
        then: (schema) => schema.min(6, "Min 6 chars").required("Required"),
        otherwise: (schema) => schema,
      }),
    }),
    context: { step },
    onSubmit: (values) => {
      console.log("Final Submission", values);
      alert("Form submitted successfully!");
    },
  });

  const handleNext = () => {
    if (step === 1) {
      formik.validateForm().then((errors) => {
        if (Object.keys(errors).length === 0) {
          setStep(step + 1);
        } else {
          formik.setTouched({ name: true, email: true });
        }
      });
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="container mt-4">
      <h3>Stepper Form (Step {step}/2)</h3>
      <form onSubmit={formik.handleSubmit}>
        {step === 1 && (
          <>
            <div className="mb-3">
              <label>Name</label>
              <input
                name="name"
                className={`form-control ${
                  formik.touched.name && formik.errors.name ? "is-invalid" : ""
                }`}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="invalid-feedback">{formik.errors.name}</div>
              )}
            </div>

            <div className="mb-3">
              <label>Email</label>
              <input
                name="email"
                type="email"
                className={`form-control ${
                  formik.touched.email && formik.errors.email
                    ? "is-invalid"
                    : ""
                }`}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="invalid-feedback">{formik.errors.email}</div>
              )}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="mb-3">
              <label>Age</label>
              <input
                name="age"
                type="number"
                className={`form-control ${
                  formik.touched.age && formik.errors.age ? "is-invalid" : ""
                }`}
                value={formik.values.age}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.age && formik.errors.age && (
                <div className="invalid-feedback">{formik.errors.age}</div>
              )}
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                name="password"
                type="password"
                className={`form-control ${
                  formik.touched.password && formik.errors.password
                    ? "is-invalid"
                    : ""
                }`}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="invalid-feedback">{formik.errors.password}</div>
              )}
            </div>
          </>
        )}

        <div className="d-flex justify-content-between">
          {step > 1 && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleBack}
            >
              Back
            </button>
          )}
          {step < 2 && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleNext}
            >
              Next
            </button>
          )}
          {step === 2 && (
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddressInfo;
