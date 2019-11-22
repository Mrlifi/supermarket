//设置秒杀商品
export const SET_SECKILLS_INFO = (state, seckills) => {
  state.seckills.goodsList = seckills[0];
  state.seckills.deadline = seckills[1];
};
// 获取秒杀的小时
export const seckillsHours = state => {
  return state.seckills.deadline.hours < 10 ? '0' + state.seckills.deadline.hours : state.seckills.deadline.hours;
};

// 获取秒杀的分钟
export const seckillsMinutes = state => {
  return state.seckills.deadline.minute < 10 ? '0' + state.seckills.deadline.minute : state.seckills.deadline.minute;
};

// 获取秒杀的秒
export const seckillsSeconds = state => {
  return state.seckills.deadline.seconds < 10 ? `0${state.seckills.deadline.seconds}` : state.seckills.deadline.seconds;
};