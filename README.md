# ♻️ ProjetDechet

This project is a pharmaceutical waste management web application built with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.

---

## 📁 Project Structure

```
src/
  app/
    Admin/           # Admin dashboard, login, profile, PV management
    aq/              # AQ dashboard, validation, sidebar
    emetteur/        # Emetteur dashboard and features
    hse/             # HSE dashboard and validation
    layouts/         # Shared layouts (navbar, sidebar)
    login-utilisateur/
    reset-password/
    forget-password/
    Service/         # Angular services (API, business logic)
    model/           # TypeScript models/interfaces
    Users/           # User profile components
    users-perview/
  assets/            # Static assets (images, etc.)
  styles.scss        # Global styles (Tailwind, Toastr)
  index.html         # Main HTML entry point
```

---

## 🧩 Main Components

- **Admin**: User management, PV (Procès-Verbal) management, dashboard
- **AQ**: Validation workflows, dashboard, sidebar
- **HSE**: Validation, dashboard
- **Emetteur**: Dashboard, PV creation
- **Shared**: Navbar, sidebar, authentication, password reset

---

## ⚙️ Dependencies

- [Angular 16](https://angular.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ngx-toastr](https://www.npmjs.com/package/ngx-toastr)
- [RxJS](https://rxjs.dev/)
- [TypeScript](https://www.typescriptlang.org/)

Install all dependencies with:
```sh
npm install
```

---

## 🧪 Testing

- **Unit tests**: [Karma](https://karma-runner.github.io) & Jasmine  
  Run with:
  ```sh
  ng test
  ```
- **End-to-end tests**:  
  Add a package like Cypress or Protractor, then run:
  ```sh
  ng e2e
  ```

---

## 🚀 Development

Start the development server:
```sh
ng serve
```
Visit [http://localhost:4200/](http://localhost:4200/).

---

## 🏗️ Build

Build the project for production:
```sh
ng build
```
Artifacts are stored in the `dist/` directory.

---

## ℹ️ Further Help

- Angular CLI: `ng help`
- [Angular CLI Documentation](https://angular.io/cli)

---

© 2024 ProjetDechet
