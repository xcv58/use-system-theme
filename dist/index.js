'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

var getMql = function () {
    if (typeof window === 'undefined') {
        return;
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
};
var getSystemTheme = function (matches) { return (matches ? 'dark' : 'light'); };
var getDefaultTheme = function (isSSR) {
    if (!isSSR) {
        var mql = getMql();
        if (mql) {
            return getSystemTheme(mql.matches);
        }
    }
    return 'light';
};
var useSystemTheme = function (isSSR) {
    if (isSSR === void 0) { isSSR = false; }
    var defaultTheme = getDefaultTheme(isSSR);
    var _a = react.useState(defaultTheme), systemTheme = _a[0], setSystemTheme = _a[1];
    react.useEffect(function () {
        var mql = getMql();
        var mqlListener = function (e) { return setSystemTheme(getSystemTheme(e.matches)); };
        if (mql) {
            setSystemTheme(getSystemTheme(mql.matches));
            mql.addListener(mqlListener);
        }
        return function () { return mql && mql.removeListener(mqlListener); };
    }, []);
    return systemTheme;
};

exports.default = useSystemTheme;
//# sourceMappingURL=index.js.map
