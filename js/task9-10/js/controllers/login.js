/**
 * Created by Mr.Yang on 2017/11/13.
 */
angular.module('myApp').controller('login', function ($scope, $http, $state) {
    $scope.user = "";
    $scope.password = "";
    $scope.login = function () {
        $http({
            method: 'POST',
            url: '/carrots-admin-ajax/a/login',
            params: {
                name: $scope.user,
                pwd: $scope.password
            }
        }).then(function successCallback(response) {
            if (response.data.message === 'success') {
                $scope.goPageTab = function () {
                    $state.go("PageTab")
                };
                $scope.goPageTab();
            }
        }, function errorCallback(response) {
            alert("请求错误")
        });
    }
});
//登录