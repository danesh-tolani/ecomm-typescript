import { useNavigate } from "react-router-dom";

type Props = {};

const SuccessPage = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center border border-red-500">
      <p className="text-3xl text-center">Thanks for ordering.</p>
      <p className="text-3xl text-center">Your order has been placed successfully</p>
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

export default SuccessPage;
