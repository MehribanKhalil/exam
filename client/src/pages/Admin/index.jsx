import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Admin = () => {
  const [courses, setCourses] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [property, setProperty] = useState(null);

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/course");
    setCourses(res.data);
  };

  const createCourse = async (data) => {
    const res = await axios.post("http://localhost:5000/course", data);
    getData();
    toast.success("Added new Course!");
  };

  const deleteCourse = async (id) => {
    const res = await axios.delete(`http://localhost:5000/course/${id}`);
    getData();
    toast.success("Course Deleted!");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" section  pt-52">
      <Helmet>
        <title>Admin</title>
      </Helmet>

      <div>
        <Formik
          initialValues={{
            image: "",
            title: "",
            info: "",
            authorImage: "",
            authorName: "",
            position: "",
            price: "",
          }}
          validationSchema={Yup.object({
            image: Yup.string().required("Required"),
            title: Yup.string()
              .max(40, "Must be 40 characters or less")
              .required("Required"),
            info: Yup.string().required("Required"),
            authorImage: Yup.string().required("Required"),
            authorName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            position: Yup.string().required("Required"),
            price: Yup.number()
              .positive("price must be positive")
              .required("Required"),
          })}
          onSubmit={(values, { resetForm }) => {
            createCourse(values);
          }}
        >
          <Form className=" flex flex-col  gap-4  shadow-lg max-w-[700px]  mx-auto p-12 bg-gray-100">
            <h3 className=" flex justify-center text-3xl  py-3 font-semibold">
              Create new Course
            </h3>
            <div className=" flex flex-col gap-2">
              <Field
                name="image"
                type="text"
                placeholder="Image"
                className=" px-6 py-3 border border-main-color rounded-xl outline-none"
              />
              <ErrorMessage name="image" />
            </div>

            <div className=" flex flex-col gap-2">
              <Field
                name="title"
                type="text"
                placeholder="Title"
                className=" px-6 py-3 border border-main-color rounded-xl outline-none"
              />
              <ErrorMessage name="title" />
            </div>

            <div className=" flex flex-col gap-2">
              <Field
                name="info"
                type="text"
                placeholder="Info"
                className=" px-6 py-3 border border-main-color rounded-xl outline-none"
              />
              <ErrorMessage name="info" />
            </div>

            <div className=" flex flex-col gap-2">
              <Field
                name="authorImage"
                type="text"
                placeholder="AuthorImage"
                className=" px-6 py-3 border border-main-color rounded-xl outline-none"
              />
              <ErrorMessage name="authorImage" />
            </div>

            <div className=" flex flex-col gap-2">
              <Field
                name="authorName"
                type="text"
                placeholder="AuthorName"
                className=" px-6 py-3 border border-main-color rounded-xl outline-none"
              />
              <ErrorMessage name="authorName" />
            </div>

            <div className=" flex flex-col gap-2">
              <Field
                name="position"
                type="text"
                placeholder="Position"
                className=" px-6 py-3 border border-main-color rounded-xl outline-none"
              />
              <ErrorMessage name="position" />
            </div>

            <div className=" flex flex-col gap-2">
              <Field
                name="price"
                type="number"
                placeholder="Price"
                className=" px-6 py-3 border border-main-color rounded-xl outline-none"
              />
              <ErrorMessage name="price" />
            </div>

            <div className=" flex justify-center pt-4">
              <button
                className=" border border-main-color px-4 py-1  rounded-xl font-semibold"
                type="submit"
              >
                Add
              </button>
            </div>
          </Form>
        </Formik>
      </div>

      <div className=" flex justify-between pt-16">
        <div>
          <input
            type="text"
            name=""
            id=""
            className=" border border-main-color outline-none px-4 py-2"
            placeholder="Search by Title"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className=" flex gap-3">
          <button 
          className=" btn"
            onClick={() =>
              setProperty({
                name: "title",
                asc: true,
              })
            }
          >
            A-Z
          </button>

          <button
           className=" btn"
            onClick={() =>
              setProperty({
                name: "title",
                asc: false,
              })
            }
          >
            Z-A
          </button>

          <button
           className=" btn"
            onClick={() =>
              setProperty({
                name: "price",
                asc: true,
              })
            }
          >
            Low to High
          </button>

          <button
           className=" btn"
            onClick={() =>
              setProperty({
                name: "price",
                asc: false,
              })
            }
          >
            High to Low
          </button>

          <button
           className=" btn"
            onClick={() =>
              setProperty({
                name: "title",
                asc: null,
              })
            }
          >
            Def
          </button>
        </div>
      </div>

      <div>
        <div className="flex flex-col py-16">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Info
                      </th>
                      <th scope="col" className="px-6 py-4">
                        AuthorImage
                      </th>
                      <th scope="col" className="px-6 py-4">
                        AuthorName
                      </th>

                      <th scope="col" className="px-6 py-4">
                        Position
                      </th>

                      <th scope="col" className="px-6 py-4">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses &&
                      courses
                        .filter((item) =>
                          item.title
                            .toLowerCase()
                            .includes(searchText.toLowerCase())
                        )
                        .sort((a, b) => {
                          if (property && property.asc === true) {
                            return a[property.name] < b[property.name]
                              ? -1
                              : b[property.name] < a[property.name]
                              ? 1
                              : 0;
                          } else if (property && property.asc === false) {
                            return a[property.name] > b[property.name]
                              ? -1
                              : b[property.name] > a[property.name]
                              ? 1
                              : 0;
                          } else {
                            return 0;
                          }
                        })
                        .map((course) => (
                          <tr
                            key={course._id}
                            className="border-b dark:border-neutral-500"
                          >
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              <img
                                className=" w-[100px]"
                                src={course.image}
                                alt=""
                              />
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {course.title}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {course.info}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <img
                                className=" w-[100px]"
                                src={course.authorImage}
                                alt=""
                              />
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {course.authorName}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {course.position}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              ${course.price}
                            </td>

                            <td className="whitespace-nowrap px-6 py-4">
                              <button
                                onClick={() => deleteCourse(course._id)}
                                className=" border border-main-color  px-4 py-1 font-semibold"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
