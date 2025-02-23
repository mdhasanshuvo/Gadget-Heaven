# 📱 GadgetHeaven ✨  

Your go-to destination for the latest and greatest gadgets  

![GadgetHeaven Banner](https://i.ibb.co.com/21WnB7kd/Banner.png)  

## 🌐 Live Website  
[🔗 GadgetHeaven](https://gadget-heaven-e-commerce-platform.netlify.app/)  

---

## 🎯 About the Project  

GadgetHeaven is a fully responsive e-commerce platform designed to showcase and sell the latest gadgets. The project is built with **React.js**, featuring a structured navigation system, a category-based product display, a shopping cart, a wishlist, and a sorting/filtering mechanism. The platform ensures smooth user experience by handling data efficiently using **Context API** and **LocalStorage**.  

---

## 🚀 Key Features  

✅ **Dynamic Navbar** – Indicates the active route and provides navigation to Dashboard, Stats, and more.  
✅ **Product Catalog** – Displays gadgets with images, pricing, and details. Clicking "Details" navigates to an item-specific page.  
✅ **Shopping Cart** – Users can add gadgets to the cart, see total pricing, and remove items as needed.  
✅ **Wishlist System** – Allows users to save gadgets and add them to the cart later. Prevents duplicate additions.  
✅ **Sorting & Filtering** – Users can filter products by category and sort cart items by price.  
✅ **Persistent Data** – The cart and wishlist remain intact even after reloading the page (handled with LocalStorage).  
✅ **Toast Notifications** – Displays feedback messages when adding items to the cart or wishlist.  
✅ **404 Page Handling** – A user-friendly 404 page appears when visiting an invalid route.  
✅ **Statistics Page** – Includes a composed chart (Price vs. Product Name) using **Recharts**.  
✅ **Purchase Confirmation** – A modal appears on purchase, clearing the cart and redirecting the user smoothly.  

---

## 💻 Tech Stack  

- **Frontend**: React.js, React Router, Context API  
- **State Management**: useState, useEffect, useContext  
- **UI Components**: Tailwind CSS / Styled Components  
- **Charting**: Recharts  
- **Data Persistence**: LocalStorage  
- **Icons & Ratings**: React Icons, React Rating Stars  

---

## ⚙️ Installation & Setup  

&nbsp; 1.  Clone the repository:  
   ```bash
   git clone https://github.com/your-username/gadget-heaven.git
   cd gadget-heaven
   ```  
&nbsp; 2.  Install dependencies:  
   ```bash
   npm install
   ```  
&nbsp; 3.  Start the development server:  
   ```bash
   npm run dev
   ```  
&nbsp; 4.  Open in your browser:  
   ```
   http://localhost:3000
   ```  

---

## 📦 Data Management  

🔹 **Context API** – Manages cart and wishlist states globally.  
🔹 **LocalStorage** – Preserves cart and wishlist items across sessions.  
🔹 **useEffect Hook** – Synchronizes state with LocalStorage.  

---

## ⚛️ React Concepts Used  

✅ **Components** – Modular structure with reusable UI elements.  
✅ **Props & State** – Efficient state management for dynamic UI updates.  
✅ **Context API** – Avoids prop drilling by sharing state globally.  
✅ **useNavigate Hook** – Handles smooth routing and redirections.  
✅ **useLocation Hook** – Implements dynamic background changes per route.  

---

## 📸 Usage & Screenshots  

#### 🏠 Home Page  
![Home Page](https://i.ibb.co.com/fzgbc5JP/Home-Page.png)  

#### 📦 Product Details Page  
![Product Details](https://i.ibb.co.com/wFqCmShz/Details.png)  

#### 🛒 Cart & Wishlist  
![Cart & Wishlist](https://i.ibb.co.com/fdB6Wzbm/Card.png)  

#### 📊 Statistics Page  
![Statistics](https://i.ibb.co.com/xq1z3hnv/stat-ong.png)  


---

## 🏆 Challenges & Learnings  

✔ Implementing dynamic navbar styles using `useLocation()`.  
✔ Managing cart and wishlist persistence with LocalStorage.  
✔ Using **Context API** to avoid excessive prop drilling.  
✔ Creating a smooth purchase experience with modals and state management.  

---

## 🔮 Future Improvements  

🚀 Add user authentication for personalized experiences.  
🚀 Implement real payment gateway integration.  
🚀 Improve UI with advanced animations & transitions.  
🚀 Optimize performance with lazy loading and memoization.  

---