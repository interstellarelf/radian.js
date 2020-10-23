//FrameSequence
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
}