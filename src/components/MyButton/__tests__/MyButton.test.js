import { shallowMount } from '@vue/test-utils'
import sinon from 'sinon'
import MyButton from '../index.vue'

describe('MyButton', () => {
  let wrapper
  let sandbox

  const generateWrapper = (options) => {
    return shallowMount(MyButton, options)
  }

  beforeEach(() => {
    wrapper = generateWrapper()
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    wrapper.destroy()
    sandbox.restore()
  })

  test('is vue', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  test('render button with label', () => {
    wrapper = generateWrapper({
      propsData: {
        label: 'Label Text'
      }
    })
    expect(wrapper.find('span').text()).toBe('Label Text')
    expect(wrapper.element).toMatchSnapshot()
  })

  test('render button rounded', () => {
    wrapper = generateWrapper({
      propsData: {
        label: 'My Button',
        rounded: true
      }
    })
    expect(wrapper.classes()).toContain('rounded')
    expect(wrapper.element).toMatchSnapshot()
  })

  test('render button with custom color', () => {
    wrapper = generateWrapper({
      propsData: {
        label: 'My Button',
        color: '#FFFFFF'
      }
    })
    expect(wrapper.attributes().style).toBe('color: rgb(255, 255, 255); border-color: #ffffff;')
    expect(wrapper.element).toMatchSnapshot()
  })
})
