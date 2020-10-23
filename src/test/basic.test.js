const Radian = require('./../radian.js');

//RadianTests::
let RadianTests = [];
let Gamelab = Radian.Gamelab;
let spinningSprite = new Gamelab.Sprite('./res/wheel.png');

describe('Radian: basic animation', () => {
  // Inspect the raw component options

  Radian.define('spinningSprite', () => {

    this.addFrame(sprite, {
      rotation: {
        x: 360
      }
    }, {
      curve: ['quadratic-in-20%', 'DIFF', 'quadratic-out-40%']
    });

    //spin to 350
    //use quadratic going into the curve over a portion of 20% the total change in x,
    //use quadratic out to exit the curve
    //any difference is the flat line in middle  :: in this case 100% - (60% + 20%) leaves 20%
    //optional: use floating points as portion-of-one


  });

  it('has methods', () => {
    var hasFxn = false,
      object = {
        string: 'value'
      };

    var match_string = 'value';

    expect(object.string).toMatch(match_string);
  });
})


RadianTests.push(function() {


});