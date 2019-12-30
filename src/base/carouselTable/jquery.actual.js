/* eslint-disable */
export default function(target) {
    return (
      (target.fn.addBack = target.fn.addBack || target.fn.addSelf),
      target.fn.extend({
        actual: function(a, b) {
          if (!this[a]) throw '$.actual => The jQuery method "' + a + '" you called does not exist';
          var l,
            h,
            self = target.extend(
              {
                absolute: !1,
                clone: !1,
                includeMargin: !1,
                display: 'block',
              },
              b
            ),
            i = this.eq(0);
  
          if (!0 === self.clone) {
            l = function() {
              i = i
                .clone()
                .attr('style', 'position: absolute !important; top: -1000 !important; ')
                .appendTo('body');
            };
            h = function() {
              i.remove();
            };
          } else {
            var e,
              c = [],
              g = '';
  
            l = function() {
              e = i
                .parents()
                .addBack()
                .filter(':hidden');
              g += 'visibility: hidden !important; display: ' + self.display + ' !important; ';
              !0 === self.absolute && (g += 'position: absolute !important; ');
              e.each(function() {
                var a = target(this),
                  b = a.attr('style');
                c.push(b);
                a.attr('style', b ? b + ';' + g : g);
              });
            };
            h = function() {
              e.each(function(a) {
                var b = target(this),
                  d = c[a];
                void 0 === d ? b.removeAttr('style') : b.attr('style', d);
              });
            };
          }
          l();
          var d = /(outer)/.test(a) ? i[a](self.includeMargin) : i[a]();
          return h(), d;
        },
      }),
      target
    );
  }
  