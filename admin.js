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
    newFucai : 'update.php?type=5',
    deleteTicai : 'update.php?type=8',
    deleteFucai : 'update.php?type=7'
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
  $scope.edit = function(data,index) {
    $scope.dataT = data;
    $scope.bar.show('edit',data,index);
  }
  // 删除用户
  $scope.deleteT = {
    item: {},
    type: ''
  }
  $scope.delete = function(item,type,index){
    $scope.dataT = item;
    $scope.deleteT.item = item;
    $scope.deleteT.type = type;
    $scope.bar.show('delete',item,index);
  }
  $scope.deleteSend = function(type,item){
    var id = parseInt($scope.deleteT.item.id);
    if($scope.deleteT.type=='fucai'){
      $scope.sendData($scope.url.deleteFucai,id);
    }else if($scope.deleteT.type=='ticai'){
      $scope.sendData($scope.url.deleteTicai,id);
    }
    $scope.bar.hide();
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
    mode: 'edit',
    position: 0,
    show: function(mode,data,index){
      this.mode = mode;
      this.position = (index+1) * 48;
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
    $http.get(url+'&data='+JSON.stringify(data)).then($timeout(function(){
      $scope.refreshData()
    },500));
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
  // 更新设置
  $scope.updateSettings = function(type) {
    settingsT = {
      id: '',
      recommond: '',
      times: ''
    }
    if(type=="fucai"){
      settingsT.id = $scope.settingsFucai.id;
      settingsT.recommond = $scope.settingsFucai.recommond;
      settingsT.times = $scope.settingsFucai.times;
      $scope.sendData($scope.url.editSettingsFucai,settingsT);
    }
    if(type=="ticai"){
      settingsT.id = $scope.settingsTicai.id;
      settingsT.recommond = $scope.settingsTicai.recommond;
      settingsT.times = $scope.settingsTicai.times;
      $scope.sendData($scope.url.editSettingsTicai,settingsT);
    }
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
  $scope.confirm = {
    message : '',
    status : 'hide',
    data: '',
    item: '',
    content: '',
    show : function(message,type,item){
      this.message = message;
      this.type = type;
      this.item = item;
      this.parse();
      this.status = 'show';
    },
    hide : function(){
      this.status = 'hide';
    },
    parse : function(){
      var t = [];
      // for(i in this.item){
      //   t.push(this.item[i]);
      // }
      t.push("ID "+this.item.id);
      t.push("用户 "+this.item.username);
      this.content = t.join('，');
    }
  }
})
