/**
 * Created by Mr.Yang on 2017/11/13.
 */
angular.module('myApp').controller('commit', function ($scope, $http, $stateParams, $state) {
    $scope.type = null;
    $scope.industry = null;
    $scope.kunge = false;
    $scope.types = [{id: null, name: "请选择"}, {id: '0', name: '首页banner'}, {id: '1', name: '找职位banner '}, {
        id: '2', name: '找精英banner '
    }, {id: '3', name: '行业大图'}];
    $scope.industrys = [{id: null, name: "请选择"}, {id: '0', name: "移动互联网"}, {id: '1', name: "电子商务"}, {
        id: '2', name: "企业服务"
    }, {id: '3', name: "O2O"}, {id: '4', name: "教育"}, {id: '5', name: "金融"}, {
        id: '6', name: "游戏"
    }];
    if ($stateParams.id != null) {
        $http({
            method: 'get',
            url: '/carrots-admin-ajax/a/article/' + $stateParams.id
        }).then(function (response) {
            $scope.title = response.data.data.article.title;
            $scope.type = String(response.data.data.article.type);
            $scope.industry = String(response.data.data.article.industry);
            $scope.dz = response.data.data.article.img;
            $scope.url = response.data.data.article.url;
            $scope.editor.$txt.html(response.data.data.article.content);
            $scope.status = response.data.data.article.status;
            $scope.createAt = response.data.data.article.createAt;

        })
    }
    $scope.uploadEditor = function (x) {
        var html = $scope.editor.$txt.html();
        if ($scope.myForm.$valid && $scope.dz !== undefined) {
            if ($stateParams.id != null) {
                $scope.id = parseInt($stateParams.id)
                $http({
                    method: 'put',
                    url: '/carrots-admin-ajax/a/u/article/' + $scope.id,
                    params: {
                        title: $scope.title,
                        type: $scope.type,
                        content: html,
                        img: $scope.dz,
                        url: $scope.url,
                        createAt:$scope.createAt,
                        status: x
                    }
                }).then(function (res) {
                    $state.go('PageTab.Page3');
                })
            } else {
                $http({
                    method: 'POST',
                    url: '/carrots-admin-ajax/a/u/article',
                    params: {
                        title: $scope.title,
                        type: $scope.type,
                        content: html,
                        img: $scope.dz,
                        url: $scope.url,
                        status: x
                    }
                })
                $state.go('PageTab.Page3');
            }
        } else {
            $scope.kunge = true;
            alert("输入信息不正确")
        }
    }
})
