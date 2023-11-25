import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTER } from '@/constants/path';

const MainLayout = lazy(() => import('@/layouts/main'));
const Home = lazy(() => import('@/pages/Home'));
const Product = lazy(() => import('@/pages/Product'));

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTER.HOME_PAGE} element={<Home />} />
        <Route path={ROUTER.PRODUCT_PAGE} element={<Product />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
