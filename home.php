<!DOCTYPE html>
<html lang="zh" ng-app="caipiao-admin" ng-controller="appCtrl">
<head>
  <meta charset="UTF-8">
  <title>material table</title>
  <link rel="stylesheet" href="admin.css">
  <script src="angular.min.js"></script>
  <script src="admin.js"></script>
</head>
<body>
  <div class="stage">
    <div ng-show="pages[0].status" class="page table" id="page-fucai">
      <div class="row header">
        <h1>福彩用户</h1>
        <div class="tools">
          <svg class="icon" ng-click="addUser('fucai')" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          <input type="text" ng-model="search" placeholder="搜索">
        </div>
      </div>
      <div class="row">
        <div class="cell name id">ID</div>
        <div class="cell name username">用户名</div>
        <div class="cell name password">密码</div>
        <div class="cell name tel">电话</div>
        <div class="cell name device">电视型号</div>
        <div class="cell name addr">地址</div>
        <div class="cell name time">安装时间</div>
        <div class="cell edit"></div>
      </div>
      <!-- 编辑条 -->
      <div class="row data bar {{bar.status}}" style="top: {{dataT.id*48}}px">
        <div class="cell id"> {{dataT.id}} </div>
        <div class="cell username"> <input type="text" ng-model="dataT.username"> </div>
        <div class="cell password"> <input type="text" ng-model="dataT.passcode"> </div>
        <div class="cell tel"> <input type="text" ng-model="dataT.Tell"> </div>
        <div class="cell device"> <input type="text" ng-model="dataT.info"> </div>
        <div class="cell addr"> <input type="text" ng-model="dataT.Add"> </div>
        <div class="cell time"> <input type="date" ng-model="dataT.shijian"> </div>
        <div class="cell edit">
          <svg class="icon" ng-click="editComplete(url.editFucai)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
          <svg class="icon md-dark" ng-click="bar.hide()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </div>
      </div>
      <div class="row data" ng-repeat="i in fucaiUsers | filter:search">
        <div class="cell id" title="{{i.id}}"> {{i.id}} </div>
        <div class="cell username" title="{{i.username}}"> {{i.username}} </div>
        <div class="cell password" title="{{i.passcode}}"> {{i.passcode}} </div>
        <div class="cell tel" title="{{i.Tell}}"> {{i.Tell}} </div>
        <div class="cell device" title="{{i.info}}"> {{i.info}} </div>
        <div class="cell addr" title="{{i.Add}}"> {{i.Add}} </div>
        <div class="cell time" title="{{i.shijian}}"> {{i.shijian}} </div>
        <div class="cell edit">
          <svg ng-click="edit(i)" class="icon md-dark" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
        </div>
      </div>
    </div>

    <div ng-show="pages[1].status" class="page table" id="page-ticai">
      <div class="row header">
        <h1>体彩用户</h1>
        <div class="tools">
          <svg class="icon" ng-click="addUser('ticai')" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          <input type="text" ng-model="search" placeholder="搜索">
        </div>
      </div>
      <div class="row">
        <div class="cell name id">ID</div>
        <div class="cell name username">用户名</div>
        <div class="cell name password">密码</div>
        <div class="cell name tel">电话</div>
        <div class="cell name device">电视型号</div>
        <div class="cell name addr">地址</div>
        <div class="cell name time">安装时间</div>
        <div class="cell edit"></div>
      </div>
      <!-- 编辑条 -->
      <div class="row data bar {{bar.status}}" style="top: {{dataT.id*48}}px">
        <div class="cell id"> {{dataT.id}} </div>
        <div class="cell username"> <input type="text" ng-model="dataT.username"> </div>
        <div class="cell password"> <input type="text" ng-model="dataT.passcode"> </div>
        <div class="cell tel"> <input type="text" ng-model="dataT.Tell"> </div>
        <div class="cell device"> <input type="text" ng-model="dataT.info"> </div>
        <div class="cell addr"> <input type="text" ng-model="dataT.Add"> </div>
        <div class="cell time"> <input type="date" ng-model="dataT.shijian"> </div>
        <div class="cell edit">
          <svg class="icon" ng-click="editComplete(url.editTicai)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
          <svg class="icon md-dark" ng-click="bar.hide()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </div>
      </div>
      <div class="row data" ng-repeat="i in ticaiUsers | filter:search">
        <div class="cell id">{{i.id}}</div>
        <div class="cell username">{{i.username}}</div>
        <div class="cell password">{{i.passcode}}</div>
        <div class="cell tel">{{i.Tell}}</div>
        <div class="cell device">{{i.info}}</div>
        <div class="cell addr">{{i.Add}}</div>
        <div class="cell time">{{i.shijian}}</div>
        <div class="cell edit">
          <svg ng-click="edit(i)" class="icon md-dark" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
        </div>
      </div>
    </div>

    <!-- 设置 -->
    <div ng-show="pages[2].status" class="page setting" id="page-setting" spellcheck="false">
      <div class="group">
        <h1>福彩设置</h1>
        <div class="setting-item">
          <div class="item-name">开奖倒计时</div>
          <input type="number" ng-model="settingsFucai.next">
        </div>
        <div class="setting-item">
          <div class="item-name">推介号</div>
          <input type="text" ng-model="settingsFucai.recommond">
        </div>
        <div class="setting-item">
          <div class="item-name">倍数</div>
          <input type="number" ng-model="settingsFucai.times">
        </div>
        <div class="row footer">
          <input type="button" class="btn btn-primary" value="更新" ng-click="sendData(url.editSettings,settingsFucai)">
        </div>
      </div>

      <div class="group">
        <h1>福彩颜色</h1>
        <div class="setting-item">
          <div class="item-name">连号</div>
          <input type="text" ng-model="settingsFucai.lianhao">
          <div class="palette" style="background:{{settingsFucai.lianhao}}"></div>
        </div>
        <div class="setting-item">
          <div class="item-name">连开</div>
          <input type="text" ng-model="settingsFucai.liankai">
          <div class="palette" style="background:{{settingsFucai.liankai}}"></div>
        </div>
        <div class="setting-item">
          <div class="item-name">全单</div>
          <input type="text" ng-model="settingsFucai.quandan">
          <div class="palette" style="background:{{settingsFucai.quandan}}"></div>
        </div>
        <div class="setting-item">
          <div class="item-name">全双</div>
          <input type="text" ng-model="settingsFucai.quanshuang">
          <div class="palette" style="background:{{settingsFucai.quanshuang}}"></div>
        </div>
        <div class="setting-item">
          <div class="item-name">背景色</div>
          <input type="text" ng-model="settingsFucai.col_bg">
          <div class="palette" style="background:{{settingsFucai.col_bg}}"></div>
        </div>
        <div class="row footer">
          <input type="button" class="btn btn-primary" value="更新" ng-click="sendData(url.editSettingsFucai,settingsFucai)">
        </div>
      </div>
      <div class="group">
        <h1>体彩设置</h1>
        <div class="setting-item">
          <div class="item-name">开奖倒计时</div>
          <input type="number" ng-model="settingsTicai.next">
        </div>
        <div class="setting-item">
          <div class="item-name">推介号</div>
          <input type="text" ng-model="settingsTicai.recommond">
        </div>
        <div class="setting-item">
          <div class="item-name">倍数</div>
          <input type="number" ng-model="settingsTicai.times">
        </div>
        <div class="row footer">
          <input type="button" class="btn btn-primary" value="更新" ng-click="sendData(url.editSettings,settingsTicai)">
        </div>
      </div>

      <div class="group">
        <h1>体彩颜色</h1>
        <div class="setting-item">
          <div class="item-name">连号</div>
          <input type="text" ng-model="settingsTicai.lianhao">
          <div class="palette" style="background:{{settingsTicai.lianhao}}"></div>
        </div>
        <div class="setting-item">
          <div class="item-name">连开</div>
          <input type="text" ng-model="settingsTicai.liankai">
          <div class="palette" style="background:{{settingsTicai.liankai}}"></div>
        </div>
        <div class="setting-item">
          <div class="item-name">全单</div>
          <input type="text" ng-model="settingsTicai.quandan">
          <div class="palette" style="background:{{settingsTicai.quandan}}"></div>
        </div>
        <div class="setting-item">
          <div class="item-name">全双</div>
          <input type="text" ng-model="settingsTicai.quanshuang">
          <div class="palette" style="background:{{settingsTicai.quanshuang}}"></div>
        </div>
        <div class="setting-item">
          <div class="item-name">背景色</div>
          <input type="text" ng-model="settingsTicai.col_bg">
          <div class="palette" style="background:{{settingsTicai.col_bg}}"></div>
        </div>
        <div class="row footer">
          <input type="button" class="btn btn-primary" value="更新" ng-click="sendData(url.editSettingsTicai,settingsTicai)">
        </div>
      </div>
    </div>
  </div>

  <div class="dialogue {{dialogue.status}}">
    <div class="card">
      <div class="title">添加用户</div>
      <div class="content">
        <div class="input-area"><input type="text" ng-model="newUser.username" placeholder="用户名" autocomplete="off"><div class="line"></div></div>
        <div class="input-area"><input type="text" ng-model="newUser.passcode" placeholder="密码" autocomplete="off"><div class="line"></div></div>
        <div class="input-area"><input type="text" ng-model="newUser.Tell" placeholder="电话"><div class="line"></div></div>
        <div class="input-area"><input type="text" ng-model="newUser.info" placeholder="电视型号"><div class="line"></div></div>
        <div class="input-area"><input type="text" ng-model="newUser.Add" placeholder="地址"><div class="line"></div></div>
        <div class="input-area"><input type="date" ng-model="newUser.shijian" placeholder="安装时间" ng-model="time"><div class="line"></div></div>
      </div>
      <div class="action">
        <button class="btn" ng-click="dialogue.toggle()">取消</button>
        <button class="btn" ng-click="sendUser(type)">添加</button>
      </div>

    </div>
  </div>


<div class="side-nav">
  <div class="nav-item-group">
    <a ng-click="turnPage(0)" href="#" class="nav-item active">福彩</a>
    <a ng-click="turnPage(1)" href="#" class="nav-item">体彩</a>
  </div>
  <div class="nav-item-group">
    <a ng-click="turnPage(2)" href="#" class="nav-item">设置</a>
  </div>
</div>
</body>
</html>
