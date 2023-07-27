import React from "react";
import Girl from "./assets/image 21.png";
import { auth, provider } from "./FirebaseConfig";
import { signInWithPopup } from "firebase/auth";

export default function Hero({ setUser }) {

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="wrapper lg:h-[calc(100vh-156px)] h-[calc(100vh-56px)] border bg-gradient-to-r from-[rgba(38,125,255,0.2)] to-[rgba(245,16,250,0.05)] lg:m-8 m-2 rounded-2xl">
        <div className="flex lg:h-[calc(100vh-156px)] h-[calc(100vh-56px)] gap-5 max-sm:flex-col-reverse lg:justify-between lg:px-5 px-2 lg:pt-10 xl:pt-0 xl:px-20">
          <div className="xl:w-1/2  flex items-start justify-center flex-col max-[300px]:space-y-0 space-y-4">
            <h2 className="xl:text-6xl max-[300px]:text-3xl max-sm:mx-auto text-4xl font-bold">
              Stay Focused &{" "}
            </h2>
            <h1 className="xl:text-8xl max-[300px]:-mx-1 mx-0 max-[300px]:pb-4 text-6xl max-[300px]:text-5xl max-sm:text-center font-bold">
              [
              <span className="xl:text-7xl max-[300px]:text-4xl text-5xl undistracted ">
                Undistracted
              </span>
              ]{" "}
            </h1>
            <p className="text-black max-[300px]:pb-2 max-[300px]:text-xs xl:text-lg max-sm:text-center text-sm">
              Boost concentration and optimize study routines with ONFocus.
              Utilize the Pomodoro technique, and
              productivity-enhancing ambient music. Personalize your study
              routine efficiently. Stay focused and undistracted.
              And, keep an eye out for upcoming features!!
            </p>
            <div className="max-sm:mx-auto max-sm:pb-5">
              <button
                onClick={handleGoogleSignIn}
                className=" bg-[#001F8C]  max-[300px]:text-sm max-[300px]:px-3 max-[300px]:py-2 lg:text-lg text-white lg:px-7 lg:py-2 py-3 text-base px-7 rounded-lg"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center items-center max-[300px]:pb-5 max-sm:px-5">
            <div className="fixed z-20 m-0 max-sm:h-56 max-sm:w-56 h-72 w-72 max-[300px]:h-40 max-[300px]:w-40 animate-blob rounded-full bg-gradient-to-r from-[#00d1ff] to-[#fa00ff] blur-2xl"></div>
            <img
              src={Girl}
              className="h-3/4 z-40 max-sm:h-fit animate-blob"
              alt="girl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
