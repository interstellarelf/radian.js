var SplinerAnimationFlow = {
  model: undefined,
  createModel: function(options = {}) {
    options = options || {};


    var canvasSpliner = new CanvasSpliner.CanvasSpliner(options.id || 'spliner-canvas', 1400, 800);

    this.model = canvasSpliner;

    // styling control points
    this.model.setControlPointRadius(15);
    this.model.setControlPointColor("idle", "rgba(0, 120, 250, 0.5)");
    this.model.setControlPointColor("hovered", "rgba(100, 20, 220, 1.0)");
    this.model.setControlPointColor("grabbed", "rgba(50, 255, 50, 0.5)");
    // styling the curve
    this.model.setCurveColor("idle", "rgba(255, 255, 255, 0.5)");
    this.model.setCurveColor("idle", "rgba(255, 0, 255, 1)");
    this.model.setCurveThickness(1.5);
    // styling grid
    this.model.setGridColor("rgba(255, 255, 0, 0.2)");

    this.model.setGridStep(0.1);
    // styling text
    this.model.setTextColor("rgba(255, 0, 255, 0.8)")
    // stylng background
    this.model.setBackgroundColor("rgba(50, 50, 50, 0.1)");


    return this.model;
  },
  addFrame(target, key, totalSteps, stepNumber, max) {
    this.model.add({
      x: (1.0 / totalSteps) * stepNumber,
      y: (1.0 / max) * target[key],
      xLocked: true,
      yLocked: false
    });
  },
  getY(floatPoint) {
    var yPoints = this.model._ySeriesInterpolated,
      maxX = 1400,
      properIndex = Math.floor(1400 * floatPoint);
    return yPoints[properIndex];
  },
  draw() {
    this.model.draw();
  },
  getAnimationFlow: function(steps) {

    for (var q = 0; q < steps.length; q++) {
      var target = steps[q].target;
      var x = (1.0 / 100) * target.x,
        y = (1.0 / 100) * target.y;
      var props = {
        x: x,
        y: y,
        xLocked: true,
        yLocked: false
      };
      console.info('spliner-props', props);
      this.model.add(props);
    }

    this.model.draw();
  }
};

module.exports = SplinerAnimationFlow;