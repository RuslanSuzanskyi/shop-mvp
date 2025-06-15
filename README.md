# "SHOP MVP*"

A modern, responsive e-commerce shop built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Redux Toolkit**. This project demonstrates best practices in frontend development, including efficient state management, dynamic routing, server-side rendering, and a clean, modular component architecture.

---

## Features

-   **Dynamic Product Listing (in progress):** Browse products categorized and displayed with infinite scroll.
-   **Product Detail Pages:** View comprehensive details for individual products.
-   **Category-Specific Layouts:** Unique visual presentations for different product categories.
-   **Wishlist Functionality:** Add and remove products from a persistent (via LocalStorage) wishlist.
    -   Guest wishlist support for unauthenticated users.
    -   Dedicated wishlist page to view and manage saved items.
    **Buy Functionality (in progress):** Add and remove products from a persistent (via LocalStorage) wishlist.
    -   Guest buy for unauthenticated users.
    -   Dedicated Buy page to view and manage saved items.
-   **Responsive Design (in progress):** Optimized for seamless viewing across various devices (mobile, tablet, desktop) using Tailwind CSS.
-   **Product Filtering (in progress):** Filter products based on various criteria such as [e.g., category, price range, brand, availability].
-   **Product Sorting (in progress):** Sort products by criteria like [e.g., price (low to high / high to low), popularity, newest arrivals, alphabetical order].
-   **Responsive Design (in progress):**

---

## Technologies Used

-   **Next.js 15.3.2:** React framework for server-side rendering, static site generation, and routing (App Router).
-   **React 19.0.0:** JavaScript library for building user interfaces.
-   **TypeScript:** Superset of JavaScript that adds static typing.
-   **Redux Toolkit:** Official, opinionated, batteries-included toolset for efficient Redux development and state management.
    -   `react-redux`: Official React bindings for Redux.
-   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
-   **React Icons:** For scalable vector icons.
-   **FakeStoreAPI "https://fakestoreapi.in/api":** Used for fetching product data.

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

-   Node.js (v18.x or higher recommended)
-   npm (v9.x or higher) or Yarn (v1.x or higher)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/RuslanSuzanskyi/shop-mvp.git
    cd [your-repo-name]
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To run the project in development mode:

```bash
npm run dev
# or
yarn dev