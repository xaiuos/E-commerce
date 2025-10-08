import React from "react";
import "./Cart.css";
import NavBar from "../Components/NavBar";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import { Add, Remove } from "@mui/icons-material";
function CartItemColor({ Color }) {
  return <div className="DetailColor" style={{ backgroundColor: Color }}></div>;
}
function CartButton({ Type, children }) {
  const buttonClass =
    Type === "Filled" ? "CardButtonOutline" : "CardButtonNone";
  return <button className={buttonClass}> {children} </button>;
}

const Cart = () => {
  return (
    <>
      <div className="CartContainer">
        <NavBar></NavBar>
        <Announcement></Announcement>
        <div className="CartWrapper">
          <h1 className="CartTitle">Your Bag</h1>
          <div className="TopCartSection">
            <CartButton Type={"NonFilled"}>Continue Shopping</CartButton>
            <div>
              <span className="BagCounter">Items in Bag (1) </span>
              <span className="BagCounter">Items in Wishlist(1)</span>
            </div>
            <CartButton Type={"Filled"}>CheckOut Now</CartButton>
          </div>
          <div className="BottomCartSection">
            <div className="CartInfo">
              <div className="CartInfoProduct">
                <div className="ProductDetail">
                  <img
                    className="CartProductImg"
                    src="https://www.iboogaloo.com/wp-content/uploads/2011/05/Shirt-Red-Check-Ghosted-428x600.jpg"
                  />
                  <div className="DetailsOfItems">
                    <div className="DetailName">
                      <b>Product:</b>T-Shirt
                    </div>
                    <div className="DetailID">
                      <b>ID:</b>UDS200234237
                    </div>

                    <div className="DetailColor">
                      <CartItemColor Color={"Red"}></CartItemColor>
                    </div>
                    <div className="DetailSize">
                      <b>Size:</b>37.5
                    </div>
                  </div>
                  <div className="DetailPrice">
                    <div className="ProductAmmountContainer">
                      <Add />
                      <div className="ProductAmmount">1</div>
                      <Remove />
                    </div>
                    <div className="ProductTottalAmmount">30$</div>
                  </div>
                </div>
                <hr></hr>
                <div className="ProductDetail">
                  <img
                    className="CartProductImg"
                    src="https://www.iboogaloo.com/wp-content/uploads/2011/05/Shirt-Red-Check-Ghosted-428x600.jpg"
                  />
                  <div className="DetailsOfItems">
                    <div className="DetailName">
                      <b>Product:</b>T-Shirt
                    </div>
                    <div className="DetailID">
                      <b>ID:</b>UDS200234237
                    </div>

                    <div className="DetailColor">
                      <CartItemColor Color={"Red"}></CartItemColor>
                    </div>
                    <div className="DetailSize">
                      <b>Size:</b>37.5
                    </div>
                  </div>
                  <div className="DetailPrice">
                    <div className="ProductAmmountContainer">
                      <Add />
                      <div className="ProductAmmount">1</div>
                      <Remove />
                    </div>
                    <div className="ProductTottalAmmount">30$</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="CartSummary">
              <h1 className="SummaryTitle">Order Summary</h1>
              <div className="SummaryItems">
                <span className="SummaryText">Subtottal</span>
                <span className="SummaryPrice">$80</span>
              </div>
              <div className="SummaryItems">
                <span className="SummaryText">Estimated Shipping</span>
                <span className="SummaryPrice">$10</span>
              </div>
              <div className="SummaryItems">
                <span className="SummaryText">Shipping Discount</span>
                <span className="SummaryPrice">$-5</span>
              </div>
              <div className="SummaryItems">
                <span className="SummaryTottal">Tottal</span>
                <span className="SummaryTottal">$80</span>
              </div>
              <button className="summaryButton">CHECKOUT NOW</button>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
};

export default Cart;
