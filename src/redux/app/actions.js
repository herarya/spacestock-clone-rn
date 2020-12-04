/*
 * @Author: AIA
 * @Date: 2019-03-01 11:28:02
 * @Last Modified by: herman
 * @Last Modified time: 2020-12-04 14:11:15
 */
import {defineAction} from 'redux-define';
import {APP_NAME_SPACE, CLOSE, SHOW} from '../root-state';

export const ALERT = defineAction('ALERT', [SHOW, CLOSE], APP_NAME_SPACE);

export const showAlert = (message, alertType) => {
  return {
    type: ALERT.SHOW,
    alert: true,
    alertType,
    payload: message,
  };
};
export const closeAlert = () => {
  return {
    type: ALERT.CLOSE,
    alert: false,
  };
};
