var app = angular.module('caipiao-admin',[]);
app.controller('appCtrl', function($scope,$http){
  // 测试数据
  $scope.fucaiUsers = [
    {
      id: 1,
      username: "53010845",
      passcode: "88745496",
      Tell: "15887228008",
      info: "康佳k55",
      Add: "昆明市盘龙区金州湾米兰宾馆",
      shijian: "2015年9月15日"
    },
    {
      id: 2,
      username: "53011693",
      passcode: "88011769",
      Tell: "15887228008",
      info: "康佳k55",
      Add: "昆明市官渡区子君村经济适用房",
      shijian: "2015年9月15日"
    },
    {
      id: 3,
      username: "53010613",
      passcode: "740809",
      Tell: "15887228008",
      info: "康佳k55",
      Add: "昆明市华龙人家1号门",
      shijian: "2015年9月15日"
    },
    {
      id: 4,
      username: "53010187",
      passcode: "10187",
      Tell: "15887228008",
      info: "康佳k55",
      Add: "昆明市盘龙区田园路101号",
      shijian: "2015年9月15日"
    },
    {
      id: 5,
      username: "53010499",
      passcode: "88361790",
      Tell: "15887228008",
      info: "康佳k55",
      Add: "昆明市斗南花卉老市场B区",
      shijian: "2015年9月15日"
    },
    {
      id: 6,
      username: "53010453",
      passcode: "888999",
      Tell: "15887228008",
      info: "康佳自行",
      Add: "昆明市官渡区宝海路2号附2号",
      shijian: "2015年9月16日"
    }
  ]
  $scope.settings = {
    next: 600,
    recommond: '1,2,3',
    times: 20,
    lianhao: '#84d1f4',
    liankai: '#b7dbf2',
    quandan: '#84d1f4',
    quanshuang: '#84d1f4',
    col_bg: '#FDFBE5,#F6F1E4'
  }
  $scope.url = {
    getFucai : '',
    getTicai : '',
    getSettings : '',
    editFucai : '',
    editTicai : '',
    editSettings : '',
    newTicai : '',
    newFucai : ''
  }
  // 获取数据
  $scope.refreshData = function(){
    // 福彩
    $http.get($scope.url.getFucai).then(function(data){
      $scope.fucaiUsers = data;
    })
    // 体彩
    $http.get($scope.url.getTicai).then(function(data){
      $scope.ticaiUsers = data;
    })
    // 配置
    $http.get($scope.url.getSettings).then(function(data){
      $scope.settings = data;
    })
  }

  $scope.dataT = {};//临时存储单条数据
  $scope.time = new Date();
  // 编辑用户数据
  $scope.edit = function(data) {
    $scope.dataT = data;
    $scope.bar.show();
  }
  // 添加用户
  $scope.dialogue = {
    status: 'hide',
    show: function(){
      this.status = 'show';
    },
    hide: function(){
      this.status = 'hide';
    },
    toggle: function(){
      if(this.status=='show'){
        this.hide();
      } else {
        this.show();
      }
    }
  }
  $scope.bar = {
    status: 'hide',
    show: function(){
      this.status = 'show';
    },
    hide: function(){
      this.status = 'hide';
    },
    toggle: function(){
      if(this.status=='show'){
        this.hide();
      } else {
        this.show();
      }
    }
  }

  // 提交编辑后的用户数据
  $scope.editComplete = function(url){
    $scope.bar.hide();
    $http.post(url,$scope.dataT).then($scope.refreshData());
  }
  // 提交配置数据
  $scope.sendData = function(url,data){
    $http.post(url,data).then($scope.refreshData());
  }
  // 添加用户
  $scope.type = '';
  $scope.addUser = function(type){
    $scope.dialogue.toggle();
    $scope.type = type;
  }
  $scope.sendUser = function(type){
    if(type=='fucai'){
      $scope.sendData($scope.url.fucaiUsers,$scope.newUser);
    }else if(type=='ticai'){
      $scope.sendData($scope.url.ticaiUsers,$scope.newUser);
    }
    $scope.dialogue.toggle();
  }
  $scope.pages = '';
  $scope.currentPage = 'fucai';
  $scope.turnPage = function(name){
    for(i in pages){
      i.status = 'hide';
    }
    pages[name].status = 'show';
  }
})
