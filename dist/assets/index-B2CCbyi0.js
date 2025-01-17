(function () {
  const h = document.createElement('link').relList;
  if (h && h.supports && h.supports('modulepreload')) return;
  for (const E of document.querySelectorAll('link[rel="modulepreload"]')) C(E);
  new MutationObserver((E) => {
    for (const T of E)
      if (T.type === 'childList')
        for (const R of T.addedNodes)
          R.tagName === 'LINK' && R.rel === 'modulepreload' && C(R);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(E) {
    const T = {};
    return (
      E.integrity && (T.integrity = E.integrity),
      E.referrerPolicy && (T.referrerPolicy = E.referrerPolicy),
      E.crossOrigin === 'use-credentials'
        ? (T.credentials = 'include')
        : E.crossOrigin === 'anonymous'
          ? (T.credentials = 'omit')
          : (T.credentials = 'same-origin'),
      T
    );
  }
  function C(E) {
    if (E.ep) return;
    E.ep = !0;
    const T = a(E);
    fetch(E.href, T);
  }
})();
var Tu = { exports: {} },
  xr = {},
  Iu = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zs;
function Kf() {
  if (zs) return J;
  zs = 1;
  var v = Symbol.for('react.element'),
    h = Symbol.for('react.portal'),
    a = Symbol.for('react.fragment'),
    C = Symbol.for('react.strict_mode'),
    E = Symbol.for('react.profiler'),
    T = Symbol.for('react.provider'),
    R = Symbol.for('react.context'),
    N = Symbol.for('react.forward_ref'),
    P = Symbol.for('react.suspense'),
    Y = Symbol.for('react.memo'),
    B = Symbol.for('react.lazy'),
    G = Symbol.iterator;
  function X(f) {
    return f === null || typeof f != 'object'
      ? null
      : ((f = (G && f[G]) || f['@@iterator']),
        typeof f == 'function' ? f : null);
  }
  var Fe = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Re = Object.assign,
    se = {};
  function oe(f, g, Q) {
    (this.props = f),
      (this.context = g),
      (this.refs = se),
      (this.updater = Q || Fe);
  }
  (oe.prototype.isReactComponent = {}),
    (oe.prototype.setState = function (f, g) {
      if (typeof f != 'object' && typeof f != 'function' && f != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, f, g, 'setState');
    }),
    (oe.prototype.forceUpdate = function (f) {
      this.updater.enqueueForceUpdate(this, f, 'forceUpdate');
    });
  function $e() {}
  $e.prototype = oe.prototype;
  function Te(f, g, Q) {
    (this.props = f),
      (this.context = g),
      (this.refs = se),
      (this.updater = Q || Fe);
  }
  var Se = (Te.prototype = new $e());
  (Se.constructor = Te), Re(Se, oe.prototype), (Se.isPureReactComponent = !0);
  var me = Array.isArray,
    y = Object.prototype.hasOwnProperty,
    F = { current: null },
    M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function H(f, g, Q) {
    var K,
      b = {},
      te = null,
      de = null;
    if (g != null)
      for (K in (g.ref !== void 0 && (de = g.ref),
      g.key !== void 0 && (te = '' + g.key),
      g))
        y.call(g, K) && !M.hasOwnProperty(K) && (b[K] = g[K]);
    var fe = arguments.length - 2;
    if (fe === 1) b.children = Q;
    else if (1 < fe) {
      for (var he = Array(fe), je = 0; je < fe; je++)
        he[je] = arguments[je + 2];
      b.children = he;
    }
    if (f && f.defaultProps)
      for (K in ((fe = f.defaultProps), fe)) b[K] === void 0 && (b[K] = fe[K]);
    return {
      $$typeof: v,
      type: f,
      key: te,
      ref: de,
      props: b,
      _owner: F.current,
    };
  }
  function ne(f, g) {
    return {
      $$typeof: v,
      type: f.type,
      key: g,
      ref: f.ref,
      props: f.props,
      _owner: f._owner,
    };
  }
  function $(f) {
    return typeof f == 'object' && f !== null && f.$$typeof === v;
  }
  function ce(f) {
    var g = { '=': '=0', ':': '=2' };
    return (
      '$' +
      f.replace(/[=:]/g, function (Q) {
        return g[Q];
      })
    );
  }
  var ue = /\/+/g;
  function ee(f, g) {
    return typeof f == 'object' && f !== null && f.key != null
      ? ce('' + f.key)
      : g.toString(36);
  }
  function re(f, g, Q, K, b) {
    var te = typeof f;
    (te === 'undefined' || te === 'boolean') && (f = null);
    var de = !1;
    if (f === null) de = !0;
    else
      switch (te) {
        case 'string':
        case 'number':
          de = !0;
          break;
        case 'object':
          switch (f.$$typeof) {
            case v:
            case h:
              de = !0;
          }
      }
    if (de)
      return (
        (de = f),
        (b = b(de)),
        (f = K === '' ? '.' + ee(de, 0) : K),
        me(b)
          ? ((Q = ''),
            f != null && (Q = f.replace(ue, '$&/') + '/'),
            re(b, g, Q, '', function (je) {
              return je;
            }))
          : b != null &&
            ($(b) &&
              (b = ne(
                b,
                Q +
                  (!b.key || (de && de.key === b.key)
                    ? ''
                    : ('' + b.key).replace(ue, '$&/') + '/') +
                  f
              )),
            g.push(b)),
        1
      );
    if (((de = 0), (K = K === '' ? '.' : K + ':'), me(f)))
      for (var fe = 0; fe < f.length; fe++) {
        te = f[fe];
        var he = K + ee(te, fe);
        de += re(te, g, Q, he, b);
      }
    else if (((he = X(f)), typeof he == 'function'))
      for (f = he.call(f), fe = 0; !(te = f.next()).done; )
        (te = te.value), (he = K + ee(te, fe++)), (de += re(te, g, Q, he, b));
    else if (te === 'object')
      throw (
        ((g = String(f)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (g === '[object Object]'
              ? 'object with keys {' + Object.keys(f).join(', ') + '}'
              : g) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    return de;
  }
  function ie(f, g, Q) {
    if (f == null) return f;
    var K = [],
      b = 0;
    return (
      re(f, K, '', '', function (te) {
        return g.call(Q, te, b++);
      }),
      K
    );
  }
  function Z(f) {
    if (f._status === -1) {
      var g = f._result;
      (g = g()),
        g.then(
          function (Q) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 1), (f._result = Q));
          },
          function (Q) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 2), (f._result = Q));
          }
        ),
        f._status === -1 && ((f._status = 0), (f._result = g));
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var q = { current: null },
    _ = { transition: null },
    U = {
      ReactCurrentDispatcher: q,
      ReactCurrentBatchConfig: _,
      ReactCurrentOwner: F,
    };
  function I() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (J.Children = {
      map: ie,
      forEach: function (f, g, Q) {
        ie(
          f,
          function () {
            g.apply(this, arguments);
          },
          Q
        );
      },
      count: function (f) {
        var g = 0;
        return (
          ie(f, function () {
            g++;
          }),
          g
        );
      },
      toArray: function (f) {
        return (
          ie(f, function (g) {
            return g;
          }) || []
        );
      },
      only: function (f) {
        if (!$(f))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          );
        return f;
      },
    }),
    (J.Component = oe),
    (J.Fragment = a),
    (J.Profiler = E),
    (J.PureComponent = Te),
    (J.StrictMode = C),
    (J.Suspense = P),
    (J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U),
    (J.act = I),
    (J.cloneElement = function (f, g, Q) {
      if (f == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            f +
            '.'
        );
      var K = Re({}, f.props),
        b = f.key,
        te = f.ref,
        de = f._owner;
      if (g != null) {
        if (
          (g.ref !== void 0 && ((te = g.ref), (de = F.current)),
          g.key !== void 0 && (b = '' + g.key),
          f.type && f.type.defaultProps)
        )
          var fe = f.type.defaultProps;
        for (he in g)
          y.call(g, he) &&
            !M.hasOwnProperty(he) &&
            (K[he] = g[he] === void 0 && fe !== void 0 ? fe[he] : g[he]);
      }
      var he = arguments.length - 2;
      if (he === 1) K.children = Q;
      else if (1 < he) {
        fe = Array(he);
        for (var je = 0; je < he; je++) fe[je] = arguments[je + 2];
        K.children = fe;
      }
      return {
        $$typeof: v,
        type: f.type,
        key: b,
        ref: te,
        props: K,
        _owner: de,
      };
    }),
    (J.createContext = function (f) {
      return (
        (f = {
          $$typeof: R,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (f.Provider = { $$typeof: T, _context: f }),
        (f.Consumer = f)
      );
    }),
    (J.createElement = H),
    (J.createFactory = function (f) {
      var g = H.bind(null, f);
      return (g.type = f), g;
    }),
    (J.createRef = function () {
      return { current: null };
    }),
    (J.forwardRef = function (f) {
      return { $$typeof: N, render: f };
    }),
    (J.isValidElement = $),
    (J.lazy = function (f) {
      return { $$typeof: B, _payload: { _status: -1, _result: f }, _init: Z };
    }),
    (J.memo = function (f, g) {
      return { $$typeof: Y, type: f, compare: g === void 0 ? null : g };
    }),
    (J.startTransition = function (f) {
      var g = _.transition;
      _.transition = {};
      try {
        f();
      } finally {
        _.transition = g;
      }
    }),
    (J.unstable_act = I),
    (J.useCallback = function (f, g) {
      return q.current.useCallback(f, g);
    }),
    (J.useContext = function (f) {
      return q.current.useContext(f);
    }),
    (J.useDebugValue = function () {}),
    (J.useDeferredValue = function (f) {
      return q.current.useDeferredValue(f);
    }),
    (J.useEffect = function (f, g) {
      return q.current.useEffect(f, g);
    }),
    (J.useId = function () {
      return q.current.useId();
    }),
    (J.useImperativeHandle = function (f, g, Q) {
      return q.current.useImperativeHandle(f, g, Q);
    }),
    (J.useInsertionEffect = function (f, g) {
      return q.current.useInsertionEffect(f, g);
    }),
    (J.useLayoutEffect = function (f, g) {
      return q.current.useLayoutEffect(f, g);
    }),
    (J.useMemo = function (f, g) {
      return q.current.useMemo(f, g);
    }),
    (J.useReducer = function (f, g, Q) {
      return q.current.useReducer(f, g, Q);
    }),
    (J.useRef = function (f) {
      return q.current.useRef(f);
    }),
    (J.useState = function (f) {
      return q.current.useState(f);
    }),
    (J.useSyncExternalStore = function (f, g, Q) {
      return q.current.useSyncExternalStore(f, g, Q);
    }),
    (J.useTransition = function () {
      return q.current.useTransition();
    }),
    (J.version = '18.3.1'),
    J
  );
}
var Ns;
function Fu() {
  return Ns || ((Ns = 1), (Iu.exports = Kf())), Iu.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ls;
function Yf() {
  if (Ls) return xr;
  Ls = 1;
  var v = Fu(),
    h = Symbol.for('react.element'),
    a = Symbol.for('react.fragment'),
    C = Object.prototype.hasOwnProperty,
    E = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(N, P, Y) {
    var B,
      G = {},
      X = null,
      Fe = null;
    Y !== void 0 && (X = '' + Y),
      P.key !== void 0 && (X = '' + P.key),
      P.ref !== void 0 && (Fe = P.ref);
    for (B in P) C.call(P, B) && !T.hasOwnProperty(B) && (G[B] = P[B]);
    if (N && N.defaultProps)
      for (B in ((P = N.defaultProps), P)) G[B] === void 0 && (G[B] = P[B]);
    return {
      $$typeof: h,
      type: N,
      key: X,
      ref: Fe,
      props: G,
      _owner: E.current,
    };
  }
  return (xr.Fragment = a), (xr.jsx = R), (xr.jsxs = R), xr;
}
var Ms;
function Gf() {
  return Ms || ((Ms = 1), (Tu.exports = Yf())), Tu.exports;
}
var St = Gf(),
  jn = Fu(),
  Ml = {},
  Pu = { exports: {} },
  Ze = {},
  zu = { exports: {} },
  Nu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Os;
function Xf() {
  return (
    Os ||
      ((Os = 1),
      (function (v) {
        function h(_, U) {
          var I = _.length;
          _.push(U);
          e: for (; 0 < I; ) {
            var f = (I - 1) >>> 1,
              g = _[f];
            if (0 < E(g, U)) (_[f] = U), (_[I] = g), (I = f);
            else break e;
          }
        }
        function a(_) {
          return _.length === 0 ? null : _[0];
        }
        function C(_) {
          if (_.length === 0) return null;
          var U = _[0],
            I = _.pop();
          if (I !== U) {
            _[0] = I;
            e: for (var f = 0, g = _.length, Q = g >>> 1; f < Q; ) {
              var K = 2 * (f + 1) - 1,
                b = _[K],
                te = K + 1,
                de = _[te];
              if (0 > E(b, I))
                te < g && 0 > E(de, b)
                  ? ((_[f] = de), (_[te] = I), (f = te))
                  : ((_[f] = b), (_[K] = I), (f = K));
              else if (te < g && 0 > E(de, I))
                (_[f] = de), (_[te] = I), (f = te);
              else break e;
            }
          }
          return U;
        }
        function E(_, U) {
          var I = _.sortIndex - U.sortIndex;
          return I !== 0 ? I : _.id - U.id;
        }
        if (
          typeof performance == 'object' &&
          typeof performance.now == 'function'
        ) {
          var T = performance;
          v.unstable_now = function () {
            return T.now();
          };
        } else {
          var R = Date,
            N = R.now();
          v.unstable_now = function () {
            return R.now() - N;
          };
        }
        var P = [],
          Y = [],
          B = 1,
          G = null,
          X = 3,
          Fe = !1,
          Re = !1,
          se = !1,
          oe = typeof setTimeout == 'function' ? setTimeout : null,
          $e = typeof clearTimeout == 'function' ? clearTimeout : null,
          Te = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Se(_) {
          for (var U = a(Y); U !== null; ) {
            if (U.callback === null) C(Y);
            else if (U.startTime <= _)
              C(Y), (U.sortIndex = U.expirationTime), h(P, U);
            else break;
            U = a(Y);
          }
        }
        function me(_) {
          if (((se = !1), Se(_), !Re))
            if (a(P) !== null) (Re = !0), Z(y);
            else {
              var U = a(Y);
              U !== null && q(me, U.startTime - _);
            }
        }
        function y(_, U) {
          (Re = !1), se && ((se = !1), $e(H), (H = -1)), (Fe = !0);
          var I = X;
          try {
            for (
              Se(U), G = a(P);
              G !== null && (!(G.expirationTime > U) || (_ && !ce()));

            ) {
              var f = G.callback;
              if (typeof f == 'function') {
                (G.callback = null), (X = G.priorityLevel);
                var g = f(G.expirationTime <= U);
                (U = v.unstable_now()),
                  typeof g == 'function'
                    ? (G.callback = g)
                    : G === a(P) && C(P),
                  Se(U);
              } else C(P);
              G = a(P);
            }
            if (G !== null) var Q = !0;
            else {
              var K = a(Y);
              K !== null && q(me, K.startTime - U), (Q = !1);
            }
            return Q;
          } finally {
            (G = null), (X = I), (Fe = !1);
          }
        }
        var F = !1,
          M = null,
          H = -1,
          ne = 5,
          $ = -1;
        function ce() {
          return !(v.unstable_now() - $ < ne);
        }
        function ue() {
          if (M !== null) {
            var _ = v.unstable_now();
            $ = _;
            var U = !0;
            try {
              U = M(!0, _);
            } finally {
              U ? ee() : ((F = !1), (M = null));
            }
          } else F = !1;
        }
        var ee;
        if (typeof Te == 'function')
          ee = function () {
            Te(ue);
          };
        else if (typeof MessageChannel < 'u') {
          var re = new MessageChannel(),
            ie = re.port2;
          (re.port1.onmessage = ue),
            (ee = function () {
              ie.postMessage(null);
            });
        } else
          ee = function () {
            oe(ue, 0);
          };
        function Z(_) {
          (M = _), F || ((F = !0), ee());
        }
        function q(_, U) {
          H = oe(function () {
            _(v.unstable_now());
          }, U);
        }
        (v.unstable_IdlePriority = 5),
          (v.unstable_ImmediatePriority = 1),
          (v.unstable_LowPriority = 4),
          (v.unstable_NormalPriority = 3),
          (v.unstable_Profiling = null),
          (v.unstable_UserBlockingPriority = 2),
          (v.unstable_cancelCallback = function (_) {
            _.callback = null;
          }),
          (v.unstable_continueExecution = function () {
            Re || Fe || ((Re = !0), Z(y));
          }),
          (v.unstable_forceFrameRate = function (_) {
            0 > _ || 125 < _
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (ne = 0 < _ ? Math.floor(1e3 / _) : 5);
          }),
          (v.unstable_getCurrentPriorityLevel = function () {
            return X;
          }),
          (v.unstable_getFirstCallbackNode = function () {
            return a(P);
          }),
          (v.unstable_next = function (_) {
            switch (X) {
              case 1:
              case 2:
              case 3:
                var U = 3;
                break;
              default:
                U = X;
            }
            var I = X;
            X = U;
            try {
              return _();
            } finally {
              X = I;
            }
          }),
          (v.unstable_pauseExecution = function () {}),
          (v.unstable_requestPaint = function () {}),
          (v.unstable_runWithPriority = function (_, U) {
            switch (_) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                _ = 3;
            }
            var I = X;
            X = _;
            try {
              return U();
            } finally {
              X = I;
            }
          }),
          (v.unstable_scheduleCallback = function (_, U, I) {
            var f = v.unstable_now();
            switch (
              (typeof I == 'object' && I !== null
                ? ((I = I.delay),
                  (I = typeof I == 'number' && 0 < I ? f + I : f))
                : (I = f),
              _)
            ) {
              case 1:
                var g = -1;
                break;
              case 2:
                g = 250;
                break;
              case 5:
                g = 1073741823;
                break;
              case 4:
                g = 1e4;
                break;
              default:
                g = 5e3;
            }
            return (
              (g = I + g),
              (_ = {
                id: B++,
                callback: U,
                priorityLevel: _,
                startTime: I,
                expirationTime: g,
                sortIndex: -1,
              }),
              I > f
                ? ((_.sortIndex = I),
                  h(Y, _),
                  a(P) === null &&
                    _ === a(Y) &&
                    (se ? ($e(H), (H = -1)) : (se = !0), q(me, I - f)))
                : ((_.sortIndex = g), h(P, _), Re || Fe || ((Re = !0), Z(y))),
              _
            );
          }),
          (v.unstable_shouldYield = ce),
          (v.unstable_wrapCallback = function (_) {
            var U = X;
            return function () {
              var I = X;
              X = U;
              try {
                return _.apply(this, arguments);
              } finally {
                X = I;
              }
            };
          });
      })(Nu)),
    Nu
  );
}
var Ds;
function Zf() {
  return Ds || ((Ds = 1), (zu.exports = Xf())), zu.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fs;
function Jf() {
  if (Fs) return Ze;
  Fs = 1;
  var v = Fu(),
    h = Zf();
  function a(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var C = new Set(),
    E = {};
  function T(e, t) {
    R(e, t), R(e + 'Capture', t);
  }
  function R(e, t) {
    for (E[e] = t, e = 0; e < t.length; e++) C.add(t[e]);
  }
  var N = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    P = Object.prototype.hasOwnProperty,
    Y =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    B = {},
    G = {};
  function X(e) {
    return P.call(G, e)
      ? !0
      : P.call(B, e)
        ? !1
        : Y.test(e)
          ? (G[e] = !0)
          : ((B[e] = !0), !1);
  }
  function Fe(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function Re(e, t, n, r) {
    if (t === null || typeof t > 'u' || Fe(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function se(e, t, n, r, l, o, u) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = u);
  }
  var oe = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      oe[e] = new se(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      oe[t] = new se(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
      function (e) {
        oe[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }
    ),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (e) {
      oe[e] = new se(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        oe[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      oe[e] = new se(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      oe[e] = new se(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      oe[e] = new se(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      oe[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var $e = /[\-:]([a-z])/g;
  function Te(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace($e, Te);
      oe[t] = new se(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace($e, Te);
        oe[t] = new se(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace($e, Te);
      oe[t] = new se(
        t,
        1,
        !1,
        e,
        'http://www.w3.org/XML/1998/namespace',
        !1,
        !1
      );
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      oe[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (oe.xlinkHref = new se(
      'xlinkHref',
      1,
      !1,
      'xlink:href',
      'http://www.w3.org/1999/xlink',
      !0,
      !1
    )),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      oe[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function Se(e, t, n, r) {
    var l = oe.hasOwnProperty(t) ? oe[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== 'o' && t[0] !== 'O') ||
        (t[1] !== 'n' && t[1] !== 'N')) &&
      (Re(t, n, l, r) && (n = null),
      r || l === null
        ? X(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var me = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    y = Symbol.for('react.element'),
    F = Symbol.for('react.portal'),
    M = Symbol.for('react.fragment'),
    H = Symbol.for('react.strict_mode'),
    ne = Symbol.for('react.profiler'),
    $ = Symbol.for('react.provider'),
    ce = Symbol.for('react.context'),
    ue = Symbol.for('react.forward_ref'),
    ee = Symbol.for('react.suspense'),
    re = Symbol.for('react.suspense_list'),
    ie = Symbol.for('react.memo'),
    Z = Symbol.for('react.lazy'),
    q = Symbol.for('react.offscreen'),
    _ = Symbol.iterator;
  function U(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (_ && e[_]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var I = Object.assign,
    f;
  function g(e) {
    if (f === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        f = (t && t[1]) || '';
      }
    return (
      `
` +
      f +
      e
    );
  }
  var Q = !1;
  function K(e, t) {
    if (!e || Q) return '';
    Q = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (m) {
            var r = m;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (m) {
            r = m;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (m) {
          r = m;
        }
        e();
      }
    } catch (m) {
      if (m && r && typeof m.stack == 'string') {
        for (
          var l = m.stack.split(`
`),
            o = r.stack.split(`
`),
            u = l.length - 1,
            i = o.length - 1;
          1 <= u && 0 <= i && l[u] !== o[i];

        )
          i--;
        for (; 1 <= u && 0 <= i; u--, i--)
          if (l[u] !== o[i]) {
            if (u !== 1 || i !== 1)
              do
                if ((u--, i--, 0 > i || l[u] !== o[i])) {
                  var s =
                    `
` + l[u].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      s.includes('<anonymous>') &&
                      (s = s.replace('<anonymous>', e.displayName)),
                    s
                  );
                }
              while (1 <= u && 0 <= i);
            break;
          }
      }
    } finally {
      (Q = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : '') ? g(e) : '';
  }
  function b(e) {
    switch (e.tag) {
      case 5:
        return g(e.type);
      case 16:
        return g('Lazy');
      case 13:
        return g('Suspense');
      case 19:
        return g('SuspenseList');
      case 0:
      case 2:
      case 15:
        return (e = K(e.type, !1)), e;
      case 11:
        return (e = K(e.type.render, !1)), e;
      case 1:
        return (e = K(e.type, !0)), e;
      default:
        return '';
    }
  }
  function te(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case M:
        return 'Fragment';
      case F:
        return 'Portal';
      case ne:
        return 'Profiler';
      case H:
        return 'StrictMode';
      case ee:
        return 'Suspense';
      case re:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case ce:
          return (e.displayName || 'Context') + '.Consumer';
        case $:
          return (e._context.displayName || 'Context') + '.Provider';
        case ue:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case ie:
          return (
            (t = e.displayName || null), t !== null ? t : te(e.type) || 'Memo'
          );
        case Z:
          (t = e._payload), (e = e._init);
          try {
            return te(e(t));
          } catch {}
      }
    return null;
  }
  function de(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (t.displayName || 'Context') + '.Consumer';
      case 10:
        return (t._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ''),
          t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return t;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return te(t);
      case 8:
        return t === H ? 'StrictMode' : 'Mode';
      case 22:
        return 'Offscreen';
      case 12:
        return 'Profiler';
      case 21:
        return 'Scope';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 25:
        return 'TracingMarker';
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == 'function') return t.displayName || t.name || null;
        if (typeof t == 'string') return t;
    }
    return null;
  }
  function fe(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function he(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function je(e) {
    var t = he(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < 'u' &&
      typeof n.get == 'function' &&
      typeof n.set == 'function'
    ) {
      var l = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (u) {
            (r = '' + u), o.call(this, u);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (u) {
            r = '' + u;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function mt(e) {
    e._valueTracker || (e._valueTracker = je(e));
  }
  function zt(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = he(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function cn(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Un(e, t) {
    var n = t.checked;
    return I({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function ju(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = fe(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio'
            ? t.checked != null
            : t.value != null,
      });
  }
  function Uu(e, t) {
    (t = t.checked), t != null && Se(e, 'checked', t, !1);
  }
  function Ol(e, t) {
    Uu(e, t);
    var n = fe(t.value),
      r = t.type;
    if (n != null)
      r === 'number'
        ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
        : e.value !== '' + n && (e.value = '' + n);
    else if (r === 'submit' || r === 'reset') {
      e.removeAttribute('value');
      return;
    }
    t.hasOwnProperty('value')
      ? Dl(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && Dl(e, t.type, fe(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Au(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var r = t.type;
      if (
        !(
          (r !== 'submit' && r !== 'reset') ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = '' + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== '' && (e.name = n);
  }
  function Dl(e, t, n) {
    (t !== 'number' || cn(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var An = Array.isArray;
  function fn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = '' + fe(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Fl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return I({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function Wu(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(a(92));
        if (An(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ''), (n = t);
    }
    e._wrapperState = { initialValue: fe(n) };
  }
  function Hu(e, t) {
    var n = fe(t.value),
      r = fe(t.defaultValue);
    n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r);
  }
  function $u(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== '' &&
      t !== null &&
      (e.value = t);
  }
  function Vu(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function jl(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? Vu(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var _r,
    Bu = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
        e.innerHTML = t;
      else {
        for (
          _r = _r || document.createElement('div'),
            _r.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = _r.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Wn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Hn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Zs = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(Hn).forEach(function (e) {
    Zs.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Hn[t] = Hn[e]);
    });
  });
  function Qu(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (Hn.hasOwnProperty(e) && Hn[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function Ku(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = Qu(n, t[n], r);
        n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var Js = I(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Ul(e, t) {
    if (t) {
      if (Js[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(a(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(a(62));
    }
  }
  function Al(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var Wl = null;
  function Hl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var $l = null,
    dn = null,
    pn = null;
  function Yu(e) {
    if ((e = sr(e))) {
      if (typeof $l != 'function') throw Error(a(280));
      var t = e.stateNode;
      t && ((t = Gr(t)), $l(e.stateNode, e.type, t));
    }
  }
  function Gu(e) {
    dn ? (pn ? pn.push(e) : (pn = [e])) : (dn = e);
  }
  function Xu() {
    if (dn) {
      var e = dn,
        t = pn;
      if (((pn = dn = null), Yu(e), t)) for (e = 0; e < t.length; e++) Yu(t[e]);
    }
  }
  function Zu(e, t) {
    return e(t);
  }
  function Ju() {}
  var Vl = !1;
  function qu(e, t, n) {
    if (Vl) return e(t, n);
    Vl = !0;
    try {
      return Zu(e, t, n);
    } finally {
      (Vl = !1), (dn !== null || pn !== null) && (Ju(), Xu());
    }
  }
  function $n(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Gr(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(a(231, t, typeof n));
    return n;
  }
  var Bl = !1;
  if (N)
    try {
      var Vn = {};
      Object.defineProperty(Vn, 'passive', {
        get: function () {
          Bl = !0;
        },
      }),
        window.addEventListener('test', Vn, Vn),
        window.removeEventListener('test', Vn, Vn);
    } catch {
      Bl = !1;
    }
  function qs(e, t, n, r, l, o, u, i, s) {
    var m = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, m);
    } catch (S) {
      this.onError(S);
    }
  }
  var Bn = !1,
    Rr = null,
    Tr = !1,
    Ql = null,
    bs = {
      onError: function (e) {
        (Bn = !0), (Rr = e);
      },
    };
  function ec(e, t, n, r, l, o, u, i, s) {
    (Bn = !1), (Rr = null), qs.apply(bs, arguments);
  }
  function tc(e, t, n, r, l, o, u, i, s) {
    if ((ec.apply(this, arguments), Bn)) {
      if (Bn) {
        var m = Rr;
        (Bn = !1), (Rr = null);
      } else throw Error(a(198));
      Tr || ((Tr = !0), (Ql = m));
    }
  }
  function Zt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function bu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function ei(e) {
    if (Zt(e) !== e) throw Error(a(188));
  }
  function nc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Zt(e)), t === null)) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return ei(l), e;
          if (o === r) return ei(l), t;
          o = o.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return) (n = l), (r = o);
      else {
        for (var u = !1, i = l.child; i; ) {
          if (i === n) {
            (u = !0), (n = l), (r = o);
            break;
          }
          if (i === r) {
            (u = !0), (r = l), (n = o);
            break;
          }
          i = i.sibling;
        }
        if (!u) {
          for (i = o.child; i; ) {
            if (i === n) {
              (u = !0), (n = o), (r = l);
              break;
            }
            if (i === r) {
              (u = !0), (r = o), (n = l);
              break;
            }
            i = i.sibling;
          }
          if (!u) throw Error(a(189));
        }
      }
      if (n.alternate !== r) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function ti(e) {
    return (e = nc(e)), e !== null ? ni(e) : null;
  }
  function ni(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ni(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ri = h.unstable_scheduleCallback,
    li = h.unstable_cancelCallback,
    rc = h.unstable_shouldYield,
    lc = h.unstable_requestPaint,
    xe = h.unstable_now,
    oc = h.unstable_getCurrentPriorityLevel,
    Kl = h.unstable_ImmediatePriority,
    oi = h.unstable_UserBlockingPriority,
    Ir = h.unstable_NormalPriority,
    uc = h.unstable_LowPriority,
    ui = h.unstable_IdlePriority,
    Pr = null,
    ht = null;
  function ic(e) {
    if (ht && typeof ht.onCommitFiberRoot == 'function')
      try {
        ht.onCommitFiberRoot(Pr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var it = Math.clz32 ? Math.clz32 : cc,
    ac = Math.log,
    sc = Math.LN2;
  function cc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((ac(e) / sc) | 0)) | 0;
  }
  var zr = 64,
    Nr = 4194304;
  function Qn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Lr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var i = u & ~l;
      i !== 0 ? (r = Qn(i)) : ((o &= u), o !== 0 && (r = Qn(o)));
    } else (u = n & ~l), u !== 0 ? (r = Qn(u)) : o !== 0 && (r = Qn(o));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - it(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function fc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function dc(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var u = 31 - it(o),
        i = 1 << u,
        s = l[u];
      s === -1
        ? (!(i & n) || i & r) && (l[u] = fc(i, t))
        : s <= t && (e.expiredLanes |= i),
        (o &= ~i);
    }
  }
  function Yl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function ii() {
    var e = zr;
    return (zr <<= 1), !(zr & 4194240) && (zr = 64), e;
  }
  function Gl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Kn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - it(t)),
      (e[t] = n);
  }
  function pc(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - it(n),
        o = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
    }
  }
  function Xl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - it(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var pe = 0;
  function ai(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var si,
    Zl,
    ci,
    fi,
    di,
    Jl = !1,
    Mr = [],
    Nt = null,
    Lt = null,
    Mt = null,
    Yn = new Map(),
    Gn = new Map(),
    Ot = [],
    mc =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function pi(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Nt = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Lt = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Mt = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Yn.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Gn.delete(t.pointerId);
    }
  }
  function Xn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = sr(t)), t !== null && Zl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function hc(e, t, n, r, l) {
    switch (t) {
      case 'focusin':
        return (Nt = Xn(Nt, e, t, n, r, l)), !0;
      case 'dragenter':
        return (Lt = Xn(Lt, e, t, n, r, l)), !0;
      case 'mouseover':
        return (Mt = Xn(Mt, e, t, n, r, l)), !0;
      case 'pointerover':
        var o = l.pointerId;
        return Yn.set(o, Xn(Yn.get(o) || null, e, t, n, r, l)), !0;
      case 'gotpointercapture':
        return (
          (o = l.pointerId), Gn.set(o, Xn(Gn.get(o) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function mi(e) {
    var t = Jt(e.target);
    if (t !== null) {
      var n = Zt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = bu(n)), t !== null)) {
            (e.blockedOn = t),
              di(e.priority, function () {
                ci(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Or(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Wl = r), n.target.dispatchEvent(r), (Wl = null);
      } else return (t = sr(n)), t !== null && Zl(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function hi(e, t, n) {
    Or(e) && n.delete(t);
  }
  function vc() {
    (Jl = !1),
      Nt !== null && Or(Nt) && (Nt = null),
      Lt !== null && Or(Lt) && (Lt = null),
      Mt !== null && Or(Mt) && (Mt = null),
      Yn.forEach(hi),
      Gn.forEach(hi);
  }
  function Zn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Jl ||
        ((Jl = !0),
        h.unstable_scheduleCallback(h.unstable_NormalPriority, vc)));
  }
  function Jn(e) {
    function t(l) {
      return Zn(l, e);
    }
    if (0 < Mr.length) {
      Zn(Mr[0], e);
      for (var n = 1; n < Mr.length; n++) {
        var r = Mr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Nt !== null && Zn(Nt, e),
        Lt !== null && Zn(Lt, e),
        Mt !== null && Zn(Mt, e),
        Yn.forEach(t),
        Gn.forEach(t),
        n = 0;
      n < Ot.length;
      n++
    )
      (r = Ot[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ot.length && ((n = Ot[0]), n.blockedOn === null); )
      mi(n), n.blockedOn === null && Ot.shift();
  }
  var mn = me.ReactCurrentBatchConfig,
    Dr = !0;
  function yc(e, t, n, r) {
    var l = pe,
      o = mn.transition;
    mn.transition = null;
    try {
      (pe = 1), ql(e, t, n, r);
    } finally {
      (pe = l), (mn.transition = o);
    }
  }
  function gc(e, t, n, r) {
    var l = pe,
      o = mn.transition;
    mn.transition = null;
    try {
      (pe = 4), ql(e, t, n, r);
    } finally {
      (pe = l), (mn.transition = o);
    }
  }
  function ql(e, t, n, r) {
    if (Dr) {
      var l = bl(e, t, n, r);
      if (l === null) yo(e, t, r, Fr, n), pi(e, r);
      else if (hc(l, e, t, n, r)) r.stopPropagation();
      else if ((pi(e, r), t & 4 && -1 < mc.indexOf(e))) {
        for (; l !== null; ) {
          var o = sr(l);
          if (
            (o !== null && si(o),
            (o = bl(e, t, n, r)),
            o === null && yo(e, t, r, Fr, n),
            o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else yo(e, t, r, null, n);
    }
  }
  var Fr = null;
  function bl(e, t, n, r) {
    if (((Fr = null), (e = Hl(r)), (e = Jt(e)), e !== null))
      if (((t = Zt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = bu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Fr = e), null;
  }
  function vi(e) {
    switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4;
      case 'message':
        switch (oc()) {
          case Kl:
            return 1;
          case oi:
            return 4;
          case Ir:
          case uc:
            return 16;
          case ui:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Dt = null,
    eo = null,
    jr = null;
  function yi() {
    if (jr) return jr;
    var e,
      t = eo,
      n = t.length,
      r,
      l = 'value' in Dt ? Dt.value : Dt.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[o - r]; r++);
    return (jr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Ur(e) {
    var t = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ar() {
    return !0;
  }
  function gi() {
    return !1;
  }
  function Je(e) {
    function t(n, r, l, o, u) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = u),
        (this.currentTarget = null);
      for (var i in e)
        e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(o) : o[i]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Ar
          : gi),
        (this.isPropagationStopped = gi),
        this
      );
    }
    return (
      I(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = Ar));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ar));
        },
        persist: function () {},
        isPersistent: Ar,
      }),
      t
    );
  }
  var hn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    to = Je(hn),
    qn = I({}, hn, { view: 0, detail: 0 }),
    wc = Je(qn),
    no,
    ro,
    bn,
    Wr = I({}, qn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: oo,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== bn &&
              (bn && e.type === 'mousemove'
                ? ((no = e.screenX - bn.screenX), (ro = e.screenY - bn.screenY))
                : (ro = no = 0),
              (bn = e)),
            no);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : ro;
      },
    }),
    wi = Je(Wr),
    Sc = I({}, Wr, { dataTransfer: 0 }),
    kc = Je(Sc),
    Cc = I({}, qn, { relatedTarget: 0 }),
    lo = Je(Cc),
    Ec = I({}, hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    xc = Je(Ec),
    _c = I({}, hn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Rc = Je(_c),
    Tc = I({}, hn, { data: 0 }),
    Si = Je(Tc),
    Ic = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    Pc = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    zc = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function Nc(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = zc[e])
        ? !!t[e]
        : !1;
  }
  function oo() {
    return Nc;
  }
  var Lc = I({}, qn, {
      key: function (e) {
        if (e.key) {
          var t = Ic[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Ur(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Pc[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: oo,
      charCode: function (e) {
        return e.type === 'keypress' ? Ur(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Ur(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Mc = Je(Lc),
    Oc = I({}, Wr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ki = Je(Oc),
    Dc = I({}, qn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: oo,
    }),
    Fc = Je(Dc),
    jc = I({}, hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Uc = Je(jc),
    Ac = I({}, Wr, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Wc = Je(Ac),
    Hc = [9, 13, 27, 32],
    uo = N && 'CompositionEvent' in window,
    er = null;
  N && 'documentMode' in document && (er = document.documentMode);
  var $c = N && 'TextEvent' in window && !er,
    Ci = N && (!uo || (er && 8 < er && 11 >= er)),
    Ei = ' ',
    xi = !1;
  function _i(e, t) {
    switch (e) {
      case 'keyup':
        return Hc.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Ri(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var vn = !1;
  function Vc(e, t) {
    switch (e) {
      case 'compositionend':
        return Ri(t);
      case 'keypress':
        return t.which !== 32 ? null : ((xi = !0), Ei);
      case 'textInput':
        return (e = t.data), e === Ei && xi ? null : e;
      default:
        return null;
    }
  }
  function Bc(e, t) {
    if (vn)
      return e === 'compositionend' || (!uo && _i(e, t))
        ? ((e = yi()), (jr = eo = Dt = null), (vn = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return Ci && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Qc = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ti(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Qc[e.type] : t === 'textarea';
  }
  function Ii(e, t, n, r) {
    Gu(r),
      (t = Qr(t, 'onChange')),
      0 < t.length &&
        ((n = new to('onChange', 'change', null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var tr = null,
    nr = null;
  function Kc(e) {
    Ki(e, 0);
  }
  function Hr(e) {
    var t = kn(e);
    if (zt(t)) return e;
  }
  function Yc(e, t) {
    if (e === 'change') return t;
  }
  var Pi = !1;
  if (N) {
    var io;
    if (N) {
      var ao = 'oninput' in document;
      if (!ao) {
        var zi = document.createElement('div');
        zi.setAttribute('oninput', 'return;'),
          (ao = typeof zi.oninput == 'function');
      }
      io = ao;
    } else io = !1;
    Pi = io && (!document.documentMode || 9 < document.documentMode);
  }
  function Ni() {
    tr && (tr.detachEvent('onpropertychange', Li), (nr = tr = null));
  }
  function Li(e) {
    if (e.propertyName === 'value' && Hr(nr)) {
      var t = [];
      Ii(t, nr, e, Hl(e)), qu(Kc, t);
    }
  }
  function Gc(e, t, n) {
    e === 'focusin'
      ? (Ni(), (tr = t), (nr = n), tr.attachEvent('onpropertychange', Li))
      : e === 'focusout' && Ni();
  }
  function Xc(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Hr(nr);
  }
  function Zc(e, t) {
    if (e === 'click') return Hr(t);
  }
  function Jc(e, t) {
    if (e === 'input' || e === 'change') return Hr(t);
  }
  function qc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var at = typeof Object.is == 'function' ? Object.is : qc;
  function rr(e, t) {
    if (at(e, t)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!P.call(t, l) || !at(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Mi(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Oi(e, t) {
    var n = Mi(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Mi(n);
    }
  }
  function Di(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Di(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Fi() {
    for (var e = window, t = cn(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = cn(e.document);
    }
    return t;
  }
  function so(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function bc(e) {
    var t = Fi(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Di(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && so(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          'selectionStart' in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          (r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = Oi(n, o));
          var u = Oi(n, r);
          l &&
            u &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== u.node ||
              e.focusOffset !== u.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(u.node, u.offset))
              : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var ef = N && 'documentMode' in document && 11 >= document.documentMode,
    yn = null,
    co = null,
    lr = null,
    fo = !1;
  function ji(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fo ||
      yn == null ||
      yn !== cn(r) ||
      ((r = yn),
      'selectionStart' in r && so(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (lr && rr(lr, r)) ||
        ((lr = r),
        (r = Qr(co, 'onSelect')),
        0 < r.length &&
          ((t = new to('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = yn))));
  }
  function $r(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var gn = {
      animationend: $r('Animation', 'AnimationEnd'),
      animationiteration: $r('Animation', 'AnimationIteration'),
      animationstart: $r('Animation', 'AnimationStart'),
      transitionend: $r('Transition', 'TransitionEnd'),
    },
    po = {},
    Ui = {};
  N &&
    ((Ui = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete gn.animationend.animation,
      delete gn.animationiteration.animation,
      delete gn.animationstart.animation),
    'TransitionEvent' in window || delete gn.transitionend.transition);
  function Vr(e) {
    if (po[e]) return po[e];
    if (!gn[e]) return e;
    var t = gn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ui) return (po[e] = t[n]);
    return e;
  }
  var Ai = Vr('animationend'),
    Wi = Vr('animationiteration'),
    Hi = Vr('animationstart'),
    $i = Vr('transitionend'),
    Vi = new Map(),
    Bi =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Ft(e, t) {
    Vi.set(e, t), T(t, [e]);
  }
  for (var mo = 0; mo < Bi.length; mo++) {
    var ho = Bi[mo],
      tf = ho.toLowerCase(),
      nf = ho[0].toUpperCase() + ho.slice(1);
    Ft(tf, 'on' + nf);
  }
  Ft(Ai, 'onAnimationEnd'),
    Ft(Wi, 'onAnimationIteration'),
    Ft(Hi, 'onAnimationStart'),
    Ft('dblclick', 'onDoubleClick'),
    Ft('focusin', 'onFocus'),
    Ft('focusout', 'onBlur'),
    Ft($i, 'onTransitionEnd'),
    R('onMouseEnter', ['mouseout', 'mouseover']),
    R('onMouseLeave', ['mouseout', 'mouseover']),
    R('onPointerEnter', ['pointerout', 'pointerover']),
    R('onPointerLeave', ['pointerout', 'pointerover']),
    T(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
      )
    ),
    T(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    T('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    T(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' ')
    ),
    T(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    T(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    );
  var or =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    rf = new Set(
      'cancel close invalid load scroll toggle'.split(' ').concat(or)
    );
  function Qi(e, t, n) {
    var r = e.type || 'unknown-event';
    (e.currentTarget = n), tc(r, t, void 0, e), (e.currentTarget = null);
  }
  function Ki(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var i = r[u],
              s = i.instance,
              m = i.currentTarget;
            if (((i = i.listener), s !== o && l.isPropagationStopped()))
              break e;
            Qi(l, i, m), (o = s);
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((i = r[u]),
              (s = i.instance),
              (m = i.currentTarget),
              (i = i.listener),
              s !== o && l.isPropagationStopped())
            )
              break e;
            Qi(l, i, m), (o = s);
          }
      }
    }
    if (Tr) throw ((e = Ql), (Tr = !1), (Ql = null), e);
  }
  function ye(e, t) {
    var n = t[Eo];
    n === void 0 && (n = t[Eo] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Yi(t, e, 2, !1), n.add(r));
  }
  function vo(e, t, n) {
    var r = 0;
    t && (r |= 4), Yi(n, e, r, t);
  }
  var Br = '_reactListening' + Math.random().toString(36).slice(2);
  function ur(e) {
    if (!e[Br]) {
      (e[Br] = !0),
        C.forEach(function (n) {
          n !== 'selectionchange' && (rf.has(n) || vo(n, !1, e), vo(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Br] || ((t[Br] = !0), vo('selectionchange', !1, t));
    }
  }
  function Yi(e, t, n, r) {
    switch (vi(t)) {
      case 1:
        var l = yc;
        break;
      case 4:
        l = gc;
        break;
      default:
        l = ql;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !Bl ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1);
  }
  function yo(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var i = r.stateNode.containerInfo;
          if (i === l || (i.nodeType === 8 && i.parentNode === l)) break;
          if (u === 4)
            for (u = r.return; u !== null; ) {
              var s = u.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = u.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              u = u.return;
            }
          for (; i !== null; ) {
            if (((u = Jt(i)), u === null)) return;
            if (((s = u.tag), s === 5 || s === 6)) {
              r = o = u;
              continue e;
            }
            i = i.parentNode;
          }
        }
        r = r.return;
      }
    qu(function () {
      var m = o,
        S = Hl(n),
        k = [];
      e: {
        var w = Vi.get(e);
        if (w !== void 0) {
          var z = to,
            O = e;
          switch (e) {
            case 'keypress':
              if (Ur(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              z = Mc;
              break;
            case 'focusin':
              (O = 'focus'), (z = lo);
              break;
            case 'focusout':
              (O = 'blur'), (z = lo);
              break;
            case 'beforeblur':
            case 'afterblur':
              z = lo;
              break;
            case 'click':
              if (n.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              z = wi;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              z = kc;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              z = Fc;
              break;
            case Ai:
            case Wi:
            case Hi:
              z = xc;
              break;
            case $i:
              z = Uc;
              break;
            case 'scroll':
              z = wc;
              break;
            case 'wheel':
              z = Wc;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              z = Rc;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              z = ki;
          }
          var D = (t & 4) !== 0,
            _e = !D && e === 'scroll',
            d = D ? (w !== null ? w + 'Capture' : null) : w;
          D = [];
          for (var c = m, p; c !== null; ) {
            p = c;
            var x = p.stateNode;
            if (
              (p.tag === 5 &&
                x !== null &&
                ((p = x),
                d !== null &&
                  ((x = $n(c, d)), x != null && D.push(ir(c, x, p)))),
              _e)
            )
              break;
            c = c.return;
          }
          0 < D.length &&
            ((w = new z(w, O, null, n, S)), k.push({ event: w, listeners: D }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((w = e === 'mouseover' || e === 'pointerover'),
            (z = e === 'mouseout' || e === 'pointerout'),
            w &&
              n !== Wl &&
              (O = n.relatedTarget || n.fromElement) &&
              (Jt(O) || O[kt]))
          )
            break e;
          if (
            (z || w) &&
            ((w =
              S.window === S
                ? S
                : (w = S.ownerDocument)
                  ? w.defaultView || w.parentWindow
                  : window),
            z
              ? ((O = n.relatedTarget || n.toElement),
                (z = m),
                (O = O ? Jt(O) : null),
                O !== null &&
                  ((_e = Zt(O)), O !== _e || (O.tag !== 5 && O.tag !== 6)) &&
                  (O = null))
              : ((z = null), (O = m)),
            z !== O)
          ) {
            if (
              ((D = wi),
              (x = 'onMouseLeave'),
              (d = 'onMouseEnter'),
              (c = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((D = ki),
                (x = 'onPointerLeave'),
                (d = 'onPointerEnter'),
                (c = 'pointer')),
              (_e = z == null ? w : kn(z)),
              (p = O == null ? w : kn(O)),
              (w = new D(x, c + 'leave', z, n, S)),
              (w.target = _e),
              (w.relatedTarget = p),
              (x = null),
              Jt(S) === m &&
                ((D = new D(d, c + 'enter', O, n, S)),
                (D.target = p),
                (D.relatedTarget = _e),
                (x = D)),
              (_e = x),
              z && O)
            )
              t: {
                for (D = z, d = O, c = 0, p = D; p; p = wn(p)) c++;
                for (p = 0, x = d; x; x = wn(x)) p++;
                for (; 0 < c - p; ) (D = wn(D)), c--;
                for (; 0 < p - c; ) (d = wn(d)), p--;
                for (; c--; ) {
                  if (D === d || (d !== null && D === d.alternate)) break t;
                  (D = wn(D)), (d = wn(d));
                }
                D = null;
              }
            else D = null;
            z !== null && Gi(k, w, z, D, !1),
              O !== null && _e !== null && Gi(k, _e, O, D, !0);
          }
        }
        e: {
          if (
            ((w = m ? kn(m) : window),
            (z = w.nodeName && w.nodeName.toLowerCase()),
            z === 'select' || (z === 'input' && w.type === 'file'))
          )
            var j = Yc;
          else if (Ti(w))
            if (Pi) j = Jc;
            else {
              j = Xc;
              var A = Gc;
            }
          else
            (z = w.nodeName) &&
              z.toLowerCase() === 'input' &&
              (w.type === 'checkbox' || w.type === 'radio') &&
              (j = Zc);
          if (j && (j = j(e, m))) {
            Ii(k, j, n, S);
            break e;
          }
          A && A(e, w, m),
            e === 'focusout' &&
              (A = w._wrapperState) &&
              A.controlled &&
              w.type === 'number' &&
              Dl(w, 'number', w.value);
        }
        switch (((A = m ? kn(m) : window), e)) {
          case 'focusin':
            (Ti(A) || A.contentEditable === 'true') &&
              ((yn = A), (co = m), (lr = null));
            break;
          case 'focusout':
            lr = co = yn = null;
            break;
          case 'mousedown':
            fo = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (fo = !1), ji(k, n, S);
            break;
          case 'selectionchange':
            if (ef) break;
          case 'keydown':
          case 'keyup':
            ji(k, n, S);
        }
        var W;
        if (uo)
          e: {
            switch (e) {
              case 'compositionstart':
                var V = 'onCompositionStart';
                break e;
              case 'compositionend':
                V = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                V = 'onCompositionUpdate';
                break e;
            }
            V = void 0;
          }
        else
          vn
            ? _i(e, n) && (V = 'onCompositionEnd')
            : e === 'keydown' &&
              n.keyCode === 229 &&
              (V = 'onCompositionStart');
        V &&
          (Ci &&
            n.locale !== 'ko' &&
            (vn || V !== 'onCompositionStart'
              ? V === 'onCompositionEnd' && vn && (W = yi())
              : ((Dt = S),
                (eo = 'value' in Dt ? Dt.value : Dt.textContent),
                (vn = !0))),
          (A = Qr(m, V)),
          0 < A.length &&
            ((V = new Si(V, e, null, n, S)),
            k.push({ event: V, listeners: A }),
            W ? (V.data = W) : ((W = Ri(n)), W !== null && (V.data = W)))),
          (W = $c ? Vc(e, n) : Bc(e, n)) &&
            ((m = Qr(m, 'onBeforeInput')),
            0 < m.length &&
              ((S = new Si('onBeforeInput', 'beforeinput', null, n, S)),
              k.push({ event: S, listeners: m }),
              (S.data = W)));
      }
      Ki(k, t);
    });
  }
  function ir(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Qr(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = $n(e, n)),
        o != null && r.unshift(ir(e, o, l)),
        (o = $n(e, t)),
        o != null && r.push(ir(e, o, l))),
        (e = e.return);
    }
    return r;
  }
  function wn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Gi(e, t, n, r, l) {
    for (var o = t._reactName, u = []; n !== null && n !== r; ) {
      var i = n,
        s = i.alternate,
        m = i.stateNode;
      if (s !== null && s === r) break;
      i.tag === 5 &&
        m !== null &&
        ((i = m),
        l
          ? ((s = $n(n, o)), s != null && u.unshift(ir(n, s, i)))
          : l || ((s = $n(n, o)), s != null && u.push(ir(n, s, i)))),
        (n = n.return);
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var lf = /\r\n?/g,
    of = /\u0000|\uFFFD/g;
  function Xi(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        lf,
        `
`
      )
      .replace(of, '');
  }
  function Kr(e, t, n) {
    if (((t = Xi(t)), Xi(e) !== t && n)) throw Error(a(425));
  }
  function Yr() {}
  var go = null,
    wo = null;
  function So(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ko = typeof setTimeout == 'function' ? setTimeout : void 0,
    uf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Zi = typeof Promise == 'function' ? Promise : void 0,
    af =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Zi < 'u'
          ? function (e) {
              return Zi.resolve(null).then(e).catch(sf);
            }
          : ko;
  function sf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Co(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === '/$')) {
          if (r === 0) {
            e.removeChild(l), Jn(t);
            return;
          }
          r--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = l;
    } while (n);
    Jn(t);
  }
  function jt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  function Ji(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '$' || n === '$!' || n === '$?') {
          if (t === 0) return e;
          t--;
        } else n === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Sn = Math.random().toString(36).slice(2),
    vt = '__reactFiber$' + Sn,
    ar = '__reactProps$' + Sn,
    kt = '__reactContainer$' + Sn,
    Eo = '__reactEvents$' + Sn,
    cf = '__reactListeners$' + Sn,
    ff = '__reactHandles$' + Sn;
  function Jt(e) {
    var t = e[vt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[kt] || n[vt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Ji(e); e !== null; ) {
            if ((n = e[vt])) return n;
            e = Ji(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function sr(e) {
    return (
      (e = e[vt] || e[kt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function kn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function Gr(e) {
    return e[ar] || null;
  }
  var xo = [],
    Cn = -1;
  function Ut(e) {
    return { current: e };
  }
  function ge(e) {
    0 > Cn || ((e.current = xo[Cn]), (xo[Cn] = null), Cn--);
  }
  function ve(e, t) {
    Cn++, (xo[Cn] = e.current), (e.current = t);
  }
  var At = {},
    Ue = Ut(At),
    Qe = Ut(!1),
    qt = At;
  function En(e, t) {
    var n = e.type.contextTypes;
    if (!n) return At;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Ke(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Xr() {
    ge(Qe), ge(Ue);
  }
  function qi(e, t, n) {
    if (Ue.current !== At) throw Error(a(168));
    ve(Ue, t), ve(Qe, n);
  }
  function bi(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(a(108, de(e) || 'Unknown', l));
    return I({}, n, r);
  }
  function Zr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        At),
      (qt = Ue.current),
      ve(Ue, e),
      ve(Qe, Qe.current),
      !0
    );
  }
  function ea(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    n
      ? ((e = bi(e, t, qt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ge(Qe),
        ge(Ue),
        ve(Ue, e))
      : ge(Qe),
      ve(Qe, n);
  }
  var Ct = null,
    Jr = !1,
    _o = !1;
  function ta(e) {
    Ct === null ? (Ct = [e]) : Ct.push(e);
  }
  function df(e) {
    (Jr = !0), ta(e);
  }
  function Wt() {
    if (!_o && Ct !== null) {
      _o = !0;
      var e = 0,
        t = pe;
      try {
        var n = Ct;
        for (pe = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Ct = null), (Jr = !1);
      } catch (l) {
        throw (Ct !== null && (Ct = Ct.slice(e + 1)), ri(Kl, Wt), l);
      } finally {
        (pe = t), (_o = !1);
      }
    }
    return null;
  }
  var xn = [],
    _n = 0,
    qr = null,
    br = 0,
    tt = [],
    nt = 0,
    bt = null,
    Et = 1,
    xt = '';
  function en(e, t) {
    (xn[_n++] = br), (xn[_n++] = qr), (qr = e), (br = t);
  }
  function na(e, t, n) {
    (tt[nt++] = Et), (tt[nt++] = xt), (tt[nt++] = bt), (bt = e);
    var r = Et;
    e = xt;
    var l = 32 - it(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - it(t) + l;
    if (30 < o) {
      var u = l - (l % 5);
      (o = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (l -= u),
        (Et = (1 << (32 - it(t) + l)) | (n << l) | r),
        (xt = o + e);
    } else (Et = (1 << o) | (n << l) | r), (xt = e);
  }
  function Ro(e) {
    e.return !== null && (en(e, 1), na(e, 1, 0));
  }
  function To(e) {
    for (; e === qr; )
      (qr = xn[--_n]), (xn[_n] = null), (br = xn[--_n]), (xn[_n] = null);
    for (; e === bt; )
      (bt = tt[--nt]),
        (tt[nt] = null),
        (xt = tt[--nt]),
        (tt[nt] = null),
        (Et = tt[--nt]),
        (tt[nt] = null);
  }
  var qe = null,
    be = null,
    we = !1,
    st = null;
  function ra(e, t) {
    var n = ut(5, null, null, 0);
    (n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function la(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (qe = e), (be = jt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (qe = e), (be = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = bt !== null ? { id: Et, overflow: xt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = ut(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (qe = e),
              (be = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Io(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Po(e) {
    if (we) {
      var t = be;
      if (t) {
        var n = t;
        if (!la(e, t)) {
          if (Io(e)) throw Error(a(418));
          t = jt(n.nextSibling);
          var r = qe;
          t && la(e, t)
            ? ra(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (we = !1), (qe = e));
        }
      } else {
        if (Io(e)) throw Error(a(418));
        (e.flags = (e.flags & -4097) | 2), (we = !1), (qe = e);
      }
    }
  }
  function oa(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    qe = e;
  }
  function el(e) {
    if (e !== qe) return !1;
    if (!we) return oa(e), (we = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== 'head' && t !== 'body' && !So(e.type, e.memoizedProps))),
      t && (t = be))
    ) {
      if (Io(e)) throw (ua(), Error(a(418)));
      for (; t; ) ra(e, t), (t = jt(t.nextSibling));
    }
    if ((oa(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                be = jt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        be = null;
      }
    } else be = qe ? jt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ua() {
    for (var e = be; e; ) e = jt(e.nextSibling);
  }
  function Rn() {
    (be = qe = null), (we = !1);
  }
  function zo(e) {
    st === null ? (st = [e]) : st.push(e);
  }
  var pf = me.ReactCurrentBatchConfig;
  function cr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(a(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(a(147, e));
        var l = r,
          o = '' + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == 'function' &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (u) {
              var i = l.refs;
              u === null ? delete i[o] : (i[o] = u);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != 'string') throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function tl(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        a(
          31,
          e === '[object Object]'
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : e
        )
      ))
    );
  }
  function ia(e) {
    var t = e._init;
    return t(e._payload);
  }
  function aa(e) {
    function t(d, c) {
      if (e) {
        var p = d.deletions;
        p === null ? ((d.deletions = [c]), (d.flags |= 16)) : p.push(c);
      }
    }
    function n(d, c) {
      if (!e) return null;
      for (; c !== null; ) t(d, c), (c = c.sibling);
      return null;
    }
    function r(d, c) {
      for (d = new Map(); c !== null; )
        c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
      return d;
    }
    function l(d, c) {
      return (d = Gt(d, c)), (d.index = 0), (d.sibling = null), d;
    }
    function o(d, c, p) {
      return (
        (d.index = p),
        e
          ? ((p = d.alternate),
            p !== null
              ? ((p = p.index), p < c ? ((d.flags |= 2), c) : p)
              : ((d.flags |= 2), c))
          : ((d.flags |= 1048576), c)
      );
    }
    function u(d) {
      return e && d.alternate === null && (d.flags |= 2), d;
    }
    function i(d, c, p, x) {
      return c === null || c.tag !== 6
        ? ((c = ku(p, d.mode, x)), (c.return = d), c)
        : ((c = l(c, p)), (c.return = d), c);
    }
    function s(d, c, p, x) {
      var j = p.type;
      return j === M
        ? S(d, c, p.props.children, x, p.key)
        : c !== null &&
            (c.elementType === j ||
              (typeof j == 'object' &&
                j !== null &&
                j.$$typeof === Z &&
                ia(j) === c.type))
          ? ((x = l(c, p.props)), (x.ref = cr(d, c, p)), (x.return = d), x)
          : ((x = _l(p.type, p.key, p.props, null, d.mode, x)),
            (x.ref = cr(d, c, p)),
            (x.return = d),
            x);
    }
    function m(d, c, p, x) {
      return c === null ||
        c.tag !== 4 ||
        c.stateNode.containerInfo !== p.containerInfo ||
        c.stateNode.implementation !== p.implementation
        ? ((c = Cu(p, d.mode, x)), (c.return = d), c)
        : ((c = l(c, p.children || [])), (c.return = d), c);
    }
    function S(d, c, p, x, j) {
      return c === null || c.tag !== 7
        ? ((c = sn(p, d.mode, x, j)), (c.return = d), c)
        : ((c = l(c, p)), (c.return = d), c);
    }
    function k(d, c, p) {
      if ((typeof c == 'string' && c !== '') || typeof c == 'number')
        return (c = ku('' + c, d.mode, p)), (c.return = d), c;
      if (typeof c == 'object' && c !== null) {
        switch (c.$$typeof) {
          case y:
            return (
              (p = _l(c.type, c.key, c.props, null, d.mode, p)),
              (p.ref = cr(d, null, c)),
              (p.return = d),
              p
            );
          case F:
            return (c = Cu(c, d.mode, p)), (c.return = d), c;
          case Z:
            var x = c._init;
            return k(d, x(c._payload), p);
        }
        if (An(c) || U(c))
          return (c = sn(c, d.mode, p, null)), (c.return = d), c;
        tl(d, c);
      }
      return null;
    }
    function w(d, c, p, x) {
      var j = c !== null ? c.key : null;
      if ((typeof p == 'string' && p !== '') || typeof p == 'number')
        return j !== null ? null : i(d, c, '' + p, x);
      if (typeof p == 'object' && p !== null) {
        switch (p.$$typeof) {
          case y:
            return p.key === j ? s(d, c, p, x) : null;
          case F:
            return p.key === j ? m(d, c, p, x) : null;
          case Z:
            return (j = p._init), w(d, c, j(p._payload), x);
        }
        if (An(p) || U(p)) return j !== null ? null : S(d, c, p, x, null);
        tl(d, p);
      }
      return null;
    }
    function z(d, c, p, x, j) {
      if ((typeof x == 'string' && x !== '') || typeof x == 'number')
        return (d = d.get(p) || null), i(c, d, '' + x, j);
      if (typeof x == 'object' && x !== null) {
        switch (x.$$typeof) {
          case y:
            return (
              (d = d.get(x.key === null ? p : x.key) || null), s(c, d, x, j)
            );
          case F:
            return (
              (d = d.get(x.key === null ? p : x.key) || null), m(c, d, x, j)
            );
          case Z:
            var A = x._init;
            return z(d, c, p, A(x._payload), j);
        }
        if (An(x) || U(x)) return (d = d.get(p) || null), S(c, d, x, j, null);
        tl(c, x);
      }
      return null;
    }
    function O(d, c, p, x) {
      for (
        var j = null, A = null, W = c, V = (c = 0), Me = null;
        W !== null && V < p.length;
        V++
      ) {
        W.index > V ? ((Me = W), (W = null)) : (Me = W.sibling);
        var ae = w(d, W, p[V], x);
        if (ae === null) {
          W === null && (W = Me);
          break;
        }
        e && W && ae.alternate === null && t(d, W),
          (c = o(ae, c, V)),
          A === null ? (j = ae) : (A.sibling = ae),
          (A = ae),
          (W = Me);
      }
      if (V === p.length) return n(d, W), we && en(d, V), j;
      if (W === null) {
        for (; V < p.length; V++)
          (W = k(d, p[V], x)),
            W !== null &&
              ((c = o(W, c, V)),
              A === null ? (j = W) : (A.sibling = W),
              (A = W));
        return we && en(d, V), j;
      }
      for (W = r(d, W); V < p.length; V++)
        (Me = z(W, d, V, p[V], x)),
          Me !== null &&
            (e &&
              Me.alternate !== null &&
              W.delete(Me.key === null ? V : Me.key),
            (c = o(Me, c, V)),
            A === null ? (j = Me) : (A.sibling = Me),
            (A = Me));
      return (
        e &&
          W.forEach(function (Xt) {
            return t(d, Xt);
          }),
        we && en(d, V),
        j
      );
    }
    function D(d, c, p, x) {
      var j = U(p);
      if (typeof j != 'function') throw Error(a(150));
      if (((p = j.call(p)), p == null)) throw Error(a(151));
      for (
        var A = (j = null), W = c, V = (c = 0), Me = null, ae = p.next();
        W !== null && !ae.done;
        V++, ae = p.next()
      ) {
        W.index > V ? ((Me = W), (W = null)) : (Me = W.sibling);
        var Xt = w(d, W, ae.value, x);
        if (Xt === null) {
          W === null && (W = Me);
          break;
        }
        e && W && Xt.alternate === null && t(d, W),
          (c = o(Xt, c, V)),
          A === null ? (j = Xt) : (A.sibling = Xt),
          (A = Xt),
          (W = Me);
      }
      if (ae.done) return n(d, W), we && en(d, V), j;
      if (W === null) {
        for (; !ae.done; V++, ae = p.next())
          (ae = k(d, ae.value, x)),
            ae !== null &&
              ((c = o(ae, c, V)),
              A === null ? (j = ae) : (A.sibling = ae),
              (A = ae));
        return we && en(d, V), j;
      }
      for (W = r(d, W); !ae.done; V++, ae = p.next())
        (ae = z(W, d, V, ae.value, x)),
          ae !== null &&
            (e &&
              ae.alternate !== null &&
              W.delete(ae.key === null ? V : ae.key),
            (c = o(ae, c, V)),
            A === null ? (j = ae) : (A.sibling = ae),
            (A = ae));
      return (
        e &&
          W.forEach(function (Qf) {
            return t(d, Qf);
          }),
        we && en(d, V),
        j
      );
    }
    function _e(d, c, p, x) {
      if (
        (typeof p == 'object' &&
          p !== null &&
          p.type === M &&
          p.key === null &&
          (p = p.props.children),
        typeof p == 'object' && p !== null)
      ) {
        switch (p.$$typeof) {
          case y:
            e: {
              for (var j = p.key, A = c; A !== null; ) {
                if (A.key === j) {
                  if (((j = p.type), j === M)) {
                    if (A.tag === 7) {
                      n(d, A.sibling),
                        (c = l(A, p.props.children)),
                        (c.return = d),
                        (d = c);
                      break e;
                    }
                  } else if (
                    A.elementType === j ||
                    (typeof j == 'object' &&
                      j !== null &&
                      j.$$typeof === Z &&
                      ia(j) === A.type)
                  ) {
                    n(d, A.sibling),
                      (c = l(A, p.props)),
                      (c.ref = cr(d, A, p)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                  n(d, A);
                  break;
                } else t(d, A);
                A = A.sibling;
              }
              p.type === M
                ? ((c = sn(p.props.children, d.mode, x, p.key)),
                  (c.return = d),
                  (d = c))
                : ((x = _l(p.type, p.key, p.props, null, d.mode, x)),
                  (x.ref = cr(d, c, p)),
                  (x.return = d),
                  (d = x));
            }
            return u(d);
          case F:
            e: {
              for (A = p.key; c !== null; ) {
                if (c.key === A)
                  if (
                    c.tag === 4 &&
                    c.stateNode.containerInfo === p.containerInfo &&
                    c.stateNode.implementation === p.implementation
                  ) {
                    n(d, c.sibling),
                      (c = l(c, p.children || [])),
                      (c.return = d),
                      (d = c);
                    break e;
                  } else {
                    n(d, c);
                    break;
                  }
                else t(d, c);
                c = c.sibling;
              }
              (c = Cu(p, d.mode, x)), (c.return = d), (d = c);
            }
            return u(d);
          case Z:
            return (A = p._init), _e(d, c, A(p._payload), x);
        }
        if (An(p)) return O(d, c, p, x);
        if (U(p)) return D(d, c, p, x);
        tl(d, p);
      }
      return (typeof p == 'string' && p !== '') || typeof p == 'number'
        ? ((p = '' + p),
          c !== null && c.tag === 6
            ? (n(d, c.sibling), (c = l(c, p)), (c.return = d), (d = c))
            : (n(d, c), (c = ku(p, d.mode, x)), (c.return = d), (d = c)),
          u(d))
        : n(d, c);
    }
    return _e;
  }
  var Tn = aa(!0),
    sa = aa(!1),
    nl = Ut(null),
    rl = null,
    In = null,
    No = null;
  function Lo() {
    No = In = rl = null;
  }
  function Mo(e) {
    var t = nl.current;
    ge(nl), (e._currentValue = t);
  }
  function Oo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Pn(e, t) {
    (rl = e),
      (No = In = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Ye = !0), (e.firstContext = null));
  }
  function rt(e) {
    var t = e._currentValue;
    if (No !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), In === null)) {
        if (rl === null) throw Error(a(308));
        (In = e), (rl.dependencies = { lanes: 0, firstContext: e });
      } else In = In.next = e;
    return t;
  }
  var tn = null;
  function Do(e) {
    tn === null ? (tn = [e]) : tn.push(e);
  }
  function ca(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Do(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      _t(e, r)
    );
  }
  function _t(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ht = !1;
  function Fo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function fa(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Rt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function $t(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), le & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        _t(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Do(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      _t(e, n)
    );
  }
  function ll(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n);
    }
  }
  function da(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var u = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          o === null ? (l = o = u) : (o = o.next = u), (n = n.next);
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function ol(e, t, n, r) {
    var l = e.updateQueue;
    Ht = !1;
    var o = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      i = l.shared.pending;
    if (i !== null) {
      l.shared.pending = null;
      var s = i,
        m = s.next;
      (s.next = null), u === null ? (o = m) : (u.next = m), (u = s);
      var S = e.alternate;
      S !== null &&
        ((S = S.updateQueue),
        (i = S.lastBaseUpdate),
        i !== u &&
          (i === null ? (S.firstBaseUpdate = m) : (i.next = m),
          (S.lastBaseUpdate = s)));
    }
    if (o !== null) {
      var k = l.baseState;
      (u = 0), (S = m = s = null), (i = o);
      do {
        var w = i.lane,
          z = i.eventTime;
        if ((r & w) === w) {
          S !== null &&
            (S = S.next =
              {
                eventTime: z,
                lane: 0,
                tag: i.tag,
                payload: i.payload,
                callback: i.callback,
                next: null,
              });
          e: {
            var O = e,
              D = i;
            switch (((w = t), (z = n), D.tag)) {
              case 1:
                if (((O = D.payload), typeof O == 'function')) {
                  k = O.call(z, k, w);
                  break e;
                }
                k = O;
                break e;
              case 3:
                O.flags = (O.flags & -65537) | 128;
              case 0:
                if (
                  ((O = D.payload),
                  (w = typeof O == 'function' ? O.call(z, k, w) : O),
                  w == null)
                )
                  break e;
                k = I({}, k, w);
                break e;
              case 2:
                Ht = !0;
            }
          }
          i.callback !== null &&
            i.lane !== 0 &&
            ((e.flags |= 64),
            (w = l.effects),
            w === null ? (l.effects = [i]) : w.push(i));
        } else
          (z = {
            eventTime: z,
            lane: w,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            S === null ? ((m = S = z), (s = k)) : (S = S.next = z),
            (u |= w);
        if (((i = i.next), i === null)) {
          if (((i = l.shared.pending), i === null)) break;
          (w = i),
            (i = w.next),
            (w.next = null),
            (l.lastBaseUpdate = w),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (S === null && (s = k),
        (l.baseState = s),
        (l.firstBaseUpdate = m),
        (l.lastBaseUpdate = S),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (u |= l.lane), (l = l.next);
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      (ln |= u), (e.lanes = u), (e.memoizedState = k);
    }
  }
  function pa(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != 'function'))
            throw Error(a(191, l));
          l.call(r);
        }
      }
  }
  var fr = {},
    yt = Ut(fr),
    dr = Ut(fr),
    pr = Ut(fr);
  function nn(e) {
    if (e === fr) throw Error(a(174));
    return e;
  }
  function jo(e, t) {
    switch ((ve(pr, t), ve(dr, e), ve(yt, fr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : jl(null, '');
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = jl(t, e));
    }
    ge(yt), ve(yt, t);
  }
  function zn() {
    ge(yt), ge(dr), ge(pr);
  }
  function ma(e) {
    nn(pr.current);
    var t = nn(yt.current),
      n = jl(t, e.type);
    t !== n && (ve(dr, e), ve(yt, n));
  }
  function Uo(e) {
    dr.current === e && (ge(yt), ge(dr));
  }
  var ke = Ut(0);
  function ul(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Ao = [];
  function Wo() {
    for (var e = 0; e < Ao.length; e++)
      Ao[e]._workInProgressVersionPrimary = null;
    Ao.length = 0;
  }
  var il = me.ReactCurrentDispatcher,
    Ho = me.ReactCurrentBatchConfig,
    rn = 0,
    Ce = null,
    Pe = null,
    Ne = null,
    al = !1,
    mr = !1,
    hr = 0,
    mf = 0;
  function Ae() {
    throw Error(a(321));
  }
  function $o(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!at(e[n], t[n])) return !1;
    return !0;
  }
  function Vo(e, t, n, r, l, o) {
    if (
      ((rn = o),
      (Ce = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (il.current = e === null || e.memoizedState === null ? gf : wf),
      (e = n(r, l)),
      mr)
    ) {
      o = 0;
      do {
        if (((mr = !1), (hr = 0), 25 <= o)) throw Error(a(301));
        (o += 1),
          (Ne = Pe = null),
          (t.updateQueue = null),
          (il.current = Sf),
          (e = n(r, l));
      } while (mr);
    }
    if (
      ((il.current = fl),
      (t = Pe !== null && Pe.next !== null),
      (rn = 0),
      (Ne = Pe = Ce = null),
      (al = !1),
      t)
    )
      throw Error(a(300));
    return e;
  }
  function Bo() {
    var e = hr !== 0;
    return (hr = 0), e;
  }
  function gt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ne === null ? (Ce.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne;
  }
  function lt() {
    if (Pe === null) {
      var e = Ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Pe.next;
    var t = Ne === null ? Ce.memoizedState : Ne.next;
    if (t !== null) (Ne = t), (Pe = e);
    else {
      if (e === null) throw Error(a(310));
      (Pe = e),
        (e = {
          memoizedState: Pe.memoizedState,
          baseState: Pe.baseState,
          baseQueue: Pe.baseQueue,
          queue: Pe.queue,
          next: null,
        }),
        Ne === null ? (Ce.memoizedState = Ne = e) : (Ne = Ne.next = e);
    }
    return Ne;
  }
  function vr(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Qo(e) {
    var t = lt(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = Pe,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var u = l.next;
        (l.next = o.next), (o.next = u);
      }
      (r.baseQueue = l = o), (n.pending = null);
    }
    if (l !== null) {
      (o = l.next), (r = r.baseState);
      var i = (u = null),
        s = null,
        m = o;
      do {
        var S = m.lane;
        if ((rn & S) === S)
          s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: m.action,
                hasEagerState: m.hasEagerState,
                eagerState: m.eagerState,
                next: null,
              }),
            (r = m.hasEagerState ? m.eagerState : e(r, m.action));
        else {
          var k = {
            lane: S,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          };
          s === null ? ((i = s = k), (u = r)) : (s = s.next = k),
            (Ce.lanes |= S),
            (ln |= S);
        }
        m = m.next;
      } while (m !== null && m !== o);
      s === null ? (u = r) : (s.next = i),
        at(r, t.memoizedState) || (Ye = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = s),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (o = l.lane), (Ce.lanes |= o), (ln |= o), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ko(e) {
    var t = lt(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do (o = e(o, u.action)), (u = u.next);
      while (u !== l);
      at(o, t.memoizedState) || (Ye = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function ha() {}
  function va(e, t) {
    var n = Ce,
      r = lt(),
      l = t(),
      o = !at(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Ye = !0)),
      (r = r.queue),
      Yo(wa.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Ne !== null && Ne.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        yr(9, ga.bind(null, n, r, l, t), void 0, null),
        Le === null)
      )
        throw Error(a(349));
      rn & 30 || ya(n, t, l);
    }
    return l;
  }
  function ya(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ce.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ce.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function ga(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Sa(t) && ka(e);
  }
  function wa(e, t, n) {
    return n(function () {
      Sa(t) && ka(e);
    });
  }
  function Sa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !at(e, n);
    } catch {
      return !0;
    }
  }
  function ka(e) {
    var t = _t(e, 1);
    t !== null && pt(t, e, 1, -1);
  }
  function Ca(e) {
    var t = gt();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = yf.bind(null, Ce, e)),
      [t.memoizedState, e]
    );
  }
  function yr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Ce.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ce.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Ea() {
    return lt().memoizedState;
  }
  function sl(e, t, n, r) {
    var l = gt();
    (Ce.flags |= e),
      (l.memoizedState = yr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function cl(e, t, n, r) {
    var l = lt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Pe !== null) {
      var u = Pe.memoizedState;
      if (((o = u.destroy), r !== null && $o(r, u.deps))) {
        l.memoizedState = yr(t, n, o, r);
        return;
      }
    }
    (Ce.flags |= e), (l.memoizedState = yr(1 | t, n, o, r));
  }
  function xa(e, t) {
    return sl(8390656, 8, e, t);
  }
  function Yo(e, t) {
    return cl(2048, 8, e, t);
  }
  function _a(e, t) {
    return cl(4, 2, e, t);
  }
  function Ra(e, t) {
    return cl(4, 4, e, t);
  }
  function Ta(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Ia(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), cl(4, 4, Ta.bind(null, t, e), n)
    );
  }
  function Go() {}
  function Pa(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $o(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function za(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $o(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Na(e, t, n) {
    return rn & 21
      ? (at(n, t) ||
          ((n = ii()), (Ce.lanes |= n), (ln |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Ye = !0)), (e.memoizedState = n));
  }
  function hf(e, t) {
    var n = pe;
    (pe = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Ho.transition;
    Ho.transition = {};
    try {
      e(!1), t();
    } finally {
      (pe = n), (Ho.transition = r);
    }
  }
  function La() {
    return lt().memoizedState;
  }
  function vf(e, t, n) {
    var r = Kt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ma(e))
    )
      Oa(t, n);
    else if (((n = ca(e, t, n, r)), n !== null)) {
      var l = Be();
      pt(n, e, r, l), Da(n, t, r);
    }
  }
  function yf(e, t, n) {
    var r = Kt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Ma(e)) Oa(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var u = t.lastRenderedState,
            i = o(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = i), at(i, u))) {
            var s = t.interleaved;
            s === null
              ? ((l.next = l), Do(t))
              : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = ca(e, t, l, r)),
        n !== null && ((l = Be()), pt(n, e, r, l), Da(n, t, r));
    }
  }
  function Ma(e) {
    var t = e.alternate;
    return e === Ce || (t !== null && t === Ce);
  }
  function Oa(e, t) {
    mr = al = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Da(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n);
    }
  }
  var fl = {
      readContext: rt,
      useCallback: Ae,
      useContext: Ae,
      useEffect: Ae,
      useImperativeHandle: Ae,
      useInsertionEffect: Ae,
      useLayoutEffect: Ae,
      useMemo: Ae,
      useReducer: Ae,
      useRef: Ae,
      useState: Ae,
      useDebugValue: Ae,
      useDeferredValue: Ae,
      useTransition: Ae,
      useMutableSource: Ae,
      useSyncExternalStore: Ae,
      useId: Ae,
      unstable_isNewReconciler: !1,
    },
    gf = {
      readContext: rt,
      useCallback: function (e, t) {
        return (gt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: rt,
      useEffect: xa,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          sl(4194308, 4, Ta.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return sl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return sl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = gt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = gt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = vf.bind(null, Ce, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = gt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Ca,
      useDebugValue: Go,
      useDeferredValue: function (e) {
        return (gt().memoizedState = e);
      },
      useTransition: function () {
        var e = Ca(!1),
          t = e[0];
        return (e = hf.bind(null, e[1])), (gt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Ce,
          l = gt();
        if (we) {
          if (n === void 0) throw Error(a(407));
          n = n();
        } else {
          if (((n = t()), Le === null)) throw Error(a(349));
          rn & 30 || ya(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          xa(wa.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          yr(9, ga.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = gt(),
          t = Le.identifierPrefix;
        if (we) {
          var n = xt,
            r = Et;
          (n = (r & ~(1 << (32 - it(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = hr++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':');
        } else (n = mf++), (t = ':' + t + 'r' + n.toString(32) + ':');
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    wf = {
      readContext: rt,
      useCallback: Pa,
      useContext: rt,
      useEffect: Yo,
      useImperativeHandle: Ia,
      useInsertionEffect: _a,
      useLayoutEffect: Ra,
      useMemo: za,
      useReducer: Qo,
      useRef: Ea,
      useState: function () {
        return Qo(vr);
      },
      useDebugValue: Go,
      useDeferredValue: function (e) {
        var t = lt();
        return Na(t, Pe.memoizedState, e);
      },
      useTransition: function () {
        var e = Qo(vr)[0],
          t = lt().memoizedState;
        return [e, t];
      },
      useMutableSource: ha,
      useSyncExternalStore: va,
      useId: La,
      unstable_isNewReconciler: !1,
    },
    Sf = {
      readContext: rt,
      useCallback: Pa,
      useContext: rt,
      useEffect: Yo,
      useImperativeHandle: Ia,
      useInsertionEffect: _a,
      useLayoutEffect: Ra,
      useMemo: za,
      useReducer: Ko,
      useRef: Ea,
      useState: function () {
        return Ko(vr);
      },
      useDebugValue: Go,
      useDeferredValue: function (e) {
        var t = lt();
        return Pe === null ? (t.memoizedState = e) : Na(t, Pe.memoizedState, e);
      },
      useTransition: function () {
        var e = Ko(vr)[0],
          t = lt().memoizedState;
        return [e, t];
      },
      useMutableSource: ha,
      useSyncExternalStore: va,
      useId: La,
      unstable_isNewReconciler: !1,
    };
  function ct(e, t) {
    if (e && e.defaultProps) {
      (t = I({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Xo(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : I({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var dl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Zt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Be(),
        l = Kt(e),
        o = Rt(r, l);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = $t(e, o, l)),
        t !== null && (pt(t, e, l, r), ll(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Be(),
        l = Kt(e),
        o = Rt(r, l);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = $t(e, o, l)),
        t !== null && (pt(t, e, l, r), ll(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Be(),
        r = Kt(e),
        l = Rt(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = $t(e, l, r)),
        t !== null && (pt(t, e, r, n), ll(t, e, r));
    },
  };
  function Fa(e, t, n, r, l, o, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, o, u)
        : t.prototype && t.prototype.isPureReactComponent
          ? !rr(n, r) || !rr(l, o)
          : !0
    );
  }
  function ja(e, t, n) {
    var r = !1,
      l = At,
      o = t.contextType;
    return (
      typeof o == 'object' && o !== null
        ? (o = rt(o))
        : ((l = Ke(t) ? qt : Ue.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? En(e, l) : At)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = dl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Ua(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && dl.enqueueReplaceState(t, t.state, null);
  }
  function Zo(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Fo(e);
    var o = t.contextType;
    typeof o == 'object' && o !== null
      ? (l.context = rt(o))
      : ((o = Ke(t) ? qt : Ue.current), (l.context = En(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == 'function' && (Xo(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function' ||
        (typeof l.UNSAFE_componentWillMount != 'function' &&
          typeof l.componentWillMount != 'function') ||
        ((t = l.state),
        typeof l.componentWillMount == 'function' && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == 'function' &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && dl.enqueueReplaceState(l, l.state, null),
        ol(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
  }
  function Nn(e, t) {
    try {
      var n = '',
        r = t;
      do (n += b(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Jo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function qo(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var kf = typeof WeakMap == 'function' ? WeakMap : Map;
  function Aa(e, t, n) {
    (n = Rt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        wl || ((wl = !0), (pu = r)), qo(e, t);
      }),
      n
    );
  }
  function Wa(e, t, n) {
    (n = Rt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          qo(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == 'function' &&
        (n.callback = function () {
          qo(e, t),
            typeof r != 'function' &&
              (Bt === null ? (Bt = new Set([this])) : Bt.add(this));
          var u = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: u !== null ? u : '',
          });
        }),
      n
    );
  }
  function Ha(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new kf();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Df.bind(null, e, t, n)), t.then(e, e));
  }
  function $a(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Va(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Rt(-1, 1)), (t.tag = 2), $t(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var Cf = me.ReactCurrentOwner,
    Ye = !1;
  function Ve(e, t, n, r) {
    t.child = e === null ? sa(t, null, n, r) : Tn(t, e.child, n, r);
  }
  function Ba(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      Pn(t, l),
      (r = Vo(e, t, n, r, o, l)),
      (n = Bo()),
      e !== null && !Ye
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Tt(e, t, l))
        : (we && n && Ro(t), (t.flags |= 1), Ve(e, t, r, l), t.child)
    );
  }
  function Qa(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == 'function' &&
        !Su(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Ka(e, t, o, r, l))
        : ((e = _l(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !(e.lanes & l))) {
      var u = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : rr), n(u, r) && e.ref === t.ref)
      )
        return Tt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Gt(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ka(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (rr(o, r) && e.ref === t.ref)
        if (((Ye = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          e.flags & 131072 && (Ye = !0);
        else return (t.lanes = e.lanes), Tt(e, t, l);
    }
    return bo(e, t, n, r, l);
  }
  function Ya(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ve(Mn, et),
          (et |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ve(Mn, et),
            (et |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          ve(Mn, et),
          (et |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ve(Mn, et),
        (et |= r);
    return Ve(e, t, l, n), t.child;
  }
  function Ga(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function bo(e, t, n, r, l) {
    var o = Ke(n) ? qt : Ue.current;
    return (
      (o = En(t, o)),
      Pn(t, l),
      (n = Vo(e, t, n, r, o, l)),
      (r = Bo()),
      e !== null && !Ye
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Tt(e, t, l))
        : (we && r && Ro(t), (t.flags |= 1), Ve(e, t, n, l), t.child)
    );
  }
  function Xa(e, t, n, r, l) {
    if (Ke(n)) {
      var o = !0;
      Zr(t);
    } else o = !1;
    if ((Pn(t, l), t.stateNode === null))
      ml(e, t), ja(t, n, r), Zo(t, n, r, l), (r = !0);
    else if (e === null) {
      var u = t.stateNode,
        i = t.memoizedProps;
      u.props = i;
      var s = u.context,
        m = n.contextType;
      typeof m == 'object' && m !== null
        ? (m = rt(m))
        : ((m = Ke(n) ? qt : Ue.current), (m = En(t, m)));
      var S = n.getDerivedStateFromProps,
        k =
          typeof S == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function';
      k ||
        (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof u.componentWillReceiveProps != 'function') ||
        ((i !== r || s !== m) && Ua(t, u, r, m)),
        (Ht = !1);
      var w = t.memoizedState;
      (u.state = w),
        ol(t, r, u, l),
        (s = t.memoizedState),
        i !== r || w !== s || Qe.current || Ht
          ? (typeof S == 'function' && (Xo(t, n, S, r), (s = t.memoizedState)),
            (i = Ht || Fa(t, n, i, r, w, s, m))
              ? (k ||
                  (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                  (typeof u.componentWillMount == 'function' &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (u.props = r),
            (u.state = s),
            (u.context = m),
            (r = i))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
            (r = !1));
    } else {
      (u = t.stateNode),
        fa(e, t),
        (i = t.memoizedProps),
        (m = t.type === t.elementType ? i : ct(t.type, i)),
        (u.props = m),
        (k = t.pendingProps),
        (w = u.context),
        (s = n.contextType),
        typeof s == 'object' && s !== null
          ? (s = rt(s))
          : ((s = Ke(n) ? qt : Ue.current), (s = En(t, s)));
      var z = n.getDerivedStateFromProps;
      (S =
        typeof z == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function') ||
        (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof u.componentWillReceiveProps != 'function') ||
        ((i !== k || w !== s) && Ua(t, u, r, s)),
        (Ht = !1),
        (w = t.memoizedState),
        (u.state = w),
        ol(t, r, u, l);
      var O = t.memoizedState;
      i !== k || w !== O || Qe.current || Ht
        ? (typeof z == 'function' && (Xo(t, n, z, r), (O = t.memoizedState)),
          (m = Ht || Fa(t, n, m, r, w, O, s) || !1)
            ? (S ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' &&
                  u.componentWillUpdate(r, O, s),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(r, O, s)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (i === e.memoizedProps && w === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (i === e.memoizedProps && w === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = O)),
          (u.props = r),
          (u.state = O),
          (u.context = s),
          (r = m))
        : (typeof u.componentDidUpdate != 'function' ||
            (i === e.memoizedProps && w === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (i === e.memoizedProps && w === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return eu(e, t, n, r, o, l);
  }
  function eu(e, t, n, r, l, o) {
    Ga(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return l && ea(t, n, !1), Tt(e, t, o);
    (r = t.stateNode), (Cf.current = t);
    var i =
      u && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = Tn(t, e.child, null, o)), (t.child = Tn(t, null, i, o)))
        : Ve(e, t, i, o),
      (t.memoizedState = r.state),
      l && ea(t, n, !0),
      t.child
    );
  }
  function Za(e) {
    var t = e.stateNode;
    t.pendingContext
      ? qi(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && qi(e, t.context, !1),
      jo(e, t.containerInfo);
  }
  function Ja(e, t, n, r, l) {
    return Rn(), zo(l), (t.flags |= 256), Ve(e, t, n, r), t.child;
  }
  var tu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function nu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function qa(e, t, n) {
    var r = t.pendingProps,
      l = ke.current,
      o = !1,
      u = (t.flags & 128) !== 0,
      i;
    if (
      ((i = u) ||
        (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      i
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      ve(ke, l & 1),
      e === null)
    )
      return (
        Po(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === '$!'
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((u = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (u = { mode: 'hidden', children: u }),
                !(r & 1) && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = u))
                  : (o = Rl(u, r, 0, null)),
                (e = sn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = nu(n)),
                (t.memoizedState = tu),
                e)
              : ru(t, u))
      );
    if (((l = e.memoizedState), l !== null && ((i = l.dehydrated), i !== null)))
      return Ef(e, t, u, r, i, l, n);
    if (o) {
      (o = r.fallback), (u = t.mode), (l = e.child), (i = l.sibling);
      var s = { mode: 'hidden', children: r.children };
      return (
        !(u & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = s),
            (t.deletions = null))
          : ((r = Gt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        i !== null ? (o = Gt(i, o)) : ((o = sn(o, u, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? nu(n)
            : {
                baseLanes: u.baseLanes | n,
                cachePool: null,
                transitions: u.transitions,
              }),
        (o.memoizedState = u),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = tu),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = Gt(o, { mode: 'visible', children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function ru(e, t) {
    return (
      (t = Rl({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function pl(e, t, n, r) {
    return (
      r !== null && zo(r),
      Tn(t, e.child, null, n),
      (e = ru(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ef(e, t, n, r, l, o, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Jo(Error(a(422)))), pl(e, t, u, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = Rl({ mode: 'visible', children: r.children }, l, 0, null)),
            (o = sn(o, l, u, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            t.mode & 1 && Tn(t, e.child, null, u),
            (t.child.memoizedState = nu(u)),
            (t.memoizedState = tu),
            o);
    if (!(t.mode & 1)) return pl(e, t, u, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var i = r.dgst;
      return (
        (r = i), (o = Error(a(419))), (r = Jo(o, r, void 0)), pl(e, t, u, r)
      );
    }
    if (((i = (u & e.childLanes) !== 0), Ye || i)) {
      if (((r = Le), r !== null)) {
        switch (u & -u) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | u) ? 0 : l),
          l !== 0 &&
            l !== o.retryLane &&
            ((o.retryLane = l), _t(e, l), pt(r, e, l, -1));
      }
      return wu(), (r = Jo(Error(a(421)))), pl(e, t, u, r);
    }
    return l.data === '$?'
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Ff.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (be = jt(l.nextSibling)),
        (qe = t),
        (we = !0),
        (st = null),
        e !== null &&
          ((tt[nt++] = Et),
          (tt[nt++] = xt),
          (tt[nt++] = bt),
          (Et = e.id),
          (xt = e.overflow),
          (bt = t)),
        (t = ru(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function ba(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Oo(e.return, t, n);
  }
  function lu(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function es(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((Ve(e, t, r.children, n), (r = ke.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && ba(e, n, t);
          else if (e.tag === 19) ba(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((ve(ke, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && ul(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            lu(t, !1, l, n, o);
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && ul(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          lu(t, !0, n, null, o);
          break;
        case 'together':
          lu(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function ml(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Tt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (ln |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Gt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Gt(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function xf(e, t, n) {
    switch (t.tag) {
      case 3:
        Za(t), Rn();
        break;
      case 5:
        ma(t);
        break;
      case 1:
        Ke(t.type) && Zr(t);
        break;
      case 4:
        jo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        ve(nl, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ve(ke, ke.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
              ? qa(e, t, n)
              : (ve(ke, ke.current & 1),
                (e = Tt(e, t, n)),
                e !== null ? e.sibling : null);
        ve(ke, ke.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return es(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ve(ke, ke.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Ya(e, t, n);
    }
    return Tt(e, t, n);
  }
  var ts, ou, ns, rs;
  (ts = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (ou = function () {}),
    (ns = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), nn(yt.current);
        var o = null;
        switch (n) {
          case 'input':
            (l = Un(e, l)), (r = Un(e, r)), (o = []);
            break;
          case 'select':
            (l = I({}, l, { value: void 0 })),
              (r = I({}, r, { value: void 0 })),
              (o = []);
            break;
          case 'textarea':
            (l = Fl(e, l)), (r = Fl(e, r)), (o = []);
            break;
          default:
            typeof l.onClick != 'function' &&
              typeof r.onClick == 'function' &&
              (e.onclick = Yr);
        }
        Ul(n, r);
        var u;
        n = null;
        for (m in l)
          if (!r.hasOwnProperty(m) && l.hasOwnProperty(m) && l[m] != null)
            if (m === 'style') {
              var i = l[m];
              for (u in i) i.hasOwnProperty(u) && (n || (n = {}), (n[u] = ''));
            } else
              m !== 'dangerouslySetInnerHTML' &&
                m !== 'children' &&
                m !== 'suppressContentEditableWarning' &&
                m !== 'suppressHydrationWarning' &&
                m !== 'autoFocus' &&
                (E.hasOwnProperty(m)
                  ? o || (o = [])
                  : (o = o || []).push(m, null));
        for (m in r) {
          var s = r[m];
          if (
            ((i = l != null ? l[m] : void 0),
            r.hasOwnProperty(m) && s !== i && (s != null || i != null))
          )
            if (m === 'style')
              if (i) {
                for (u in i)
                  !i.hasOwnProperty(u) ||
                    (s && s.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ''));
                for (u in s)
                  s.hasOwnProperty(u) &&
                    i[u] !== s[u] &&
                    (n || (n = {}), (n[u] = s[u]));
              } else n || (o || (o = []), o.push(m, n)), (n = s);
            else
              m === 'dangerouslySetInnerHTML'
                ? ((s = s ? s.__html : void 0),
                  (i = i ? i.__html : void 0),
                  s != null && i !== s && (o = o || []).push(m, s))
                : m === 'children'
                  ? (typeof s != 'string' && typeof s != 'number') ||
                    (o = o || []).push(m, '' + s)
                  : m !== 'suppressContentEditableWarning' &&
                    m !== 'suppressHydrationWarning' &&
                    (E.hasOwnProperty(m)
                      ? (s != null && m === 'onScroll' && ye('scroll', e),
                        o || i === s || (o = []))
                      : (o = o || []).push(m, s));
        }
        n && (o = o || []).push('style', n);
        var m = o;
        (t.updateQueue = m) && (t.flags |= 4);
      }
    }),
    (rs = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function gr(e, t) {
    if (!we)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function We(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function _f(e, t, n) {
    var r = t.pendingProps;
    switch ((To(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return We(t), null;
      case 1:
        return Ke(t.type) && Xr(), We(t), null;
      case 3:
        return (
          (r = t.stateNode),
          zn(),
          ge(Qe),
          ge(Ue),
          Wo(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (el(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), st !== null && (vu(st), (st = null)))),
          ou(e, t),
          We(t),
          null
        );
      case 5:
        Uo(t);
        var l = nn(pr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          ns(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return We(t), null;
          }
          if (((e = nn(yt.current)), el(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[vt] = t), (r[ar] = o), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                ye('cancel', r), ye('close', r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ye('load', r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < or.length; l++) ye(or[l], r);
                break;
              case 'source':
                ye('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ye('error', r), ye('load', r);
                break;
              case 'details':
                ye('toggle', r);
                break;
              case 'input':
                ju(r, o), ye('invalid', r);
                break;
              case 'select':
                (r._wrapperState = { wasMultiple: !!o.multiple }),
                  ye('invalid', r);
                break;
              case 'textarea':
                Wu(r, o), ye('invalid', r);
            }
            Ul(n, o), (l = null);
            for (var u in o)
              if (o.hasOwnProperty(u)) {
                var i = o[u];
                u === 'children'
                  ? typeof i == 'string'
                    ? r.textContent !== i &&
                      (o.suppressHydrationWarning !== !0 &&
                        Kr(r.textContent, i, e),
                      (l = ['children', i]))
                    : typeof i == 'number' &&
                      r.textContent !== '' + i &&
                      (o.suppressHydrationWarning !== !0 &&
                        Kr(r.textContent, i, e),
                      (l = ['children', '' + i]))
                  : E.hasOwnProperty(u) &&
                    i != null &&
                    u === 'onScroll' &&
                    ye('scroll', r);
              }
            switch (n) {
              case 'input':
                mt(r), Au(r, o, !0);
                break;
              case 'textarea':
                mt(r), $u(r);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof o.onClick == 'function' && (r.onclick = Yr);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (u = l.nodeType === 9 ? l : l.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = Vu(n)),
              e === 'http://www.w3.org/1999/xhtml'
                ? n === 'script'
                  ? ((e = u.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == 'string'
                    ? (e = u.createElement(n, { is: r.is }))
                    : ((e = u.createElement(n)),
                      n === 'select' &&
                        ((u = e),
                        r.multiple
                          ? (u.multiple = !0)
                          : r.size && (u.size = r.size)))
                : (e = u.createElementNS(e, n)),
              (e[vt] = t),
              (e[ar] = r),
              ts(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((u = Al(n, r)), n)) {
                case 'dialog':
                  ye('cancel', e), ye('close', e), (l = r);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  ye('load', e), (l = r);
                  break;
                case 'video':
                case 'audio':
                  for (l = 0; l < or.length; l++) ye(or[l], e);
                  l = r;
                  break;
                case 'source':
                  ye('error', e), (l = r);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  ye('error', e), ye('load', e), (l = r);
                  break;
                case 'details':
                  ye('toggle', e), (l = r);
                  break;
                case 'input':
                  ju(e, r), (l = Un(e, r)), ye('invalid', e);
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = I({}, r, { value: void 0 })),
                    ye('invalid', e);
                  break;
                case 'textarea':
                  Wu(e, r), (l = Fl(e, r)), ye('invalid', e);
                  break;
                default:
                  l = r;
              }
              Ul(n, l), (i = l);
              for (o in i)
                if (i.hasOwnProperty(o)) {
                  var s = i[o];
                  o === 'style'
                    ? Ku(e, s)
                    : o === 'dangerouslySetInnerHTML'
                      ? ((s = s ? s.__html : void 0), s != null && Bu(e, s))
                      : o === 'children'
                        ? typeof s == 'string'
                          ? (n !== 'textarea' || s !== '') && Wn(e, s)
                          : typeof s == 'number' && Wn(e, '' + s)
                        : o !== 'suppressContentEditableWarning' &&
                          o !== 'suppressHydrationWarning' &&
                          o !== 'autoFocus' &&
                          (E.hasOwnProperty(o)
                            ? s != null && o === 'onScroll' && ye('scroll', e)
                            : s != null && Se(e, o, s, u));
                }
              switch (n) {
                case 'input':
                  mt(e), Au(e, r, !1);
                  break;
                case 'textarea':
                  mt(e), $u(e);
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + fe(r.value));
                  break;
                case 'select':
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? fn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        fn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == 'function' && (e.onclick = Yr);
              }
              switch (n) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  r = !!r.autoFocus;
                  break e;
                case 'img':
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return We(t), null;
      case 6:
        if (e && t.stateNode != null) rs(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(a(166));
          if (((n = nn(pr.current)), nn(yt.current), el(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[vt] = t),
              (o = r.nodeValue !== n) && ((e = qe), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Kr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Kr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[vt] = t),
              (t.stateNode = r);
        }
        return We(t), null;
      case 13:
        if (
          (ge(ke),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (we && be !== null && t.mode & 1 && !(t.flags & 128))
            ua(), Rn(), (t.flags |= 98560), (o = !1);
          else if (((o = el(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(a(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(a(317));
              o[vt] = t;
            } else
              Rn(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            We(t), (o = !1);
          } else st !== null && (vu(st), (st = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || ke.current & 1 ? ze === 0 && (ze = 3) : wu())),
            t.updateQueue !== null && (t.flags |= 4),
            We(t),
            null);
      case 4:
        return (
          zn(),
          ou(e, t),
          e === null && ur(t.stateNode.containerInfo),
          We(t),
          null
        );
      case 10:
        return Mo(t.type._context), We(t), null;
      case 17:
        return Ke(t.type) && Xr(), We(t), null;
      case 19:
        if ((ge(ke), (o = t.memoizedState), o === null)) return We(t), null;
        if (((r = (t.flags & 128) !== 0), (u = o.rendering), u === null))
          if (r) gr(o, !1);
          else {
            if (ze !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((u = ul(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      gr(o, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (u = o.alternate),
                      u === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = u.childLanes),
                          (o.lanes = u.lanes),
                          (o.child = u.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = u.memoizedProps),
                          (o.memoizedState = u.memoizedState),
                          (o.updateQueue = u.updateQueue),
                          (o.type = u.type),
                          (e = u.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return ve(ke, (ke.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              xe() > On &&
              ((t.flags |= 128), (r = !0), gr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = ul(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                gr(o, !0),
                o.tail === null &&
                  o.tailMode === 'hidden' &&
                  !u.alternate &&
                  !we)
              )
                return We(t), null;
            } else
              2 * xe() - o.renderingStartTime > On &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), gr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = o.last),
              n !== null ? (n.sibling = u) : (t.child = u),
              (o.last = u));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = xe()),
            (t.sibling = null),
            (n = ke.current),
            ve(ke, r ? (n & 1) | 2 : n & 1),
            t)
          : (We(t), null);
      case 22:
      case 23:
        return (
          gu(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? et & 1073741824 &&
              (We(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : We(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function Rf(e, t) {
    switch ((To(t), t.tag)) {
      case 1:
        return (
          Ke(t.type) && Xr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          zn(),
          ge(Qe),
          ge(Ue),
          Wo(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Uo(t), null;
      case 13:
        if (
          (ge(ke), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(a(340));
          Rn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ge(ke), null;
      case 4:
        return zn(), null;
      case 10:
        return Mo(t.type._context), null;
      case 22:
      case 23:
        return gu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var hl = !1,
    He = !1,
    Tf = typeof WeakSet == 'function' ? WeakSet : Set,
    L = null;
  function Ln(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          Ee(e, t, r);
        }
      else n.current = null;
  }
  function uu(e, t, n) {
    try {
      n();
    } catch (r) {
      Ee(e, t, r);
    }
  }
  var ls = !1;
  function If(e, t) {
    if (((go = Dr), (e = Fi()), so(e))) {
      if ('selectionStart' in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var u = 0,
              i = -1,
              s = -1,
              m = 0,
              S = 0,
              k = e,
              w = null;
            t: for (;;) {
              for (
                var z;
                k !== n || (l !== 0 && k.nodeType !== 3) || (i = u + l),
                  k !== o || (r !== 0 && k.nodeType !== 3) || (s = u + r),
                  k.nodeType === 3 && (u += k.nodeValue.length),
                  (z = k.firstChild) !== null;

              )
                (w = k), (k = z);
              for (;;) {
                if (k === e) break t;
                if (
                  (w === n && ++m === l && (i = u),
                  w === o && ++S === r && (s = u),
                  (z = k.nextSibling) !== null)
                )
                  break;
                (k = w), (w = k.parentNode);
              }
              k = z;
            }
            n = i === -1 || s === -1 ? null : { start: i, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      wo = { focusedElem: e, selectionRange: n }, Dr = !1, L = t;
      L !== null;

    )
      if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (L = e);
      else
        for (; L !== null; ) {
          t = L;
          try {
            var O = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (O !== null) {
                    var D = O.memoizedProps,
                      _e = O.memoizedState,
                      d = t.stateNode,
                      c = d.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? D : ct(t.type, D),
                        _e
                      );
                    d.__reactInternalSnapshotBeforeUpdate = c;
                  }
                  break;
                case 3:
                  var p = t.stateNode.containerInfo;
                  p.nodeType === 1
                    ? (p.textContent = '')
                    : p.nodeType === 9 &&
                      p.documentElement &&
                      p.removeChild(p.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch (x) {
            Ee(t, t.return, x);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (L = e);
            break;
          }
          L = t.return;
        }
    return (O = ls), (ls = !1), O;
  }
  function wr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          (l.destroy = void 0), o !== void 0 && uu(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function vl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function iu(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == 'function' ? t(e) : (t.current = e);
    }
  }
  function os(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), os(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[vt],
          delete t[ar],
          delete t[Eo],
          delete t[cf],
          delete t[ff])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function us(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function is(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || us(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function au(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Yr));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (au(e, t, n), e = e.sibling; e !== null; )
        au(e, t, n), (e = e.sibling);
  }
  function su(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (su(e, t, n), e = e.sibling; e !== null; )
        su(e, t, n), (e = e.sibling);
  }
  var Oe = null,
    ft = !1;
  function Vt(e, t, n) {
    for (n = n.child; n !== null; ) as(e, t, n), (n = n.sibling);
  }
  function as(e, t, n) {
    if (ht && typeof ht.onCommitFiberUnmount == 'function')
      try {
        ht.onCommitFiberUnmount(Pr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        He || Ln(n, t);
      case 6:
        var r = Oe,
          l = ft;
        (Oe = null),
          Vt(e, t, n),
          (Oe = r),
          (ft = l),
          Oe !== null &&
            (ft
              ? ((e = Oe),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Oe.removeChild(n.stateNode));
        break;
      case 18:
        Oe !== null &&
          (ft
            ? ((e = Oe),
              (n = n.stateNode),
              e.nodeType === 8
                ? Co(e.parentNode, n)
                : e.nodeType === 1 && Co(e, n),
              Jn(e))
            : Co(Oe, n.stateNode));
        break;
      case 4:
        (r = Oe),
          (l = ft),
          (Oe = n.stateNode.containerInfo),
          (ft = !0),
          Vt(e, t, n),
          (Oe = r),
          (ft = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !He &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var o = l,
              u = o.destroy;
            (o = o.tag),
              u !== void 0 && (o & 2 || o & 4) && uu(n, t, u),
              (l = l.next);
          } while (l !== r);
        }
        Vt(e, t, n);
        break;
      case 1:
        if (
          !He &&
          (Ln(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == 'function')
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (i) {
            Ee(n, t, i);
          }
        Vt(e, t, n);
        break;
      case 21:
        Vt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((He = (r = He) || n.memoizedState !== null), Vt(e, t, n), (He = r))
          : Vt(e, t, n);
        break;
      default:
        Vt(e, t, n);
    }
  }
  function ss(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Tf()),
        t.forEach(function (r) {
          var l = jf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function dt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            u = t,
            i = u;
          e: for (; i !== null; ) {
            switch (i.tag) {
              case 5:
                (Oe = i.stateNode), (ft = !1);
                break e;
              case 3:
                (Oe = i.stateNode.containerInfo), (ft = !0);
                break e;
              case 4:
                (Oe = i.stateNode.containerInfo), (ft = !0);
                break e;
            }
            i = i.return;
          }
          if (Oe === null) throw Error(a(160));
          as(o, u, l), (Oe = null), (ft = !1);
          var s = l.alternate;
          s !== null && (s.return = null), (l.return = null);
        } catch (m) {
          Ee(l, t, m);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) cs(t, e), (t = t.sibling);
  }
  function cs(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((dt(t, e), wt(e), r & 4)) {
          try {
            wr(3, e, e.return), vl(3, e);
          } catch (D) {
            Ee(e, e.return, D);
          }
          try {
            wr(5, e, e.return);
          } catch (D) {
            Ee(e, e.return, D);
          }
        }
        break;
      case 1:
        dt(t, e), wt(e), r & 512 && n !== null && Ln(n, n.return);
        break;
      case 5:
        if (
          (dt(t, e),
          wt(e),
          r & 512 && n !== null && Ln(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Wn(l, '');
          } catch (D) {
            Ee(e, e.return, D);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            u = n !== null ? n.memoizedProps : o,
            i = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              i === 'input' && o.type === 'radio' && o.name != null && Uu(l, o),
                Al(i, u);
              var m = Al(i, o);
              for (u = 0; u < s.length; u += 2) {
                var S = s[u],
                  k = s[u + 1];
                S === 'style'
                  ? Ku(l, k)
                  : S === 'dangerouslySetInnerHTML'
                    ? Bu(l, k)
                    : S === 'children'
                      ? Wn(l, k)
                      : Se(l, S, k, m);
              }
              switch (i) {
                case 'input':
                  Ol(l, o);
                  break;
                case 'textarea':
                  Hu(l, o);
                  break;
                case 'select':
                  var w = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var z = o.value;
                  z != null
                    ? fn(l, !!o.multiple, z, !1)
                    : w !== !!o.multiple &&
                      (o.defaultValue != null
                        ? fn(l, !!o.multiple, o.defaultValue, !0)
                        : fn(l, !!o.multiple, o.multiple ? [] : '', !1));
              }
              l[ar] = o;
            } catch (D) {
              Ee(e, e.return, D);
            }
        }
        break;
      case 6:
        if ((dt(t, e), wt(e), r & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          (l = e.stateNode), (o = e.memoizedProps);
          try {
            l.nodeValue = o;
          } catch (D) {
            Ee(e, e.return, D);
          }
        }
        break;
      case 3:
        if (
          (dt(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Jn(t.containerInfo);
          } catch (D) {
            Ee(e, e.return, D);
          }
        break;
      case 4:
        dt(t, e), wt(e);
        break;
      case 13:
        dt(t, e),
          wt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (du = xe())),
          r & 4 && ss(e);
        break;
      case 22:
        if (
          ((S = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((He = (m = He) || S), dt(t, e), (He = m)) : dt(t, e),
          wt(e),
          r & 8192)
        ) {
          if (
            ((m = e.memoizedState !== null),
            (e.stateNode.isHidden = m) && !S && e.mode & 1)
          )
            for (L = e, S = e.child; S !== null; ) {
              for (k = L = S; L !== null; ) {
                switch (((w = L), (z = w.child), w.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    wr(4, w, w.return);
                    break;
                  case 1:
                    Ln(w, w.return);
                    var O = w.stateNode;
                    if (typeof O.componentWillUnmount == 'function') {
                      (r = w), (n = w.return);
                      try {
                        (t = r),
                          (O.props = t.memoizedProps),
                          (O.state = t.memoizedState),
                          O.componentWillUnmount();
                      } catch (D) {
                        Ee(r, n, D);
                      }
                    }
                    break;
                  case 5:
                    Ln(w, w.return);
                    break;
                  case 22:
                    if (w.memoizedState !== null) {
                      ps(k);
                      continue;
                    }
                }
                z !== null ? ((z.return = w), (L = z)) : ps(k);
              }
              S = S.sibling;
            }
          e: for (S = null, k = e; ; ) {
            if (k.tag === 5) {
              if (S === null) {
                S = k;
                try {
                  (l = k.stateNode),
                    m
                      ? ((o = l.style),
                        typeof o.setProperty == 'function'
                          ? o.setProperty('display', 'none', 'important')
                          : (o.display = 'none'))
                      : ((i = k.stateNode),
                        (s = k.memoizedProps.style),
                        (u =
                          s != null && s.hasOwnProperty('display')
                            ? s.display
                            : null),
                        (i.style.display = Qu('display', u)));
                } catch (D) {
                  Ee(e, e.return, D);
                }
              }
            } else if (k.tag === 6) {
              if (S === null)
                try {
                  k.stateNode.nodeValue = m ? '' : k.memoizedProps;
                } catch (D) {
                  Ee(e, e.return, D);
                }
            } else if (
              ((k.tag !== 22 && k.tag !== 23) ||
                k.memoizedState === null ||
                k === e) &&
              k.child !== null
            ) {
              (k.child.return = k), (k = k.child);
              continue;
            }
            if (k === e) break e;
            for (; k.sibling === null; ) {
              if (k.return === null || k.return === e) break e;
              S === k && (S = null), (k = k.return);
            }
            S === k && (S = null),
              (k.sibling.return = k.return),
              (k = k.sibling);
          }
        }
        break;
      case 19:
        dt(t, e), wt(e), r & 4 && ss(e);
        break;
      case 21:
        break;
      default:
        dt(t, e), wt(e);
    }
  }
  function wt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (us(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Wn(l, ''), (r.flags &= -33));
            var o = is(e);
            su(e, o, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              i = is(e);
            au(e, i, u);
            break;
          default:
            throw Error(a(161));
        }
      } catch (s) {
        Ee(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Pf(e, t, n) {
    (L = e), fs(e);
  }
  function fs(e, t, n) {
    for (var r = (e.mode & 1) !== 0; L !== null; ) {
      var l = L,
        o = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || hl;
        if (!u) {
          var i = l.alternate,
            s = (i !== null && i.memoizedState !== null) || He;
          i = hl;
          var m = He;
          if (((hl = u), (He = s) && !m))
            for (L = l; L !== null; )
              (u = L),
                (s = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? ms(l)
                  : s !== null
                    ? ((s.return = u), (L = s))
                    : ms(l);
          for (; o !== null; ) (L = o), fs(o), (o = o.sibling);
          (L = l), (hl = i), (He = m);
        }
        ds(e);
      } else
        l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (L = o)) : ds(e);
    }
  }
  function ds(e) {
    for (; L !== null; ) {
      var t = L;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                He || vl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !He)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : ct(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var o = t.updateQueue;
                o !== null && pa(t, o, r);
                break;
              case 3:
                var u = t.updateQueue;
                if (u !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  pa(t, u, n);
                }
                break;
              case 5:
                var i = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = i;
                  var s = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      s.autoFocus && n.focus();
                      break;
                    case 'img':
                      s.src && (n.src = s.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var m = t.alternate;
                  if (m !== null) {
                    var S = m.memoizedState;
                    if (S !== null) {
                      var k = S.dehydrated;
                      k !== null && Jn(k);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(a(163));
            }
          He || (t.flags & 512 && iu(t));
        } catch (w) {
          Ee(t, t.return, w);
        }
      }
      if (t === e) {
        L = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (L = n);
        break;
      }
      L = t.return;
    }
  }
  function ps(e) {
    for (; L !== null; ) {
      var t = L;
      if (t === e) {
        L = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (L = n);
        break;
      }
      L = t.return;
    }
  }
  function ms(e) {
    for (; L !== null; ) {
      var t = L;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              vl(4, t);
            } catch (s) {
              Ee(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                Ee(t, l, s);
              }
            }
            var o = t.return;
            try {
              iu(t);
            } catch (s) {
              Ee(t, o, s);
            }
            break;
          case 5:
            var u = t.return;
            try {
              iu(t);
            } catch (s) {
              Ee(t, u, s);
            }
        }
      } catch (s) {
        Ee(t, t.return, s);
      }
      if (t === e) {
        L = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        (i.return = t.return), (L = i);
        break;
      }
      L = t.return;
    }
  }
  var zf = Math.ceil,
    yl = me.ReactCurrentDispatcher,
    cu = me.ReactCurrentOwner,
    ot = me.ReactCurrentBatchConfig,
    le = 0,
    Le = null,
    Ie = null,
    De = 0,
    et = 0,
    Mn = Ut(0),
    ze = 0,
    Sr = null,
    ln = 0,
    gl = 0,
    fu = 0,
    kr = null,
    Ge = null,
    du = 0,
    On = 1 / 0,
    It = null,
    wl = !1,
    pu = null,
    Bt = null,
    Sl = !1,
    Qt = null,
    kl = 0,
    Cr = 0,
    mu = null,
    Cl = -1,
    El = 0;
  function Be() {
    return le & 6 ? xe() : Cl !== -1 ? Cl : (Cl = xe());
  }
  function Kt(e) {
    return e.mode & 1
      ? le & 2 && De !== 0
        ? De & -De
        : pf.transition !== null
          ? (El === 0 && (El = ii()), El)
          : ((e = pe),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : vi(e.type))),
            e)
      : 1;
  }
  function pt(e, t, n, r) {
    if (50 < Cr) throw ((Cr = 0), (mu = null), Error(a(185)));
    Kn(e, n, r),
      (!(le & 2) || e !== Le) &&
        (e === Le && (!(le & 2) && (gl |= n), ze === 4 && Yt(e, De)),
        Xe(e, r),
        n === 1 &&
          le === 0 &&
          !(t.mode & 1) &&
          ((On = xe() + 500), Jr && Wt()));
  }
  function Xe(e, t) {
    var n = e.callbackNode;
    dc(e, t);
    var r = Lr(e, e === Le ? De : 0);
    if (r === 0)
      n !== null && li(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && li(n), t === 1))
        e.tag === 0 ? df(vs.bind(null, e)) : ta(vs.bind(null, e)),
          af(function () {
            !(le & 6) && Wt();
          }),
          (n = null);
      else {
        switch (ai(r)) {
          case 1:
            n = Kl;
            break;
          case 4:
            n = oi;
            break;
          case 16:
            n = Ir;
            break;
          case 536870912:
            n = ui;
            break;
          default:
            n = Ir;
        }
        n = xs(n, hs.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function hs(e, t) {
    if (((Cl = -1), (El = 0), le & 6)) throw Error(a(327));
    var n = e.callbackNode;
    if (Dn() && e.callbackNode !== n) return null;
    var r = Lr(e, e === Le ? De : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = xl(e, r);
    else {
      t = r;
      var l = le;
      le |= 2;
      var o = gs();
      (Le !== e || De !== t) && ((It = null), (On = xe() + 500), un(e, t));
      do
        try {
          Mf();
          break;
        } catch (i) {
          ys(e, i);
        }
      while (!0);
      Lo(),
        (yl.current = o),
        (le = l),
        Ie !== null ? (t = 0) : ((Le = null), (De = 0), (t = ze));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Yl(e)), l !== 0 && ((r = l), (t = hu(e, l)))),
        t === 1)
      )
        throw ((n = Sr), un(e, 0), Yt(e, r), Xe(e, xe()), n);
      if (t === 6) Yt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !Nf(l) &&
            ((t = xl(e, r)),
            t === 2 && ((o = Yl(e)), o !== 0 && ((r = o), (t = hu(e, o)))),
            t === 1))
        )
          throw ((n = Sr), un(e, 0), Yt(e, r), Xe(e, xe()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            an(e, Ge, It);
            break;
          case 3:
            if (
              (Yt(e, r),
              (r & 130023424) === r && ((t = du + 500 - xe()), 10 < t))
            ) {
              if (Lr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Be(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = ko(an.bind(null, e, Ge, It), t);
              break;
            }
            an(e, Ge, It);
            break;
          case 4:
            if ((Yt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - it(r);
              (o = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~o);
            }
            if (
              ((r = l),
              (r = xe() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * zf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = ko(an.bind(null, e, Ge, It), r);
              break;
            }
            an(e, Ge, It);
            break;
          case 5:
            an(e, Ge, It);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return Xe(e, xe()), e.callbackNode === n ? hs.bind(null, e) : null;
  }
  function hu(e, t) {
    var n = kr;
    return (
      e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256),
      (e = xl(e, t)),
      e !== 2 && ((t = Ge), (Ge = n), t !== null && vu(t)),
      e
    );
  }
  function vu(e) {
    Ge === null ? (Ge = e) : Ge.push.apply(Ge, e);
  }
  function Nf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!at(o(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Yt(e, t) {
    for (
      t &= ~fu,
        t &= ~gl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - it(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function vs(e) {
    if (le & 6) throw Error(a(327));
    Dn();
    var t = Lr(e, 0);
    if (!(t & 1)) return Xe(e, xe()), null;
    var n = xl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Yl(e);
      r !== 0 && ((t = r), (n = hu(e, r)));
    }
    if (n === 1) throw ((n = Sr), un(e, 0), Yt(e, t), Xe(e, xe()), n);
    if (n === 6) throw Error(a(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      an(e, Ge, It),
      Xe(e, xe()),
      null
    );
  }
  function yu(e, t) {
    var n = le;
    le |= 1;
    try {
      return e(t);
    } finally {
      (le = n), le === 0 && ((On = xe() + 500), Jr && Wt());
    }
  }
  function on(e) {
    Qt !== null && Qt.tag === 0 && !(le & 6) && Dn();
    var t = le;
    le |= 1;
    var n = ot.transition,
      r = pe;
    try {
      if (((ot.transition = null), (pe = 1), e)) return e();
    } finally {
      (pe = r), (ot.transition = n), (le = t), !(le & 6) && Wt();
    }
  }
  function gu() {
    (et = Mn.current), ge(Mn);
  }
  function un(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), uf(n)), Ie !== null))
      for (n = Ie.return; n !== null; ) {
        var r = n;
        switch ((To(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Xr();
            break;
          case 3:
            zn(), ge(Qe), ge(Ue), Wo();
            break;
          case 5:
            Uo(r);
            break;
          case 4:
            zn();
            break;
          case 13:
            ge(ke);
            break;
          case 19:
            ge(ke);
            break;
          case 10:
            Mo(r.type._context);
            break;
          case 22:
          case 23:
            gu();
        }
        n = n.return;
      }
    if (
      ((Le = e),
      (Ie = e = Gt(e.current, null)),
      (De = et = t),
      (ze = 0),
      (Sr = null),
      (fu = gl = ln = 0),
      (Ge = kr = null),
      tn !== null)
    ) {
      for (t = 0; t < tn.length; t++)
        if (((n = tn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var u = o.next;
            (o.next = l), (r.next = u);
          }
          n.pending = r;
        }
      tn = null;
    }
    return e;
  }
  function ys(e, t) {
    do {
      var n = Ie;
      try {
        if ((Lo(), (il.current = fl), al)) {
          for (var r = Ce.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          al = !1;
        }
        if (
          ((rn = 0),
          (Ne = Pe = Ce = null),
          (mr = !1),
          (hr = 0),
          (cu.current = null),
          n === null || n.return === null)
        ) {
          (ze = 1), (Sr = t), (Ie = null);
          break;
        }
        e: {
          var o = e,
            u = n.return,
            i = n,
            s = t;
          if (
            ((t = De),
            (i.flags |= 32768),
            s !== null && typeof s == 'object' && typeof s.then == 'function')
          ) {
            var m = s,
              S = i,
              k = S.tag;
            if (!(S.mode & 1) && (k === 0 || k === 11 || k === 15)) {
              var w = S.alternate;
              w
                ? ((S.updateQueue = w.updateQueue),
                  (S.memoizedState = w.memoizedState),
                  (S.lanes = w.lanes))
                : ((S.updateQueue = null), (S.memoizedState = null));
            }
            var z = $a(u);
            if (z !== null) {
              (z.flags &= -257),
                Va(z, u, i, o, t),
                z.mode & 1 && Ha(o, m, t),
                (t = z),
                (s = m);
              var O = t.updateQueue;
              if (O === null) {
                var D = new Set();
                D.add(s), (t.updateQueue = D);
              } else O.add(s);
              break e;
            } else {
              if (!(t & 1)) {
                Ha(o, m, t), wu();
                break e;
              }
              s = Error(a(426));
            }
          } else if (we && i.mode & 1) {
            var _e = $a(u);
            if (_e !== null) {
              !(_e.flags & 65536) && (_e.flags |= 256),
                Va(_e, u, i, o, t),
                zo(Nn(s, i));
              break e;
            }
          }
          (o = s = Nn(s, i)),
            ze !== 4 && (ze = 2),
            kr === null ? (kr = [o]) : kr.push(o),
            (o = u);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var d = Aa(o, s, t);
                da(o, d);
                break e;
              case 1:
                i = s;
                var c = o.type,
                  p = o.stateNode;
                if (
                  !(o.flags & 128) &&
                  (typeof c.getDerivedStateFromError == 'function' ||
                    (p !== null &&
                      typeof p.componentDidCatch == 'function' &&
                      (Bt === null || !Bt.has(p))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var x = Wa(o, i, t);
                  da(o, x);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Ss(n);
      } catch (j) {
        (t = j), Ie === n && n !== null && (Ie = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function gs() {
    var e = yl.current;
    return (yl.current = fl), e === null ? fl : e;
  }
  function wu() {
    (ze === 0 || ze === 3 || ze === 2) && (ze = 4),
      Le === null || (!(ln & 268435455) && !(gl & 268435455)) || Yt(Le, De);
  }
  function xl(e, t) {
    var n = le;
    le |= 2;
    var r = gs();
    (Le !== e || De !== t) && ((It = null), un(e, t));
    do
      try {
        Lf();
        break;
      } catch (l) {
        ys(e, l);
      }
    while (!0);
    if ((Lo(), (le = n), (yl.current = r), Ie !== null)) throw Error(a(261));
    return (Le = null), (De = 0), ze;
  }
  function Lf() {
    for (; Ie !== null; ) ws(Ie);
  }
  function Mf() {
    for (; Ie !== null && !rc(); ) ws(Ie);
  }
  function ws(e) {
    var t = Es(e.alternate, e, et);
    (e.memoizedProps = e.pendingProps),
      t === null ? Ss(e) : (Ie = t),
      (cu.current = null);
  }
  function Ss(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = Rf(n, t)), n !== null)) {
          (n.flags &= 32767), (Ie = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (ze = 6), (Ie = null);
          return;
        }
      } else if (((n = _f(n, t, et)), n !== null)) {
        Ie = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ie = t;
        return;
      }
      Ie = t = e;
    } while (t !== null);
    ze === 0 && (ze = 5);
  }
  function an(e, t, n) {
    var r = pe,
      l = ot.transition;
    try {
      (ot.transition = null), (pe = 1), Of(e, t, n, r);
    } finally {
      (ot.transition = l), (pe = r);
    }
    return null;
  }
  function Of(e, t, n, r) {
    do Dn();
    while (Qt !== null);
    if (le & 6) throw Error(a(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(a(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (pc(e, o),
      e === Le && ((Ie = Le = null), (De = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Sl ||
        ((Sl = !0),
        xs(Ir, function () {
          return Dn(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || o)
    ) {
      (o = ot.transition), (ot.transition = null);
      var u = pe;
      pe = 1;
      var i = le;
      (le |= 4),
        (cu.current = null),
        If(e, n),
        cs(n, e),
        bc(wo),
        (Dr = !!go),
        (wo = go = null),
        (e.current = n),
        Pf(n),
        lc(),
        (le = i),
        (pe = u),
        (ot.transition = o);
    } else e.current = n;
    if (
      (Sl && ((Sl = !1), (Qt = e), (kl = l)),
      (o = e.pendingLanes),
      o === 0 && (Bt = null),
      ic(n.stateNode),
      Xe(e, xe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (wl) throw ((wl = !1), (e = pu), (pu = null), e);
    return (
      kl & 1 && e.tag !== 0 && Dn(),
      (o = e.pendingLanes),
      o & 1 ? (e === mu ? Cr++ : ((Cr = 0), (mu = e))) : (Cr = 0),
      Wt(),
      null
    );
  }
  function Dn() {
    if (Qt !== null) {
      var e = ai(kl),
        t = ot.transition,
        n = pe;
      try {
        if (((ot.transition = null), (pe = 16 > e ? 16 : e), Qt === null))
          var r = !1;
        else {
          if (((e = Qt), (Qt = null), (kl = 0), le & 6)) throw Error(a(331));
          var l = le;
          for (le |= 4, L = e.current; L !== null; ) {
            var o = L,
              u = o.child;
            if (L.flags & 16) {
              var i = o.deletions;
              if (i !== null) {
                for (var s = 0; s < i.length; s++) {
                  var m = i[s];
                  for (L = m; L !== null; ) {
                    var S = L;
                    switch (S.tag) {
                      case 0:
                      case 11:
                      case 15:
                        wr(8, S, o);
                    }
                    var k = S.child;
                    if (k !== null) (k.return = S), (L = k);
                    else
                      for (; L !== null; ) {
                        S = L;
                        var w = S.sibling,
                          z = S.return;
                        if ((os(S), S === m)) {
                          L = null;
                          break;
                        }
                        if (w !== null) {
                          (w.return = z), (L = w);
                          break;
                        }
                        L = z;
                      }
                  }
                }
                var O = o.alternate;
                if (O !== null) {
                  var D = O.child;
                  if (D !== null) {
                    O.child = null;
                    do {
                      var _e = D.sibling;
                      (D.sibling = null), (D = _e);
                    } while (D !== null);
                  }
                }
                L = o;
              }
            }
            if (o.subtreeFlags & 2064 && u !== null) (u.return = o), (L = u);
            else
              e: for (; L !== null; ) {
                if (((o = L), o.flags & 2048))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wr(9, o, o.return);
                  }
                var d = o.sibling;
                if (d !== null) {
                  (d.return = o.return), (L = d);
                  break e;
                }
                L = o.return;
              }
          }
          var c = e.current;
          for (L = c; L !== null; ) {
            u = L;
            var p = u.child;
            if (u.subtreeFlags & 2064 && p !== null) (p.return = u), (L = p);
            else
              e: for (u = c; L !== null; ) {
                if (((i = L), i.flags & 2048))
                  try {
                    switch (i.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vl(9, i);
                    }
                  } catch (j) {
                    Ee(i, i.return, j);
                  }
                if (i === u) {
                  L = null;
                  break e;
                }
                var x = i.sibling;
                if (x !== null) {
                  (x.return = i.return), (L = x);
                  break e;
                }
                L = i.return;
              }
          }
          if (
            ((le = l),
            Wt(),
            ht && typeof ht.onPostCommitFiberRoot == 'function')
          )
            try {
              ht.onPostCommitFiberRoot(Pr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (pe = n), (ot.transition = t);
      }
    }
    return !1;
  }
  function ks(e, t, n) {
    (t = Nn(n, t)),
      (t = Aa(e, t, 1)),
      (e = $t(e, t, 1)),
      (t = Be()),
      e !== null && (Kn(e, 1, t), Xe(e, t));
  }
  function Ee(e, t, n) {
    if (e.tag === 3) ks(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ks(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' &&
              (Bt === null || !Bt.has(r)))
          ) {
            (e = Nn(n, e)),
              (e = Wa(t, e, 1)),
              (t = $t(t, e, 1)),
              (e = Be()),
              t !== null && (Kn(t, 1, e), Xe(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Df(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Be()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Le === e &&
        (De & n) === n &&
        (ze === 4 || (ze === 3 && (De & 130023424) === De && 500 > xe() - du)
          ? un(e, 0)
          : (fu |= n)),
      Xe(e, t);
  }
  function Cs(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Nr), (Nr <<= 1), !(Nr & 130023424) && (Nr = 4194304))
        : (t = 1));
    var n = Be();
    (e = _t(e, t)), e !== null && (Kn(e, t, n), Xe(e, n));
  }
  function Ff(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Cs(e, n);
  }
  function jf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    r !== null && r.delete(t), Cs(e, n);
  }
  var Es;
  Es = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Qe.current) Ye = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (Ye = !1), xf(e, t, n);
        Ye = !!(e.flags & 131072);
      }
    else (Ye = !1), we && t.flags & 1048576 && na(t, br, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        ml(e, t), (e = t.pendingProps);
        var l = En(t, Ue.current);
        Pn(t, n), (l = Vo(null, t, r, e, l, n));
        var o = Bo();
        return (
          (t.flags |= 1),
          typeof l == 'object' &&
          l !== null &&
          typeof l.render == 'function' &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ke(r) ? ((o = !0), Zr(t)) : (o = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Fo(t),
              (l.updater = dl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Zo(t, r, e, n),
              (t = eu(null, t, r, !0, o, n)))
            : ((t.tag = 0), we && o && Ro(t), Ve(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (ml(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Af(r)),
            (e = ct(r, e)),
            l)
          ) {
            case 0:
              t = bo(null, t, r, e, n);
              break e;
            case 1:
              t = Xa(null, t, r, e, n);
              break e;
            case 11:
              t = Ba(null, t, r, e, n);
              break e;
            case 14:
              t = Qa(null, t, r, ct(r.type, e), n);
              break e;
          }
          throw Error(a(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ct(r, l)),
          bo(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ct(r, l)),
          Xa(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Za(t), e === null)) throw Error(a(387));
          (r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            fa(e, t),
            ol(t, r, null, n);
          var u = t.memoizedState;
          if (((r = u.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (l = Nn(Error(a(423)), t)), (t = Ja(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = Nn(Error(a(424)), t)), (t = Ja(e, t, r, n, l));
              break e;
            } else
              for (
                be = jt(t.stateNode.containerInfo.firstChild),
                  qe = t,
                  we = !0,
                  st = null,
                  n = sa(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Rn(), r === l)) {
              t = Tt(e, t, n);
              break e;
            }
            Ve(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          ma(t),
          e === null && Po(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (u = l.children),
          So(r, l) ? (u = null) : o !== null && So(r, o) && (t.flags |= 32),
          Ga(e, t),
          Ve(e, t, u, n),
          t.child
        );
      case 6:
        return e === null && Po(t), null;
      case 13:
        return qa(e, t, n);
      case 4:
        return (
          jo(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Tn(t, null, r, n)) : Ve(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ct(r, l)),
          Ba(e, t, r, l, n)
        );
      case 7:
        return Ve(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ve(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ve(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (u = l.value),
            ve(nl, r._currentValue),
            (r._currentValue = u),
            o !== null)
          )
            if (at(o.value, u)) {
              if (o.children === l.children && !Qe.current) {
                t = Tt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var i = o.dependencies;
                if (i !== null) {
                  u = o.child;
                  for (var s = i.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (o.tag === 1) {
                        (s = Rt(-1, n & -n)), (s.tag = 2);
                        var m = o.updateQueue;
                        if (m !== null) {
                          m = m.shared;
                          var S = m.pending;
                          S === null
                            ? (s.next = s)
                            : ((s.next = S.next), (S.next = s)),
                            (m.pending = s);
                        }
                      }
                      (o.lanes |= n),
                        (s = o.alternate),
                        s !== null && (s.lanes |= n),
                        Oo(o.return, n, t),
                        (i.lanes |= n);
                      break;
                    }
                    s = s.next;
                  }
                } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((u = o.return), u === null)) throw Error(a(341));
                  (u.lanes |= n),
                    (i = u.alternate),
                    i !== null && (i.lanes |= n),
                    Oo(u, n, t),
                    (u = o.sibling);
                } else u = o.child;
                if (u !== null) u.return = o;
                else
                  for (u = o; u !== null; ) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((o = u.sibling), o !== null)) {
                      (o.return = u.return), (u = o);
                      break;
                    }
                    u = u.return;
                  }
                o = u;
              }
          Ve(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Pn(t, n),
          (l = rt(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ve(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = ct(r, t.pendingProps)),
          (l = ct(r.type, l)),
          Qa(e, t, r, l, n)
        );
      case 15:
        return Ka(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ct(r, l)),
          ml(e, t),
          (t.tag = 1),
          Ke(r) ? ((e = !0), Zr(t)) : (e = !1),
          Pn(t, n),
          ja(t, r, l),
          Zo(t, r, l, n),
          eu(null, t, r, !0, e, n)
        );
      case 19:
        return es(e, t, n);
      case 22:
        return Ya(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function xs(e, t) {
    return ri(e, t);
  }
  function Uf(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ut(e, t, n, r) {
    return new Uf(e, t, n, r);
  }
  function Su(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Af(e) {
    if (typeof e == 'function') return Su(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ue)) return 11;
      if (e === ie) return 14;
    }
    return 2;
  }
  function Gt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = ut(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function _l(e, t, n, r, l, o) {
    var u = 2;
    if (((r = e), typeof e == 'function')) Su(e) && (u = 1);
    else if (typeof e == 'string') u = 5;
    else
      e: switch (e) {
        case M:
          return sn(n.children, l, o, t);
        case H:
          (u = 8), (l |= 8);
          break;
        case ne:
          return (
            (e = ut(12, n, t, l | 2)), (e.elementType = ne), (e.lanes = o), e
          );
        case ee:
          return (e = ut(13, n, t, l)), (e.elementType = ee), (e.lanes = o), e;
        case re:
          return (e = ut(19, n, t, l)), (e.elementType = re), (e.lanes = o), e;
        case q:
          return Rl(n, l, o, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case $:
                u = 10;
                break e;
              case ce:
                u = 9;
                break e;
              case ue:
                u = 11;
                break e;
              case ie:
                u = 14;
                break e;
              case Z:
                (u = 16), (r = null);
                break e;
            }
          throw Error(a(130, e == null ? e : typeof e, ''));
      }
    return (
      (t = ut(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
    );
  }
  function sn(e, t, n, r) {
    return (e = ut(7, e, r, t)), (e.lanes = n), e;
  }
  function Rl(e, t, n, r) {
    return (
      (e = ut(22, e, r, t)),
      (e.elementType = q),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ku(e, t, n) {
    return (e = ut(6, e, null, t)), (e.lanes = n), e;
  }
  function Cu(e, t, n) {
    return (
      (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Wf(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Gl(0)),
      (this.expirationTimes = Gl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Gl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Eu(e, t, n, r, l, o, u, i, s) {
    return (
      (e = new Wf(e, t, n, i, s)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = ut(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Fo(o),
      e
    );
  }
  function Hf(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: F,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function _s(e) {
    if (!e) return At;
    e = e._reactInternals;
    e: {
      if (Zt(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ke(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ke(n)) return bi(e, n, t);
    }
    return t;
  }
  function Rs(e, t, n, r, l, o, u, i, s) {
    return (
      (e = Eu(n, r, !0, e, l, o, u, i, s)),
      (e.context = _s(null)),
      (n = e.current),
      (r = Be()),
      (l = Kt(n)),
      (o = Rt(r, l)),
      (o.callback = t ?? null),
      $t(n, o, l),
      (e.current.lanes = l),
      Kn(e, l, r),
      Xe(e, r),
      e
    );
  }
  function Tl(e, t, n, r) {
    var l = t.current,
      o = Be(),
      u = Kt(l);
    return (
      (n = _s(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Rt(o, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = $t(l, t, u)),
      e !== null && (pt(e, l, u, o), ll(e, l, u)),
      u
    );
  }
  function Il(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ts(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function xu(e, t) {
    Ts(e, t), (e = e.alternate) && Ts(e, t);
  }
  var Is =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function _u(e) {
    this._internalRoot = e;
  }
  (Pl.prototype.render = _u.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(a(409));
      Tl(e, t, null, null);
    }),
    (Pl.prototype.unmount = _u.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          on(function () {
            Tl(null, e, null, null);
          }),
            (t[kt] = null);
        }
      });
  function Pl(e) {
    this._internalRoot = e;
  }
  Pl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = fi();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++);
      Ot.splice(n, 0, e), n === 0 && mi(e);
    }
  };
  function Ru(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function zl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Ps() {}
  function $f(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var o = r;
        r = function () {
          var m = Il(u);
          o.call(m);
        };
      }
      var u = Rs(t, r, e, 0, null, !1, !1, '', Ps);
      return (
        (e._reactRootContainer = u),
        (e[kt] = u.current),
        ur(e.nodeType === 8 ? e.parentNode : e),
        on(),
        u
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var m = Il(s);
        i.call(m);
      };
    }
    var s = Eu(e, 0, !1, null, null, !1, !1, '', Ps);
    return (
      (e._reactRootContainer = s),
      (e[kt] = s.current),
      ur(e.nodeType === 8 ? e.parentNode : e),
      on(function () {
        Tl(t, s, n, r);
      }),
      s
    );
  }
  function Nl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var u = o;
      if (typeof l == 'function') {
        var i = l;
        l = function () {
          var s = Il(u);
          i.call(s);
        };
      }
      Tl(t, u, e, l);
    } else u = $f(n, t, e, l, r);
    return Il(u);
  }
  (si = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Qn(t.pendingLanes);
          n !== 0 &&
            (Xl(t, n | 1), Xe(t, xe()), !(le & 6) && ((On = xe() + 500), Wt()));
        }
        break;
      case 13:
        on(function () {
          var r = _t(e, 1);
          if (r !== null) {
            var l = Be();
            pt(r, e, 1, l);
          }
        }),
          xu(e, 1);
    }
  }),
    (Zl = function (e) {
      if (e.tag === 13) {
        var t = _t(e, 134217728);
        if (t !== null) {
          var n = Be();
          pt(t, e, 134217728, n);
        }
        xu(e, 134217728);
      }
    }),
    (ci = function (e) {
      if (e.tag === 13) {
        var t = Kt(e),
          n = _t(e, t);
        if (n !== null) {
          var r = Be();
          pt(n, e, t, r);
        }
        xu(e, t);
      }
    }),
    (fi = function () {
      return pe;
    }),
    (di = function (e, t) {
      var n = pe;
      try {
        return (pe = e), t();
      } finally {
        pe = n;
      }
    }),
    ($l = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((Ol(e, n), (t = n.name), n.type === 'radio' && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Gr(r);
                if (!l) throw Error(a(90));
                zt(r), Ol(r, l);
              }
            }
          }
          break;
        case 'textarea':
          Hu(e, n);
          break;
        case 'select':
          (t = n.value), t != null && fn(e, !!n.multiple, t, !1);
      }
    }),
    (Zu = yu),
    (Ju = on);
  var Vf = { usingClientEntryPoint: !1, Events: [sr, kn, Gr, Gu, Xu, yu] },
    Er = {
      findFiberByHostInstance: Jt,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    Bf = {
      bundleType: Er.bundleType,
      version: Er.version,
      rendererPackageName: Er.rendererPackageName,
      rendererConfig: Er.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: me.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = ti(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Er.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ll.isDisabled && Ll.supportsFiber)
      try {
        (Pr = Ll.inject(Bf)), (ht = Ll);
      } catch {}
  }
  return (
    (Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vf),
    (Ze.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ru(t)) throw Error(a(200));
      return Hf(e, t, null, n);
    }),
    (Ze.createRoot = function (e, t) {
      if (!Ru(e)) throw Error(a(299));
      var n = !1,
        r = '',
        l = Is;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Eu(e, 1, !1, null, null, n, !1, r, l)),
        (e[kt] = t.current),
        ur(e.nodeType === 8 ? e.parentNode : e),
        new _u(t)
      );
    }),
    (Ze.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(a(188))
          : ((e = Object.keys(e).join(',')), Error(a(268, e)));
      return (e = ti(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Ze.flushSync = function (e) {
      return on(e);
    }),
    (Ze.hydrate = function (e, t, n) {
      if (!zl(t)) throw Error(a(200));
      return Nl(null, e, t, !0, n);
    }),
    (Ze.hydrateRoot = function (e, t, n) {
      if (!Ru(e)) throw Error(a(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = '',
        u = Is;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = Rs(t, null, e, 1, n ?? null, l, !1, o, u)),
        (e[kt] = t.current),
        ur(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Pl(t);
    }),
    (Ze.render = function (e, t, n) {
      if (!zl(t)) throw Error(a(200));
      return Nl(null, e, t, !1, n);
    }),
    (Ze.unmountComponentAtNode = function (e) {
      if (!zl(e)) throw Error(a(40));
      return e._reactRootContainer
        ? (on(function () {
            Nl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[kt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ze.unstable_batchedUpdates = yu),
    (Ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!zl(n)) throw Error(a(200));
      if (e == null || e._reactInternals === void 0) throw Error(a(38));
      return Nl(e, t, n, !1, r);
    }),
    (Ze.version = '18.3.1-next-f1338f8080-20240426'),
    Ze
  );
}
var js;
function qf() {
  if (js) return Pu.exports;
  js = 1;
  function v() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (h) {
        console.error(h);
      }
  }
  return v(), (Pu.exports = Jf()), Pu.exports;
}
var Us;
function bf() {
  if (Us) return Ml;
  Us = 1;
  var v = qf();
  return (Ml.createRoot = v.createRoot), (Ml.hydrateRoot = v.hydrateRoot), Ml;
}
var ed = bf();
function Ou() {
  return (
    (Ou = Object.assign
      ? Object.assign.bind()
      : function (v) {
          for (var h = 1; h < arguments.length; h++) {
            var a = arguments[h];
            for (var C in a) ({}).hasOwnProperty.call(a, C) && (v[C] = a[C]);
          }
          return v;
        }),
    Ou.apply(null, arguments)
  );
}
function As(v) {
  if (v === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return v;
}
function Du(v, h) {
  return (
    (Du = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (a, C) {
          return (a.__proto__ = C), a;
        }),
    Du(v, h)
  );
}
function td(v, h) {
  (v.prototype = Object.create(h.prototype)),
    (v.prototype.constructor = v),
    Du(v, h);
}
var Ws =
  Number.isNaN ||
  function (h) {
    return typeof h == 'number' && h !== h;
  };
function nd(v, h) {
  return !!(v === h || (Ws(v) && Ws(h)));
}
function rd(v, h) {
  if (v.length !== h.length) return !1;
  for (var a = 0; a < v.length; a++) if (!nd(v[a], h[a])) return !1;
  return !0;
}
function Lu(v, h) {
  h === void 0 && (h = rd);
  var a,
    C = [],
    E,
    T = !1;
  function R() {
    for (var N = [], P = 0; P < arguments.length; P++) N[P] = arguments[P];
    return (
      (T && a === this && h(N, C)) ||
        ((E = v.apply(this, N)), (T = !0), (a = this), (C = N)),
      E
    );
  }
  return R;
}
var ld = typeof performance == 'object' && typeof performance.now == 'function',
  Hs = ld
    ? function () {
        return performance.now();
      }
    : function () {
        return Date.now();
      };
function $s(v) {
  cancelAnimationFrame(v.id);
}
function od(v, h) {
  var a = Hs();
  function C() {
    Hs() - a >= h ? v.call(null) : (E.id = requestAnimationFrame(C));
  }
  var E = { id: requestAnimationFrame(C) };
  return E;
}
var Mu = -1;
function ud(v) {
  if ((v === void 0 && (v = !1), Mu === -1 || v)) {
    var h = document.createElement('div'),
      a = h.style;
    (a.width = '50px'),
      (a.height = '50px'),
      (a.overflow = 'scroll'),
      document.body.appendChild(h),
      (Mu = h.offsetWidth - h.clientWidth),
      document.body.removeChild(h);
  }
  return Mu;
}
var Fn = null;
function Vs(v) {
  if ((v === void 0 && (v = !1), Fn === null || v)) {
    var h = document.createElement('div'),
      a = h.style;
    (a.width = '50px'),
      (a.height = '50px'),
      (a.overflow = 'scroll'),
      (a.direction = 'rtl');
    var C = document.createElement('div'),
      E = C.style;
    return (
      (E.width = '100px'),
      (E.height = '100px'),
      h.appendChild(C),
      document.body.appendChild(h),
      h.scrollLeft > 0
        ? (Fn = 'positive-descending')
        : ((h.scrollLeft = 1),
          h.scrollLeft === 0 ? (Fn = 'negative') : (Fn = 'positive-ascending')),
      document.body.removeChild(h),
      Fn
    );
  }
  return Fn;
}
var id = 150,
  ad = function (h) {
    var a = h.columnIndex;
    h.data;
    var C = h.rowIndex;
    return C + ':' + a;
  };
function sd(v) {
  var h,
    a = v.getColumnOffset,
    C = v.getColumnStartIndexForOffset,
    E = v.getColumnStopIndexForStartIndex,
    T = v.getColumnWidth,
    R = v.getEstimatedTotalHeight,
    N = v.getEstimatedTotalWidth,
    P = v.getOffsetForColumnAndAlignment,
    Y = v.getOffsetForRowAndAlignment,
    B = v.getRowHeight,
    G = v.getRowOffset,
    X = v.getRowStartIndexForOffset,
    Fe = v.getRowStopIndexForStartIndex,
    Re = v.initInstanceProps,
    se = v.shouldResetStyleCacheOnItemSizeChange,
    oe = v.validateProps;
  return (
    (h = (function ($e) {
      td(Te, $e);
      function Te(me) {
        var y;
        return (
          (y = $e.call(this, me) || this),
          (y._instanceProps = Re(y.props, As(y))),
          (y._resetIsScrollingTimeoutId = null),
          (y._outerRef = void 0),
          (y.state = {
            instance: As(y),
            isScrolling: !1,
            horizontalScrollDirection: 'forward',
            scrollLeft:
              typeof y.props.initialScrollLeft == 'number'
                ? y.props.initialScrollLeft
                : 0,
            scrollTop:
              typeof y.props.initialScrollTop == 'number'
                ? y.props.initialScrollTop
                : 0,
            scrollUpdateWasRequested: !1,
            verticalScrollDirection: 'forward',
          }),
          (y._callOnItemsRendered = void 0),
          (y._callOnItemsRendered = Lu(function (F, M, H, ne, $, ce, ue, ee) {
            return y.props.onItemsRendered({
              overscanColumnStartIndex: F,
              overscanColumnStopIndex: M,
              overscanRowStartIndex: H,
              overscanRowStopIndex: ne,
              visibleColumnStartIndex: $,
              visibleColumnStopIndex: ce,
              visibleRowStartIndex: ue,
              visibleRowStopIndex: ee,
            });
          })),
          (y._callOnScroll = void 0),
          (y._callOnScroll = Lu(function (F, M, H, ne, $) {
            return y.props.onScroll({
              horizontalScrollDirection: H,
              scrollLeft: F,
              scrollTop: M,
              verticalScrollDirection: ne,
              scrollUpdateWasRequested: $,
            });
          })),
          (y._getItemStyle = void 0),
          (y._getItemStyle = function (F, M) {
            var H = y.props,
              ne = H.columnWidth,
              $ = H.direction,
              ce = H.rowHeight,
              ue = y._getItemStyleCache(se && ne, se && $, se && ce),
              ee = F + ':' + M,
              re;
            if (ue.hasOwnProperty(ee)) re = ue[ee];
            else {
              var ie = a(y.props, M, y._instanceProps),
                Z = $ === 'rtl';
              ue[ee] = re = {
                position: 'absolute',
                left: Z ? void 0 : ie,
                right: Z ? ie : void 0,
                top: G(y.props, F, y._instanceProps),
                height: B(y.props, F, y._instanceProps),
                width: T(y.props, M, y._instanceProps),
              };
            }
            return re;
          }),
          (y._getItemStyleCache = void 0),
          (y._getItemStyleCache = Lu(function (F, M, H) {
            return {};
          })),
          (y._onScroll = function (F) {
            var M = F.currentTarget,
              H = M.clientHeight,
              ne = M.clientWidth,
              $ = M.scrollLeft,
              ce = M.scrollTop,
              ue = M.scrollHeight,
              ee = M.scrollWidth;
            y.setState(function (re) {
              if (re.scrollLeft === $ && re.scrollTop === ce) return null;
              var ie = y.props.direction,
                Z = $;
              if (ie === 'rtl')
                switch (Vs()) {
                  case 'negative':
                    Z = -$;
                    break;
                  case 'positive-descending':
                    Z = ee - ne - $;
                    break;
                }
              Z = Math.max(0, Math.min(Z, ee - ne));
              var q = Math.max(0, Math.min(ce, ue - H));
              return {
                isScrolling: !0,
                horizontalScrollDirection:
                  re.scrollLeft < $ ? 'forward' : 'backward',
                scrollLeft: Z,
                scrollTop: q,
                verticalScrollDirection:
                  re.scrollTop < ce ? 'forward' : 'backward',
                scrollUpdateWasRequested: !1,
              };
            }, y._resetIsScrollingDebounced);
          }),
          (y._outerRefSetter = function (F) {
            var M = y.props.outerRef;
            (y._outerRef = F),
              typeof M == 'function'
                ? M(F)
                : M != null &&
                  typeof M == 'object' &&
                  M.hasOwnProperty('current') &&
                  (M.current = F);
          }),
          (y._resetIsScrollingDebounced = function () {
            y._resetIsScrollingTimeoutId !== null &&
              $s(y._resetIsScrollingTimeoutId),
              (y._resetIsScrollingTimeoutId = od(y._resetIsScrolling, id));
          }),
          (y._resetIsScrolling = function () {
            (y._resetIsScrollingTimeoutId = null),
              y.setState({ isScrolling: !1 }, function () {
                y._getItemStyleCache(-1);
              });
          }),
          y
        );
      }
      Te.getDerivedStateFromProps = function (y, F) {
        return cd(y, F), oe(y), null;
      };
      var Se = Te.prototype;
      return (
        (Se.scrollTo = function (y) {
          var F = y.scrollLeft,
            M = y.scrollTop;
          F !== void 0 && (F = Math.max(0, F)),
            M !== void 0 && (M = Math.max(0, M)),
            this.setState(function (H) {
              return (
                F === void 0 && (F = H.scrollLeft),
                M === void 0 && (M = H.scrollTop),
                H.scrollLeft === F && H.scrollTop === M
                  ? null
                  : {
                      horizontalScrollDirection:
                        H.scrollLeft < F ? 'forward' : 'backward',
                      scrollLeft: F,
                      scrollTop: M,
                      scrollUpdateWasRequested: !0,
                      verticalScrollDirection:
                        H.scrollTop < M ? 'forward' : 'backward',
                    }
              );
            }, this._resetIsScrollingDebounced);
        }),
        (Se.scrollToItem = function (y) {
          var F = y.align,
            M = F === void 0 ? 'auto' : F,
            H = y.columnIndex,
            ne = y.rowIndex,
            $ = this.props,
            ce = $.columnCount,
            ue = $.height,
            ee = $.rowCount,
            re = $.width,
            ie = this.state,
            Z = ie.scrollLeft,
            q = ie.scrollTop,
            _ = ud();
          H !== void 0 && (H = Math.max(0, Math.min(H, ce - 1))),
            ne !== void 0 && (ne = Math.max(0, Math.min(ne, ee - 1)));
          var U = R(this.props, this._instanceProps),
            I = N(this.props, this._instanceProps),
            f = I > re ? _ : 0,
            g = U > ue ? _ : 0;
          this.scrollTo({
            scrollLeft:
              H !== void 0 ? P(this.props, H, M, Z, this._instanceProps, g) : Z,
            scrollTop:
              ne !== void 0
                ? Y(this.props, ne, M, q, this._instanceProps, f)
                : q,
          });
        }),
        (Se.componentDidMount = function () {
          var y = this.props,
            F = y.initialScrollLeft,
            M = y.initialScrollTop;
          if (this._outerRef != null) {
            var H = this._outerRef;
            typeof F == 'number' && (H.scrollLeft = F),
              typeof M == 'number' && (H.scrollTop = M);
          }
          this._callPropsCallbacks();
        }),
        (Se.componentDidUpdate = function () {
          var y = this.props.direction,
            F = this.state,
            M = F.scrollLeft,
            H = F.scrollTop,
            ne = F.scrollUpdateWasRequested;
          if (ne && this._outerRef != null) {
            var $ = this._outerRef;
            if (y === 'rtl')
              switch (Vs()) {
                case 'negative':
                  $.scrollLeft = -M;
                  break;
                case 'positive-ascending':
                  $.scrollLeft = M;
                  break;
                default:
                  var ce = $.clientWidth,
                    ue = $.scrollWidth;
                  $.scrollLeft = ue - ce - M;
                  break;
              }
            else $.scrollLeft = Math.max(0, M);
            $.scrollTop = Math.max(0, H);
          }
          this._callPropsCallbacks();
        }),
        (Se.componentWillUnmount = function () {
          this._resetIsScrollingTimeoutId !== null &&
            $s(this._resetIsScrollingTimeoutId);
        }),
        (Se.render = function () {
          var y = this.props,
            F = y.children,
            M = y.className,
            H = y.columnCount,
            ne = y.direction,
            $ = y.height,
            ce = y.innerRef,
            ue = y.innerElementType,
            ee = y.innerTagName,
            re = y.itemData,
            ie = y.itemKey,
            Z = ie === void 0 ? ad : ie,
            q = y.outerElementType,
            _ = y.outerTagName,
            U = y.rowCount,
            I = y.style,
            f = y.useIsScrolling,
            g = y.width,
            Q = this.state.isScrolling,
            K = this._getHorizontalRangeToRender(),
            b = K[0],
            te = K[1],
            de = this._getVerticalRangeToRender(),
            fe = de[0],
            he = de[1],
            je = [];
          if (H > 0 && U)
            for (var mt = fe; mt <= he; mt++)
              for (var zt = b; zt <= te; zt++)
                je.push(
                  jn.createElement(F, {
                    columnIndex: zt,
                    data: re,
                    isScrolling: f ? Q : void 0,
                    key: Z({ columnIndex: zt, data: re, rowIndex: mt }),
                    rowIndex: mt,
                    style: this._getItemStyle(mt, zt),
                  })
                );
          var cn = R(this.props, this._instanceProps),
            Un = N(this.props, this._instanceProps);
          return jn.createElement(
            q || _ || 'div',
            {
              className: M,
              onScroll: this._onScroll,
              ref: this._outerRefSetter,
              style: Ou(
                {
                  position: 'relative',
                  height: $,
                  width: g,
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  willChange: 'transform',
                  direction: ne,
                },
                I
              ),
            },
            jn.createElement(ue || ee || 'div', {
              children: je,
              ref: ce,
              style: {
                height: cn,
                pointerEvents: Q ? 'none' : void 0,
                width: Un,
              },
            })
          );
        }),
        (Se._callPropsCallbacks = function () {
          var y = this.props,
            F = y.columnCount,
            M = y.onItemsRendered,
            H = y.onScroll,
            ne = y.rowCount;
          if (typeof M == 'function' && F > 0 && ne > 0) {
            var $ = this._getHorizontalRangeToRender(),
              ce = $[0],
              ue = $[1],
              ee = $[2],
              re = $[3],
              ie = this._getVerticalRangeToRender(),
              Z = ie[0],
              q = ie[1],
              _ = ie[2],
              U = ie[3];
            this._callOnItemsRendered(ce, ue, Z, q, ee, re, _, U);
          }
          if (typeof H == 'function') {
            var I = this.state,
              f = I.horizontalScrollDirection,
              g = I.scrollLeft,
              Q = I.scrollTop,
              K = I.scrollUpdateWasRequested,
              b = I.verticalScrollDirection;
            this._callOnScroll(g, Q, f, b, K);
          }
        }),
        (Se._getHorizontalRangeToRender = function () {
          var y = this.props,
            F = y.columnCount,
            M = y.overscanColumnCount,
            H = y.overscanColumnsCount,
            ne = y.overscanCount,
            $ = y.rowCount,
            ce = this.state,
            ue = ce.horizontalScrollDirection,
            ee = ce.isScrolling,
            re = ce.scrollLeft,
            ie = M || H || ne || 1;
          if (F === 0 || $ === 0) return [0, 0, 0, 0];
          var Z = C(this.props, re, this._instanceProps),
            q = E(this.props, Z, re, this._instanceProps),
            _ = !ee || ue === 'backward' ? Math.max(1, ie) : 1,
            U = !ee || ue === 'forward' ? Math.max(1, ie) : 1;
          return [
            Math.max(0, Z - _),
            Math.max(0, Math.min(F - 1, q + U)),
            Z,
            q,
          ];
        }),
        (Se._getVerticalRangeToRender = function () {
          var y = this.props,
            F = y.columnCount,
            M = y.overscanCount,
            H = y.overscanRowCount,
            ne = y.overscanRowsCount,
            $ = y.rowCount,
            ce = this.state,
            ue = ce.isScrolling,
            ee = ce.verticalScrollDirection,
            re = ce.scrollTop,
            ie = H || ne || M || 1;
          if (F === 0 || $ === 0) return [0, 0, 0, 0];
          var Z = X(this.props, re, this._instanceProps),
            q = Fe(this.props, Z, re, this._instanceProps),
            _ = !ue || ee === 'backward' ? Math.max(1, ie) : 1,
            U = !ue || ee === 'forward' ? Math.max(1, ie) : 1;
          return [
            Math.max(0, Z - _),
            Math.max(0, Math.min($ - 1, q + U)),
            Z,
            q,
          ];
        }),
        Te
      );
    })(jn.PureComponent)),
    (h.defaultProps = {
      direction: 'ltr',
      itemData: void 0,
      useIsScrolling: !1,
    }),
    h
  );
}
var cd = function (h, a) {
    h.children,
      h.direction,
      h.height,
      h.innerTagName,
      h.outerTagName,
      h.overscanColumnsCount,
      h.overscanCount,
      h.overscanRowsCount,
      h.width,
      a.instance;
  },
  Bs = 50,
  Ys = function (h, a) {
    var C = h.rowCount,
      E = a.rowMetadataMap,
      T = a.estimatedRowHeight,
      R = a.lastMeasuredRowIndex,
      N = 0;
    if ((R >= C && (R = C - 1), R >= 0)) {
      var P = E[R];
      N = P.offset + P.size;
    }
    var Y = C - R - 1,
      B = Y * T;
    return N + B;
  },
  Gs = function (h, a) {
    var C = h.columnCount,
      E = a.columnMetadataMap,
      T = a.estimatedColumnWidth,
      R = a.lastMeasuredColumnIndex,
      N = 0;
    if ((R >= C && (R = C - 1), R >= 0)) {
      var P = E[R];
      N = P.offset + P.size;
    }
    var Y = C - R - 1,
      B = Y * T;
    return N + B;
  },
  Pt = function (h, a, C, E) {
    var T, R, N;
    if (
      (h === 'column'
        ? ((T = E.columnMetadataMap),
          (R = a.columnWidth),
          (N = E.lastMeasuredColumnIndex))
        : ((T = E.rowMetadataMap),
          (R = a.rowHeight),
          (N = E.lastMeasuredRowIndex)),
      C > N)
    ) {
      var P = 0;
      if (N >= 0) {
        var Y = T[N];
        P = Y.offset + Y.size;
      }
      for (var B = N + 1; B <= C; B++) {
        var G = R(B);
        (T[B] = { offset: P, size: G }), (P += G);
      }
      h === 'column'
        ? (E.lastMeasuredColumnIndex = C)
        : (E.lastMeasuredRowIndex = C);
    }
    return T[C];
  },
  Qs = function (h, a, C, E) {
    var T, R;
    h === 'column'
      ? ((T = C.columnMetadataMap), (R = C.lastMeasuredColumnIndex))
      : ((T = C.rowMetadataMap), (R = C.lastMeasuredRowIndex));
    var N = R > 0 ? T[R].offset : 0;
    return N >= E ? Xs(h, a, C, R, 0, E) : fd(h, a, C, Math.max(0, R), E);
  },
  Xs = function (h, a, C, E, T, R) {
    for (; T <= E; ) {
      var N = T + Math.floor((E - T) / 2),
        P = Pt(h, a, N, C).offset;
      if (P === R) return N;
      P < R ? (T = N + 1) : P > R && (E = N - 1);
    }
    return T > 0 ? T - 1 : 0;
  },
  fd = function (h, a, C, E, T) {
    for (
      var R = h === 'column' ? a.columnCount : a.rowCount, N = 1;
      E < R && Pt(h, a, E, C).offset < T;

    )
      (E += N), (N *= 2);
    return Xs(h, a, C, Math.min(E, R - 1), Math.floor(E / 2), T);
  },
  Ks = function (h, a, C, E, T, R, N) {
    var P = h === 'column' ? a.width : a.height,
      Y = Pt(h, a, C, R),
      B = h === 'column' ? Gs(a, R) : Ys(a, R),
      G = Math.max(0, Math.min(B - P, Y.offset)),
      X = Math.max(0, Y.offset - P + N + Y.size);
    switch (
      (E === 'smart' &&
        (T >= X - P && T <= G + P ? (E = 'auto') : (E = 'center')),
      E)
    ) {
      case 'start':
        return G;
      case 'end':
        return X;
      case 'center':
        return Math.round(X + (G - X) / 2);
      case 'auto':
      default:
        return T >= X && T <= G ? T : X > G || T < X ? X : G;
    }
  },
  dd = sd({
    getColumnOffset: function (h, a, C) {
      return Pt('column', h, a, C).offset;
    },
    getColumnStartIndexForOffset: function (h, a, C) {
      return Qs('column', h, C, a);
    },
    getColumnStopIndexForStartIndex: function (h, a, C, E) {
      for (
        var T = h.columnCount,
          R = h.width,
          N = Pt('column', h, a, E),
          P = C + R,
          Y = N.offset + N.size,
          B = a;
        B < T - 1 && Y < P;

      )
        B++, (Y += Pt('column', h, B, E).size);
      return B;
    },
    getColumnWidth: function (h, a, C) {
      return C.columnMetadataMap[a].size;
    },
    getEstimatedTotalHeight: Ys,
    getEstimatedTotalWidth: Gs,
    getOffsetForColumnAndAlignment: function (h, a, C, E, T, R) {
      return Ks('column', h, a, C, E, T, R);
    },
    getOffsetForRowAndAlignment: function (h, a, C, E, T, R) {
      return Ks('row', h, a, C, E, T, R);
    },
    getRowOffset: function (h, a, C) {
      return Pt('row', h, a, C).offset;
    },
    getRowHeight: function (h, a, C) {
      return C.rowMetadataMap[a].size;
    },
    getRowStartIndexForOffset: function (h, a, C) {
      return Qs('row', h, C, a);
    },
    getRowStopIndexForStartIndex: function (h, a, C, E) {
      for (
        var T = h.rowCount,
          R = h.height,
          N = Pt('row', h, a, E),
          P = C + R,
          Y = N.offset + N.size,
          B = a;
        B < T - 1 && Y < P;

      )
        B++, (Y += Pt('row', h, B, E).size);
      return B;
    },
    initInstanceProps: function (h, a) {
      var C = h,
        E = C.estimatedColumnWidth,
        T = C.estimatedRowHeight,
        R = {
          columnMetadataMap: {},
          estimatedColumnWidth: E || Bs,
          estimatedRowHeight: T || Bs,
          lastMeasuredColumnIndex: -1,
          lastMeasuredRowIndex: -1,
          rowMetadataMap: {},
        };
      return (
        (a.resetAfterColumnIndex = function (N, P) {
          P === void 0 && (P = !0),
            a.resetAfterIndices({ columnIndex: N, shouldForceUpdate: P });
        }),
        (a.resetAfterRowIndex = function (N, P) {
          P === void 0 && (P = !0),
            a.resetAfterIndices({ rowIndex: N, shouldForceUpdate: P });
        }),
        (a.resetAfterIndices = function (N) {
          var P = N.columnIndex,
            Y = N.rowIndex,
            B = N.shouldForceUpdate,
            G = B === void 0 ? !0 : B;
          typeof P == 'number' &&
            (R.lastMeasuredColumnIndex = Math.min(
              R.lastMeasuredColumnIndex,
              P - 1
            )),
            typeof Y == 'number' &&
              (R.lastMeasuredRowIndex = Math.min(
                R.lastMeasuredRowIndex,
                Y - 1
              )),
            a._getItemStyleCache(-1),
            G && a.forceUpdate();
        }),
        R
      );
    },
    shouldResetStyleCacheOnItemSizeChange: !1,
    validateProps: function (h) {
      h.columnWidth, h.rowHeight;
    },
  });
const pd = (v, h) => {
    const a = Math.round(15 + (h / 100) * 10);
    return (
      {
        red: `hsl(0, 100%, ${a}%)`,
        green: `hsl(120, 100%, ${a}%)`,
        blue: `hsl(240, 100%, ${a}%)`,
        yellow: `hsl(60, 100%, ${a}%)`,
        purple: `hsl(270, 100%, ${a}%)`,
        pink: `hsl(330, 100%, ${a}%)`,
        teal: `hsl(180, 100%, ${a}%)`,
        orange: `hsl(30, 100%, ${a}%)`,
        indigo: `hsl(260, 100%, ${a}%)`,
        gray: `hsl(0, 0%, ${a}%)`,
        lime: `hsl(75, 100%, ${a}%)`,
        cyan: `hsl(180, 100%, ${a}%)`,
        brown: `hsl(30, 50%, ${a}%)`,
        magenta: `hsl(300, 100%, ${a}%)`,
        gold: `hsl(50, 100%, ${a}%)`,
      }[v.toLowerCase()] || `hsl(0, 0%, ${a}%)`
    );
  },
  md = (v) => {
    const h = /hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/,
      a = v.match(h);
    if (!a) return console.error('Invalid HSL color format:', v), 'black';
    const C = Number(a[1]),
      E = Number(a[2]),
      R = Number(a[3]) > 50 ? 10 : 90;
    return `hsl(${C}, ${E}%, ${R}%)`;
  },
  hd = ({ item: v, isSelected: h, onClick: a }) => {
    const C = pd(v.color, v.popularity),
      E = md(C);
    return St.jsx('div', {
      className: `p-2 text-center cursor-pointer transition-all  ${h ? 'bg-white text-black rounded-full animate-borderPulse' : 'rounded-md hover:animate-borderPulse '}`,
      style: { backgroundColor: h ? 'white' : C, color: h ? 'black' : E },
      onClick: a,
      children: v.name,
    });
  },
  vd = ({ items: v }) => {
    const [h, a] = jn.useState(null),
      C = 4,
      E = 120,
      T = 50,
      R = 20,
      N = 700,
      P = 900,
      Y = Math.ceil(v.length / C),
      B = () => E + R,
      G = () => T + R,
      X = (Re) => (Re % 2 === 0 ? 0 : (E + R) / 2),
      Fe = (Re) => {
        a(Re);
      };
    return St.jsx(dd, {
      columnCount: C,
      rowCount: Y,
      columnWidth: B,
      rowHeight: G,
      height: P,
      width: N,
      children: ({ columnIndex: Re, rowIndex: se, style: oe }) => {
        const $e = se * C + Re;
        if ($e >= v.length) return null;
        const Te = v[$e],
          Se = X(se);
        return St.jsx(
          'div',
          {
            style: {
              ...oe,
              left: parseFloat(oe.left) + Se,
              width: E,
              height: T,
            },
            children: St.jsx(hd, {
              item: Te,
              isSelected: Te === h,
              onClick: () => Fe(Te),
            }),
          },
          Te.name
        );
      },
    });
  },
  yd = [
    { name: 'Achieve', popularity: 56, color: 'gray' },
    { name: 'Adapt', popularity: 91, color: 'indigo' },
    { name: 'Align', popularity: 17, color: 'gray' },
    { name: 'Analyze', popularity: 37, color: 'indigo' },
    { name: 'Articulate', popularity: 44, color: 'magenta' },
    { name: 'Authenticate', popularity: 40, color: 'teal' },
    { name: 'Balance', popularity: 28, color: 'purple' },
    { name: 'Benchmark', popularity: 14, color: 'brown' },
    { name: 'Build', popularity: 47, color: 'gold' },
    { name: 'Calibrate', popularity: 15, color: 'purple' },
    { name: 'Care', popularity: 38, color: 'blue' },
    { name: 'Celebrate', popularity: 98, color: 'lime' },
    { name: 'Clarify', popularity: 42, color: 'cyan' },
    { name: 'Code', popularity: 46, color: 'gray' },
    { name: 'Collaborate', popularity: 62, color: 'cyan' },
    { name: 'Combine', popularity: 20, color: 'pink' },
    { name: 'Communicate', popularity: 94, color: 'purple' },
    { name: 'Conceptualize', popularity: 20, color: 'blue' },
    { name: 'Connect', popularity: 11, color: 'brown' },
    { name: 'Coordinate', popularity: 42, color: 'green' },
    { name: 'Create', popularity: 12, color: 'yellow' },
    { name: 'Cultivate', popularity: 57, color: 'brown' },
    { name: 'Customize', popularity: 22, color: 'green' },
    { name: 'Debug', popularity: 53, color: 'indigo' },
    { name: 'Decide', popularity: 77, color: 'blue' },
    { name: 'Define', popularity: 12, color: 'orange' },
    { name: 'Deliver', popularity: 57, color: 'teal' },
    { name: 'Deploy', popularity: 84, color: 'indigo' },
    { name: 'Design', popularity: 22, color: 'yellow' },
    { name: 'Develop', popularity: 33, color: 'pink' },
    { name: 'Discover', popularity: 22, color: 'blue' },
    { name: 'Distribute', popularity: 99, color: 'red' },
    { name: 'Document', popularity: 1, color: 'blue' },
    { name: 'Drive', popularity: 42, color: 'orange' },
    { name: 'Embrace', popularity: 32, color: 'red' },
    { name: 'Engage', popularity: 39, color: 'teal' },
    { name: 'Enhance', popularity: 98, color: 'magenta' },
    { name: 'Evaluate', popularity: 51, color: 'pink' },
    { name: 'Execute', popularity: 24, color: 'cyan' },
    { name: 'Experiment', popularity: 89, color: 'purple' },
    { name: 'Explore', popularity: 27, color: 'red' },
    { name: 'Facilitate', popularity: 54, color: 'green' },
    { name: 'Focus', popularity: 64, color: 'red' },
    { name: 'Forecast', popularity: 12, color: 'brown' },
    { name: 'Grow', popularity: 87, color: 'lime' },
    { name: 'Guide', popularity: 67, color: 'magenta' },
    { name: 'Help', popularity: 51, color: 'pink' },
    { name: 'Illustrate', popularity: 40, color: 'indigo' },
    { name: 'Improve', popularity: 88, color: 'orange' },
    { name: 'Innovate', popularity: 87, color: 'blue' },
    { name: 'Inspect', popularity: 8, color: 'gray' },
    { name: 'Inspire', popularity: 86, color: 'indigo' },
    { name: 'Integrate', popularity: 26, color: 'purple' },
    { name: 'Invent', popularity: 9, color: 'orange' },
    { name: 'Iterate', popularity: 32, color: 'magenta' },
    { name: 'Jump', popularity: 41, color: 'indigo' },
    { name: 'Launch', popularity: 28, color: 'teal' },
    { name: 'Lead', popularity: 97, color: 'yellow' },
    { name: 'Learn', popularity: 3, color: 'green' },
    { name: 'Maintain', popularity: 45, color: 'blue' },
    { name: 'Manage', popularity: 44, color: 'cyan' },
    { name: 'Measure', popularity: 69, color: 'pink' },
    { name: 'Monitor', popularity: 75, color: 'yellow' },
    { name: 'Motivate', popularity: 43, color: 'orange' },
    { name: 'Navigate', popularity: 24, color: 'blue' },
    { name: 'Negotiate', popularity: 77, color: 'green' },
    { name: 'Observe', popularity: 52, color: 'pink' },
    { name: 'Optimize', popularity: 81, color: 'teal' },
    { name: 'Organize', popularity: 39, color: 'blue' },
    { name: 'Perform', popularity: 21, color: 'teal' },
    { name: 'Plan', popularity: 12, color: 'purple' },
    { name: 'Predict', popularity: 16, color: 'green' },
    { name: 'Present', popularity: 98, color: 'yellow' },
    { name: 'Prioritize', popularity: 96, color: 'red' },
    { name: 'Prototype', popularity: 46, color: 'purple' },
    { name: 'Question', popularity: 70, color: 'green' },
    { name: 'Rebuild', popularity: 81, color: 'indigo' },
    { name: 'Recognize', popularity: 11, color: 'teal' },
    { name: 'Redefine', popularity: 58, color: 'gray' },
    { name: 'Refactor', popularity: 89, color: 'gray' },
    { name: 'Refine', popularity: 52, color: 'red' },
    { name: 'Reflect', popularity: 97, color: 'brown' },
    { name: 'Reimagine', popularity: 8, color: 'orange' },
    { name: 'Repurpose', popularity: 1, color: 'teal' },
    { name: 'Research', popularity: 96, color: 'magenta' },
    { name: 'Revise', popularity: 8, color: 'teal' },
    { name: 'Scale', popularity: 79, color: 'red' },
    { name: 'Separate', popularity: 10, color: 'yellow' },
    { name: 'Share', popularity: 1, color: 'green' },
    { name: 'Simplify', popularity: 51, color: 'brown' },
    { name: 'Sketch', popularity: 20, color: 'cyan' },
    { name: 'Solve', popularity: 32, color: 'red' },
    { name: 'Standardize', popularity: 13, color: 'blue' },
    { name: 'Strategize', popularity: 86, color: 'green' },
    { name: 'Streamline', popularity: 65, color: 'gold' },
    { name: 'Strengthen', popularity: 80, color: 'cyan' },
    { name: 'Structure', popularity: 7, color: 'magenta' },
    { name: 'Support', popularity: 59, color: 'indigo' },
    { name: 'Teach', popularity: 41, color: 'purple' },
    { name: 'Test', popularity: 2, color: 'yellow' },
    { name: 'Train', popularity: 62, color: 'teal' },
    { name: 'Transform', popularity: 59, color: 'magenta' },
    { name: 'Translate', popularity: 57, color: 'magenta' },
    { name: 'Understand', popularity: 11, color: 'teal' },
    { name: 'Unite', popularity: 18, color: 'cyan' },
    { name: 'Upgrade', popularity: 76, color: 'gold' },
    { name: 'Validate', popularity: 17, color: 'brown' },
    { name: 'Value', popularity: 23, color: 'yellow' },
    { name: 'Visualize', popularity: 12, color: 'indigo' },
    { name: 'Work', popularity: 80, color: 'green' },
    { name: 'Write', popularity: 55, color: 'brown' },
  ];
function gd() {
  return St.jsx(St.Fragment, {
    children: St.jsx('div', { children: St.jsx(vd, { items: yd }) }),
  });
}
ed.createRoot(document.getElementById('root')).render(
  St.jsx(jn.StrictMode, { children: St.jsx(gd, {}) })
);
