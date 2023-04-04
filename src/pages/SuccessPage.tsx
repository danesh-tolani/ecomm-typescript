type Props = {};

const SuccessPage = (props: Props) => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center border border-red-500">
      <p className="text-3xl">Thanks for ordering.</p>
      <p className="text-3xl">Your order has been placed successfully</p>
      <p className="text-3xl">
        Click here to go back to <span className="text-blue-800 underline cursor-pointer">Home</span>.
      </p>
    </div>
  );
};

export default SuccessPage;
