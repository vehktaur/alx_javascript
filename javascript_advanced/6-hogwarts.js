const studentHogwarts = () => {
  let privateScore = 0;
  let name = null;

  const changedScoreBy = (points) => {
    privateScore += points;
  };

  return () => {
    const setName = (newName) => {
      name = newName;
    };

    const rewardStudent = () => {
      changedScoreBy(1);
    };
    const penalizeStudent = () => {
      changedScoreBy(-1);
    };
    const getScore = () => `${name}: ${privateScore}`;
  };
};
