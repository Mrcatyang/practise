/**
 * Created by Mr.Yang on 2017/10/25.
 */
myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/PageTab");

    $stateProvider
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "back.html"
        })
        .state("PageTab.Page1", {
            url:"/Page1",
            templateUrl: "Page1.html"
        })
        .state("PageTab.Page2", {
            url:"/Page2",
            templateUrl: "Page2.html"
        })
        .state("PageTab.Page3", {
            url:"/Page3",
            templateUrl: "Page3.html"
        })
        .state("PageTab.Page3.Page4", {
        url:"/Page4",
        templateUrl: "Page4.html"
    });
});