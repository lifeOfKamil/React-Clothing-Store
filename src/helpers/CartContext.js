import React, {
	createContext,
	useContext,
	useReducer,
	useState,
	useEffect,
} from "react";

// Define your initial state and reducer function
const initialState = {
	cart: [],
	// other state properties
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			const existingItemIndex = state.cart.findIndex(
				(item) =>
					item.id === action.payload.id && item.size === action.payload.size
			);

			if (existingItemIndex !== -1) {
				// If the item with the same id and size already exists in the cart, update the quantity
				const updatedCart = [...state.cart];
				updatedCart[existingItemIndex] = {
					...updatedCart[existingItemIndex],
					quantity: updatedCart[existingItemIndex].quantity + 1,
				};

				return { ...state, cart: updatedCart };
			} else {
				// If the item does not exist in the cart, add it
				return {
					...state,
					cart: [...state.cart, { ...action.payload, quantity: 1 }],
				};
			}

		case "REMOVE_FROM_CART":
			// Handle removing from cart logic
			return {
				...state,
				cart: state.cart.filter(
					(item) =>
						!(
							item.id === action.payload.id && item.size === action.payload.size
						)
				),
			};

		case "LOAD_CART":
			return { ...state, cart: action.payload };

		// other cases

		default:
			return state;
	}
};

// Create context and provider
const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	useEffect(() => {
		const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
		dispatch({ type: "LOAD_CART", payload: storedCart });
	}, []);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(state.cart));
	}, [state.cart]);

	const addToCart = (item) => {
		dispatch({ type: "ADD_TO_CART", payload: item });
	};

	const removeFromCart = (itemId) => {
		dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
	};

	// other functions

	return (
		<CartContext.Provider
			value={{ cart: state.cart, addToCart, removeFromCart }}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};
