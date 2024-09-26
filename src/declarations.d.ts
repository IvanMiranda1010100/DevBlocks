// index.d.ts
declare module '*.jsx' {
  import { FC } from 'react';

  const value: FC<any>;
  export default value;

  const component: React.ComponentType<any>;
  export default component;
  
  export const UserProfilePage: FC<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const PageCarrito: FC<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const ContactPage: FC<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const BuyInfoPage: FC<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const TotalProductsPage: FC<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const SectionComponents: FC<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const SectionInitial: FC<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const PageLayout: FC<any>; // Agrega aquí las exportaciones con nombre si las necesitas
  export const PageLayout: React.ComponentType<any>; // Agrega aquí las exportaciones con nombre si las necesitas
}