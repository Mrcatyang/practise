/**
 * Created by Mr.Yang on 2017/10/28.
 */
myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "html/login.html",
        })
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "html/back.html",
            resolve: {
                loadMyService: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can use your service
                    return $ocLazyLoad.load('js/controllers/myCtrl.js'

                    );
                }]
            }
        })
        .state("PageTab.Page1", {
            url: "/Page1",
            templateUrl: "html/Page1.html"
        })
        .state("PageTab.Page2", {
            url: "/Page2",
            templateUrl: "html/Page2.html"
        })
        .state("PageTab.Page3", {
            params: {
                page: null,
                type: null,
                status: null,
                startAt: null,
                endAt: null,
                size: null,
            },
            url: "/Page3?page&type&status&startAt&endAt&size",
            templateUrl: "html/Page3.html",
            resolve: {
                loadMyService: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can use your service
                    return $ocLazyLoad.load(
                        'js/controllers/list.js'
                    );
                }]
            }
        })
        .state("PageTab.Page3.Page4", {
            params: {
                id: null,
            },
            url: "/Page4?id",
            templateUrl: "html/Page4.html",
            resolve: {
                loadMyService: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can use your service
                    return $ocLazyLoad.load(
                        'js/controllers/commit.js'
                       );
                }]
            }
        });
});