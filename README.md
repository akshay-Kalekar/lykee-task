# Next.js Travel Website

## 🚀 Overview
This is a **Next.js** travel website built as part of a Frontend Intern Assignment. It includes multiple sections such as Home, Customize, Destination, and Contact, utilizing APIs for fetching travel data and providing a seamless itinerary journey experience.

## 🎯 Features & Functionality

### 🏠 Home Page (`/`)
- **Carousel Banner** with a search bar in the center.
  - Clicking the search bar redirects to `/customize`.
  - API: [`/banners`](https://json-data-1wm2.onrender.com/banners)
- **Popular Destination Cards**
  - Each card has an **Explore** button redirecting to `/destination/[handle]`.
  - API: [`/featured-destination`](https://json-data-1wm2.onrender.com/featured-destination)

### ✈ Customize Page (`/customize`)
- **Search bar** with placeholder: *"Pick your destination"*.
- **Predefined destinations**: Maldives, Egypt, Bali, Dubai, Japan, Australia, Thailand, etc.
- **Dynamic Filtering** as the user types in the search bar.
- **Itinerary Journey**:
  1. Select the number of days.
  2. Choose travel companions (Solo, Couple, Family).
  3. Configure room options.
  4. Confirmation – Display a "Congratulations" message.

### 🌍 Destination Page (`/destination/[handle]`)
- **List of available trips** for the selected destination.
- Each trip card displays:
  - Trip Name
  - Price
  - Duration
  - Amenities
- **Fixed "Talk to an Expert" button** that redirects to `/get-in-touch`.
- API: [`/destination/egypt`](https://json-data-1wm2.onrender.com/destination/egypt), [`/destination/bhutan`](https://json-data-1wm2.onrender.com/destination/bhutan)

### 📞 Contact Page (`/get-in-touch`)
- **Form Fields:**
  - Name
  - Contact Number
  - Email
  - Budget (Dropdown: `50,000 - 1 Lakh`, `1 Lakh - 2 Lakhs`, `2 Lakhs - 3 Lakhs`, `3 Lakhs+`)


## 🔧 Tech Stack
- **Next.js** (Framework)
- **TypeScript**
- **Tailwind CSS** (Styling)
- **React Hook Form** (Form handling)
- **ShadCN** (Reusable UI components)

## 🚀 Deployment
The project is deployed and accessible online.

## 📂 Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/akshay-Kalekar/lykee-task.git
   cd lykee-task
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📬 Submission
- The source code is available in this public GitHub repository.
- The deployed application link is shared upon request.

## 📌 Reference Websites
- [PickYourTrail](https://www.pickyourtrail.com/) for homepage & customize flow.
- [PickYourTrail - Customize](https://www.pickyourtrail.com/customize) for itinerary experience.

## Additional Images used credit
- [custimze-page-bg](https://www.printablee.com/post_black-and-white-world-map-printable_396505/)
- [home-page-loader](https://lottiefiles.com/free-animation/plane-flies-around-the-earth-bnkKYDPDZ2)
- [get-in-touch-bg](https://wallpapers.com/images/featured/white-aesthetic-laptop-ivqznp6h48afoug5.jpg)

