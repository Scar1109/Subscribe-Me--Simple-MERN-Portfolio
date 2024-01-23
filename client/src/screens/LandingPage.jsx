import React from "react";
import profilePhoto from "../assets/images/new logo.png";
import githubImg from "../assets/icons/github.png";
import linkedinImg from "../assets/icons/linkedin.png";
import instagramImg from "../assets/icons/instagram.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function LandingPage() {
    return (
        <div className="profile">
            <div className="profile__description" data-aos="fade-right" data-aos-duration="1000" >
                <div>
                    <h1>Hello! </h1>
                    <h2>
                        I'm{" "}
                        <span>
                            {" "}
                            Kaveen <br /> Dinethma{" "}
                        </span>
                    </h2>
                    <p>Subscribe My channel 😏</p>
                    <div className="profile__btn-section">
                        <a href="https://www.youtube.com/channel/UCJPRbxNjnavUCE1oKtLjwrQ?sub_conformation=1">
                            <button className="profile__subscribe-btn">
                                Subscribe
                            </button>
                        </a>
                        <div className="profile__social">
                            <a href="https://github.com/Scar1109" target="_blank" rel="noreferrer">
                                <img src={githubImg} alt="github"  />
                            </a>
                            <a href="https://linkedin.com/in/kaveendinethma" target="_blank" rel="noreferrer">
                                <img src={linkedinImg} alt="linkedin" />
                            </a>
                            <a href="https://www.instagram.com/kavee_dineth/" target="_blank" rel="noreferrer">
                                <img src={instagramImg} alt="instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile__Photo" data-aos="zoom-out" data-aos-duration="1000" >
                <img src={profilePhoto} alt="profile" />
            </div>
        </div>
    );
}

export default LandingPage;
