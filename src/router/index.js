import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/BaseShow",
    },
    {
        path: "/",
        name: "Home",
        component: () => import("../components/Home.vue"),
        children: [
            {
                path: "/BaseShow",
                name: "BaseShow",
                meta: {
                    title: "BaseShow",
                },
                component: () => import("../view/BaseShow.vue"),
            },
            {
                path: "/BaseSwitch",
                name: "BaseSwitch",
                meta: {
                    title: "BaseSwitch",
                },
                component: () => import("../view/BaseSwitch.vue"),
            },
            {
                path: "/EchartMaps",
                name: "EchartMaps",
                meta: {
                    title: "EchartMaps",
                },
                component: () => import("../view/EchartMaps.vue"),
            },
        ],
    },
    {
        path: "/404",
        name: "404",
        meta: {
            title: "找不到页面",
        },
        component: () => import("../view/404.vue"),
    },
    {
        path: "/403",
        name: "403",
        meta: {
            title: "暂无权限",
        },
        component: () => import("../view/403.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    // 匹配不存在的路由
    if (to.matched.length === 0) {
        next({
            path: '/403'
        })
    } else {
        next();
    }
});

export default router;
