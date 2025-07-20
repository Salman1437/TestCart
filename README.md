Food Delivery App – React Native (TypeScript)
A demo food delivery application built using React Native and TypeScript. The app demonstrates a full flow from login to restaurant listing, menu selection, cart management, and checkout.

🚀 Features
✅ Splash Screen – Intro screen on launch

✅ Login Screen – Dummy login for demonstration

✅ Restaurant List Screen – Displays mock restaurants

✅ Menu Screen – Menu items per restaurant

✅ Cart Screen – Add/remove items, adjust quantity

✅ Checkout Screen – Review and confirm payment

✅ Reusable Components – Header, Layout, UI elements

✅ Redux Toolkit – Global state management (cart)

✅ React Navigation – Stack-based screen navigation

✅ TypeScript – Type safety across the project

✅ Jest + RTL – Unit testing (optional setup)

🛠 Tech Stack
React Native (TypeScript)

Redux Toolkit

React Navigation (v6)

Axios (if APIs are integrated)

Jest + React Native Testing Library (optional)

ESLint + Prettier (recommended for clean code)

📁 Project Structure
bash
Copy
Edit
FoodDeliveryApp/
├── src/
│   ├── components/            # Reusable components (CommonHeader, CommonUi)
│   ├── constants/             # Colors, dummy data, etc.
│   ├── navigation/            # Stack navigation setup
│   ├── redux/                 # Redux slices & store
│   ├── screens/               # All app screens
│   │   ├── SplashScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── RestaurantListScreen.tsx
│   │   ├── MenuScreen.tsx
│   │   ├── CartScreen.tsx
│   │   └── CheckoutScreen.tsx
│   └── types/                 # TypeScript type definitions
├── App.tsx                    # Entry point
├── package.json
├── tsconfig.json
├── README.md
└── ...
📲 Screens Flow
SplashScreen →

LoginScreen →

RestaurantListScreen →

MenuScreen (by Restaurant) →

CartScreen →

CheckoutScreen

🚀 Getting Started
1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/Salman1437/TestCart.git
cd TestCart
2. Install Dependencies
bash
Copy
Edit
npm install
# or
yarn install
3. Run the App
bash
Copy
Edit
npx react-native run-android
# or
npx react-native run-ios   # (macOS only)
⚠️ Ensure your environment is set up:
https://reactnative.dev/docs/environment-setup

🧪 Running Tests (Optional)
bash
Copy
Edit
npm test
Use Jest and React Native Testing Library to test UI components and Redux logic.

🛒 Core Redux Store
cartSlice.ts: Handles cart item add/remove/update

hooks.ts: Typed useSelector & useDispatch

📤 Submission
🔗 GitHub Repo
https://github.com/Salman1437/TestCart

📱 APK (Optional)
Generate APK:

bash
Copy
Edit
cd android
./gradlew assembleRelease
Then locate at:

swift
Copy
Edit
android/app/build/outputs/apk/release/app-release.apk
Upload to Google Drive/Dropbox and share the link here.

👨‍💻 Author
Name: Salman

GitHub: github.com/Salman1437