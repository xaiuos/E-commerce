import React from "react";
import "./Footer.css";
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
      <div className="FooterContainer">
        <div className="Left">
          <h1 className="Logo">XAI.</h1>
          <p className="LeftDescription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            nostrum. Aspernatur mollitia iusto sunt asperiores reiciendis. Ipsum
            commodi suscipit amet dolorum! Neque voluptatem in soluta molestiae
            voluptate sequi possimus illum.
          </p>
          <div className="SocialContainer">
            <div className="Facebook">
              <FacebookIcon />
            </div>
            <div className="Instagram">
              <InstagramIcon />
            </div>
            <div className="X">
              <XIcon />
            </div>
            <div className="WhatsApp">
              <WhatsAppIcon />
            </div>
          </div>
        </div>
        <div className="Center">
          <h3 className="CenterTitle">Userfull Links</h3>
          <ul className="CenterList">
            <li className="CenterListItems">Home</li>
            <li className="CenterListItems">Cart</li>
            <li className="CenterListItems">Man Fashion</li>
            <li className="CenterListItems">Women Fashion</li>
            <li className="CenterListItems">Accessories</li>
            <li className="CenterListItems">My Account</li>
            <li className="CenterListItems">Order Tracking</li>
            <li className="CenterListItems">WishList</li>
            <li className="CenterListItems">WishList</li>
            <li className="CenterListItems">Terms</li>
          </ul>
        </div>
        <div className="Right">
          <div className="RightTitle">Contact</div>
          <div className="RightContactItem">
            <div className="Icon">
              <RoomIcon />
            </div>
            <div>622 Dixie Path , South Tobinchester 98336</div>
          </div>
          <div className="RightContactItem">
            <div className="Icon">
              <PhoneIcon />
            </div>
            <div>+1 234 56 78</div>
          </div>
          <div className="RightContactItem">
            <div className="Icon">
              <MailIcon />
            </div>
            <div>Contact@Xai.dev</div>
          </div>
          <div className="RightContactItem">
            <div className="Icon">
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
