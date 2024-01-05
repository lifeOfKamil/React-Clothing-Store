import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import hoodieimg from "../assets/images/thumbnails/hoodie_1_thumbnail.png";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import {
	CurrencyExchange,
	MarkEmailRead,
	LockOutlined,
} from "@mui/icons-material";
import { useCart } from "../helpers/CartContext.js";

const Container = styled.div`
	background-color: #f2f2f2;
	${tw`
    w-full
    h-full
  `};
`;

const Wrapper = styled.div`
	${tw`
    flex
    flex-col
    pt-12
    mb-12
    md:flex-row
    md:mb-0
    md:justify-between
    md:pt-0
		3xl:min-h-[1100px]
  `};
`;

const ShoppingCart = styled.div`
	${tw`
    mx-8
    pb-12
    sm:mx-12
    md:pb-32
    md:w-1/2
    md:pt-8
  `};
`;

const Payment = styled.div`
	background-color: #ffffff;
	box-shadow: 0px -4px 6px #00000020;
	${tw`
    w-full
    px-8
    pt-8
    rounded-t-3xl
    md:w-1/3
    md:shadow-none
    md:rounded-none
  `};
`;

const PaymentContainer = styled.div`
	${tw`
    flex
    flex-row
  `};
`;

const TemplatePaymentContainer = styled.div`
	color: #000000;
	${tw`
    w-1/2
    text-xs
    font-medium
    sm:text-sm
    md:text-xs
  `};
`;

const ActualPaymentContainer = styled(TemplatePaymentContainer)`
	color: #333333;
	${tw`
    w-1/2
    text-right
    text-[10px]
    tracking-wide
    sm:text-xs
    md:text-[10px]
  `};
`;

const PaymentHeader = styled.h3`
	${tw`
    text-lg
    font-normal
    mb-8
  `};
`;

const PaymentText = styled.p`
	${tw`
    
  `};
`;

const PaymentSubText = styled.p`
	color: #828282;
	${tw`
    text-[7px]
  `};
`;

const PaymentButton = styled.button`
	font-family: futura-pt, sans-serif;
	color: #ffffff;
	background-color: #333333;
	border: none;
	box-shadow: 0px 3px 5px #00000016;
	${tw`
    w-full
    text-xs
    leading-5
    tracking-wide
    my-6
    py-1
    cursor-pointer
    sm:text-sm
    sm:py-2
    md:text-xs
    md:py-1.5 
    md:tracking-normal
  `};
`;

const Spacer = styled.div`
	${tw`
    h-0
    w-full
    mb-6
  `};
`;

const ShoppingCartHeader = styled.h3`
	${tw`
    w-1/2
    inline-block
    text-lg
    font-normal
    mb-3
    md:mb-4
  `};
`;

const ShoppingCartReturn = styled.a`
	color: #333333;
	${tw`
    w-1/2
    inline-block
    text-right
    font-light
    text-[10px]
    underline
    cursor-pointer
  `};
`;

const ShoppingCartContainer = styled.div`
	border: solid 1px #bfbfbf;
	${tw`
    flex
    flex-row
    md:flex-row
    bg-white
    p-4
  `};
`;

const ImageContainer = styled.div`
	background-color: #f1f1f2;
	${tw`
    w-2/3
    sm:w-1/2
  `};
`;

const TemplateInfoContainer = styled.div`
	color: #000000;
	${tw`
    w-1/2
    ml-4
  `};
`;

const ActualInfoContainer = styled.div`
	color: #333333;
	${tw`
    w-1/2 
    text-right
    font-semibold
  `};
`;

const ShoppingCartImage = styled.img`
	${tw`
    w-full
    p-5
  `};
`;

const CartProductTitle = styled.h5`
	font-family: futura-pt, sans-serif;
	border: solid 1px #bfbfbf;
	border-bottom: 0;
	color: #333333;
	${tw`
  bg-white
    text-base
    font-medium
    leading-none
    pl-4
    py-3
    tracking-wide
  `};
`;

const CartInfoLabel = styled.p`
	${tw`
    
  `};
`;

const CartInfoText = styled.p`
	${tw`
    text-[10px]
    pb-2
  `};
`;

const ButtonContainer = styled.div`
	${tw`
    flex
    flex-row
  `};
`;

const CartButton = styled.button`
	font-family: futura-pt, sans-serif;
	border: solid 1px #bfbfbf;
	border-top: 0;
	background-color: #e0e0e0;
	color: #4f4f4f;
	${tw`
    flex
    gap-2
    w-1/2
    py-2
    align-middle
    items-center
    justify-center
    text-xs
    rounded-bl 
    cursor-pointer
    sm:font-semibold
  `};

	&:hover {
		background-color: #d1d1d1;
	}

	&:active {
		background-color: #e0e0e0;
	}
`;

const FilledCartButton = styled(CartButton)`
	background-color: #f2f2f2;
	${tw`
    rounded-none
    rounded-br
  `};
`;

const InfoCardContainer = styled.div`
	display: none;
	${tw`
    md:flex
    md:flex-col
    md:mt-10
    md:pb-10
  `};
`;

const InfoInnerContainer = styled.div`
	${tw`
    flex
    flex-col
  `};
`;

const InfoCard = styled.div`
	border-bottom: solid 1px #e0e0e0;
	${tw`
    flex
    flex-row
    gap-x-4
    md:pb-5
    md:mb-5
    lg:pb-6
    lg:mb-6
  `}
`;

const InfoCardHeader = styled.h4`
	color: #4f4f4f;
	${tw`
    text-sm
    font-normal
    pb-1
    lg:text-base
    lg:pb-1.5
  `};
`;

const InfoCardText = styled.p`
	color: #999999;
	${tw`
    text-xs
    font-light
    tracking-tighter
    2xl:text-sm
  `};
`;

const AddToCart = () => {
	const { cart, removeFromCart } = useCart();
	const [totalPrice, setTotalPrice] = useState(0);

	// Update total price whenever the cart changes
	useEffect(() => {
		// Calculate the total price from the cart items
		const newTotalPrice = cart.reduce(
			(acc, item) => acc + parseFloat(item.price.replace(/[^\d.]/g, "")),
			0
		);

		// Update the state with the new total price
		setTotalPrice(newTotalPrice);
	}, [cart]);

	const handleRemoveItem = (itemId, itemSize) => {
		removeFromCart({ id: itemId, size: itemSize });
	};

	const goBack = () => {
		window.history.back();
	};

	return (
		<Container>
			<Wrapper>
				<ShoppingCart>
					<ShoppingCartHeader>SHOPPING CART</ShoppingCartHeader>
					<ShoppingCartReturn onClick={goBack}>
						Go back to shopping
					</ShoppingCartReturn>
					{cart.map((item) => (
						<div key={item.id} style={{ paddingBottom: "16px" }}>
							<CartProductTitle>{item.name}</CartProductTitle>
							<ShoppingCartContainer>
								<ImageContainer>
									<ShoppingCartImage src={hoodieimg} />
								</ImageContainer>
								<TemplateInfoContainer>
									<CartInfoText>Size</CartInfoText>
									<CartInfoText>Color</CartInfoText>
									<CartInfoText>Material</CartInfoText>
									<Spacer />
									<CartInfoText>Price</CartInfoText>
								</TemplateInfoContainer>
								<ActualInfoContainer>
									<CartInfoText>{item.size}</CartInfoText>
									<CartInfoText>
										Black /{" "}
										{item.color.charAt(0).toUpperCase() +
											item.color.slice(1).toLowerCase()}
									</CartInfoText>

									<CartInfoText>50% Cotton</CartInfoText>
									<Spacer />
									<CartInfoText>{item.price}</CartInfoText>
								</ActualInfoContainer>
							</ShoppingCartContainer>
							<ButtonContainer>
								<CartButton>
									Item Info
									<InfoOutlinedIcon style={{ fontSize: "14px" }} />
								</CartButton>
								<FilledCartButton
									onClick={() => handleRemoveItem(item.id, item.size)}
								>
									Remove Item
									<HighlightOffOutlinedIcon style={{ fontSize: "14px" }} />
								</FilledCartButton>
							</ButtonContainer>
						</div>
					))}
				</ShoppingCart>
				<Payment>
					<PaymentHeader>Order Information</PaymentHeader>
					<PaymentContainer>
						<TemplatePaymentContainer>
							<PaymentText style={{ paddingBottom: "8px" }}>
								Subtotal
							</PaymentText>
							<PaymentText style={{ paddingBottom: "8px" }}>
								Shipping
							</PaymentText>
							<PaymentText>Tax</PaymentText>
							<PaymentSubText>
								* Calculated after confirming shipping address
							</PaymentSubText>
							<Spacer />
							<PaymentText>Total</PaymentText>
						</TemplatePaymentContainer>
						<ActualPaymentContainer>
							<PaymentText style={{ paddingBottom: "8px" }}>
								${totalPrice.toFixed(2)}
							</PaymentText>
							<PaymentText style={{ paddingBottom: "8px" }}>$0.00</PaymentText>
							<PaymentText>-</PaymentText>
							<PaymentSubText
								style={{ color: "transparent", userSelect: "none" }}
							>
								* Calculated after confirming shipping address
							</PaymentSubText>
							<Spacer />
							<PaymentText>${totalPrice.toFixed(2)}</PaymentText>
						</ActualPaymentContainer>
					</PaymentContainer>
					<PaymentButton>Continue to checkout</PaymentButton>
					<InfoCardContainer>
						<InfoCard>
							<LocalShippingOutlinedIcon
								style={{ fontSize: "21px", color: "#4F4F4F" }}
							/>
							<InfoInnerContainer>
								<InfoCardHeader>Shipping and Delivery</InfoCardHeader>
								<InfoCardText>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</InfoCardText>
							</InfoInnerContainer>
						</InfoCard>
						<InfoCard>
							<CurrencyExchange
								style={{ fontSize: "21px", color: "#4F4F4F" }}
							/>
							<InfoInnerContainer>
								<InfoCardHeader>Exchanges and Refunds</InfoCardHeader>
								<InfoCardText>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</InfoCardText>
							</InfoInnerContainer>
						</InfoCard>
						<InfoCard>
							<MarkEmailRead style={{ fontSize: "21px", color: "#4F4F4F" }} />
							<InfoInnerContainer>
								<InfoCardHeader>Customer Service</InfoCardHeader>
								<InfoCardText>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</InfoCardText>
							</InfoInnerContainer>
						</InfoCard>
						<InfoCard>
							<LockOutlined style={{ fontSize: "21px", color: "#4F4F4F" }} />
							<InfoInnerContainer>
								<InfoCardHeader>Payment</InfoCardHeader>
								<InfoCardText>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</InfoCardText>
							</InfoInnerContainer>
						</InfoCard>
					</InfoCardContainer>
				</Payment>
			</Wrapper>
		</Container>
	);
};

export default AddToCart;
