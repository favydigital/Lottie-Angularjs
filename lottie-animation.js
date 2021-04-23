'use strict';

angular.module('lottie-animation', []).directive('lottieAnimation', ['$window', function($window){
    return {
        restrict : 'E',
        replace : true,
        scope : {
            options : '@',
            width : '@',
            height : '@',
            animCreated : '&'
        },
        link: function(scope, element, attrs){
            // unwrap the function
            scope.animCreated = scope.animCreated()

            console.log(scope.options)
            console.log(scope.width)
            console.log(scope.height)

            angular.element($window).bind('resize', function () {
                console.log('window resize')
            })  

            
        }
    }
}])