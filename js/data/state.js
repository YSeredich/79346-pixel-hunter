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

export let state = {
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

export const getCorrectness = (resultTask) => {
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
