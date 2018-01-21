/**
 * Created by Mr.Yang on 2017/11/2.
 */

angular.module('myApp').directive('pagination', function ($state) {
    return {
        restrict: 'E',
        replace: true,
        // scope:{
        //     page:'=',
        //     maxPage:'='
        // },
        template: '<div >' +
        '<div class="pn2"><span>去第<input class="" ng-model="whichPage">页</span><button' +
        ' ng-click="sure()">确定</button></div>' +
        '<nav>' +
        '<ul class="pagination pagination-sm m0">' +
        '<li><a href="javascript:void(0)" ng-click="pageGo(1)">首页</a></li>' +
        '<li><a href="javascript:void(0)" ng-click="pagePre()">上一页</a></li>' +
        '<li ng-repeat="num in pageShowList" ng-click="pageGo(num)" ng-class="{active:clickPage == num}"><a href="javascript:void(0)">{{num}}</a></li>' +
        '<li><a href="javascript:void(0)" ng-click="pageNext()">下一页</a> </li>' +
        '<li><a href="javascript:void(0)" ng-click="pageGo(maxPage)">末页</a></li>' +
        '</ul>' +
        '</nav>' +
        '<div class="pn"><span>每页显示<input class="" ng-model="size">条</span></div>' +
        '</div>',

        link: function ($scope) {
            //变量
            var pageList = [];
            $scope.page = 1;    //初始默认为第一页
            $scope.pageShowList = [];    //最大显示5个格子


            /*  监听最大页数，如果页数变化，重新生成页数数组
             * */
            var watch = $scope.$watch('maxPage', function (newValue, oldValue, scope) {
                pageList = [];
                for (var i = 1; i <= newValue; i++) {   //一个个压入页码
                    pageList.push(i);
                }
                resetPageOrder($scope.page);
            });

            /*  直接跳页
             * */
            $scope.pageGo = function (num) {
                $scope.page = num;
                resetPageOrder($scope.page);
                $state.go("PageTab.Page3", {page: num})
            };

            $scope.sure = function () {
                $state.go("PageTab.Page3", {page: $scope.whichPage, size: $scope.size})
            }

            /*  上一页
             * */
            $scope.pagePre = function () {
                if ($scope.page > 1) {
                    $scope.page--;
                    resetPageOrder($scope.page);
                    $state.go("PageTab.Page3", {page: $scope.page})
                }
            };

            /*  下一页
             * */
            $scope.pageNext = function () {
                if ($scope.page < $scope.maxPage) {
                    $scope.page++;
                    resetPageOrder($scope.page);
                    $state.go("PageTab.Page3", {page: $scope.page})
                }
            };
            function resetPageOrder(num) {
                $scope.clickPage = num;
                if (num < 3) {
                    $scope.pageShowList = pageList.slice(0, 5);
                }
                else {
                    //在总页数尾部
                    if (num > $scope.maxPage - 3) {    //去除多出的页数
                        $scope.pageShowList = pageList.slice($scope.maxPage - 5, $scope.maxPage);
                    }
                    //之前两种情况的中间
                    else {
                        num = Number(num);
                        $scope.pageShowList = [
                            num - 2,
                            num - 1,
                            num,
                            num + 1,
                            num + 2
                        ];
                    }
                }
            }
        }
    }
});
//自定义分页
angular.module('myApp').directive('uploadPicture', function ($http) {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'html/picture.html',
        link: function (scope) {
            scope.nike = false;
            var vm = scope.vm = {
                value: 0
            };
            scope.loadPicture = function (source) {
                scope.fil = source.files;
                scope.file = source.files[0];
                vm.value = 0;
                var reader = new FileReader();
                reader.onloadend = function (e) {
                    scope.aaa = e.target.result;
                    scope.$apply();
                },
                    reader.readAsDataURL(scope.file);
            }
            scope.upload = function () {
                var formData = new FormData();
                formData.append("file", scope.file);
                $http({
                    method: 'POST',
                    url: '/carrots-admin-ajax/a/u/img/task',
                    data: formData,
                    headers: {
                        'Content-Type': undefined  //angularjs设置文件上传的content-type修改方式
                    },
                    uploadEventHandlers: {
                        progress: function (e) {
                            vm.value = (e.loaded / e.total) * 100;
                            vm.style = 'progress-bar-info';
                            vm.showLabel = true;
                            vm.striped = true;
                            vm.wid = 100;
                        }
                    }
                }).then(function (response) {
                    scope.dz = response.data.data.url;
                    scope.nike = true
                })
            };
        }
    }
});
//自定义上传图片
angular.module('myApp').directive('editor', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'html/wangeditor.html',
        link: function (scope) {
            scope.editor = new wangEditor('editor')
            scope.editor.create()
        }
    }
})
//富文本编辑器
