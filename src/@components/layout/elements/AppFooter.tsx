import { Paths } from '@lib/constant';
import Link from 'next/link';
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa';

const AppFooter = () => {
  return (
    <footer className="app-footer">
      <div className="container">
        <div className="footer-top py-20">
          <div className="fbox">
            <h2 className="fbox_title">Our vision</h2>
            <p className="mb-2">
              Three dimensional mission already going with the flow of our
              company ; We want to evaluate our self in a mesmerizing future
              world of Computer.
            </p>
            <p>
              To achieve the trust of customers by having good relationship
              altogether with supplying good machines as per their demand of
              modernization and advancement.
            </p>
            <ul className="social-icons">
              <li>
                <Link href={Paths.links.facebook}>
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link href={Paths.links.instagram}>
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link href={Paths.links.linkedin}>
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link href={Paths.links.twitter}>
                  <FaTwitter />
                </Link>
              </li>
            </ul>
          </div>
          <div className="fbox footer_contact_box">
            <h2 className="fbox_title">Contact Us</h2>
            <ul>
              <li>
                <i>
                  <FaPhone />
                </i>
                <span>+880 1776187745</span>
              </li>
              <li>
                <i>
                  <FaEnvelope />
                </i>
                <span>motiarrahman9707@gmail.com</span>
              </li>
              <li>
                <i>
                  <FaMapMarkerAlt />
                </i>
                <span>
                  72/3 Kalibari Road , Manikganj 
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>
            Copyright © {new Date().getFullYear()}. All Rights Reserved By{' '}
            <Link href={Paths.root}>Prapti Computer</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
