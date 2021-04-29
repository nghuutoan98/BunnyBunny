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
        count: 0,
        originalX: cc.Float,
        originalY: cc.Float,
        originalScale: cc.Float,
    },

    ctor() {
        this.objname = 'Diggersby';
    },

    zoom(dt) {
        if (this.count <= 30) {
            //this.node.scaleX += 0.5 * this.originalX * dt * 2;
            //this.node.scaleY += 0.5 * this.originalY * dt * 2;
            this.node.scale += 0.5 * this.originalScale * dt * 2
        } else if (this.count <= 60) {
            // this.node.scaleX -= this.originalX * dt * 2;
            // this.node.scaleY -= this.originalY * dt * 2;
            this.node.scale -= 0.5 * this.originalScale * dt * 4
        } else if (this.count < 130) {

        } else { this.count = 0; this.node.scaleX = this.originalX; this.node.scaleY = this.originalY; }
        this.count++;
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.originalX = this.node.scaleX;
        this.originalY = this.node.scaleY;
        this.originalScale = this.node.scale;
    },

    start() {

    },

    update(dt) {
        this.zoom(dt);
    },
});
