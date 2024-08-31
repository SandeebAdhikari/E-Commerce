# **E-Commerce App**

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
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
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

## **Screenshots**

### **Main Page**

![Main Page](./screenshots/main-page.png)

### **Product List**

![Product List](./screenshots/product-list.png)

### **Product Details**

![Product Details](./screenshots/product-details.png)

### **Wishlist**

![Wishlist](./screenshots/wishlist.png)

## **Video Demo**

![Video Demo](./demo/demo-video.mp4)

## **Contributing**

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## This markdown will be ready to copy and paste into your `README.md` file for GitHub. Make sure to replace the placeholders like `your-username`, `your-repository`, and paths to images or videos with the actual paths where your assets are located.
