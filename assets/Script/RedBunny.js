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
        oriSkewX: cc.Float,
        oriSkewY: cc.Float,
        _x: cc.Float,
        x: {
            get: function() {
                return this._x
            },
            set: function (value) {
                this._x = value;
                this.node.x = this._x
            }
        },
        _y: cc.Float,
        y: {
            get: function() {
                return this._y
            },
            set: function (value) {
                this._y = value;
                this.node.y = this._y
            }
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.oriSkewX = 0;
        this.oriSkewY = 0;
    },

    shake(dt) {
        if (this.count < 30) {
            this.node.skewX += 45 * dt
        } else if (this.count < 60) {
            this.node.skewX -= 2 * 45 * dt
        } else if (this.count < 90) {
            this.node.skewX += 45 * dt;
        } else if (this.count < 150) {

        } else this.count = 0;
        this.count++;
    },

    start() {

    },

    update(dt) {
        this.shake(dt);
    },
});
