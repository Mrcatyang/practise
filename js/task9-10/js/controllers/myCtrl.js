/**
 * Created by Mr.Yang on 2017/11/13.
 */
angular.module('myApp').controller('myCtrl', function ($scope) {
    $scope.kaiguan = true;
    $scope.kaiguan2 = true;
    $scope.a = function () {
        $scope.kaiguan = !$scope.kaiguan;
        if ($scope.kaiguan2 === $scope.kaiguan) {
            $scope.kaiguan2 = true;
        }
    };
    $scope.b = function () {
        $scope.kaiguan2 = !$scope.kaiguan2;
        if ($scope.kaiguan2 === $scope.kaiguan) {
            $scope.kaiguan = true;
        }
    };
});