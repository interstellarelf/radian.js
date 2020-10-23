'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/****************************************
 * Radian {}
 *   operates animations by selecting, changing one object at a time
 *   uses one FrameSequence at a time
 *   one effects module for pixel-effects
 ****************************************/
var Radian = {

  create_id: function create_id() {
    return new Date().now() + '-' + Math.random() * 1000;
  },

  object: undefined,

  target: undefined,

  frames: [],

  Easing: 'MY_EASING_MODULE',

  Keyframes: 'MY_INTERPOLATION_MODULE',

  Effects: 'MY_PIXEL_EFFECTS_MODULE',

  resourceTypes: ['human-2d', 'sprite-2d', 'quadroped-2d', 'worm-2d'],

  getTarget: function getTarget() {
    return this.target;
  },
  resolve_target: function resolve_target(target) {
    if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) == 'object') return target.radian_id || target.id || target.guid;
    if (typeof target == 'string') return target;
  },
  RFrame: function RFrame(target, rotations) {
    var id = this.get_target_id(target);
    return {
      target: id,
      type: 'RFrame'
    };
  },
  CreateFrameSequence: function CreateFrameSequence(oncreate) {
    oncreate = oncreate || function () {};
    var frameSequence = new FrameSequence(oncreate);
    return frameSequence;
  },
  load: function load(resourceType, url) {
    //load the animation and return a callable async module

  },
  define: function define(name, create) {
    this.frames = new FrameSequence(this.frames);
    this.frames.name = name || '*untitled';
    create.bind(this.frames).call();
  }
};; //FrameSequence

var FrameSequence = function () {
  function FrameSequence(oncreate) {
    _classCallCheck(this, FrameSequence);

    this.globalInterpolation = false;
    this.frames = [];
    oncreate.bind(this).call();
  }

  _createClass(FrameSequence, [{
    key: 'add',
    value: function add(object) {
      this.frames.push(object);
      return this;
    }
  }, {
    key: 'GlobalInterpolation',
    value: function GlobalInterpolation(value) {
      this.globalInterpolation = value;
      return this;
    }
  }]);

  return FrameSequence;
}();

;function ValidateFrameOptions(options) {

  var eval_option_name = function eval_option_name(x) {
    return ['option-1', 'option-2'].includes(x);
  };
  var required_keys = function required_keys(x) {
    return ['required-1', 'required-2'];
  };

  required_keys().forEach(function (k) {
    if (!Object.keys(options).includes(k)) {
      throw new RequiredOptionError('required option:' + k);
    }
    return true;
  });

  for (var x in options) {
    if (!eval_option_name(x)) {
      throw new OptionError('bad option:' + x);
    }
  }
  return true;
};

var Keyframe = function () {
  function Keyframe() {
    _classCallCheck(this, Keyframe);

    console.log('Keyframe::' + 'constructor()');
  }

  _createClass(Keyframe, [{
    key: 'Object',
    value: function Object(object) {
      this.object = object;
      return this;
    }
  }, {
    key: 'Target',
    value: function Target(target) {
      this.target = target;
      return this;
    }
  }, {
    key: 'Curve',
    value: function Curve() {
      console.info('TODO', 'complete curve fxn');
      return this;
    }
  }, {
    key: 'Within',
    value: function Within() {
      console.info('TODO', 'complete within fxn');
      return this;
    }
  }, {
    key: 'Options',
    value: function Options(options) {

      console.info('TODO', 'complete and apply here --valiateOptions fxn');

      return this;

      if (!ValidateFrameOptions(options)) {
        return;
      }
      return this;
    }
  }, {
    key: 'EnterCurve',
    value: function EnterCurve(enterCurve) {
      this.enterCurve = enterCurve;
      return this;
    }
  }, {
    key: 'ExitCurve',
    value: function ExitCurve(exitCurve) {
      this.exitCurve = exitCurve;
      return this;
    }
  }, {
    key: 'Flat',
    value: function Flat(flat) {
      this.flat = flat;
      return this;
    }
  }, {
    key: 'Smooth',
    value: function Smooth(value) {
      this.smooth = value;
      return this;
    }
    //The time taken to transition from the prior frame to this frame

  }, {
    key: 'Duration',
    value: function Duration(duration) {
      this.duration = duration;
      return this;
    }
  }, {
    key: 'onComplete',
    value: function onComplete(complete) {
      this.complete = complete;
      return this;
    }
  }, {
    key: 'onUpdate',
    value: function onUpdate(update) {
      this.update = update;
      return this;
    }
  }]);

  return Keyframe;
}();

;
//# sourceMappingURL=radian.js.map
