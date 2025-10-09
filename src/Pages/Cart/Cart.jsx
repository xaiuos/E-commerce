import React from "react";
import style from "./Cart.module.css";
import NavBar from "../../Components/NavBar/NavBar";
import Announcement from "../../Components/Announcement/Announcement";
import Footer from "../../Components/Footer/Footer";
import { Add, Remove } from "@mui/icons-material";
function CartItemColor({ Color }) {
  return (
    <div className={style.DetailColor} style={{ backgroundColor: Color }}></div>
  );
}
function CartButton({ Type, children }) {
  const buttonClass =
    Type === "Filled"
      ? `${style.CardButtonOutline}`
      : `${style.CardButtonNone}`;
  return <button className={buttonClass}> {children} </button>;
}

const Cart = () => {
  return (
    <>
      <div className={style.CartContainer}>
        <NavBar></NavBar>
        <Announcement></Announcement>
        <div className={style.CartWrapper}>
          <h1 className={style.CartTitle}>Your Bag</h1>
          <div className={style.TopCartSection}>
            <CartButton Type={"NonFilled"}>Continue Shopping</CartButton>
            <div>
              <span className={style.BagCounter}>Items in Bag (1) </span>
              <span className={style.BagCounter}>Items in Wishlist(1)</span>
            </div>
            <CartButton Type={"Filled"}>CheckOut Now</CartButton>
          </div>
          <div className={style.BottomCartSection}>
            <div className={style.CartInfo}>
              <div className={style.CartInfoProduct}>
                <div className={style.ProductDetail}>
                  <img
                    className={style.CartProductImg}
                    src="https://www.iboogaloo.com/wp-content/uploads/2011/05/Shirt-Red-Check-Ghosted-428x600.jpg"
                  />
                  <div className={style.DetailsOfItems}>
                    <div className={style.DetailName}>
                      <b>Product:</b>T-Shirt
                    </div>
                    <div className={style.DetailID}>
                      <b>ID:</b>UDS200234237
                    </div>

                    <div className={style.DetailColor}>
                      <CartItemColor Color={"Red"}></CartItemColor>
                    </div>
                    <div className={style.DetailSize}>
                      <b>Size:</b>37.5
                    </div>
                  </div>
                  <div className={style.DetailPrice}>
                    <div className={style.ProductAmmountContainer}>
                      <Add />
                      <div className={style.ProductAmmount}>1</div>
                      <Remove />
                    </div>
                    <div className={style.ProductTottalAmmount}>30$</div>
                  </div>
                </div>
                <hr></hr>
                <div className={style.ProductDetail}>
                  <img
                    className={style.CartProductImg}
                    src="https://www.iboogaloo.com/wp-content/uploads/2011/05/Shirt-Red-Check-Ghosted-428x600.jpg"
                  />
                  <div className={style.DetailsOfItems}>
                    <div className={style.DetailName}>
                      <b>Product:</b>T-Shirt
                    </div>
                    <div className={style.DetailID}>
                      <b>ID:</b>UDS200234237
                    </div>

                    <div className={style.DetailColor}>
                      <CartItemColor Color={"Red"}></CartItemColor>
                    </div>
                    <div className={style.DetailSize}>
                      <b>Size:</b>37.5
                    </div>
                  </div>
                  <div className={style.DetailPrice}>
                    <div className={style.ProductAmmountContainer}>
                      <Add />
                      <div className={style.ProductAmmount}>1</div>
                      <Remove />
                    </div>
                    <div className={style.ProductTottalAmmount}>30$</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.CartSummary}>
              <h1 className={style.SummaryTitle}>Order Summary</h1>
              <div className={style.SummaryItems}>
                <span className={style.SummaryText}>Subtottal</span>
                <span className={style.SummaryPrice}>$80</span>
              </div>
              <div className={style.SummaryItems}>
                <span className={style.SummaryText}>Estimated Shipping</span>
                <span className={style.SummaryPrice}>$10</span>
              </div>
              <div className={style.SummaryItems}>
                <span className={style.SummaryText}>Shipping Discount</span>
                <span className={style.SummaryPrice}>$-5</span>
              </div>
              <div className={style.SummaryItems}>
                <span className={style.SummaryTottal}>Tottal</span>
                <span className={style.SummaryTottal}>$80</span>
              </div>
              <button className={style.summaryButton}>CHECKOUT NOW</button>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
};

export default Cart;
