/**
 * Created by yulia on 12.12.2016.
 */
import assert from 'assert';
import dataUnited from './game-data';
import {ImageType, statsType} from '../data/game-data';
import {timerObject} from '../templates/components/timer';
import {
  setLives,
  decreaseLives,
  getLives,
  setCurrent,
  getCurrent,
  increaseCurrent,
  setTime,
  getTime,
  determineCorrect,
  getCorrectness,
  determineAnswerType,
  getAnswerType,
  countTotal,
  setUserAnswer,
  setRealAnswer,
  setStats,
  setResult
} from './state';

const testState = {
  currentRound: 0,
  rounds: [
    {
      questions: dataUnited.questions,
      currentTask: 5,
      lives: 2,
      stats: [statsType.CORRECT, statsType.SLOW],
      result: [
        {
          time: 23,
          answer: [ImageType.PAINT, ImageType.PAINT],
          realAnswer: [ImageType.PAINT, ImageType.PAINT],
          isCorrect: true,
          statsType: statsType.SLOW
        },
        {
          time: 13,
          answer: [ImageType.PAINT],
          realAnswer: [ImageType.PHOTO],
          isCorrect: false,
          statsType: statsType.WRONG
        },
        {
          time: 5,
          answer: [ImageType.PAINT, ImageType.PHOTO, ImageType.PAINT],
          realAnswer: [ImageType.PAINT, ImageType.PHOTO, ImageType.PAINT],
          isCorrect: true,
          statsType: statsType.FAST
        },
        {
          time: 15,
          answer: [ImageType.PAINT],
          realAnswer: [ImageType.PAINT],
          isCorrect: true,
          statsType: statsType.CORRECT
        },
        {
          time: 23,
          answer: [ImageType.PAINT, ImageType.PAINT],
          realAnswer: [ImageType.PAINT, ImageType.PAINT],
          isCorrect: true,
          statsType: statsType.SLOW
        },
        {
          time: 13,
          answer: [ImageType.PAINT],
          realAnswer: [ImageType.PHOTO],
          isCorrect: false,
          statsType: statsType.WRONG
        },
        {
          time: 5,
          answer: [ImageType.PAINT, ImageType.PHOTO, ImageType.PAINT],
          realAnswer: [ImageType.PAINT, ImageType.PHOTO, ImageType.PAINT],
          isCorrect: true,
          statsType: statsType.FAST
        },
        {
          time: 15,
          answer: [ImageType.PAINT],
          realAnswer: [ImageType.PAINT],
          isCorrect: true,
          statsType: statsType.CORRECT
        },
        {
          time: 23,
          answer: [ImageType.PAINT, ImageType.PAINT],
          realAnswer: [ImageType.PAINT, ImageType.PAINT],
          isCorrect: true,
          statsType: statsType.SLOW
        },
        {
          time: 13,
          answer: [ImageType.PAINT],
          realAnswer: [ImageType.PHOTO],
          isCorrect: false,
          statsType: statsType.WRONG
        }
      ],

      isWin: true,
      totalPoints: null,
      fastBonuses: null,
      livesBonuses: null,
      slowFine: null
    }
  ]
};
const testRound = testState.rounds[0];
const testResult = testRound.result[0];
const testTimer = timerObject;
testTimer.currentTime = 23;

describe('Game state', () => {

  describe('Lives', () => {
    describe('setLives', () => {
      it('sets the number of lives equal 2', () => {
        assert.equal(setLives(testRound, 2).lives, 2);
      });
      it('are clean', () => {
        let oldState = Object.assign({}, testRound);
        setLives(oldState, 1);
        assert.deepEqual(oldState, testRound);
      });
    });
    describe('getLives', () => {
      it('get the number of lives', () => {
        const test = Object.assign({}, testRound, {
          lives: 3
        });
        assert.equal(getLives(test), 3);
      });
    });
    describe('decreaseLives', () => {
      it('reduces the number of lives', () => {
        assert.equal(testRound.lives - decreaseLives(testRound).lives, 1);
      });
      it('are clean', () => {
        let oldState = Object.assign({}, testRound);
        decreaseLives(oldState);
        assert.deepEqual(oldState, testRound);
      });
    });
    describe('errors', () => {
      it('setLives throws an error if unacceptable value passed', () => {
        assert.throws(() => {
          setLives(testRound, -1);
        });
        assert.throws(() => {
          setLives(testRound, 4);
        });
      });
      it('decreaseLives throws an error if it cant be decreased', () => {
        const test = Object.assign({}, testRound, {
          lives: -1
        });
        assert.throws(() => {
          decreaseLives(test);
        });
      });
    });
  });

  describe('Stats', () => {
    describe('setStats', () => {
      it('push new value of stats', () => {
        const test = setStats(testRound, statsType.WRONG);
        const length = test.stats.length;
        assert.equal(test.stats[length - 1], statsType.WRONG);
      });
      it('are clean', () => {
        let oldState = Object.assign({}, testRound);
        setStats(oldState, statsType.WRONG);
        assert.deepEqual(oldState, testRound);
      });
    });
  });

  describe('Current task', () => {
    describe('setCurrent', () => {
      it('sets the current task equal 2', () => {
        assert.equal(setCurrent(testRound, 8).currentTask, 8);
      });
      it('are clean', () => {
        let oldState = Object.assign({}, testRound);
        setCurrent(oldState, 8);
        assert.deepEqual(oldState, testRound);
      });
    });
    describe('getCurrent', () => {
      it('get current task', () => {
        const test = Object.assign({}, testRound, {
          currentTask: 8
        });
        assert.equal(getCurrent(test), 8);
      });
    });
    describe('increaseCurrent', () => {
      it('increase the number of current task', () => {
        assert.equal(increaseCurrent(testRound).currentTask - testRound.currentTask, 1);
      });
      it('are clean', () => {
        let oldState = Object.assign({}, testRound);
        increaseCurrent(oldState);
        assert.deepEqual(oldState, testRound);
      });
    });
    describe('errors', () => {
      it('setCurrent throws an error if unacceptable value passed', () => {
        assert.throws(() => {
          setCurrent(testRound, -1);
        });
        assert.throws(() => {
          setCurrent(testRound, 15);
        });
      });
      it('increaseCurrent throws an error if it cant be increased', () => {
        const test = Object.assign({}, testRound, {
          currentTask: 9
        });
        assert.throws(() => {
          increaseCurrent(test);
        });
      });
    });
  });

  describe('Total', () => {
    describe('countTotal', () => {
      it('counts total points', () => {
        assert.equal(countTotal(testState).rounds[0].totalPoints, 750);
      });
      it('counts total lives bonuses', () => {
        assert.equal(countTotal(testState).rounds[0].livesBonuses, 2);
      });
      it('counts total fast bonuses', () => {
        assert.equal(countTotal(testState).rounds[0].fastBonuses, 2);
      });
      it('counts total fines', () => {
        assert.equal(countTotal(testState).rounds[0].slowFine, 3);
      });
      it('are clean', () => {
        let oldState = Object.assign({}, testState);
        countTotal(oldState, 1);
        assert.deepEqual(oldState, testState);
      });
    });
  });

  describe('Result', () => {

    describe('Time', () => {
      describe('setTime', () => {
        it('sets the time in seconds', () => {
          assert.equal(setTime(testResult, 25).time, 25);
        });
        it('are clean', () => {
          let oldState = Object.assign({}, testResult);
          setTime(oldState, 8);
          assert.deepEqual(oldState, testResult);
        });
      });
      describe('getTime', () => {
        it('get tasks time in seconds', () => {
          const test = Object.assign({}, testResult, {
            time: 12
          });
          assert.equal(getTime(test), 12);
        });
      });
      describe('errors', () => {
        it('setTime throws an error if unacceptable value passed', () => {
          assert.throws(() => {
            setTime(testRound, -1);
          });
          assert.throws(() => {
            setTime(testRound, 40);
          });
        });
      });
    });

    describe('Correct', () => {
      describe('determineCorrect', () => {
        it('determine a correct answer of first type game', () => {
          let test = Object.assign({}, testResult, {
            answer: [ImageType.PAINT, ImageType.PAINT],
            realAnswer: [ImageType.PAINT, ImageType.PAINT]
          });
          assert.equal(determineCorrect(test).isCorrect, true);
        });
        it('determine a correct answer of second type game', () => {
          let test = Object.assign({}, testResult, {
            answer: [ImageType.PAINT],
            realAnswer: [ImageType.PHOTO]
          });
          assert.equal(determineCorrect(test).isCorrect, false);
        });
        it('determine a correct answer of third type game', () => {
          let test = Object.assign({}, testResult, {
            answer: [ImageType.PAINT, ImageType.PAINT, ImageType.PHOTO],
            realAnswer: [ImageType.PAINT, ImageType.PHOTO, ImageType.PAINT]
          });
          assert.equal(determineCorrect(test).isCorrect, false);
        });
        it('determine a correct answer if user did not answer', () => {
          let test = Object.assign({}, testResult, {
            answer: [],
            realAnswer: [ImageType.PAINT, ImageType.PAINT]
          });
          assert.equal(determineCorrect(test).isCorrect, false);
        });
        it('determine a correct answer if user answer 1 quest from 2', () => {
          let test = Object.assign({}, testResult, {
            answer: [ImageType.PAINT],
            realAnswer: [ImageType.PAINT, ImageType.PAINT]
          });
          assert.equal(determineCorrect(test).isCorrect, false);
        });
        it('are clean', () => {
          let oldState = Object.assign({}, testResult);
          determineCorrect(oldState);
          assert.deepEqual(oldState, testResult);
        });
      });
      describe('getCorrect', () => {
        it('get correctness of user answer', () => {
          const test = Object.assign({}, testResult, {
            isCorrect: true
          });
          assert.equal(getCorrectness(test), true);
        });
      });
    });

    describe('Stats', () => {
      describe('determineAnswerType', () => {
        it('determine a correct answer type WRONG', () => {
          let test = Object.assign({}, testResult, {
            time: 20,
            isCorrect: false,
            statsType: null
          });
          assert.equal(determineAnswerType(test).statsType, statsType.WRONG);
        });
        it('determine a correct answer type CORRECT', () => {
          let test = Object.assign({}, testResult, {
            time: 15,
            isCorrect: true,
            statsType: null
          });
          assert.equal(determineAnswerType(test).statsType, statsType.CORRECT);
        });
        it('determine a correct answer type SLOW', () => {
          let test = Object.assign({}, testResult, {
            time: 5,
            isCorrect: true,
            statsType: null
          });
          assert.equal(determineAnswerType(test).statsType, statsType.SLOW);
        });
        it('determine a correct answer type FAST', () => {
          let test = Object.assign({}, testResult, {
            time: 25,
            isCorrect: true,
            statsType: null
          });
          assert.equal(determineAnswerType(test).statsType, statsType.FAST);
        });
        it('determine a correct answer type UNKNOWN', () => {
          let test = Object.assign({}, testResult, {
            isCorrect: null,
            statsType: null
          });
          assert.equal(determineAnswerType(test).statsType, statsType.UNKNOWN);
        });
        it('are clean', () => {
          let oldState = Object.assign({}, testResult);
          determineAnswerType(oldState);
          assert.deepEqual(oldState, testResult);
        });
      });
      describe('getAnswerType', () => {
        it('get answer type', () => {
          const test = Object.assign({}, testRound, {
            statsType: statsType.WRONG
          });
          assert.equal(getAnswerType(test), statsType.WRONG);
        });
      });
    });

    describe('Answer', () => {
      describe('setUserAnswer', () => {
        it('sets user answer', () => {
          assert.deepEqual(setUserAnswer(testResult, [ImageType.PAINT]).answer, [ImageType.PAINT]);
        });
        it('are clean', () => {
          let oldState = Object.assign({}, testRound);
          setUserAnswer(oldState, 1);
          assert.deepEqual(oldState, testRound);
        });
      });

      describe('setRealAnswer', () => {
        it('sets real answer', () => {
          assert.deepEqual(setRealAnswer(testResult, [ImageType.PHOTO, ImageType.PAINT]).realAnswer, [ImageType.PHOTO, ImageType.PAINT]);
        });
        it('are clean', () => {
          let oldState = Object.assign({}, testRound);
          setRealAnswer(oldState, 1);
          assert.deepEqual(oldState, testRound);
        });
      });
    });

    describe('setResult', () => {
      it('set quest result', () => {
        let current = testRound.currentTask;
        assert.equal(setResult(testState, [ImageType.PAINT, ImageType.PAINT], 15).rounds[0].result[current].statsType, statsType.WRONG);
      });
    });
  });

});
