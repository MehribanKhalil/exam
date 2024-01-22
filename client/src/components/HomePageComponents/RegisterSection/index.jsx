import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";

const RegisterSection = () => {
  return (
    <section className="register-section flex flex-col lg:flex-row">
      <div className="left-side text-center  bg-main-color text-white p-10 md:p-32 w-full lg:w-1/2">
      <div className=" space-y-12 max-w-[550px] mx-auto">
      <h2 className="text-[24px] font-semibold md:text-[36px]">Register now and get a discount 50% discount until 1 January</h2>
        <p>
          In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
          tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
          fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
          vitae tempo.
        </p>
        <button className=" uppercase  text-white font-bold px-8 py-3 bg-[#1A1A1A]">
          Register now
        </button>
      </div>
      </div>
      <div className="right-side text-center w-full lg:w-1/2 p-10 md:p-32">
        <h2 className="text-[24px] font-semibold md:text-[36px]">Search for your course</h2>

        <div className="max-w-[550px] mx-auto pt-16">
          <Formik
            initialValues={{ firstName: "", category: "", degree: "" }}
            validationSchema={Yup.object({
              firstName: Yup.string().required("Required"),
              category: Yup.string().required("Required"),
              degree: Yup.number()
                .positive("degree must be positive")
                .required("Required"),
            })}
          >
            <Form className=" flex flex-col gap-4">
              <Field name="firstName" type="text" placeholder="Course Name" className=' px-6 py-3  font-semibold  outline-main-color' />
              <ErrorMessage name="firstName" />

              <Field name="category" type="text" placeholder="Category" className=' px-6 py-3  font-semibold  outline-main-color' />
              <ErrorMessage name="category" />

              <Field name="degree" type="number" placeholder="Degree" className=' px-6 py-3  font-semibold  outline-main-color' />
              <ErrorMessage name="degree" />

              <button className=" bg-main-color text-white px-6 py-3 font-bold uppercase text-sm " type="submit">Search Course</button>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
