import React from "react";
import style from "./Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import PaymentsIcon from "@mui/icons-material/Payments";
function Footer() {
  return (
    <>
      <div className={style.FooterContainer}>
        <div className={style.Left}>
          <h1 className={style.Logo}>XAI.</h1>
          <p className={style.LeftDescription}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            nostrum. Aspernatur mollitia iusto sunt asperiores reiciendis. Ipsum
            commodi suscipit amet dolorum! Neque voluptatem in soluta molestiae
            voluptate sequi possimus illum.
          </p>
          <div className={style.SocialContainer}>
            <div className={style.Facebook}>
              <FacebookIcon />
            </div>
            <div className={style.Instagram}>
              <InstagramIcon />
            </div>
            <div className={style.X}>
              <XIcon />
            </div>
            <div className={style.WhatsApp}>
              <WhatsAppIcon />
            </div>
          </div>
        </div>
        <div className={style.Center}>
          <h3 className={style.CenterTitle}>Userfull Links</h3>
          <ul className={style.CenterList}>
            <li className={style.CenterListItems}>Home</li>
            <li className={style.CenterListItems}>Cart</li>
            <li className={style.CenterListItems}>Man Fashion</li>
            <li className={style.CenterListItems}>Women Fashion</li>
            <li className={style.CenterListItems}>Accessories</li>
            <li className={style.CenterListItems}>My Account</li>
            <li className={style.CenterListItems}>Order Tracking</li>
            <li className={style.CenterListItems}>WishList</li>
            <li className={style.CenterListItems}>WishList</li>
            <li className={style.CenterListItems}>Terms</li>
          </ul>
        </div>
        <div className={style.Right}>
          <h3 className={style.RightTitle}>Contact</h3>
          <div className={style.RightContactItem}>
            <div className={style.Icon}>
              <RoomIcon />
            </div>
            <div>622 Dixie Path , South Tobinchester 98336</div>
          </div>
          <div className={style.RightContactItem}>
            <div className={style.Icon}>
              <PhoneIcon />
            </div>
            <div>+1 234 56 78</div>
          </div>
          <div className={style.RightContactItem}>
            <div className={style.Icon}>
              <MailIcon />
            </div>
            <div className={style.Right}>Contact@Xai.dev</div>
          </div>
          <div className={style.RightContactItem}>
            <div className={style.Icon}>
              <PaymentsIcon />
            </div>
            <div>None for now</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
