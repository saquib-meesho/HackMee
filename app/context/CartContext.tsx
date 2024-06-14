'use client'
import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { CartItemInterface } from '../interfaces';

interface CartState {
  items: CartItemInterface[];
}

interface CartAction {
  type: string;
  payload?: any;
}

interface CartContextType {
  state: CartState;
  addToCart: (item: CartItemInterface) => void;
  removeFromCart: (id: number) => void;
}

const initialState: CartState = {
  items: [],
};

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.product_id === newItem.product_id);

      if (existingItem) {
        // If the item already exists, increase the quantity
        return {
          ...state,
          items: state.items.map(item =>
            item.product_id === existingItem.product_id ? { ...item, quantity: item.quantity + newItem.quantity } : item
          ),
        };
      } else {
        // If the item is not in the cart, add it
        return {
          ...state,
          items: [...state.items, newItem],
        };
      }
    case REMOVE_FROM_CART:
        const idToRemove = action.payload;
        const itemToRemove = state.items.find(item => item.product_id === idToRemove);

        if(itemToRemove?.quantity as number > 1) {
            return {
              ...state,
              items: state.items.map(item =>
                item.product_id === idToRemove ? { ...item, quantity: item.quantity - 1 } : item
              ),
            }
        }
        else {
          return {
              ...state,
              items : state.items.filter((item) => item.product_id !== idToRemove),
          }
        }
    default:
      return state;
  }
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item: CartItemInterface) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeFromCart = (id: number) => {
    dispatch({type: REMOVE_FROM_CART, payload: id});
  }

  return (
    <CartContext.Provider value={{ state, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};