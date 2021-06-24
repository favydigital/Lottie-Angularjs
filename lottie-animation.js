'use strict';

angular.module('lottie', []).directive('lottie', ['$window', function($window){
    return {
        restrict : 'E',
        replace : true,
        template: '<div></div>',
        scope : {
            options : '=',
            width : '=',
            height : '=',
            animCreated : '&'
        },
        link: function(scope, ele, attrs){
            // unwrap the function
            console.log(scope.options)

            var anim = lottie.loadAnimation(scope.options)
            scope.animCreated = anim

            angular.element($window).bind('resize', function () {
                console.log('window resize')
            })  
            scope.$watch(function(){
                return {
                    'width' : ele[0].offsetWidth,
                    'height' : ele[0].offsetHeight,
                }
            }, function(newVal, oldVal){
                if (angular.equals(newVal, oldVal)) 
                    return
                console.log(newVal)
            }, true)

            // feature functions

            
            
        }
    }
}])