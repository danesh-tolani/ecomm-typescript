import { useNavigate } from "react-router-dom";

type Props = {};

const CancelPage = (props: Props) => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 5000);

  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center border border-red-500">
      <p className="text-3xl text-center">Sorry, Payment failed</p>
      <p className="text-3xl text-center">Returning back to the home page in 5sec</p>
      <p className="text-3xl text-center">
        Click here to go back to{" "}
        <span
          className="text-blue-800 underline cursor-pointer text-center"
          onClick={() => navigate("/")}>
          Home
        </span>
        .
      </p>
    </div>
  );
};

export default CancelPage;
