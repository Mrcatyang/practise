/**
 * Created by Mr.Yang on 2017/10/28.
 */
myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "html/login.html"
        })
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "html/back.html"
            // controller:"login"
        })
        .state("PageTab.Page1", {
            url:"/Page1",
            templateUrl: "html/Page1.html"
        })
        .state("PageTab.Page2", {
            url:"/Page2",
            templateUrl: "html/Page2.html"
        })
        .state("PageTab.Page3", {
            params:{
                page:null,
                type:null,
                status:null,
                startAt:null,
                endAt:null,
            },
            url:"/Page3?page&type&status&startAt&endAt",
            templateUrl: "html/Page3.html",
        })
        .state("PageTab.Page3.Page4", {
            url:"/Page4",
            templateUrl: "html/Page4.html"
        });
});