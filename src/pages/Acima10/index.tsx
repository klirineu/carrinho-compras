import { CartItemImage, Container, Cart, Title, CartItem, CartItemTitle, CartItemPriceTotal, CartItemSellingPrice, CartItemInfo, CartTotal, CartFreeShipping, CartFreeShippingTitle, CartFinalizePurchaseButton} from "./styles";
import {ApiAcima10} from "../../services/Acima10"

export function Acima10() {
  function formatReal( int: number ) {
    var tmp = int+'';
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if( tmp.length > 6 ) tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

    return tmp;
  }

  return (
    <Container>
      <Cart>
      <Title>Meu carrinho</Title>
      <div style={{border: '1px solid rgba(0,0,0,0.2)', marginBottom: 15}}></div>
        {
          ApiAcima10.items.map(item => (
            <CartItem key={item.uniqueId}>
              <CartItemImage src={item.imageUrl} alt="" />
              <CartItemInfo>
                <CartItemTitle>{item.name}</CartItemTitle>
                <CartItemPriceTotal>R${item.price < 100 ? item.price / 100 : formatReal(item.price)}</CartItemPriceTotal>
                <CartItemSellingPrice>R${item.sellingPrice < 100 ? item.sellingPrice / 100 : formatReal(item.sellingPrice)}</CartItemSellingPrice>
              </CartItemInfo>
            </CartItem>
          ))
        }
      <div style={{border: '1px solid rgba(0,0,0,0.2)', marginBottom: 15}}></div>
      <CartTotal>
        <Title>Total</Title>
        <Title>R${formatReal(ApiAcima10.totalizers[0].value + (ApiAcima10.totalizers[1].value))}</Title>
      </CartTotal>
      <CartFreeShipping>
        <CartFreeShippingTitle>Parabéns, sua compra tem frete grátis</CartFreeShippingTitle>
      </CartFreeShipping>
      <div style={{border: '1px solid rgba(0,0,0,0.2)', marginBottom: 15}}></div>
      <div style={{textAlign: 'center', marginBottom: 20}}>
        <CartFinalizePurchaseButton>
          Finalizar compra
        </CartFinalizePurchaseButton>
      </div>
      </Cart>
    </Container>
  )
}