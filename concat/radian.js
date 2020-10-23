/****************************************
 * Radian {}
 *   operates animations by selecting, changing one object at a time
 *   uses one FrameSequence at a time
 *   one effects module for pixel-effects
 ****************************************/
let Radian = {

  create_id: function() {
    return new Date().now() + '-' + Math.random() * 1000;
  },

  object: undefined,

  target: undefined,

  frames: [],

  Easing: 'MY_EASING_MODULE',

  Keyframes: 'MY_INTERPOLATION_MODULE',

  Effects: 'MY_PIXEL_EFFECTS_MODULE',

  resourceTypes: ['human-2d', 'sprite-2d', 'quadroped-2d', 'worm-2d'],

  getTarget() {
    return this.target;
  },

  resolve_target(target) {
    if (typeof target == 'object')
      return target.radian_id || target.id || target.guid;
    if (typeof target == 'string')
      return target;
  },

  RFrame(target, rotations, ) {
    let id = this.get_target_id(target);
    return {
      target: id,
      type: 'RFrame'
    }
  },

  CreateFrameSequence(oncreate) {
    oncreate = oncreate || function() {};
    var frameSequence = new FrameSequence(oncreate);
    return frameSequence;
  },

  load(resourceType, url) {
    //load the animation and return a callable async module

  },

  define(name, create) {
    this.frames = new FrameSequence(this.frames);
    this.frames.name = name || '*untitled';
    create.bind(this.frames).call();
  }
};;//FrameSequence
class FrameSequence {
  constructor(oncreate) {
    this.globalInterpolation = false;
    this.frames = [];
    oncreate.bind(this).call();
  }
  add(object) {
    this.frames.push(object);
    return this;
  }
  GlobalInterpolation(value) {
    this.globalInterpolation = value;
    return this;
  }
};function ValidateFrameOptions(options) {

  let eval_option_name = (x) => {
    return ['option-1', 'option-2'].includes(x)
  }
  let required_keys = (x) => {
    return ['required-1', 'required-2']
  }

  required_keys().forEach((k) => {
    if (!(Object.keys(options).includes(k))) {
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

class Keyframe {
  constructor() {
    console.log('Keyframe::' + 'constructor()');
  }
  Object(object) {
    this.object = object;
    return this;
  }
  Target(target) {
    this.target = target;
    return this;
  }
  Curve() {
    console.info('TODO', 'complete curve fxn');
    return this;
  }
  Within() {
    console.info('TODO', 'complete within fxn');
    return this;
  }
  Options(options) {

    console.info('TODO', 'complete and apply here --valiateOptions fxn');

    return this;

    if (!ValidateFrameOptions(options)) {
      return;
    }
    return this;
  }
  EnterCurve(enterCurve) {
    this.enterCurve = enterCurve;
    return this;
  }
  ExitCurve(exitCurve) {
    this.exitCurve = exitCurve;
    return this;
  }
  Flat(flat) {
    this.flat = flat;
    return this;
  }
  Smooth(value) {
    this.smooth = value;
    return this;
  }
  //The time taken to transition from the prior frame to this frame
  Duration(duration) {
    this.duration = duration;
    return this;
  }
  onComplete(complete) {
    this.complete = complete;
    return this;
  }
  onUpdate(update) {
    this.update = update;
    return this;
  }
};