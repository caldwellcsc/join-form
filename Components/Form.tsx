import { Formik } from "formik";
import { FC } from "react";
import * as Yup from "yup";

type FormValues = {
  fullName: string;
  email: string;
  studentID: string;
};

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please Enter Your Email.")
    .matches(
      /^[A-Za-z0-9._%+-]+@caldwell\.edu$/,
      "Please enter your Caldwell Email."
    ),
  fullName: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Please Enter Your full name."),
  studentID: Yup.string()
    .required("Please Enter Your Student ID.")
    .matches(/^[0-9]{6}$/, "Please enter your valid Caldwell Student ID"),
});

const Form: FC = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="max-w-5xl text-6xl font-bold leading-none tracking-tighter md:text-5xl lg:text-7xl lg:max-w-7xl text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-cyan-300 ">
          Caldwell Computer Science Club
        </h1>
        <Formik
          initialValues={{ email: "", fullName: "", studentID: "" }}
          validationSchema={FormSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form
              onSubmit={handleSubmit}
              className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
              <p className="text-lg font-medium">Join Today.</p>

              <div>
                <label className="text-sm font-medium">Name</label>

                <div className="relative mt-1">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder="Enter Your full name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullName}
                  />
                </div>
                <span className="text-red-500">
                  {errors.fullName && touched.fullName && errors.fullName}
                </span>
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>

                <div className="relative mt-1">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder="Enter Caldwell Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
                <span className="text-red-500 mt-2">
                  {errors.email && touched.email && errors.email}
                </span>
              </div>

              <div>
                <label className="text-sm font-medium">Student ID</label>

                <div className="relative mt-1">
                  <input
                    type="text"
                    id="studentID"
                    name="studentID"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder="Enter Your Caldwell Student ID"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.studentID}
                  />
                </div>
                <span className="text-red-500">
                  {errors.studentID && touched.studentID && errors.studentID}
                </span>
              </div>

              <button
                type="submit"
                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                disabled={isSubmitting}>
                Apply
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Form;
