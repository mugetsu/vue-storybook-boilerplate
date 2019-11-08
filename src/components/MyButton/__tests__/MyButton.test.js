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

  it('should render correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render button with label', () => {
    wrapper = generateWrapper({
      propsData: {
        label: 'Label Text'
      }
    })
    expect(wrapper.find('span').text()).toBe('Label Text')
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render button rounded', () => {
    wrapper = generateWrapper({
      propsData: {
        label: 'My Button',
        rounded: true
      }
    })
    expect(wrapper.classes()).toContain('rounded')
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render button with custom color', () => {
    wrapper = generateWrapper({
      propsData: {
        label: 'My Button',
        color: '#FFFFFF'
      }
    })
    expect(wrapper.attributes().style).toBe('color: rgb(255, 255, 255); border-color: #ffffff;')
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should emit click upon clicking', () => {  
    wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('should call onClick once', () => {
    const mockOnClick = sandbox.stub()
    wrapper.setMethods({ onClick: mockOnClick })    
    wrapper.trigger('click')
    expect(mockOnClick.calledOnce).toBe(true)
  })

  it('should emit onDoubleClick upon double clicking', () => {
    wrapper.trigger('dblclick')
    expect(wrapper.emitted('dblclick')).toHaveLength(1)
  })

  it('should call onDoubleClick once', () => {
    const mockOnDoubleClick = sandbox.stub()
    wrapper.setMethods({ onDoubleClick: mockOnDoubleClick })
    wrapper.trigger('dblclick')
    expect(mockOnDoubleClick.calledOnce).toBe(true)
  })
})
