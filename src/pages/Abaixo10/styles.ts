import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
`

export const Cart = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  width: 500px;
  border-radius: 10px;
  background-color: var(--shape);
`

export const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`

export const CartItemImage = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin-right: 20px;
`

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const CartItemTitle = styled.strong``

export const CartItemPriceTotal = styled.strong`
  margin-top: 8px;
  color: var(--text-body);
  font-size: 12px;
`

export const  CartItemSellingPrice = styled.strong`
  font-size: 16px;
`

export const CartTotal = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const CartFinalizePurchaseButton = styled.button`
  border-style: none;
  border-radius: 10px;
  padding: 15px 0;
  font-size: 18px;
  font-weight: bold;
  background-color: var(--blue);
  color: var(--shape);
  width: 400px;
`