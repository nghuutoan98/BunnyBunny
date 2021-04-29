// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        objname: 'Azumaril',
        idle: cc.Integer,
        dir: -1,
        jumpHeight : 0,
        _timer: 0,
        maxHeight : 0,
        oriX: 0,
        oriY: 0,
    },

    ctor() {

    },

    talk(timer) {   //SAI
        var able = true;
        if (timer >= 1) able = false;
        if (able === true) {
            cc.log('I am ' + this.objname);
            able = false;
        }
    },

    onLoad() {
        this._maxHeight = this.node.y + this.jumpHeight;
        this.oriY = this.node.y;
    },

    jump(dt) {
        if (this.node.y >= this._maxHeight) {
            this.node.y = this._maxHeight;
            this.dir = 1;
        }
        if (this.node.y < this.oriY) {
            this.node.y = this.oriY;
            this.dir = -1;
        }
        this.node.y = this.node.y + this._maxHeight * dt * this.dir;
    },

    start() {

    },

    update(dt) {
        this.jump(dt);
    },
});
