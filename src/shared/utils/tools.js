import Vue from 'vue';
import _ from 'lodash';

/**
 * 防止store参数重名
 * @param  {string} prefix
 */
export function makeConstCreator(prefix) {
  const constantList = [];
  return (constant) => {
    const s = `${prefix}/${constant}`;
    if (constantList.indexOf(s) !== -1) {
      throw new Error(`Duplicated store constants:${s}`);
    } else {
      constantList.push(s);
      return s;
    }
  };
}

/**
 * 获取模块路径
 * @param  {function} importter
 */
export function getComponentCreator(importter) {
  return (...path) => importter().then((component) => {
    let result = component;
    if (!_.isEmpty(path)) {
      result = _.get(component, `default.${path.join('.')}`);
    }
    return result;
  });
}

/**
 * 修改state
 * @param  {object} state
 * @param  {object} payload
 */
export function assignStoreState(state, payload) {
  Object.keys(payload).forEach((key) => {
    if (typeof payload[key] !== 'undefined') {
      if (state[key] !== payload[key]) {
        Vue.set(state, key, payload[key]);
      }
    }
  });
}

const DEFAULT_DEALY_DURATION = 1000;
/**
 * 手动延迟
 * @param  {number} duration=DEFAULT_DEALY_DURATION
 */
export function delayPromise(duration = DEFAULT_DEALY_DURATION) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
