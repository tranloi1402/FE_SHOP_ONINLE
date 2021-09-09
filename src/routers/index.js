import Loadable from '../utils/Loadable';

const HomePage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Home'));
const Cart = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Home/Cart'));
const Details = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Home/Product/deltaiProduct'));
const Login = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Dashboard/Login/login'));

const DashboardPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Dashboard/Layout'));

const DashboardProducts = Loadable(
    () => import(/* webpackChunkName: "js/home" */ '@Views/pages/Dashboard/Products/index')
);
const DashboardProductDelete = Loadable(
    () => import(/* webpackChunkName: "js/home" */ '@Views/pages/Dashboard/Products/deleteProduct')
);
const DashboardCreatPrd = Loadable(
    () => import(/* webpackChunkName: "js/home" */ '@Views/pages/Dashboard/Products/creatProduct')
);
const DashboardEditPrd = Loadable(
    () => import(/* webpackChunkName: "js/home" */ '@Views/pages/Dashboard/Products/editProduct')
);

const DashboardCategory = Loadable(
    () => import(/* webpackChunkName: "js/home" */ '@Views/pages/Dashboard/Category/index')
);
// delete category
const DashboardCategoryDelete = Loadable(
    () => import(/* webpackChunkName: "js/home" */ '@Views/pages/Dashboard/Category/deleteCategory')
);

const DashboardCreatCate = Loadable(
    () => import(/* webpackChunkName: "js/home" */ '@Views/pages/Dashboard/Category/creatCategory')
);
const DashboardEditCate = Loadable(
    () => import(/* webpackChunkName: "js/home" */ '@Views/pages/Dashboard/Category/editCategory')
);

const DashboardOrder = Loadable(
    () => import(/* webpackChunkName: "js/home" */ '@Views/pages/Dashboard/Order/index')
);
const DashboardEditOrder = Loadable(
    () => import(/* webpackChunkName: "js/home" */ '@Views/pages/Dashboard/Order/editOder')
);

const routers = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/trang-chu',
        component: HomePage
    },
    {
        path: '/cart/:id',
        component: Cart
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/product/:id',
        component: Details
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/dashboard',
        component: DashboardPage
    },
    {
        path: '/dashboard/products',
        component: DashboardProducts
    },
    {
        path: '/dashboard/product/delete/:id',
        component: DashboardProductDelete
    },
    {
        path: '/dashboard/creatProducts',
        component: DashboardCreatPrd
    },
    {
        path: '/dashboard/editProducts/:id',
        component: DashboardEditPrd
    },
    {
        path: '/dashboard/categorys',
        component: DashboardCategory
    },
    {
        path: '/dashboard/categorys/delete/:id',
        component: DashboardCategoryDelete
    },
    {
        path: '/dashboard/creatCategory',
        component: DashboardCreatCate
    },
    {
        path: '/dashboard/EditCategory/:id',
        component: DashboardEditCate
    },
    {
        path: '/dashboard/order',
        component: DashboardOrder
    },
    {
        path: '/dashboard/editOrder/:id',
        component: DashboardEditOrder
    }
];

export default routers;
