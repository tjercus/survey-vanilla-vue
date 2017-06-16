import Vue from 'vue';

const eventbus = new Vue();
eventbus.on = eventbus.$on;
eventbus.emit = eventbus.$emit;
export default eventbus;
