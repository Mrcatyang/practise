/**
 * Created by Mr.Yang on 2017/10/25.
 */

angular.module('myApp').controller('list', function ($scope, $http, $stateParams, $state) {
    $scope.dat = new Date();
    $scope.format = "yyyy/MM/dd";
    $scope.altInputFormats = ['yyyy/M!/d!'];
    $scope.popup1 = {
        opened: false
    };
    $scope.popup2 = {
        opened: false
    };
    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };
    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };
    $scope.a = $stateParams.type;
    $scope.b = $stateParams.status;
    $scope.types = [{id: null, name: "全部"}, {id: '0', name: '首页banner'}, {id: '1', name: '找职位banner '}, {
        id: '2', name: '找精英banner '
    }, {id: '3', name: '行业大图'}];
    $scope.status = [{id: null, name: "全部"}, {id: '1', name: '草稿'}, {id: '2', name: '上线'}];
    if ($state.startAt !== null && $stateParams.endAt !== null) {
        $scope.dat1 = new Date(parseInt($stateParams.startAt));
        $scope.dat2 = new Date(parseInt($stateParams.endAt));
    }
    $scope.seo = function () {
        if ($scope.dat1 !== undefined && $scope.dat2 !== undefined) {
            var kk = new Date($scope.dat1);
            $scope.kun = kk.getTime();
            var gg = new Date($scope.dat2);
            gg.setHours(23, 59, 59);
            $scope.ge = gg.getTime();
            $state.go("PageTab.Page3", {
                page: 1,
                type: $scope.a,
                status: $scope.b,
                startAt: $scope.kun,
                endAt: $scope.ge
            })
        } else if ($scope.dat1 == undefined && $scope.dat2 == undefined) {
            $scope.kun = null;
            $scope.ge = null;
            $state.go("PageTab.Page3", {page: 1, type: $scope.a, status: $scope.b})
        } else {
            alert("请选择时间区间")
        }
    }
    $scope.clear = function () {
        $scope.a = null;
        $scope.b = null;
        $scope.kun = null;
        $scope.ge = null;
        $state.go("PageTab.Page3", {page: 1, type: $scope.a, status: $scope.b, startAt: $scope.kun, endAt: $scope.ge})
    }
    $scope.load = function (x, y) {
        if (y === 1) {
            y = 2
        } else {
            y = 1
        }
        $http({
            method: 'PUT',
            url: '/carrots-admin-ajax/a/u/article/status',
            params: {
                id: x,
                status: y
            }
        }).then(
            $state.go('.', {}, {reload: true})
        )
    }
    $scope.edit = function (x) {
        $state.go('PageTab.Page3.Page4', {id: x})
    }
    $scope.delete = function (x) {
        $http({
            method: 'delete',
            url: '/carrots-admin-ajax/a/u/article/' + x
        }).then(
            $state.go('PageTab.Page3', {}, {reload: true})
        )
    }
    $http({
        method: 'GET',
        url: '/carrots-admin-ajax/a/article/search',
        params: {
            size: $stateParams.size,
            page: $stateParams.page,
            type: $stateParams.type,
            status: $stateParams.status,
            startAt: $stateParams.startAt,
            endAt: $stateParams.endAt
        }
    }).then(function successCallback(response) {
        $scope.names = response.data.data.articleList;
        $scope.total = Math.ceil(response.data.data.total / response.data.data.size);
        $scope.maxPage = $scope.total;
        $scope.page = $stateParams.page;
        $scope.size = response.data.data.size;
        $scope.whichPage = $stateParams.page;
    }, function errorCallback(response) {
        // 请求失败执行代码
    });
})




