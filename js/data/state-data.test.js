/**
 * Created by yulia on 12.12.2016.
 */
import assert from 'assert';
import {state, setLives, decreaseLives, getLives, setCurrent, getCurrent, increaseCurrent, setTime, getTime, determineCorrect} from './state';

const testRound = state.round[0];
const testResult = testRound.result[0];

const ImageType = {
  PAINT: 0,
  PHOTO: 1
};

describe('Game state', () => {

  describe('Lives', () => {
    describe('setLives', () => {
      it('sets the number of lives equal 2', () => {
        assert.equal( setLives(testRound, 2).lives, 2 );
      });
      it('are clean', () => {
        let oldState = Object.assign({}, testRound );
        setLives(oldState, 1);
        assert.deepEqual( oldState, testRound );
      });
    });
    describe('getLives', () => {
      it('get the number of lives', () => {
        const test = Object.assign({}, testRound, {
          lives: 3
        });
        assert.equal( getLives(test), 3 );
      });
    });
    describe('decreaseLives', () => {
      it('reduces the number of lives', () => {
        assert.equal( testRound.lives - decreaseLives(testRound).lives, 1 );
      });
      it('are clean', () => {
        let oldState = Object.assign({}, testRound );
        decreaseLives(oldState);
        assert.deepEqual( oldState, testRound );
      });
    });
    describe('errors', () => {
      it('setLives throws an error if unacceptable value passed', () => {
        assert.throws(() => {
          setLives( testRound, -1 );
        });
        assert.throws(() => {
          setLives( testRound, 4 );
        });
      });
      it('decreaseLives throws an error if it cant be decreased', () => {
        const test = Object.assign({}, testRound, {
          lives: 0
        });
        assert.throws(() => {
          decreaseLives( test );
        });
      });
    });
  });

  describe('Current task', () => {
    describe('setCurrent', () => {
      it('sets the current task equal 2', () => {
        assert.equal( setCurrent(testRound, 8).currentTask, 8 );
      });
      it('are clean', () => {
        let oldState = Object.assign({}, testRound );
        setCurrent(oldState, 8);
        assert.deepEqual( oldState, testRound );
      });
    });
    describe('getCurrent', () => {
      it('get current task', () => {
        const test = Object.assign({}, testRound, {
          currentTask: 8
        });
        assert.equal( getCurrent(test), 8 );
      });
    });
    describe('increaseCurrent', () => {
      it('increase the number of current task', () => {
        assert.equal( increaseCurrent(testRound).currentTask - testRound.currentTask, 1 );
      });
      it('are clean', () => {
        let oldState = Object.assign({}, testRound );
        increaseCurrent(oldState);
        assert.deepEqual( oldState, testRound );
      });
    });
    describe('errors', () => {
      it('setCurrent throws an error if unacceptable value passed', () => {
        assert.throws(() => {
          setCurrent( testRound, -1 );
        });
        assert.throws(() => {
          setCurrent( testRound, 15 );
        });
      });
      it('increaseCurrent throws an error if it cant be increased', () => {
        const test = Object.assign({}, testRound, {
          currentTask: 9
        });
        assert.throws(() => {
          increaseCurrent( test );
        });
      });
    });
  });

  describe('Result', () => {

    describe('Time', () => {
      describe('setTime', () => {
        it('sets the time in seconds', () => {
          assert.equal( setTime(testResult, 25).time, 25 );
        });
        it('are clean', () => {
          let oldState = Object.assign({}, testResult );
          setTime(oldState, 8);
          assert.deepEqual( oldState, testResult );
        });
      });
      describe('getTime', () => {
        it('get tasks time in seconds', () => {
          const test = Object.assign({}, testResult, {
            time: 12
          });
          assert.equal( getTime(test), 12 );
        });
      });
      describe('errors', () => {
        it('setTime throws an error if unacceptable value passed', () => {
          assert.throws(() => {
            setTime( testRound, -1 );
          });
          assert.throws(() => {
            setTime( testRound, 40 );
          });
        });
      });
    });

    describe('Correct', () => {
      describe('determineCorrect', () => {
        it('determine a correct answer of first type game', () => {
          let test = Object.assign({}, testResult, {
            answer: [ImageType.PAINT, ImageType.PAINT],
            realAnswer: [ImageType.PAINT, ImageType.PAINT],
            taskType: 1
          });
          assert.equal(determineCorrect( test ), true);
        });
        it('determine a correct answer of second type game', () => {
          let test = Object.assign({}, testResult, {
            answer: ImageType.PAINT,
            realAnswer: ImageType.PHOTO,
            taskType: 2
          });
          assert.equal(determineCorrect( test ), true);
        });
        it('determine a correct answer of first type game', () => {
          let test = Object.assign({}, testResult, {
            answer: [ImageType.PAINT, ImageType.PAINT, ImageType.PHOTO],
            realAnswer: [ImageType.PAINT, ImageType.PHOTO, ImageType.PAINT],
            taskType: 3
          });
          assert.equal(determineCorrect( test ), false);
        });
      });
    });
  });

});
