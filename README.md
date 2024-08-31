# **E-Commerce App**

### **Sign Up**

![Sign Up](/frontend/public/images/signUp.png)

### **Login**

![Login Page](/frontend/public/images/login.png)

### **Main Page**

![Main Page](/frontend/public/images/mainPage.png)

### **Product Detail**

![Product Detail Page](/frontend/public/images/productDetail.png)

### **Cart**

![Cart](/frontend/public/images/cart.png)

### **Wishlist**

![Cart](/frontend/public/images/wishList.png)

## **Video Demo**

[![Video Running](/frontend/public/images/login.png)](/frontend/public/video/Redux_Proejct.mp4)

## **Description**

This is a shopping application built using **Vite** and **React**. The app fetches product data from **RapidAPI** and allows users to browse products, view detailed product information, and manage their shopping cart and wishlist. The application also includes a user authentication system with signup and login functionalities.

## **Features**

- User Authentication: SignUp, login, and logout.
- Product Catalog: Browse and view products fetched from RapidAPI.
- Product Details: Detailed product information including ratings and availability.
- Shopping Cart: Add to cart, adjust quantities, and view the total price.
- Wishlist: Save items for future purchases.
- Responsive Design: Optimized for both desktop and mobile devices.

## **Getting Started**

### **Installation**

1. **Clone the repository**:

   ```bash
   git clone https://github.com/SandeebAdhikari/E-Commerce.git
   cd frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

### **Running the Application**

1. **Start the development server**:

   ```bash
   npm run dev
   ```

   Open your browser and navigate to `http://localhost:3000` to view the app.

2. **Build for production**:

   ```bash
   npm run build
   ```

3. **Preview the production build**:

   ```bash
   npm run serve
   ```

### **Environment Variables**

Create a `.env` file in the root of the project and add your RapidAPI credentials:

```bash
VITE_RAPIDAPI_KEY=your_rapidapi_key
VITE_RAPIDAPI_HOST=your_rapidapi_host
```

## **Contributing**

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.
