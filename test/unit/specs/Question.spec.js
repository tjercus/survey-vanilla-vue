import Vue from 'vue';
import Question from '@/components/Question';

describe('Question.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Question);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Survey App with vanilla Vue');
  });
});
