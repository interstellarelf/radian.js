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
};