import React from 'react';
import { AiFillFacebook ,AiFillInstagram, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>All rights reserverd sundaraathavan@gmail.com 2022</p>
      <p className="icons">
        <AiFillFacebook />
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillLinkedin />
      </p>
    </div>
  )
}

export default Footer