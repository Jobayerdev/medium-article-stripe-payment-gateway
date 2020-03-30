import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = (props) => {
	const getToken = (token) => {
		console.log(token);
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="Joe Shop"
			billingAddress
			shippingAddress
			image="https://i.ibb.co/3BmghZC/Screenshot-3.png"
			description={`Your Toal bill is ${props.totalAmount}`}
			panelLabel="Pay Now"
			token={getToken}
			stripeKey="pk_test_x2mZG6Z8clM5oZAaloMX8yyl00miIaEMg3"
		/>
	);
};

export default StripeButton;
