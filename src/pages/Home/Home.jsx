import React, { useState } from 'react';
import './home.css';
import Image from '../../components/Image/Image';
import jobBanner from '../../assets/homebanner1.jpg';
import SearchBar from '../../components/SearchBar/SearchBar';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Footer from '../../components/Footer/Footer';
import SubscribePopup from '../../components/SubscribePopup/SubscribePopup';


export default function Home() {

  const [showPopup, setShowPopup] = useState(false); // ✅ control from here

  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <div>
     
      {/* 🔹 Hero Section */}
      <div className="home-banner-wrapper">
        <Image
          src={jobBanner}
          alt="home_bg_img"
          id="home_bg_img"
          className="home_bg_img"
        />

        <div className="overlay-content">
          <SearchBar
            type="search"
            placeholder="Explore jobs"
            id="searchInput"
            className="search-bar"
            name="search"
            onChange={(e) => console.log(e.target.value)}
            onSearch={() => alert("Search clicked")}
          />

          <Text
            text={"Your First Step Towards Success Begins Here"}
            className="home-text"
            id="home-text"
          />
        </div>
      </div>

      {/* 🔹 Notification CTA Section */}
      <div className="notify-section">
        <Text
          text={"Get Notified About Latest Job Posts"}
          className="get-notified-text"
          id="get-notified-text"
        />
        {/* <button className="subscribe-button">Subscribe Now</button> */}
        <Button
          text={"Subscribe Now"}
          className="subscribe-btn"
          id="subscribe-now"
          onClick={handleOpenPopup} // ✅ opens popup
        />

      </div>

      {/* 🔹 Show Popup when triggered */}
      {showPopup && (
        <SubscribePopup onClose={handleClosePopup} />
      )}

      {/* category card */}
      <div>
        <CategoryCard />
      </div>

      {/* footer */}
      <Footer/>
       
    </div>
  );
}
