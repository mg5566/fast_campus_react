type Filter = {
  maxValue: number;
  minValue: number;
};

const filter: Filter = {
  maxValue: 10,
  minValue: 0,
};

const copiedFilter = _.cloneDeep(filter);

console.log({ ...copiedFilter });
