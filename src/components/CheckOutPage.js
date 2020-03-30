import React, { useState } from "react";
import StripeButton from "../components/StripeButton";

const CheckOutPage = () => {
	const [cart, setCart] = useState([
		{
			id: 1,
			name: "Gxon Tree",
			imageUrl: "https://i.ibb.co/qrKdbv4/Screenshot-1.png",
			qty: 2,
			price: 25
		},
		{
			id: 2,
			name: "Mirogo Sap",
			imageUrl: "https://i.ibb.co/6YrtQ5W/Screenshot-2.png",
			qty: 8,
			price: 18
		}
	]);

	const removeItem = (item) => {
		const filter = cart.filter((x) => x.id !== item.id);
		setCart(filter);
	};
	const total = cart.reduce(
		(accumulateValue, currentValue) =>
			accumulateValue + currentValue.qty * currentValue.price,
		0
	);
	return (
		<div className="checkout-page">
			<div className="head-block">
				<span className="description">Description</span>
				<span className="quantity">Quantity</span>
				<span className="remove">Remove</span>
				<span className="price">Price</span>
			</div>
			<div className="content-block">
				{cart.map((item) => (
					<div className="item">
						<div className="description">
							<img src={item.imageUrl} alt="" />
							<h4>{item.name}</h4>
						</div>
						<div className="quantity">
							<span>{item.qty}</span>
						</div>
						<div className="remove" onClick={() => removeItem(item)}>
							X
						</div>
						<div className="price">$ {item.price}</div>
					</div>
				))}
			</div>
			<div className="total">Total : ${total}</div>
			<StripeButton totalAmount={total} />
		</div>
	);
};

export default CheckOutPage;
