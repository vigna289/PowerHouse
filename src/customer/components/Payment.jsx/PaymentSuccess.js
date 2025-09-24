import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { updatePayment } from "../../../State/Payment/Action";

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  const { orderId } = useParams();
  const [searchParams] = useSearchParams();

  const paymentId = searchParams.get("razorpay_payment_id"); // Razorpay sends this in query params

  useEffect(() => {
    if (paymentId && orderId) {
      dispatch(updatePayment({ paymentId, orderId }));
    }
  }, [paymentId, orderId, dispatch]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-2xl font-bold mb-4">Payment Successful 🎉</h1>
      <p className="text-lg">Your order <b>{orderId}</b> has been paid successfully.</p>
      <p className="mt-2">Payment ID: {paymentId}</p>
    </div>
  );
};

export default PaymentSuccess;
