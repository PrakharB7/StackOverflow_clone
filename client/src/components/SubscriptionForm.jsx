// components/SubscriptionForm.js

import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const SubscriptionForm = ({ user, subscribe }) => {
  const [plan, setPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (error) {
        setError(error.message);
        setIsLoading(false);
        return;
      }

      const { user, subscription } = await subscribe({
        email: user.email,
        paymentMethodId: paymentMethod.id,
        plan,
      });

      setIsLoading(false);
      setPlan(null);
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Free Plan (1 question per day)
          <input
            type="radio"
            name="plan"
            value="free"
            checked={plan === null}
            onChange={() => setPlan(null)}
          />
        </label>
      </div>
      <div>
        <label>
          Silver Plan (5 questions per day) - ₹100/month
          <input
            type="radio"
            name="plan"
            value="silver"
            checked={plan === "silver"}
            onChange={() => setPlan("silver")}
          />
        </label>
      </div>
      <div>
        <label>
          Gold Plan (unlimited questions) - ₹1000/month
          <input
            type="radio"
            name="plan"
            value="gold"
            checked={plan === "gold"}
            onChange={() => setPlan("gold")}
          />
        </label>
      </div>
      <CardElement />
      {error && <div>{error}</div>}
      <button type="submit" disabled={!stripe || isLoading}>
        {isLoading ? "Loading..." : "Subscribe"}
      </button>
    </form>
  );
};

export default SubscriptionForm;
