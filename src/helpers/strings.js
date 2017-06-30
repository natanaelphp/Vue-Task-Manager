import { deburr } from 'lodash';

export const sanitize = deburr;
export const sanitizeAndLower = value => sanitize(value).toLowerCase();
export const contains = (string, value) => sanitizeAndLower(string).indexOf(sanitizeAndLower(value)) > -1;
