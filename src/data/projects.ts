import balerHome from "../assets/baler-home.png";
import balerDestination from "../assets/baler-destination.png";
import balerBooking from "../assets/baler-booking.png";

import goodfoodHome from "../assets/goodfood-home.png";
import goodfoodMenu from "../assets/goodfood-menu.png";
import goodfoodGallery from "../assets/goodfood-gallery.png";
import goodfoodReservation from "../assets/goodfood-reservation.png";

import shopeaseHome from "../assets/shopease-home.png";
import shopeaseProducts from "../assets/shopease-products.png";
import shopeaseProduct from "../assets/shopease-product.png";
import shopeaseCategories from "../assets/shopease-categories.png";

import smilecareHome from "../assets/smilecare-home.png";
import smilecareServices from "../assets/smilecare-services.png";
import smilecareDoctors from "../assets/smilecare-doctors.png";
import smilecareAppointment from "../assets/smilecare-appointment.png";
import smilecareFaq from "../assets/smilecare-faq.png";

export const projects = [
  {
    title: "Baler Aurora Tours",

    description:
      "A modern tour booking web application for Baler, Aurora, Philippines. Users can browse destinations, explore activities, search and filter tours, book packages, and manage reservations through a responsive interface.",

    images: [balerHome, balerDestination, balerBooking],

    technologies: [
      "React.js",
      "Tailwind CSS",
      "React Router",
      "Supabase",
      "PostgreSQL",
      "Vercel",
    ],

    github: "https://github.com/Erceljay13/baler-aurora-tours",

    demo: "https://baler-aurora-tours.vercel.app/",
  },

  {
    title: "GoodFood  Restaurant Website",

    description:
      "A modern and responsive restaurant website built to showcase a restaurant's menu, featured dishes, food gallery, customer reviews, and business information. The application provides an intuitive browsing experience with table reservation functionality and a clean, user-friendly interface.",

    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],

    github: "https://github.com/Erceljay13/goodfood-restaurant",

    demo: "https://goodfood-restaurant.vercel.app/",

    images: [goodfoodHome, goodfoodMenu, goodfoodGallery, goodfoodReservation],
  },

  {
    title: "ShopEase  Modern E-commerce Website",

    description:
      "A full-featured e-commerce web application where users can browse products across multiple categories, filter and search by price or rating, save items to a wishlist, and complete purchases through a multi-step checkout with Cash on Delivery, GCash, and card payment options. The application includes real user authentication, persistent per-account carts and wishlists backed by Supabase, and a polished animated UI with a 3D interactive hero section, scroll-triggered reveals, and a fully responsive design.",

    images: [
      shopeaseHome,
      shopeaseProducts,
      shopeaseProduct,
      shopeaseCategories,
    ],

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Supabase",
      "PostgreSQL",
    ],

    github: "https://github.com/Erceljay13/shopease-ecommerce",

    demo: "https://shopease-ecommerce-xi.vercel.app/",
  },

  {
    title: "SmileCare  Dental & Medical Clinic Website",

    description:
      "SmileCare is a responsive marketing and booking website for a combined dental-and-medical practice, built around a filterable services and doctors directory with a live appointment request form. The booking form sends real email notifications via Web3Forms without requiring a backend server. The website also includes department-based filtering for dental and medical services, scroll animations, an accordion FAQ, a patient testimonial carousel, Google Maps integration, and SEO/social preview metadata.",

    images: [
      smilecareHome,
      smilecareServices,
      smilecareDoctors,
      smilecareAppointment,
      smilecareFaq,
    ],

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Web3Forms",
      "Google Maps",
    ],

    github: "https://github.com/Erceljay13/smilecare-clinic",

    demo: "https://smilecare-clinic-snowy.vercel.app/",
  },
];
