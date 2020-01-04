cc.Class({
    extends: cc.Component,

    properties: {
        ticks: null,
        maxtick: 0,
        map: {
            default: null,
            type: cc.Node,
        }
    },

    sendmsg: function(msg) {
        this.ws.send(msg);
    },

    // use this for initialization
    onLoad: function() {
        var map = this.node.getParent()
        this.ws = new WebSocket("ws://127.0.0.1:6080");
        this.ws.onopen = function(event) {
            console.log("Send Text WS was opened.");


        };
        this.ws.onmessage = function(event) {
            var reply = JSON.parse(event.data)

            if (reply.type == "login_reply") {
                map.getComponent("map").uid = reply.uid
            } else if (reply.type == "tick") {
                map.getComponent("map").ticklist[reply.tick] = reply
                map.getComponent("map").maxtick = reply.tick
            }

        };
        this.ws.onerror = function(event) {
            console.log("Send Text fired an error");
        };
        this.ws.onclose = function(event) {
            console.log("WebSocket instance closed.");
        };

    },
});