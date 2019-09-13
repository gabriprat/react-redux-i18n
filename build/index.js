'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.i18nReducer = exports.loadTranslations = exports.setLocale = exports.LOAD_TRANSLATIONS = exports.SET_LOCALE = exports.Localize = exports.Translate = exports.I18n = undefined;

var _actions = require('./actions');

Object.defineProperty(exports, 'SET_LOCALE', {
  enumerable: true,
  get: function get() {
    return _actions.SET_LOCALE;
  }
});
Object.defineProperty(exports, 'LOAD_TRANSLATIONS', {
  enumerable: true,
  get: function get() {
    return _actions.LOAD_TRANSLATIONS;
  }
});
Object.defineProperty(exports, 'setLocale', {
  enumerable: true,
  get: function get() {
    return _actions.setLocale;
  }
});
Object.defineProperty(exports, 'loadTranslations', {
  enumerable: true,
  get: function get() {
    return _actions.loadTranslations;
  }
});

var _reducer = require('./reducer');

Object.defineProperty(exports, 'i18nReducer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reducer).default;
  }
});
exports.syncTranslationWithStore = syncTranslationWithStore;

var _reactI18nify = require('react-i18nify');

var I18n = _interopRequireWildcard(_reactI18nify);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Localize = I18n.Localize,
    Translate = I18n.Translate;
exports.I18n = I18n;
exports.Translate = Translate;
exports.Localize = Localize;
function syncTranslationWithStore(store) {
  I18n.setTranslationsGetter(function () {
    return store.getState().i18n.translations || {};
  });
  I18n.setLocaleGetter(function () {
    return store.getState().i18n.locale || '';
  });
}