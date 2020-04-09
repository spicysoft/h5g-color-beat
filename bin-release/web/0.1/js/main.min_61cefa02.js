function randInt(){return globalRandom["int"]()}function rand01(){return globalRandom.f01()}function randF(t,e){return globalRandom.f(t,e)}function randI(t,e){return globalRandom.i(t,e)}function randBool(t){return void 0===t&&(t=.5),globalRandom.bool(t)}var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(a,o){function r(t){try{l(n.next(t))}catch(e){o(e)}}function s(t){try{l(n["throw"](t))}catch(e){o(e)}}function l(t){t.done?a(t.value):new i(function(e){e(t.value)}).then(r,s)}l((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return n([t,e])}}function n(i){if(a)throw new TypeError("Generator is already executing.");for(;l;)try{if(a=1,o&&(r=o[2&i[0]?"return":i[0]?"throw":"next"])&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[0,r.value]),i[0]){case 0:case 1:r=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,o=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(r=l.trys,!(r=r.length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){l.label=i[1];break}if(6===i[0]&&l.label<r[1]){l.label=r[1],r=i;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(i);break}r[2]&&l.ops.pop(),l.trys.pop();continue}i=e.call(t,l)}catch(n){i=[6,n],o=0}finally{a=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var a,o,r,s,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},GameObject=function(){function t(){this.display=null,t.objects.push(this)}return Object.defineProperty(t.prototype,"X",{get:function(){return this.display.x},set:function(t){this.display.x=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"Y",{get:function(){return this.display.y},set:function(t){this.display.y=t},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this.deleteFlag=!0},t.prototype.onDestroy=function(){},t.initial=function(e){t.baseDisplay=e,t.gameDisplay=new egret.DisplayObjectContainer,t.baseDisplay.addChild(t.gameDisplay)},t.process=function(){t.objects.forEach(function(t){return t.update()}),t.objects=t.objects.filter(function(t){return t.deleteFlag&&t._delete(),!t.deleteFlag}),t.transit&&(t.dispose(),t.transit(),t.transit=null)},t.dispose=function(){t.objects=t.objects.filter(function(t){return t.destroy(),t._delete(),!1})},t.prototype._delete=function(){this.onDestroy(),this.display&&(this.display.parent.removeChild(this.display),this.display=null)},t.objects=[],t}();__reflect(GameObject.prototype,"GameObject");var TilePerW=.15,TileColor0=16728272,TileColor1=13648127,TileColor2=65424,Tile=function(t){function e(i,n){var a=t.call(this)||this;e.tiles.push(a),a.size=Util.w(TilePerW);var o=2.5;return a.radiusSqr=Math.pow(.5*a.size*o,2),a.color=e.colors[randI(0,e.colors.length)],a.setShape(i,n),a}return __extends(e,t),e.prototype.onDestroy=function(){var t=this;e.tiles=e.tiles.filter(function(e){return e!=t})},e.prototype.setShape=function(t,e){this.display=new egret.Shape,GameObject.gameDisplay.addChild(this.display);var i=this.display;i.x=t,i.y=e,i.graphics.lineStyle(10,this.color);var n=this.size*(2/3);i.graphics.drawRect(-.5*n,-.5*n,n,n),i.graphics.lineStyle(3,16777215),i.graphics.drawRect(-.5*n,-.5*n,n,n),i.rotation=45},e.prototype.update=function(){GameOver.I||(this.Y+=Game.I.speed,this.checkFall()&&this.destroy())},e.checkTouch=function(t,i){for(var n=null,a=Math.pow(1024,2),o=0;o<e.tiles.length;o++){var r=e.tiles[o],s=Math.pow(r.X-t,2)+Math.pow(r.Y-i,2);s<=r.radiusSqr&&a>s&&(a=s,n=r)}return n?(n.defeated(),!0):!1},e.prototype.checkFall=function(){return this.Y>=Util.height+this.size},e.prototype.defeated=function(){this.destroy(),SoundEffect.I.play(randI(0,6)),Score.I.addPoint(this.getPoint(this.Y));for(var t=0;4>t;t++){var e=20*randF(-1,1),i=20*randF(-1,1),n=this.size*randF(.2,1);new EffectFrame(this.X+e,this.Y+i,n,n,this.color,.7,.25,1/8,e,i)}},e.prototype.getPoint=function(t){var e=Math.abs(BaseLineY-t);return 32>=e?Beat.Perfect:64>=e?Beat.Great:Beat.Good},e.tiles=[],e.colors=[TileColor0,TileColor1,TileColor2],e}(GameObject);__reflect(Tile.prototype,"Tile");var TileLongLength=3,TileLong=function(t){function e(e,i){var n=t.call(this,e,i)||this;return n.length=TileLongLength,n.sizeH=n.size*n.length,n.Y+=.5*n.size,n.Y-=.5*n.sizeH,n.display.scaleX=.8,n.display.scaleY=n.length,n.display.rotation=0,n}return __extends(e,t),e.prototype.onDestroy=function(){var t=this;Tile.tiles=Tile.tiles.filter(function(e){return e!=t})},e.prototype.setShape=function(t,e){this.display=new egret.Shape,GameObject.gameDisplay.addChild(this.display);var i=this.display;i.x=t,i.y=e,i.graphics.lineStyle(10,this.color);var n=this.size;i.graphics.drawRect(-.5*n,-.5*n,n,n),i.graphics.lineStyle(3,16777215),i.graphics.drawRect(-.5*n,-.5*n,n,n),i.rotation=45},e.prototype.update=function(){if(!GameOver.I){if(this.display.anchorOffsetX*=.5,this.display.anchorOffsetY*=.5,this.checkTouching()){if(this.sizeH-=Game.I.speed,this.display.scaleY-=Game.I.speed/Util.h(TilePerW),this.Y-=Game.I.speed/2,this.sizeH<=Util.h(1.5*TilePerW))return void this.defeated();Game.I.counter%3==0&&(Score.I.addPoint(1),SoundEffect.I.play(randI(0,6)),this.display.anchorOffsetX=randF(-6,6),this.display.anchorOffsetY=randF(-5,5)),new Debris(this.X+randF(.5*-this.size,.5*this.size),this.Y+.5*this.sizeH)}this.Y+=Game.I.speed,this.checkFall()&&new GameOver}},e.prototype.checkTouching=function(){return Game.I.touch&&Math.pow(Game.I.tapX-this.X,2)<Math.pow(.6*this.size,2)&&Math.pow(Game.I.tapY-this.Y,2)<Math.pow(.6*this.sizeH,2)?!0:void 0},e}(Tile);__reflect(TileLong.prototype,"TileLong");var EffectFrame=function(t){function e(e,i,n,a,o,r,s,l,h,c){void 0===s&&(s=.25),void 0===l&&(l=1/8),void 0===h&&(h=0),void 0===c&&(c=0);var p=t.call(this)||this;return p.w=0,p.h=0,p.vx=0,p.vy=0,p.vr=.8,p.rate=0,p.delta=.05,p.dw=n,p.dh=a,p.wr=s,p.hr=l,p.c=o,p.maxA=r,p.vx=h,p.vy=c,p.vr*=randF(.8,1.2),p.delta*=randF(.8,1.2),p.setShape(e+h,i+c,p.w,p.h,o,p.maxA),p}return __extends(e,t),e.prototype.setShape=function(t,e,i,n,a,o){var r=this.display;null==this.display?(this.display=r=new egret.Shape,GameObject.gameDisplay.addChild(this.display)):r.graphics.clear(),r.x=t,r.y=e,r.graphics.lineStyle(10,a,o),r.graphics.beginFill(a,.5*o),r.graphics.drawRect(-.5*i,-.5*n,i,n),r.graphics.endFill()},e.prototype.update=function(){this.X+=this.vx,this.Y+=this.vy,this.vx*=this.vr,this.vy*=this.vr,this.rate+=this.delta,this.rate<.7?(this.w+=(this.dw-this.w)*this.wr,this.h+=(this.dh-this.h)*this.hr):(this.w+=(0-this.w)*this.hr,this.h+=(0-this.h)*this.wr);var t=this.maxA;return this.setShape(this.X,this.Y,this.w,this.h,this.c,t),this.rate>=1?void this.destroy():void 0},e}(GameObject);__reflect(EffectFrame.prototype,"EffectFrame");var LineColor=16728272,BaseLineY=716.8,BaseLine=function(t){function e(){var e=t.call(this)||this;return e.setShape(BaseLineY),e}return __extends(e,t),e.prototype.onDestroy=function(){},e.prototype.setShape=function(t){this.display=new egret.Shape,GameObject.gameDisplay.addChild(this.display);var e=this.display;e.graphics.lineStyle(10,TileColor0),e.graphics.lineTo(0,t),e.graphics.lineTo(Util.w(1),t),e.graphics.lineStyle(3,16777215),e.graphics.lineTo(0,t),e.graphics.lineTo(Util.w(1),t)},e.prototype.update=function(){},e}(GameObject);__reflect(BaseLine.prototype,"BaseLine");var SaveKeyBestScore="beattiles-bestScore",DefaultBestScore=50,BACK_COLOR=0,FONT_COLOR=16744672,FONT2_COLOR=15761663,GameSpeedLowPH=.005,GameSpeedTopPH=.01,Game=function(t){function e(){var i=t.call(this)||this;return i.counter=0,i.length=0,i.next=0,i.localTouchBegan=!1,i.press=!1,i.touch=!1,i.tapX=0,i.tapY=0,e.I=i,i.speedMax=i.speed=Util.h(GameSpeedLowPH),GameObject.gameDisplay.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(t){return i.touchBegin(t)},i),GameObject.gameDisplay.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,function(t){return i.touchMove(t)},i),GameObject.gameDisplay.stage.addEventListener(egret.TouchEvent.TOUCH_END,function(t){return i.touchEnd(t)},i),i}return __extends(e,t),e.prototype.onDestroy=function(){var t=this;e.I=null,GameObject.gameDisplay.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,function(e){return t.touchBegin(e)},this),GameObject.gameDisplay.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,function(e){return t.touchMove(e)},this),GameObject.gameDisplay.stage.removeEventListener(egret.TouchEvent.TOUCH_END,function(e){return t.touchEnd(e)},this)},e.prototype.touchBegin=function(t){Tile.checkTouch(t.localX,t.localY),this.localTouchBegan=this.press=this.touch=!0,this.tapX=t.localX,this.tapY=t.localY},e.prototype.touchMove=function(t){this.tapX=t.localX,this.tapY=t.localY},e.prototype.touchEnd=function(t){this.touch=!1},e.prototype.touchUpdate=function(){this.localTouchBegan?this.localTouchBegan=!1:this.press=!1},e.prototype.update=function(){if(null==GameOver.I){this.counter++,this.touchUpdate();var t=Util.clamp01(this.counter/7200),e=Util.h(Util.lerp(GameSpeedLowPH,GameSpeedTopPH,t));if(this.length+=this.speed,this.speed+=Util.clamp(e-this.speed,-e/20,e/20),this.next<=this.length){var i=Util.w(TilePerW),n=randI(0,4),a=Util.w(.5)+(n-1.5)*i,o=-.5*i;new Tile(a,o),this.next+=randI(1,5)*i}}},e}(GameObject);__reflect(Game.prototype,"Game");var ScenePlay=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.loadScene=function(){new ColorGround("cyan_png",1.5),new ColorGround("purple_png",1),new SoundEffect,new Game,new Score,new BaseLine},e.prototype.update=function(){},e}(GameObject);__reflect(ScenePlay.prototype,"ScenePlay");var SceneTitle=function(t){function e(){var e=t.call(this)||this;e.texts=[],e.startButton=null,e.settingsButton=null,e.texts[0]=Util.newTextField("カラービート",Util.width/9,FONT_COLOR,.5,.25,!0,!0),e.texts[1]=Util.newTextField("流れてくるカラーノートをタップ！",Util.width/20,FONT_COLOR,.5,.35,!0,!1);var i=Util.getSaveDataNumber(SaveKeyBestScore,DefaultBestScore);return e.texts[2]=Util.newTextField("BEST"+i,Util.width/14,FONT_COLOR,.5,.45,!0,!0),e.startButton=new Button("スタート",Util.width/16,BACK_COLOR,.5,.7,.7,.12,FONT_COLOR,1,!0,e.onTapStart),e.texts.forEach(function(t){t&&GameObject.baseDisplay.addChild(t)}),e}return __extends(e,t),e.loadScene=function(){new SoundEffect,new e},e.prototype.onDestroy=function(){this.texts.forEach(function(t){t&&t.parent.removeChild(t)}),this.texts=null},e.prototype.update=function(){},e.prototype.onTapStart=function(){GameObject.transit=ScenePlay.loadScene,SoundEffect.I.play(1)},e}(GameObject);__reflect(SceneTitle.prototype,"SceneTitle");var SoundEffect=function(t){function e(){var i=t.call(this)||this;return i.files=["se_m1.mp3","se_p0.mp3","se_p2.mp3","se_p4.mp3","se_p5.mp3","se_p10.mp3"],i.sounds=[],i.loaded=0,e.I=i,i.startLoad(),i}return __extends(e,t),e.prototype.startLoad=function(){for(var t=0;t<this.files.length;t++){this.sounds[t]=new egret.Sound;var e="resource/assets/"+this.files[t];this.sounds[t].addEventListener(egret.Event.COMPLETE,this.onLoadComplete,this),this.sounds[t].load(e)}},e.prototype.onLoadComplete=function(t){this.loaded++},e.prototype.play=function(t){if(!(this.loaded<this.sounds.length)){this.sounds[t].play(0,1)}},e.I=null,e}(egret.DisplayObjectContainer);__reflect(SoundEffect.prototype,"SoundEffect");var Main=function(t){function e(){var e=t.call(this)||this;return e.once(egret.Event.ADDED_TO_STAGE,e.addToStage,e),e}return __extends(e,t),e.prototype.addToStage=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),Util.initial(this),GameObject.initial(this.stage),Camera2D.initial(),SceneTitle.loadScene(),egret.startTick(this.tickLoop,this),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return e.sent(),[4,RES.loadGroup("preload",0)];case 2:return e.sent(),[3,4];case 3:return t=e.sent(),console.error(t),[3,4];case 4:return[2]}})})},e.prototype.tickLoop=function(t){return GameObject.process(),Camera2D.process(),!1},e}(eui.UILayer);__reflect(Main.prototype,"Main");var ColorGround=function(t){function e(e,i){void 0===i&&(i=1);var n=t.call(this)||this;return n.tweens=[],n.tex=Util.newBitmap(e,Util.w(rand01()),Util.h(.6*rand01()),700*i),GameObject.gameDisplay.addChild(n.tex),n.setMoveX(),n.setMoveY(),n.setAlpha(),n}return __extends(e,t),e.prototype.onDestroy=function(){this.tex&&this.tex.parent.removeChild(this.tex)},e.prototype.setMoveX=function(){var t=this;this.tweens[0]=egret.Tween.get(this.tex,{loop:!1}).to({x:Util.w(randF(.1,.9))},5e3).call(function(){t.setMoveX()})},e.prototype.setMoveY=function(){var t=this;this.tweens[1]=egret.Tween.get(this.tex,{loop:!1}).to({y:Util.h(randF(0,.6))},5e3).call(function(){t.setMoveY()})},e.prototype.setAlpha=function(){egret.Tween.get(this.tex,{loop:!0}).set({alpha:.2},0).to({alpha:.7},randF(1e3,9e3)).to({alpha:.2},randF(1e3,9e3))},e.prototype.update=function(){},e}(GameObject);__reflect(ColorGround.prototype,"ColorGround");var Button=function(t){function e(e,i,n,a,o,r,s,l,h,c,p){var u=t.call(this)||this;u.text=null,u.onTap=null,u.press=!1,u.touch=!1,u.x=0,u.y=0;var d=new egret.Shape;GameObject.baseDisplay.addChild(d),c?d.graphics.lineStyle(2,n):d.graphics.lineStyle(0),d.graphics.beginFill(l,h);var f=r*Util.width,y=s*Util.height;return d.graphics.drawRoundRect(-.5*f,-.5*y,f,y,.4*y),d.graphics.endFill(),d.touchEnabled=!0,d.x=a*Util.width,d.y=o*Util.height,u.display=d,e&&(u.text=Util.newTextField(e,i,n,a,o,!0,!1),GameObject.baseDisplay.addChild(u.text)),u.onTap=p,u.onTap&&u.display.addEventListener(egret.TouchEvent.TOUCH_TAP,u.onTap,u),u.display.addEventListener(egret.TouchEvent.TOUCH_BEGIN,u.touchBegin,u),u.display.addEventListener(egret.TouchEvent.TOUCH_MOVE,u.touchMove,u),u.display.addEventListener(egret.TouchEvent.TOUCH_END,u.touchEnd,u),u}return __extends(e,t),e.prototype.onDestroy=function(){this.onTap&&this.display.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this),GameObject.baseDisplay.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchBegin,this),GameObject.baseDisplay.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMove,this),GameObject.baseDisplay.removeEventListener(egret.TouchEvent.TOUCH_END,this.touchEnd,this),this.text&&GameObject.baseDisplay.removeChild(this.text)},e.prototype.update=function(){var t=this.touch?1.1:1;this.display.scaleX=this.display.scaleY=this.display.scaleX+.25*(t-this.display.scaleX),this.press=!1},e.prototype.touchBegin=function(t){this.x=t.stageX,this.y=t.stageY,this.press=!0,this.touch=!0},e.prototype.touchMove=function(t){this.x=t.stageX,this.y=t.stageY,this.touch=!0},e.prototype.touchEnd=function(t){this.touch=!1},e}(GameObject);__reflect(Button.prototype,"Button");var Camera2D=function(){function t(){}return t.initial=function(){t.x=0,t.y=0,t.localX=0,t.localY=0,t.scale=1,t.rotation=0},t.process=function(){GameObject.gameDisplay.anchorOffsetX=t.x,GameObject.gameDisplay.anchorOffsetY=t.y,GameObject.gameDisplay.x=this.localX,GameObject.gameDisplay.y=this.localY,GameObject.gameDisplay.scaleX=GameObject.gameDisplay.scaleY=t.scale,GameObject.gameDisplay.rotation=t.rotation},t}();__reflect(Camera2D.prototype,"Camera2D");var DebrisPerW=.1,DebrisPerH=.1,DebrisColor=0,DebrisVPerW=.06,DebrisVR=20,Debris=function(t){function e(e,i){var n=t.call(this)||this,a=Util.w(DebrisVPerW);return n.vx=randF(-a,+a),n.vy=randF(-a,+a),n.vr=randF(-DebrisVR,DebrisVR),n.setShape(e,i),n}return __extends(e,t),e.prototype.onDestroy=function(){},e.prototype.setShape=function(t,e){this.display=new egret.Shape,GameObject.gameDisplay.addChild(this.display);var i=this.display;i.x=t,i.y=e,i.graphics.beginFill(TileColor0);var n=Util.w(randF(DebrisPerW/4,DebrisPerW)),a=Util.h(randF(DebrisPerH/4,DebrisPerH));i.graphics.drawRect(-.5*n,-.5*a,n,a),i.graphics.endFill()},e.prototype.update=function(){this.vy+=Util.h(.001),this.X+=this.vx,this.Y+=this.vy,this.display.rotation+=this.vr,this.Y>Util.height&&this.destroy()},e}(GameObject);__reflect(Debris.prototype,"Debris");var InputField=function(t){function e(e,i,n,a,o,r,s,l,h,c){var p=t.call(this)||this;p.text=null,p.onChange=null;var u=new egret.Shape;GameObject.baseDisplay.addChild(u),u.graphics.beginFill(l,h);var d=r*Util.width,f=s*Util.height;return u.graphics.drawRoundRect(-.5*d,-.5*f,d,f,.4*f),u.graphics.endFill(),u.touchEnabled=!0,u.x=a*Util.width,u.y=o*Util.height,p.display=u,p.text=new egret.TextField,p.text.type=egret.TextFieldType.INPUT,p.text.maxChars=e,p.text.size=i,p.text.textColor=n,p.text.width=d,p.text.height=f,p.text.x=Util.width*a-.5*p.text.width+.5*i,p.text.y=Util.height*o-.5*i,GameObject.baseDisplay.addChild(p.text),p.onChange=c,p.onChange&&p.text.addEventListener(egret.Event.CHANGE,function(){return p.onChange(p.text.text)},p),p}return __extends(e,t),e.prototype.onDestroy=function(){GameObject.baseDisplay.removeChild(this.text)},e.prototype.update=function(){},e}(GameObject);__reflect(InputField.prototype,"InputField");var Random=function(){function t(e){void 0===e&&(e=Math.floor(Math.random()*t.max)),this.x=123456789,this.y=362436069,this.z=521288629,this.w=e}return t.prototype["int"]=function(){return this.next()&t.max},t.prototype.f01=function(){return this["int"]()/(t.max+1)},t.prototype.f=function(t,e){return t+this.f01()*(e-t)},t.prototype.i=function(t,e){return Math.floor(this.f(t,e))},t.prototype.bool=function(t){return void 0===t&&(t=.5),this.f01()<t},t.prototype.next=function(){var t;return t=this.x^this.x<<11,this.x=this.y,this.y=this.z,this.z=this.w,this.w=this.w^this.w>>>19^(t^t>>>8)},t.max=1073741823,t}();__reflect(Random.prototype,"Random");var globalRandom=new Random,Rect=function(t){function e(e,i,n,a,o,r,s){void 0===r&&(r=!1),void 0===s&&(s=!1);var l=t.call(this)||this,h=new egret.Shape;l.display=h;var c=r?GameObject.gameDisplay:GameObject.baseDisplay;return s?c.addChild(l.display):c.addChildAt(l.display,1),h.graphics.beginFill(o,1),h.graphics.drawRect(e,i,n,a),h.graphics.endFill(),l}return __extends(e,t),e.prototype.update=function(){},e}(GameObject);__reflect(Rect.prototype,"Rect");var Util=function(){function t(){}return t.w=function(e){return e*t.width},t.h=function(e){return e*t.height},t.initial=function(t){this.width=t.stage.stageWidth,this.height=t.stage.stageHeight},t["break"]=function(t,e){t&&console.log(e)},t.clamp=function(t,e,i){return e>t&&(t=e),t>i&&(t=i),t},t.clamp01=function(e){return t.clamp(e,0,1)},t.lerp=function(t,e,i){return t+(e-t)*i},t.deltaAngle=function(t){var e=(t+Math.PI)/(2*Math.PI);return e=65536*e&65535,e=e/65536*Math.PI*2-Math.PI},t.color=function(t,e,i){return 65536*Math.floor(255*t)+256*Math.floor(255*e)+Math.floor(255*i)},t.colorLerp=function(t,e,i){var n=1-i,a=((16711680&t)*n+(16711680&e)*i&16711680)+((65280&t)*n+(65280&e)*i&65280)+((255&t)*n+(255&e)*i&255);return a},t.newTextField=function(e,i,n,a,o,r,s){var l=new egret.TextField;return l.text=e,l.bold=r,l.size=i,l.textColor=n,s?(l.x=(t.width-l.width)*a,l.y=(t.height-l.height)*o):(l.x=t.width*a-.5*l.width,l.y=t.height*o-.5*l.height),l},t.newShadowText=function(t,e,i){void 0===i&&(i=1.5);var n=new egret.TextField;return n.text=t.text,n.bold=t.bold,n.size=t.size,n.textColor=e,n.x=t.x+i,n.y=t.y+i,n.alpha=.5,n},t.newBitmap=function(t,e,i,n){var a=new egret.Bitmap;return a.texture=RES.getRes(t),GameObject.baseDisplay.addChild(a),a.x=e,a.y=i,a.anchorOffsetX=.5*a.width,a.anchorOffsetY=.5*a.height,a.scaleX=a.scaleY=n,a},t.getSaveDataNumber=function(t,e){var i=egret.localStorage.getItem(t),n=e;return null!=i&&(n=parseInt(i)),n},t.setSaveDataNumber=function(t,e){egret.localStorage.setItem(t,""+e)},t.getSaveDataString=function(t,e){var i=egret.localStorage.getItem(t);return null==i&&(i=e),i},t.setSaveDataString=function(t,e){egret.localStorage.setItem(t,e)},t}();__reflect(Util.prototype,"Util");var GameOver=function(t){function e(){var i=t.call(this)||this;return i.texts=[],i.retryButton=null,i.step=0,i.fadeInFrame=64,e.I=i,Game.I.speed=0,i.texts[0]=Util.newTextField("SCORE : "+Score.I.point.toFixed(),Util.width/12,FONT2_COLOR,.5,.3,!0,!1),egret.Tween.get(i.texts[0],{loop:!1}).to({alpha:0},0).to({alpha:1},1e3),GameObject.baseDisplay.addChild(i.texts[0]),i}return __extends(e,t),e.prototype.onDestroy=function(){this.texts.forEach(function(t){GameObject.baseDisplay.removeChild(t)}),this.texts=null,e.I=null},e.prototype.update=function(){this.step++,this.step==this.fadeInFrame&&(this.retryButton=new Button("リトライ",Util.width/16,BACK_COLOR,.5,.55,.4,.1,FONT2_COLOR,1,!1,this.onTapRetry),Score.I.point>Score.I.bestScore&&(Util.setSaveDataNumber(SaveKeyBestScore,Score.I.point),this.texts[1]=Util.newTextField("NEW RECORD!",Util.width/13,FONT2_COLOR,.5,.4,!0,!1),egret.Tween.get(this.texts[1],{loop:!0}).to({alpha:0},500).to({alpha:1},500),GameObject.baseDisplay.addChild(this.texts[1])))},e.prototype.onTapRetry=function(){GameObject.transit=ScenePlay.loadScene},e.I=null,e}(GameObject);__reflect(GameOver.prototype,"GameOver");var Beat;!function(t){t[t.None=0]="None",t[t.Good=1]="Good",t[t.Great=2]="Great",t[t.Perfect=3]="Perfect"}(Beat||(Beat={}));var Score=function(t){function e(){var i=t.call(this)||this;return i.point=0,i.bestScore=0,i.text=null,i.textBeat=null,i.beatFrame=0,e.I=i,i.point=0,i.bestScore=Util.getSaveDataNumber(SaveKeyBestScore,DefaultBestScore),i.text=Util.newTextField("",Util.width/22,FONT2_COLOR,0,0,!0,!0),GameObject.baseDisplay.addChild(i.text),i.textBeat=Util.newTextField("",Util.width/18,FONT2_COLOR,.5,.9,!0,!0),GameObject.baseDisplay.addChild(i.textBeat),i}return __extends(e,t),e.prototype.onDestroy=function(){this.text.parent.removeChild(this.text),this.text=null,this.textBeat.parent.removeChild(this.textBeat),this.textBeat=null,e.I=null},e.prototype.update=function(){this.beatFrame>0&&(this.beatFrame--,this.beatFrame>6?(this.textBeat.scaleX+=.5*(1-this.textBeat.scaleX),this.textBeat.scaleY+=.5*(1-this.textBeat.scaleY)):(this.textBeat.scaleY*=.5,0==this.beatFrame&&(this.textBeat.text="",this.textBeat.scaleX=1,this.textBeat.scaleY=1)),this.textBeat.x=Util.w(.5)-this.textBeat.width/2,this.textBeat.y=Util.h(.9)-this.textBeat.height/2)},e.prototype.addPoint=function(t){switch(this.setPoint(this.point+t),t){case Beat.Good:this.textBeat.text="GOOD";break;case Beat.Great:this.textBeat.text="Great";break;case Beat.Perfect:this.textBeat.text="Perfet"}this.textBeat.scaleX=1.5,this.textBeat.scaleY=1.5,this.beatFrame=30},e.prototype.setPoint=function(t){var e=this.point.toFixed(),i=t.toFixed();this.point=t,e!=i&&(this.text.text=""+i)},e.I=null,e}(GameObject);__reflect(Score.prototype,"Score");