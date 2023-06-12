import MagloLogo from "@/assets/img/maglo-logo.svg";
import LoginBg from "@/assets/img/login-bg.svg";
import Curved from "@/assets/img/curved.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup
    .object({
        email: yup
            .string()
            .email("Email is invalid")
            .required("Email is required"),
        password: yup
            .string()
            .min(8, "Password must be at least 8 characters")
            .max(20, "Password must be at most 20 characters")
            .required("Password is required"),
    })
    .required();
type FormData = yup.InferType<typeof schema>;

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
        console.log("onSubmit ::: ", data);
        setErrorMessage("Incorrect email or password!");
    };

    return (
        <>
            <div className="flex flex-row justify-between">
                <div className="h-screen mx-auto md:h-auto md:ml-[3rem] lg:ml-[5rem] xl:ml-[8.438rem] mt-[2.5rem] flex flex-col">
                    <img className="w-fit" src={MagloLogo} alt="Maglo logo" />
                    <div className="m-auto">
                        <h1 className="mb-[0.5rem] text-30px text-text-1  font-semibold">
                            Welcome back
                        </h1>
                        <p className="text-16px text-text-3 font-normal">
                            Welcome back! Please enter your details
                        </p>
                        {/* Login form */}
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="mt-[1.563rem] md:w-[20rem]  lg:w-[25.25rem]"
                        >
                            <label
                                htmlFor="emailAddress"
                                className="block py-[0.625rem] text-14px text-text-1 font-medium"
                            >
                                Email *
                            </label>
                            <input
                                id="emailAddress"
                                placeholder="Enter your email"
                                type="text"
                                {...register("email")}
                                className="border border-gray-5 rounded-[0.625rem] w-full h-[3rem] pt-[0.938rem] pr-[1.563rem] pb-[1rem] pl-[1.25rem] text-text-3 text-14px font-medium"
                                required
                            />
                            <p className="text-16px font-normal text-error h-[1.25rem] mt-[0.5rem]">
                                {errors.email?.message || ""}
                            </p>

                            <label
                                htmlFor="password"
                                className="block pb-[0.625rem] text-14px text-text-1 font-medium mt-[0.938rem]"
                            >
                                Password *
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Password"
                                {...register("password")}
                                className="border border-gray-5 rounded-[0.625rem] w-full h-[3rem] pt-[0.938rem] pr-[1.563rem] pb-[1rem] pl-[1.25rem] text-text-3 text-14px font-medium"
                                required
                            />
                            <p className="text-16px font-normal text-error h-[1.25rem] mt-[0.5rem]">
                                {errors.password?.message || errorMessage}
                            </p>

                            <input
                                type="submit"
                                value="Sign in"
                                className="mt-[0.625rem] w-full bg-primary rounded-[0.625rem] h-[3rem] text-16px font-semibold text-text-1 cursor-pointer"
                            />
                        </form>
                        <div className="mt-[1.563rem] flex flex-row justify-center">
                            <p className="text-text-2 text-14px font-normal">
                                Don't have an account?
                            </p>
                            &nbsp;
                            <div className="flex flex-col">
                                <button className="text-text-1 text-14px font-medium mb-[0.625rem]">
                                    Sign up for free
                                </button>
                                <img src={Curved} />
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src={LoginBg}
                    alt="Maglo Login"
                    className="hidden md:block h-screen md:max-w-[20rem]  lg:max-w-[27.875rem] xl:max-w-[42.188rem]"
                />
            </div>
        </>
    );
};

export default LoginPage;
