"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var questTools = require("../../quest-tools");
var QuestMCT1_1 = require("../../QuestMCT1");
var Locations = require("./locs");
var Location = Java.type('org.bukkit.Location');
var Material = Java.type('org.bukkit.Material');
var QuestMCT1Magmarun = /** @class */ (function (_super) {
    __extends(QuestMCT1Magmarun, _super);
    function QuestMCT1Magmarun(conf) {
        var _this = _super.call(this, conf) || this;
        _this.activeRuns = [];
        _this.Locs = Locations.getLocations(_this.world);
        return _this;
    }
    QuestMCT1Magmarun.prototype.start = function () {
        var _this = this;
        _super.prototype.start.call(this);
        this.registerEvents();
        [1, 2, 3, 4, 5].forEach(function (i) {
            var key = "run" + i;
            _this.world.registerRegion(key, _this.Locs.waypoints[key].region[0], _this.Locs.waypoints[key].region[1]);
            _this.world.registerPlayerEnterRegionEvent(key, function (event) {
                _this.activeRuns.push(i);
                _this.log('this.activeRuns', _this.activeRuns);
            });
            _this.world.registerPlayerExitRegionEvent(key, function (event) {
                _this.activeRuns = _this.activeRuns.filter(function (j) { return j !== i; });
                _this.log('this.activeRuns', _this.activeRuns);
            });
        });
        var interval;
        interval = 170;
        this.setInterval(function () {
            _this.activeRuns.forEach(function (key) {
                if (key != '1' && key != '2' && key != '3') {
                    return;
                }
                var dispenseType = 'ARROW';
                _this.activateRun(_this.Locs.locations["run" + key], dispenseType, interval);
            });
        }, 35 * interval);
        interval = 170;
        this.setInterval(function () {
            _this.activeRuns.forEach(function (key) {
                if (key != '4' && key != '5') {
                    return;
                }
                var dispenseType = 'LEGACY_FIREBALL';
                _this.activateRun(_this.Locs.locations["run" + key], dispenseType, interval);
            });
        }, 35 * interval);
    };
    QuestMCT1Magmarun.prototype.activateRun = function (rows, dispenseType, interval) {
        var _this = this;
        var index = 0;
        rows.forEach(function (row, i) {
            index = i;
            setTimeout(function () {
                row.forEach(function (loc, j) {
                    if (loc.block.type == 'DISPENSER') {
                        questTools.shootDispenser(loc.block, dispenseType);
                    }
                    // clean-up
                    setTimeout(function () {
                        var targetLoc = new Location(loc.world, loc.x, loc.y - 11, loc.z);
                        if (dispenseType == 'LEGACY_FIREBALL') {
                            if (j % 4 === 0) {
                                _this.getBlocksInRadius(targetLoc, 5, [
                                    'FIRE',
                                ]).forEach(function (block) {
                                    block.setType(Material.AIR);
                                });
                            }
                        }
                        if (dispenseType == 'ARROW') {
                            if (j % 4 === 0) {
                                _this.Locs.world
                                    .getNearbyEntities(targetLoc, 5, 10, 5)
                                    .forEach(function (e) {
                                    if (e.type == 'ARROW') {
                                        e.remove();
                                    }
                                });
                            }
                        }
                    }, interval * 25);
                });
            }, i * interval);
        });
    };
    QuestMCT1Magmarun.prototype.registerEvents = function () {
        var _this = this;
        _super.prototype.registerEvents.call(this);
        // playerPickupItem
        this.registerEvent('playerPickupItem', function (event) {
            if (event.player.name != _this.player.name) {
                return;
            }
            if (event.player.world.name != _this.world.getName()) {
                return;
            }
            // Cancel arrow pickup event.
            if (event.item.itemStack.type == 'ARROW') {
                event.setCancelled(true);
            }
        });
    };
    QuestMCT1Magmarun.prototype.getBlocksInRadius = function (loc, radius, filterTypes) {
        if (radius === void 0) { radius = 2; }
        var blocks = [];
        for (var x = -radius; x <= radius; x++) {
            for (var y = -radius; y <= radius; y++) {
                for (var z = -radius; z <= radius; z++) {
                    var block = loc.block.getRelative(x, y, z);
                    if (filterTypes) {
                        if (filterTypes.includes(block.type.toString())) {
                            blocks.push(block);
                        }
                    }
                    else {
                        blocks.push(block);
                    }
                }
            }
        }
        return blocks;
    };
    return QuestMCT1Magmarun;
}(QuestMCT1_1.QuestMCT1));
exports.default = QuestMCT1Magmarun;
