function ValidateFrameOptions(options) {

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