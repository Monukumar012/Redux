// for user

import { DECREMENT_AMOUNT_BY_1, DECREMENT_AMOUNT_BY_VALUE, DECREMENT_BLOG_LENGTH_BY_1, 
        DECREMENT_BLOG_LENGTH_BY_VALUE, INCREMENT_AMOUNT_BY_1, 
        INCREMENT_AMOUNT_BY_VALUE, INCREMENT_BLOG_LENGTH_BY_1, 
        INCREMENT_BLOG_LENGTH_BY_VALUE, INITLIZE_BLOG, INITLIZE_USER } from "./constants.js";

export function intilizeUser(user) {
    return { type: INITLIZE_USER, payload: user };
}

export function incrementUserAmount() {
    return { type: INCREMENT_AMOUNT_BY_1 };
}

export function decrementUserAmount() {
    return { type: DECREMENT_AMOUNT_BY_1 };
}

export function incrementUserAmountByValue(value) {
    return { type: INCREMENT_AMOUNT_BY_VALUE, payload: value };
}

export function decrementUserAmountByValue(value) {
    return { type: DECREMENT_AMOUNT_BY_VALUE, payload: value };
}



// blog
export function intilizeBlog(user) {
    return { type: INITLIZE_BLOG, payload: user };
}

export function incrementBlogLength() {
    return { type: INCREMENT_BLOG_LENGTH_BY_1 };
}

export function decrementBlogLength() {
    return { type: DECREMENT_BLOG_LENGTH_BY_1 };
}

export function incrementBlogLengthByValue(value) {
    return { type: INCREMENT_BLOG_LENGTH_BY_VALUE, payload: value };
}

export function decrementBlogLengthByValue(value) {
    return { type: DECREMENT_BLOG_LENGTH_BY_VALUE, payload: value };
}