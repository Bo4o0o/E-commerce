import { SpecificComponent } from './features/specific/specific.component';
import { Routes } from '@angular/router';
import { authGuard } from './core/auth/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Home'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Home'
  },
  {
    path: 'shop',
    loadComponent: () =>
      import('./features/shop/shop.component').then(m => m.ShopComponent),
    title: 'Shop'
  },
  {
    path: 'categories',
    loadComponent: () =>
      import('./features/categories/categories.component').then(m => m.CategoriesComponent),
    title: 'Cat'
  },
  {
    path: 'brands',
    loadComponent: () =>
      import('./features/brands/brands.component').then(m => m.BrandsComponent),
    title: 'Brand'
  },
  {
    path: 'wishlist',
    loadComponent: () =>
      import('./features/wishlist/wishlist.component').then(m => m.WishlistComponent),
    title: 'Wishlist',
    canActivate:[authGuard]
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./features/cart/cart.component').then(m => m.CartComponent),
    title: 'Cart',
    canActivate:[authGuard]
  },
  {
    path: 'details/:id/:slug',
    loadComponent: () =>
      import('./features/details/details.component').then(m => m.DetailsComponent),
    title: 'Details'
  },
  {
    path: 'specific/:id',
    loadComponent: () =>
      import('./features/specific/specific.component').then(m => m.SpecificComponent),
    title: 'Detali Brand'
  },
  {
    path: 'checkout/:id',
    loadComponent: () =>
      import('./features/checkout/checkout.component').then(m => m.CheckoutComponent),
    title: 'Checkout',
    canActivate:[authGuard]
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact Us',
  },
  {
    path: 'allorders',
    loadComponent: () =>
      import('./features/orders/orders.component').then(m => m.OrdersComponent),
    title: 'Orders',
    canActivate:[authGuard]
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component').then(m => m.LoginComponent),
    title: 'Login'
  }
  ,
  {
    path: 'register',
    loadComponent: () =>
      import('./features/register/register.component').then(m => m.RegisterComponent),
    title: 'Register'
  }
  ,
  {
    path: 'forgot',
    loadComponent: () =>
      import('./features/forgot/forgot.component').then(m => m.ForgotComponent),
    title: 'Forgot'
  }
  ,
  {
    path: 'subcategory/:id',
    loadComponent: () =>
      import('./features/subcategory/subcategory.component').then((m) => m.SubcategoryComponent),
    title: 'Sub Categories',
  }
  ,
  {
    path: 'specific-category/:id',
    loadComponent: () =>
      import('./features/specific-category/specific-category.component').then(
        (m) => m.SpecificCategoryComponent,
      ),
    title: 'Specific Categories',
  }
  
  ,
  {
    path: '**',
    loadComponent: () =>
      import('./features/notfound/notfound.component').then(m => m.NotfoundComponent),
    title: 'NotFound'
  }
];