import React, { useState } from "react";

const CheckOutPage = () => {
	const [cart, setCart] = useState([
		{
			id: 1,
			name: "Brown Brim",
			imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
			qty: 2,
			price: 25
		},
		{
			id: 2,
			name: "Blue Beanie",
			imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
			qty: 8,
			price: 18
		},
		{
			id: 2,
			name: "Blue Beanie",
			imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
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
		</div>
	);
};

export default CheckOutPage;
