# 📱 TestVenus - React Native Demo App

This is a demo React Native application developed for a Mobile Developer written test. It demonstrates clean architecture, API integration, state management using Redux, and unit testing using Jest and React Native Testing Library.

---

## 🚀 Features

- ✅ **Login Screen** – Dummy login flow
- ✅ **Home Screen** – Displays a list of items fetched from API
- ✅ **Detail Screen** – Displays details of a selected item
- ✅ **Splash Screen**
- ✅ **Reusable Components** – Input field, modal, headers, etc.
- ✅ **Redux** – Manages application state (items)
- ✅ **Axios** – Handles API requests
- ✅ **React Navigation** – Manages screen transitions
- ✅ **Testing** – Jest & React Native Testing Library used

---

## 📦 Tech Stack

- React Native (TypeScript)
- Redux Toolkit
- Axios
- React Navigation
- React Native Safe Area Context
- Jest + React Native Testing Library

---

## 📁 Project Structure

```
testVenus/
├── src/
│   ├── api/                     # API calls (via Axios)
│   ├── components/              # Reusable UI components
│   │   ├── AppTextInput.tsx
│   │   ├── CommonHeader.tsx
│   │   ├── CommonUi.tsx
│   │   └── ErrorModal.tsx
│   ├── constants/               # App-wide constants
│   │   ├── colors.ts
│   │   └── images.ts
│   ├── navigation/              # Navigation setup
│   │   └── AppNavigation.tsx
│   ├── redux/                   # Redux Toolkit slices and store
│   │   ├── itemSlice.ts
│   │   └── store.ts
│   ├── screens/                 # All app screens
│   │   ├── DetailsScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   └── SplashScreen.tsx
│   └── types/                   # Type definitions
│       └── item.ts
├── __tests__/                   # Unit tests
├── App.tsx
├── package.json
├── tsconfig.json
├── babel.config.js
├── jest.config.js
└── README.md
```

---

## 🛠 Setup & Running Instructions

> **Ensure your development environment is configured as per:**  
> https://reactnative.dev/docs/environment-setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/testVenus.git
cd testVenus
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start Metro Bundler

```bash
npm start
```

### 4. Run the App

```bash
npm run android
# or
npm run ios (macOS only)
```

---

## 🧪 Run Unit Tests

```bash
npm test
```

Unit tests are written for components like:
- `HomeScreen`: checks loading state, item rendering, and navigation.
- Reusable components (like `AppTextInput`, `CommonHeader`) can also be tested similarly.

---

## 🧾 Git & Commit History

- Git is used for version control.
- Meaningful commits with messages like:
  - `feat: implement login screen`
  - `chore: integrate redux toolkit`
  - `test: add unit tests for HomeScreen`

---

## 📤 Submission

### 🔗 GitHub Repository

[https://github.com/yourusername/testVenus](https://github.com/yourusername/testVenus)  
> 📌 Replace this with your actual public GitHub repo link.

### 📱 APK Download Link

[👉 Download APK](https://drive.google.com/your_apk_file_link)  
> 📌 Upload your APK to Google Drive or Dropbox and paste the link here.

### To generate the APK:

```bash
cd android
./gradlew assembleRelease
```

Then locate the APK at:
```
android/app/build/outputs/apk/release/app-release.apk
```

---

## 🙋 Author Info

- **Name**: Your Name  
- **Email**: your.email@example.com  
- **GitHub**: [github.com/yourusername](https://github.com/yourusername)

---

## 🧠 Learn More

- [React Native Docs](https://reactnative.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Navigation](https://reactnavigation.org/)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/docs/react-native-testing-library/intro/)