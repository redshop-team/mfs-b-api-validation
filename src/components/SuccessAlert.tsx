import React from "react";
import Loader from "./Loader";

interface IProps {
  paymentId: string;
  paymentIdInput: string;
  setShowPaymentIDInput: (value: string) => void;
  handleExecutePayment: (e: React.SyntheticEvent) => void;
  loading: boolean;
}

const SuccessAlert = ({
  paymentIdInput,
  setShowPaymentIDInput,
  paymentId,
  handleExecutePayment,
  loading,
}: IProps) => {
  return (
    <>
      <div
        className="flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
        role="alert"
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 inline w-5 h-5 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">Success ! </span> Copy the Payment ID{" "}
          {paymentId} , And paste it below
        </div>
      </div>
      <h2 className="my-5 text-center font-semibold">
        Step 2 : Execute Payment
      </h2>
      <form onSubmit={handleExecutePayment}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="paymentId"
            value={paymentIdInput}
            onChange={(e) => setShowPaymentIDInput(e.target.value)}
            id="paymentId"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="Username"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Enter Payment ID Here
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {loading ? <Loader /> : "Execute Payment"}
        </button>
      </form>
    </>
  );
};

export default SuccessAlert;
