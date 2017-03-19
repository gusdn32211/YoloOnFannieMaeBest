import { createSelector } from 'reselect'

export const stockSelector = (state) => state.stock.data;
export const yoloSelector = (state) => state.yolo.showStock;
