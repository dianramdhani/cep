(function () {
    'use strict';

    // Usage:
    // Daily MSISDN Voice Call Attempts view.

    window.app
        .component('dailyMsisdnVoiceAttempts', {
            template: require('./daily-msisdn-voice-attempts.html'),
            controller: _,
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
            $scope.link = $sce.trustAsResourceUrl(`http://elastic.tritronik.com:5601/app/kibana#/visualize/edit/143e9e60-d92b-11e9-ba24-c1301fb6b218?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:'${dateFrom}',to:'${dateTo}'))&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(field:aPartyNumber.keyword),schema:metric,type:cardinality),(enabled:!t,id:'2',params:(drop_partials:!f,extended_bounds:(),field:date,interval:auto,min_doc_count:1,useNormalizedEsInterval:!t),schema:segment,type:date_histogram)),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!t,show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),dimensions:(x:!n,y:!((accessor:0,aggType:cardinality,format:(id:number),params:()))),grid:(categoryLines:!f),legendPosition:right,seriesParams:!((data:(id:'1',label:'Unique+count+of+aPartyNumber.keyword'),drawLinesBetweenPoints:!t,mode:normal,show:true,showCircles:!t,type:line,valueAxis:ValueAxis-1)),times:!(),type:line,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:'Unique+count+of+aPartyNumber.keyword'),type:value))),title:'Daily+MSISDN+voice+call+attempts',type:line))`);
        };
    }
})();