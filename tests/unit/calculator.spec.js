import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })
})

it('subtracts two numbers and returns the result', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  });

  it('multiplies two numbers and returns the result', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  });

  it('divides two numbers and returns the result', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  });

  it('concatenates multiple number button clicks', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0;
    wrapper.vm.runningTotal = 0;
    wrapper.vm.newTotal = true;
    wrapper.vm.numberClick('2');
    wrapper.vm.numberClick('8');
    expect(wrapper.vm.runningTotal).to.equal(28)
  });

  it('chains multiple operations together', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.runningTotal = 45;
    wrapper.vm.previousTotal = 0;
    wrapper.vm.newTotal = false;
    wrapper.vm.operatorClick('*');
    wrapper.vm.numberClick('4');
    wrapper.vm.operatorClick('-');
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(175)
  });

  it('clears the running total without affecting the calculation', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.runningTotal = 70;
    wrapper.vm.previousTotal = 0;
    wrapper.vm.newTotal = false;
    wrapper.vm.operatorClick('-');
    wrapper.vm.numberClick('6');
    wrapper.vm.clearClick();
    wrapper.vm.numberClick('3');
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(67)
  });