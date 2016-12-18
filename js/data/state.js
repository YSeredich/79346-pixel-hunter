/**
 * Created by yulia on 12.12.2016.
 */
export const ImageType = {
  PAINT: 0,
  PHOTO: 1
};
export const statsType = {
  WRONG: 0,
  CORRECT: 1,
  SLOW: 2,
  FAST: 3,
  UNKNOWN: 4
};
export const prices = {
  CORRECT: 100,
  BONUS: 50,
  FINE: -50
};

export let initialState = {
  round: [
    {
      currentTask: 0,
      lives: 3,
      result: []
    }
  ]
};

export const setLives = ( round, lives ) => {
  if (lives < 0 || lives > 3) {
    throw new RangeError('This number cant be number of lives');
  } else {
    return Object.assign({}, round, {
      lives: lives
    });
  }
};

export const getLives = ( round ) => {
  return round.lives;
};

export const decreaseLives = ( round ) => {
  if ( round.lives < 1 ) {
    throw new RangeError('You have an irreducible number of lives');
  } else {
    return Object.assign({}, round, {
      lives: round.lives - 1
    });
  }
};

export const setCurrent = ( round, current ) => {
  if (current < 0 || current > 9) {
    throw new RangeError('This number cant be number of current task');
  } else {
    return Object.assign({}, round, {
      currentTask: current
    });
  }
};

export const getCurrent = ( round ) => {
  return round.currentTask;
};

export const increaseCurrent = ( round ) => {
  if ( round.currentTask === 9 ) {
    throw new RangeError('You are at the last task now');
  } else {
    return Object.assign({}, round, {
      currentTask: round.currentTask + 1
    });
  }
};

export const setTime = ( resultTask, time ) => {
  if ( time < 0 || time > 30 ) {
    throw new RangeError('This number cant be number of tasks time');
  } else {
    return Object.assign({}, resultTask, {
      time: time
    });
  }
};

export const getTime = ( resultTask ) => {
  return resultTask.time;
};

export const determineCorrect = ( resultTask ) => {
  const answer = resultTask.answer;
  const real = resultTask.realAnswer;
  let isCorrect;
  if ( answer.length === real.length ) {
    isCorrect = answer.every( ( item, i ) => {
      return Boolean( item === real[i] );
    });
  } else {
    isCorrect = false;
  }
  return Object.assign({}, resultTask, {
    isCorrect: isCorrect
  });

};

export const getCorrectness = ( resultTask ) => {
  return resultTask.isCorrect;
};

export const determineAnswerType = ( resultTask ) => {
  let res;

  if (resultTask.isCorrect === true) {

    if (resultTask.time < 10) {
      res = statsType.FAST;
    } else if (resultTask.time > 20) {
      res = statsType.SLOW;
    } else {
      res = statsType.CORRECT;
    }
  } else if ( resultTask.isCorrect === false ) {
    res = statsType.WRONG;
  } else {
    res = statsType.UNKNOWN;
  }
  return Object.assign({}, resultTask, {
    statsType: res
  });
};

export const getAnswerType = ( resultTask ) => {
  return resultTask.statsType;
};

export const countTotal = ( round ) => {
  let total;
  if ( round.isWin === true ) {
    let correct = 0;
    let bonuses = round.lives;
    let fines = 0;
    const result = round.result;

    result.forEach( ( item ) => {
      if (item.isCorrect === true) {
        correct += 1;
      }
      if ( item.statsType === statsType.SLOW ) {
        fines += 1;
      } else if ( item.statsType === statsType.FAST ) {
        bonuses += 1;
      }
    });

    total = {
      totalPoints: correct * prices.CORRECT + bonuses * prices.BONUS + fines * prices.FINE,
      fastBonuses: bonuses - round.lives,
      livesBonuses: round.lives,
      slowFine: fines
    };

  } else {
    total = {
      totalPoints: 0,
      fastBonuses: 0,
      livesBonuses: 0,
      slowFine: 0
    };
  }
  return Object.assign({}, round, total);
};

export const setUserAnswer = ( resultTask, arr ) => {
  return Object.assign({}, resultTask, {
    answer: arr
  });
};

export const setRealAnswer = ( resultTask, arr ) => {
  return Object.assign({}, resultTask, {
    realAnswer: arr
  });
};


