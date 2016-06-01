var app = angular.module('caipiao-admin',[]);
app.controller('appCtrl', function($scope,$http,$timeout){

  $scope.url = {
    getFucai : 'data.php?type=1',
    getTicai : 'data.php?type=0',
    getSettingsFucai : 'data.php?type=2',
    getSettingsTicai : 'data.php?type=3',
    editFucai : 'update.php?type=1',
    editTicai : 'update.php?type=0',
    editSettingsFucai : 'update.php?type=2',
    editSettingsTicai : 'update.php?type=3',
    newTicai : 'update.php?type=4',
    newFucai : 'update.php?type=5'
  }
  // 获取数据
  $scope.refreshData = function(){
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
    $scope.toast.show('数据已更新');
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
  // dialogue
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

  // 提交数据
  $scope.sendData = function(url,data){
    delete data['$$hashKey'];
    console.log('地址：'+url+'，数据：'+JSON.stringify(data));
    $http.get(url+'&data='+JSON.stringify(data)).then($scope.refreshData());
  }
  // 完成编辑
  $scope.editComplete = function(url){
    $scope.bar.hide();
    $scope.sendData(url,$scope.dataT);
  }
  // 添加用户
  $scope.type = '';
  $scope.addUser = function(type){
    $scope.dialogue.toggle();
    $scope.type = type;
  }
  $scope.newUser = {
    username:'',
    passcode:'',
    Tell:'',
    info:'',
    Add:'',
    Time:''
  }
  // 发送新用户
  $scope.sendUser = function(type){
    if(type=='fucai'){
      $scope.sendData($scope.url.newTicai,$scope.newUser);
    }else if(type=='ticai'){
      $scope.sendData($scope.url.newFucai,$scope.newUser);
    }
    $scope.dialogue.toggle();
  }
  // 页面切换
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
  $scope.toast = {
    message : '提示信息',
    status : '',
    show : function(message){
      this.message = message;
      if(this.status=='show'){
        $timeout.flush(5000);
      }
      else{
        this.status = 'show';
        $timeout(function(){
          $scope.toast.status='';
        },5000);
      }
    }
  }
})
