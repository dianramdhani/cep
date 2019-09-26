(function () {
    'use strict';

    // Usage:
    // Daily Dropped Voice Calls view.

    window.app
        .component('dailyDroppedVoiceCalls', {
            template: require('./daily-dropped-voice-calls.html'),
            controller: _
        });

    _.$inject = ['$scope', '$sce'];
    function _($scope, $sce) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.dateFrom = '31-07-2019';
            $scope.dateTo = moment(new Date()).format('DD-MM-YYYY');
            $scope.setTime()
        };

        $scope.setTime = () => {
            let dateFrom = moment($scope.dateFrom, 'DD-MM-YYYY').toISOString(),
                dateTo = moment($scope.dateTo, 'DD-MM-YYYY').toISOString();
            $scope.link = $sce.trustAsResourceUrl(`http://elastic.tritronik.com:5601/app/kibana#/visualize/edit/6b380cc0-d92a-11e9-ba24-c1301fb6b218?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:'${dateFrom}',to:'${dateTo}'))&_a=(filters:!(),linked:!f,query:(language:kuery,query:'causeForTermination+%3E+0'),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(field:calls),schema:metric,type:sum),(enabled:!t,id:'2',params:(drop_partials:!f,extended_bounds:(),field:date,interval:auto,min_doc_count:1,timeRange:(from:'2015-12-20T17:00:00.000Z',to:'2016-12-19T17:00:00.000Z'),useNormalizedEsInterval:!t),schema:segment,type:date_histogram)),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!t,show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),dimensions:(x:(accessor:0,aggType:date_histogram,format:(id:date,params:(pattern:YYYY-MM-DD)),params:(bounds:(max:'2016-12-19T17:00:00.000Z',min:'2015-12-20T17:00:00.000Z'),date:!t,format:YYYY-MM-DD,interval:P7D)),y:!((accessor:1,aggType:sum,format:(id:number),params:()))),grid:(categoryLines:!f),labels:(show:!f),legendPosition:right,seriesParams:!((data:(id:'1',label:'Sum+of+calls'),drawLinesBetweenPoints:!t,mode:stacked,show:true,showCircles:!t,type:line,valueAxis:ValueAxis-1)),times:!(),type:histogram,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:'Sum+of+calls'),type:value))),title:'Daily+Dropped+Voice+Calls',type:histogram))`);
        };
    }
})();