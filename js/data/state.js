/**
 * Created by yulia on 12.12.2016.
 */
import {statsType, prices} from './game-data';
import dataUnited from './game-data';

export let state = {
  currentRound: 0,
  rounds: [
    {
      questions: dataUnited.questions,
      currentTask: 0,
      lives: 3,
      stats: [],
      result: []
    }
  ]
};

export const setLives = (round, lives) => {
  if (lives < 0 || lives > 3) {
    throw new RangeError('This number cant be number of lives');
  } else {
    return Object.assign({}, round, {lives});
  }
};

export const getLives = (round) => round.lives;

export const decreaseLives = (round) => {
  if (round.lives < 0) {
    throw new RangeError('You have an irreducible number of lives');
  } else {
    return Object.assign({}, round, {
      lives: round.lives - 1
    });
  }
};

export const setCurrent = (round, currentTask) => {
  if (currentTask < 0 || currentTask > 10) {
    throw new RangeError('This number cant be number of current task');
  } else {
    return Object.assign({}, round, {currentTask});
  }
};

export const getCurrent = (round) => round.currentTask;

export const increaseCurrent = (round) => {
  if (round.currentTask === 9) {
    throw new RangeError('You are at the last task now');
  } else {
    return Object.assign({}, round, {
      currentTask: round.currentTask + 1
    });
  }
};

export const setTime = (resultTask, time) => {
  if (time < 0 || time > 30) {
    throw new RangeError('This number cant be number of tasks time');
  } else {
    return Object.assign({}, resultTask, {time});
  }
};

export const getTime = (resultTask) => {
  return resultTask.time;
};

export const determineCorrect = (resultTask) => {
  const answer = resultTask.answer;
  const real = resultTask.realAnswer;
  let isCorrect;
  if (answer.length === real.length) {
    isCorrect = answer.every((item, i) => {
      return Boolean(item === real[i]);
    });
  } else {
    isCorrect = false;
  }
  return Object.assign({}, resultTask, {isCorrect});

};

export const getCorrectness = (resultTask) => resultTask.isCorrect;

export const determineAnswerType = (resultTask) => {
  let res;

  if (resultTask.isCorrect === true) {

    if (resultTask.time > 20) {
      res = statsType.FAST;
    } else if (resultTask.time < 10) {
      res = statsType.SLOW;
    } else {
      res = statsType.CORRECT;
    }
  } else if (resultTask.isCorrect === false) {
    res = statsType.WRONG;
  } else {
    res = statsType.UNKNOWN;
  }
  return Object.assign({}, resultTask, {
    statsType: res
  });
};

export const getAnswerType = (resultTask) => resultTask.statsType;

export const countTotal = (momentState) => {
  let round = momentState.rounds[momentState.currentRound];
  const result = round.result;

  let correct = 0;
  let wrong = 0;
  let fastBonuses = 0;
  let livesBonuses = (round.lives > 0 ? round.lives : 0);
  let fines = 0;

  result.forEach((item) => {
    if (item.isCorrect === true) {
      correct += 1;
    } else {
      wrong += 1;
    }
    if (item.statsType === statsType.SLOW) {
      fines += 1;
    } else if (item.statsType === statsType.FAST) {
      fastBonuses += 1;
    }
  });

  let isWin = Boolean(wrong < 4);

  let total;
  if (isWin === true) {
    total = {
      isWin: isWin,
      totalPoints: correct * prices.CORRECT + (livesBonuses + fastBonuses) * prices.BONUS + fines * prices.FINE,
      fastBonuses: fastBonuses,
      livesBonuses: round.lives,
      slowFine: fines
    };
  } else {
    total = {
      isWin: isWin,
      totalPoints: 0,
      fastBonuses: 0,
      livesBonuses: 0,
      slowFine: 0
    };
  }
  let res = Object.assign({}, round, total);
  let rounds = momentState.rounds.slice();
  rounds[momentState.currentRound] = res;
  return Object.assign({}, momentState, {rounds});
};

export const setUserAnswer = (resultTask, answer) => Object.assign({}, resultTask, {answer});

export const setRealAnswer = (resultTask, realAnswer) => Object.assign({}, resultTask, {realAnswer});

export const setStats = (round, value) => {
  let newStats = round.stats.slice();
  newStats[round.currentTask] = value;
  return Object.assign({}, round, {
    stats: newStats
  });
};

export const setResult = (momentState, answer, time) => {
  const currentRoundNum = momentState.currentRound;
  const round = momentState.rounds[currentRoundNum];
  const currentTaskNum = getCurrent(round);

  let resultTask = setUserAnswer({}, answer);
  const currentQuestion = round.questions[currentTaskNum].tasks;
  const realAnswer = currentQuestion.map((item) => {
    return item.type;
  });
  resultTask = setRealAnswer(resultTask, realAnswer);
  resultTask = setTime(resultTask, time);
  resultTask = determineCorrect(resultTask);
  resultTask = determineAnswerType(resultTask);

  let res = setStats(round, resultTask.statsType);
  if (!getCorrectness(resultTask)) {
    res = decreaseLives(res);
  }
  res = setCurrent(res, currentTaskNum + 1);
  res.result[currentTaskNum] = resultTask;

  let rounds = momentState.rounds.slice();
  rounds[momentState.currentRound] = res;
  return Object.assign({}, momentState, {rounds});
};

export const updateState = (oldState, newState) => {
  oldState.currentRound = newState.currentRound;
  oldState.rounds = newState.rounds;
};


