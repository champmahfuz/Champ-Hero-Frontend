/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-duplicate-props */
"use client";
import Nav from "@/components/Home/Nav";
import { loginUser } from "@/redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const page = () => {
  const dispatch = useAppDispatch();
  const { user, isLoading } = useAppSelector((state) => state.user);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
    await dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (user.email && !isLoading) {
      router.push("/profile");
      message.success("Login Successful");
    }
  }, [user.email, isLoading]);

  return (
    <div>
      <Nav />
      <section className="flex items-center justify-center h-screen font-poppins">
        <div className="flex-1">
          <div className="px-2 mx-auto max-w-7xl lg:px-4">
            <div className="relative ">
              <div className="relative px-4 py-4 bg-gray-100 shadow-md dark:bg-gray-900 md:py-11 sm:px-8">
                <div className="max-w-lg mx-auto text-center">
                  <a
                    href="#"
                    className="inline-block mb-4 text-blue-900 dark:text-gray-400 lg:mb-7 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill="currentColor"
                      className="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fillRule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
                  </a>
                  <h2 className="mb-4 text-2xl font-bold text-gray-700 lg:mb-7 md:text-5xl dark:text-gray-300">
                    Login
                  </h2>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-4 lg:mt-7 "
                  >
                    <div className="">
                      {/* email input */}
                      <input
                        type="email"
                        {...register("email", { required: true })}
                        className="w-full px-4 py-3 mt-2 bg-white rounded-lg lg:py-5 dark:text-gray-300 dark:bg-gray-700 -gray-800"
                        name="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    {errors.email && (
                      <span className="text-danger-600 mt-1">
                        This field is required
                      </span>
                    )}
                    <div className="mt-4 lg:mt-7">
                      <div>
                        <div className="relative flex items-center">
                          {/* password input */}
                          <input
                            type="password"
                            {...register("password", { required: true })}
                            className="w-full px-4 py-3 bg-white rounded-lg lg:py-5 dark:text-gray-300 dark:bg-gray-700 -gray-800"
                            name="password"
                            placeholder="Enter password"
                          />
                        </div>
                      </div>
                    </div>
                    {errors.password && (
                      <span className="text-danger-600 mt-2">
                        This field is required
                      </span>
                    )}
                    <div className="flex flex-wrap items-center justify-between mt-4 lg:mt-7">
                      <label htmlFor="" className="flex dark:text-gray-300">
                        <input type="checkbox" className="mt-1 mr-4" />
                        <span className="text-sm ">Remember me</span>
                      </label>
                      <a
                        href=" #"
                        className="mt-2 text-sm font-semibold text-blue-500 lg:mt-0 dark:text-blue-300 hover:underline"
                      >
                        forgot password?{" "}
                      </a>
                    </div>
                    <button
                      className="w-full py-3 text-lg font-bold text-gray-300 uppercase bg-blue-700 rounded-md lg:mt-7 mt-7 dark:text-gray-300 dark:bg-blue-700 px-11 md:mt-7 hover:bg-blue-900 dark:hover:bg-blue-900"
                      type="submit"
                    >
                      LOGIN
                    </button>
                    <p className="mt-4 text-xs text-gray-700 lg:mt-7 dark:text-gray-400 lg:text-base">
                      Need an account?
                      <a
                        href="/signup"
                        className="font-semibold text-blue-400 hover:text-blue-600 ml-1"
                      >
                        Create an account
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
