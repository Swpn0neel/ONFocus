import Logo from "./assets/FocusON.png";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./FirebaseConfig";

export default function Navbar({ setUser }) {
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
      <div className="flex justify-between lg:px-20 bg-white border-b border-black px-5 py-5">
        <img src={Logo} className="xl:h-10 lg:h-8  h-6" alt="" />
        <button
          onClick={handleGoogleSignIn}
          className="bg-[#001F8C] max-[300px]:px-3 max-[300px]:text-sm max-[300px]:py-0.5 xl:text-lg text-white xl:px-7 lg:px-5 lg:py-1.5 xl:py-2 py-1 -mt-0.5 text-base px-3 rounded-lg"
        >
          Sign up
        </button>
      </div>
    </>
  );
}
