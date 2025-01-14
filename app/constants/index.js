import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";

export const navLinks = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Services',
    href: '/services'
  },
  {
    title: 'About',
    href: '/about'
  },
  {
    title: 'Contact Us',
    href: '/contact'
  },
];
 
export const features = [
  {
    id: "feature-1",
    icon:"/Shield.svg",
    title: "Safety",
    content:
      "We embrace or automate every system we install, making sure it is hands-free, reliable and safe for both users and the environment",
  },
  {
    id: "feature-2",
    icon:"/Shield.svg",
    title: "Tailor-made",
    content:
      "Personalized approach that ensures the highest quality, fit, and performance, designed with attention to every detail.",
  },
  {
    id: "feature-3",
    icon:"/Shield.svg",
    title: "Quality and Reliability",
    content:
      "we provide cutting-edge technologies from trusted manufactures, and making sure that our systems or solutions, perform consistently and trusted to meet expectations, even under challenging conditions.",
  },
  {
    id: "feature-4",
    icon:"/Shield.svg",
    title: "Expertise & Experience",
    content:
      "With years of experience in solar energy industry, our team possesses extensive knowledge and expertise. We stay updated with the latest technological advancements to ensure that we offer solutions that maximize energy efficiency.",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: <FaWhatsapp />,  // Use the React Icon component here
    link: "https://wa.me/+263772968026", // WhatsApp link
  },
  {
    id: "social-media-2",
    icon: <FaFacebookF />,  // Use the React Icon component here
    link: "https://www.facebook.com/valenceenergysolns",
  },
  {
    id: "social-media-3",
    icon: <FaLinkedinIn />,  // Use the React Icon component here
    link: "https://www.linkedin.com/",
  },
  {
    id: "social-media-4",
    icon: <FaTwitter />,  // Use the React Icon component here
    link: "https://x.com/i/flow/login?redirect_after_login=%2FEnergyValence",
  },
  {
    id: "social-media-5",
    icon: <FaMapMarkerAlt />,  // GPS Location Icon
    link: "https://maps.app.goo.gl/mfpgUkxKr2BJX2jU7", // Your location link
  },
];
