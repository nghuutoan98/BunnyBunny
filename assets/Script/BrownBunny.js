// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var bun = require('Bunny');

cc.Class({
    extends: bun,
    properties: {

    },

    ctor() {
        this.objname = "Mega Loppunny"
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    rotate(dt) {
        this.node.angle += 180 * dt;
    },

    start() {

    },

    update(dt) {
        this._timer += dt;
        if (this._timer <= 1) {
            this.rotate(dt);
        } else if (this._timer <= 4) {
            
        } else {
            this.node.angle = 180 * Math.round(this.node.angle / 180);
            if(this.node.angle === 360) this.node.angle = 0;
            this._timer = 0;
        }
    },
});
