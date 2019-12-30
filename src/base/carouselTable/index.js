import Event from "bcore/event";
import $ from "jquery";
import _ from "lodash";
import { gsap, Power0 } from "gsap";
import actual from "./jquery.actual";
actual($);
/* eslint-disable */
export default Event.extend(
  function(el, confing) {
    this.container = $(el);
    var defaultConfig = {
      width: this.container.width(),
      height: this.container.height(),
      'background-color': 'transparent',
      theme: {},
      global: {
        animation: {
          singleStop: !1,
        },
        ifRowHidden: !1,
        textAnimate: {
          ifRun: !1,
          animateDur: 2,
        },
        ifUpdateImd: !1,
      },
    };

    this.headerTemp = _.template(
      '<div class="line header" style="z-index:2; width: 100%; position: absolute; display: flex;align-items: center;background-color: <%= backgroundColor %>;height: <%= height %>px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;vertical-align: middle;color: <%= color %>;">\n      <% if (hasIndex) {%><div class="index-list" style="display: inline-block;vertical-align: middle;width: <%= idListWidth %>%;height: <%= height %>px;"></div><%}%>\n      <%= column %>\n    </div>'
    );
    this.rowTemp = _.template(
      '<div class="line row-content" style="height: <%= height %>px;text-overflow: ellipsis;overflow: hidden;vertical-align: middle; display: flex;align-items: center;background-color: <%= bgColor %>;">\n    <% if (hasIndex) {%>\n      <div class="index" style="display: inline-block;text-align: center;vertical-align: middle;width: <%= idListWidth %>%;color: <%= idListColor %>;font-size: <%= idListFontSize %>px;">\n        <div class="index-bg" style="background-color: <%= idListBgColor %>; font-weight: <%= fontWeight %>; width: <%= bgSize %>px;height: <%= bgSize %>px;line-height: <%= bgSize %>px;vertical-align: middle;margin: auto;border-radius: <%= radius %>px;text-align: center;">\n        </div>\n      </div>\n    <%}%>\n  </div>'
    );
    this.cellTemp = _.template(
      '<div class="<%=classname%>" style="width: <%= width %>%;display:inline-block;text-align: <%= textAlign %>;<% if (isBr) {%>word-break:break-all;<%}%><% if (!isBr) {%>white-space: nowrap;<%}%>overflow: hidden;vertical-align: middle;background-color: transparent;font-size: <%= fontSize %>px;color: <%= color %>;font-weight: <%= fontWeight %>;">\n\n      <%= content %>\n      <% if (!ifHeader) {%>\n        <div class="marquee-text" style="display: inline-block;">\n          <span style="display: inline-block;" class="marquee-text-span"></span><i class="whiteSpace" style="display:inline-block;width:<%= whiteWidth %>;"></i>\n          <% if (ifRun && !isBr) {%>\n            <span style="display: inline-block;" class="marquee-text-span"></span><i class="whiteSpace" style="display:inline-block;width:<%= whiteWidth %>;"></i>\n          <%}%>\n        </div>\n      <%}%>\n  </div>'
    );
    this._data = null;
    this.config = defaultConfig;
    this.apis = confing.apis;
    this.isInit = !0;
    this.startIndex = 0;
    this.textTimer = {};

    this.init(confing);
  },
  {
    init: function(config) {
      this.mergeConfig(config);
      this.initInteraction();
    },
    initInteraction: function() {
      // var self = this;
      // self.container.css('cursor', 'pointer');
      // self.container
      //   .off('mouseenter')
      //   .off('mouseleave')
      //   .on('mouseenter', function() {
      //     self.removeTimer();
      //   })
      //   .on('mouseleave', function() {
      //     self.restartLoop();
      //   });

      var a = this;
      a.container.css('cursor', 'pointer'),
        a.container
          .off('mouseenter')
          .off('mouseleave')
          .on('mouseenter', function() {
            a.removeTimer();
          })
          .on('mouseleave', function() {
            a.restartLoop();
          });
    },
    initPool: function() {
      this.dataPool = [];
    },
    setHeader: function(a, b) {
      for (
        var c, d = this, e = this.headerTemp, f = this.cellTemp, g = '', h = 0;
        h < a.length;
        h++
      )
        (c = a[h]),
          (g += f({
            width: c.width,
            height: b.height,
            content: c.displayName,
            textAlign: b.textStyle.textAlign,
            paddingLeft: b.textStyle.paddingLeft,
            whiteWidth: 0,
            classname: 'column column-title',
            isBr: b.isBr,
            ifRun: !1,
            ifHeader: !0,
            fontSize: b.textStyle.fontSize,
            color: b.textStyle.color,
            fontWeight: b.textStyle.fontWeight,
          }));
      (b.column = g),
        (b.color = b.textStyle.color),
        (b.fontSize = b.textStyle.fontSize),
        (b.fontWeight = b.textStyle.fontWeight);
      b.paddingLeft = b.textStyle.paddingLeft;
      var i = e(b);
      this.container.append(i);
      this.container.append('<div class="placeholder" style="height: ' + b.height + 'px"></div>');
    },
    setRowNodeStr: function(rowData) {
      this.rowStr = this.rowTemp(rowData);
    },
    appendRow: function(a, b) {
      for (
        var c,
          d = this,
          f = d.cellTemp,
          g = d.config.row.callbackId,
          h = d.config.row.backgroundColor2,
          k = 0;
        k < a;
        k++
      ) {
        c = $(d.rowStr);
        1 === k % 2 &&
          c.css({
            'background-color': h,
          });
        for (var i = '', l = 0; l < b.length; l++) {
          var j = b[l] || {},
            m = j;
          i += f({
            width: m.width,
            height: m.height,
            content: '',
            bgColor: m.backgroundColor,
            textAlign: m.textStyle.textAlign,
            whiteWidth: 0,
            classname: 'column cell-content',
            isBr: m.isBr,
            ifHeader: !1,
            ifRun: d.config.global.textAnimate.ifRun,
            fontSize: m.textStyle.fontSize,
            color: m.textStyle.color,
            fontWeight: m.textStyle.fontWeight,
          });
        }
        c.append(i);
        c.on('click', function() {
          var a = $(this).data('data');
          d.emit('row-clicked', a);
          d.config.eventConfig && d.config.eventConfig.callback(a);
          g && '' !== g && (d.emit('click-rank-dot', a[g]), d.emit('global_var', g, a[g]));
        });
        this.rowContainer && this.rowContainer.append(c);
      }
    },
    removeTimer: function() {
      // var a=this, b= 0 <arguments.length && void 0!==arguments[0]? arguments[0]:!0;
      // this.timer&&clearTimeout(this.timer)
      // this.mouseTimer&&clearTimeout(this.mouseTimer)
      // this.visibleTimer&&clearTimeout(this.visibleTimer)
      // this.timer=null
      // this.mouseTimer=null
      // this.visibleTimer=null
      // this.rowsTimer && (this.rowsTimer.seek(b?this.rowsTimer.endTime():0), this.rowsTimer.kill(), this.rowsTimer=null), _.map(this.textTimer, function(c, d) {
      //     c&&(c.seek(b?c.endTime():0), c.kill(), c=null)
      //     delete a.textTimer[d]
      // })
      var a = this,
        b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !0;
      this.timer && clearTimeout(this.timer);
      this.mouseTimer && clearTimeout(this.mouseTimer);
      this.visibleTimer && clearTimeout(this.visibleTimer);
      this.timer = null;
      this.mouseTimer = null;
      this.visibleTimer = null;
      this.rowsTimer &&
        (this.rowsTimer.seek(b ? this.rowsTimer.endTime() : 0),
        this.rowsTimer.kill(),
        (this.rowsTimer = null));
      _.map(this.textTimer, function(c, d) {
        c && (c.seek(b ? c.endTime() : 0), c.kill(), (c = null));
        delete a.textTimer[d];
      });
    },
    initRank: function() {
      var config = this.config;
      this.removeTimer();
      this.initPool();
      this.container.find('.row-content').off('click');
      this.container.empty();
      this.container.css({
        overflow: 'hidden',
        'background-color': config['background-color'],
      });
      var header = config.header,
        idList = config.idList,
        series = config.series;
      this.columnNameList = _.map(series, 'columnName');
      header.show
        ? ((header.hasIndex = idList.show),
          (header.idListWidth = idList.width),
          (header.height = config.height * (header.heightPercent / 100)),
          this.setHeader(series, header))
        : ((header.height = 0), this.container.find('.placeholder').css('height', 0));

      this.container.append(
        '<div class="rows-container" style="height: ' +
          (this.container.height() -
            (header.show ? config.height * (header.heightPercent / 100) : 0)) +
          'px;width:100%;overflow:hidden"></div>'
      );
      this.rowContainer = this.container.find('.rows-container');
      var rowCount = config.global.rowCount,
        rowConfig = {
          rowCount: rowCount,
          height: (config.height - header.height) / rowCount,
          hasIndex: idList.show,
          idListWidth: idList.width,
          idListRadius: idList.radius,
          idListBgColor: idList.backgroundColor,
          idListColor: idList.textStyle.color,
          idListFontSize: idList.textStyle.fontSize,
          bgColor: config.row.backgroundColor1,
          fontWeight: idList.textStyle.fontWeight,
        };
      rowConfig.bgSize =
        (Math.min(Math.floor((this.container.width() * idList.width) / 100), rowConfig.height) *
          rowConfig.idListRadius) /
          100 -
        4;
      rowConfig.radius = rowConfig.bgSize / 2;
      this.setRowNodeStr(rowConfig);
      rowCount = 'bottom' === this.config.global.animation.mode ? rowCount + 1 : 2 * rowCount;
      this.appendRow(rowCount, series, config.defaultCell);
    },
    updateData: function(data) {
      data && (this.dataPool = data);
    },
    getAnimationData: function(data, config) {
      var data = this.getData(
        data,
        config,
        'bottom' === this.config.global.animation.mode ? 1 : this.config.global.rowCount
      );
      return {
        data: data,
        index: data[0].index,
      };
    },
    getData: function(data, b, c) {
      var config = this.config,
        ret = [],
        g = _.max([data.length, c]);
      b > data.length - 1 &&
        ('bottom' === config.global.animation.mode && 0 < data.length ? (b %= g) : (b = 0));
      for (var h, j = 0; j < c; j++) {
        h = j + b;
        h > data.length - 1 &&
          ('bottom' === config.global.animation.mode
            ? data.length < c
              ? h >= g - 1 && (h -= g - 1)
              : (h -= data.length)
            : (h - (data.length - 1) + (data.length % (c / 2)) > c / 2 ||
                0 === data.length % (c / 2)) &&
              (h %= c / 2));
        var i = data[h];

        if (i && void 0 !== i) {
          var k = _.cloneDeep(i);
          k.index = h + 1;
          ret.push(k);
        } else {
          ret.push({
            index: h + 1,
          });
        }
      }
      return ret;
    },
    setStartIndex: function(data, startIndex, index) {
      startIndex += index;
      startIndex > _.max([data.length, this.config.global.rowCount]) - 1 && (startIndex = 0);
      this.startIndex = startIndex;
    },
    calTransform: function(mode, el) {
      var marqueeEl = el.find('.marquee-text-span');
      return 'left' === mode
        ? 0
        : 'center' === mode
        ? el.width() / 2 - marqueeEl.width() / 2
        : 'right' === mode
        ? el.width() - marqueeEl.width() - 1
        : 0;
    },
    fillCell: function(a) {
      var self = this,
        config = self.config,
        d = self.columnNameList || [],
        container = self.container,
        backgroundColor1 = config.row.backgroundColor1,
        backgroundColor2 = config.row.backgroundColor2,
        series = config.series;

      container.find('.row-content').each(function(f, j) {
        var k = a[f];
        if (k) {
          var l = k.index,
            m = $(j);
          if ((m.data('index', l - 1), 1 === Object.keys(k).length && config.global.ifRowHidden))
            return m.css('opacity', 0);

          m.css('opacity', 1);
          m.find('.cell-content').each(function(a) {
            var cellContent = $(this),
              f = d[a],
              dataType = series[a].dataType,
              h = '';

            h =
              'img' === dataType
                ? '<img src="' +
                  (k[f] || '') +
                  '" style="width:' +
                  series[a].widthPercent +
                  '%; height:100%;"/>'
                : k[f] || 0 === +k[f]
                ? k[f]
                : '-';

            var j = cellContent.find('.marquee-text'),
              l = j.find('.marquee-text-span');

            if (series[a].format) {
              l.html(series[a].format(series[a].columnName, h));
            } else {
              l.html(h);
            }
            var m = $(l[0]).width();

            cellContent.find('.whiteSpace').css({
              width: cellContent.actual('width') - m - 1,
            });
            'img' !== dataType &&
              j.css(
                'transform',
                'translateX(' +
                  self.calTransform(series[a].textStyle.textAlign, cellContent) +
                  'px)'
              );
          });
          m.css('background-color', 0 == l % 2 ? backgroundColor2 : backgroundColor1);
          m.data('data', k);
          m.find('.index-bg').html(l);
        }
      });
    },
    textLoop: function() {
      var self = this,
        config = self.config;
      this.container.find('.row-content').each(function(conent, contentIndex) {
        $(contentIndex)
          .find('.cell-content')
          .each(function(item, index) {
            var marqueeText = $(index).find('.marquee-text');
            !config.series[item].isBr &&
              config.global.textAnimate.ifRun &&
              marqueeText.find('.marquee-text-span').width() > $(index).width() &&
              self.textRun(conent + 1 + '-' + item, marqueeText, item);
          });
      });
    },
    textRun: function(a, b, c) {
      var config = this.config,
        textAnimate = config.global.textAnimate,
        series = config.series,
        h = gsap.to(b[0], textAnimate.animateDur, {
          x: -b.outerWidth() / 2 + this.calTransform(series[c].textStyle.textAlign, b.parent()),
          ease: Power0.easeNone,
          repeat: -1,
          startAt: {
            x: 0,
          },
        });
      this.textTimer[a] = h;
      h = null;
    },
    animation: function() {
      var config = this.config,
        rowContent = _.map(this.container.find('.row-content')),
        height =
          'bottom' === config.global.animation.mode
            ? (config.height - config.header.height) / config.global.rowCount
            : config.height - config.header.height;

      this.rowsTimer = gsap.to(rowContent, 0.4, {
        y: -height,
        ease: Power0.easeNone,
        startAt: {
          y: 0,
        },
      });
    },
    loop: function() {
      // var config = this.config;
      // this.removeTimer();
      // var dataPool = this.dataPool;
      // if (dataPool) {
      //   var index,
      //     startIndex = this.startIndex,
      //     rowCount = config.global.rowCount,
      //     mode = config.global.animation.mode;
      //   if (
      //     ('bottom' === mode ? ((index = 1), ++rowCount) : ((index = rowCount), (rowCount *= 2)),
      //     !this.isInit)
      //   ) {
      //     var data = this.getData(dataPool, this.startIndex, rowCount);
      //
      //     this.fillCell(data);
      //     this.animation();
      //     this.setStartIndex(dataPool, startIndex, index);
      //     this.emit('data-flipped', this.getAnimationData(dataPool, this.startIndex));
      //   }
      //   this.textLoop();
      //   this.timer = setTimeout(this.loop.bind(this), 1e3 * config.global.animation.duration);
      // }

      var a = this.config;
      this.removeTimer();
      var b = this.dataPool;
      if (b) {
        var c,
          d = this.startIndex,
          e = a.global.rowCount,
          f = a.global.animation.mode;
        if (('bottom' === f ? ((c = 1), ++e) : ((c = e), (e *= 2)), !this.isInit)) {
          var g = this.getData(b, this.startIndex, e);
          this.fillCell(g),
            this.animation(),
            this.setStartIndex(b, d, c),
            this.emit('data-flipped', this.getAnimationData(b, this.startIndex));
        }
        this.textLoop(),
          (this.timer = setTimeout(this.loop.bind(this), 1e3 * a.global.animation.duration));
      }
    },
    render: function(a, b) {
      // var self = this,
      //   config = this.mergeConfig(config);
      //
      // if (
      //   ((data = this.data(data)),
      //   this.container.css({
      //     fontFamily: '"' + config.global.fontFamily + '"',
      //     transform: 'translateZ(0px)',
      //   }),
      //   this.container.find('.header').css({
      //     fontFamily: '"' + config.header.textStyle.fontFamily + '"',
      //   }),
      //   data)
      // )
      //   if (
      //     (this.updateData(data),
      //     !config.global.isLoop ||
      //       (config.global.animation.singleStop && data.length <= config.global.rowCount))
      //   ) {
      //     this.removeTimer(!1);
      //     this.isInit = !0;
      //     var dataPool = this.dataPool;
      //
      //     if (dataPool) {
      //       var startIndex = 0,
      //         rowCount = config.global.rowCount,
      //         mode = config.global.animation.mode;
      //
      //       rowCount = 'bottom' === mode ? rowCount + 1 : 2 * rowCount;
      //
      //       var data = this.getData(dataPool, startIndex, rowCount);
      //
      //       this.fillCell(data);
      //     }
      //     setTimeout(function() {
      //       self.container.find('.row-content:first').height()
      //         ? (self.fillCell(self.getData(dataPool, 0, rowCount)),
      //           self.emit('data-flipped', self.getAnimationData(dataPool, 0)))
      //         : console.log('carousel-table first row height = 0'),
      //         self.textLoop();
      //     }, 400);
      //   } else {
      //     if (this.isInit) {
      //       this.removeTimer();
      //       var dataPool = this.dataPool;
      //       if (dataPool) {
      //         var startIndex = this.startIndex,
      //           rowCount = config.global.rowCount,
      //           mode = config.global.animation.mode;
      //
      //         rowCount = 'bottom' === mode ? rowCount + 1 : 2 * rowCount;
      //         var cell = this.getData(dataPool, startIndex, rowCount);
      //         this.fillCell(cell);
      //       }
      //       this.emit('data-flipped', this.getAnimationData(dataPool, startIndex));
      //       this.loop();
      //       this.isInit = !1;
      //     }
      //     this.visibleEventAdd ||
      //       document.addEventListener('visibilitychange', function() {
      //         clearTimeout(self.visibleTimer);
      //         var visibilityState = document.visibilityState;
      //         'visible' === visibilityState
      //           ? self.restartLoop()
      //           : 'hidden' === visibilityState &&
      //             (clearTimeout(self.visibleTimer), self.removeTimer());
      //       }),
      //       (this.visibleEventAdd = !0);
      //   }

      var c = this,
        d = this,
        e = this.mergeConfig(b);
      if (
        ((a = this.data(a)),
        this.container.css({
          fontFamily: '"' + e.global.fontFamily + '"',
          transform: 'translateZ(0px)',
        }),
        this.container.find('.header').css({
          fontFamily: '"' + e.header.textStyle.fontFamily + '"',
        }),
        a)
      )
        if (
          (this.updateData(a),
          !e.global.isLoop || (e.global.animation.singleStop && a.length <= e.global.rowCount))
        ) {
          this.removeTimer(!1), (this.isInit = !0);
          var f = this.dataPool;
          if (f) {
            var g = 0,
              h = e.global.rowCount,
              i = e.global.animation.mode;
            h = 'bottom' === i ? h + 1 : 2 * h;
            var a = this.getData(f, g, h);
            this.fillCell(a);
          }
          setTimeout(function() {
            c.container.find('.row-content:first').height()
              ? (c.fillCell(c.getData(f, 0, h)), c.emit('data-flipped', c.getAnimationData(f, 0)))
              : console.log('carousel-table first row height = 0'),
              c.textLoop();
          }, 400);
        } else {
          if (this.isInit) {
            this.removeTimer();
            var f = this.dataPool;
            if (f) {
              var g = this.startIndex,
                h = e.global.rowCount,
                i = e.global.animation.mode;
              h = 'bottom' === i ? h + 1 : 2 * h;
              var a = this.getData(f, g, h);
              this.fillCell(a);
            }
            this.emit('data-flipped', this.getAnimationData(f, g)), this.loop(), (this.isInit = !1);
          }
          this.visibleEventAdd ||
            document.addEventListener('visibilitychange', function() {
              clearTimeout(d.visibleTimer);
              var a = document.visibilityState;
              'visible' === a
                ? c.restartLoop()
                : 'hidden' === a && (clearTimeout(d.visibleTimer), c.removeTimer());
            }),
            (this.visibleEventAdd = !0);
        }
    },
    restartLoop: function() {
      var config = this.config;
      config.global.isLoop &&
        (!config.global.animation.singleStop ||
          (this._data && this._data.length && this._data.length > config.global.rowCount)) &&
        (this.mouseTimer = setTimeout(
          this.loop.bind(this),
          1e3 * config.global.animation.duration
        )),
        config.global.textAnimate.ifRun && this.textLoop();
    },
    resize: function(width, height) {
      this.render(null, {
        width: width,
        height: height,
      });
    },
    data: function(data) {
      return (
        data &&
          (this.config.global.ifUpdateImd &&
            this._data &&
            !_.isEqual(this._data, a) &&
            ((this.isInit = !0), (this.startIndex = 0), this.initRank()),
          (this._data = data)),
        this._data
      );
    },
    mergeConfig: function(config) {
      if (!config) return this.config;

      var defaultConfig = this.config,
        cloneConfig = _.cloneDeep(config),
        deepConfig = _.defaultsDeep(config || {}, defaultConfig);

      return (
        (deepConfig.series = cloneConfig.series || defaultConfig.series),
        _.isEqual(defaultConfig, deepConfig) ||
          ((this.config = deepConfig), (this.isInit = !0), (this.startIndex = 0), this.initRank()),
        this.config
      );
    },
    destroy: function() {
      this.removeTimer();
      this.rowsTimer &&
        (this.rowsTimer.seek(this.rowsTimer.endTime()),
        this.rowsTimer.kill(),
        (this.rowsTimer = null));
      this.container.find('.row-content').off();
      this.container.empty();
      this._data = null;
      this.off && this.off();
    },
    clearAnimate: function() {
      this.removeTimer();
    },
    startAnimate: function() {
      this.isInit = !0;
      this.restartLoop();
      this.isInit = !1;
    },
  }
);
