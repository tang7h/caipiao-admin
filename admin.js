var app = angular.module('caipiao-admin',[]);
app.controller('appCtrl', function($scope,$http){

  $scope.url = {
    getFucai : 'data.php?type=1',
    getTicai : 'data.php?type=0',
    getSettingsFucai : 'data.php?type=2',
    getSettingsTicai : 'data.php?type=3',
    editFucai : 'update.php?type=1',
    editTicai : 'update.php?type=0',
    editSettingsFucai : 'update.php?type=2',
    editSettingsTicai : 'update.php?type=3',
    newTicai : '',
    newFucai : ''
  }
  // 获取数据
  $scope.refreshData = function(){
    $http.get($scope.url.getFucai).then(function(response){
      $scope.fucaiUsers = response.data;
    })
    $http.get($scope.url.getTicai).then(function(response){
      $scope.ticaiUsers = response.data;
    })
    $http.get($scope.url.getSettings).then(function(response){
      $scope.settings = response.data;
    })
  }
  $http.get($scope.url.getFucai).then(function(response){
    $scope.fucaiUsers = response.data;
  })
  $http.get($scope.url.getTicai).then(function(response){
    $scope.ticaiUsers = response.data;
  })
  $http.get($scope.url.getSettingsFucai).then(function(response){
    $scope.settingsFucai = response.data[0];
  })
  $http.get($scope.url.getSettingsTicai).then(function(response){
    $scope.settingsTicai = response.data[0];
  })
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
  $scope.pages = [
    { name: '福彩', status: true },
    { name: '体彩', status: false },
    { name: '设置', status: false }
  ]
  $scope.turnPage = function(index){
    for(i in $scope.pages){
      $scope.pages[i].status = false;
    }
    $scope.pages[index].status = true;
  }
})
