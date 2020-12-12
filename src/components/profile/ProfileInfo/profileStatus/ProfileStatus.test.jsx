/* import React from 'react'
import {create} from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
      const component = create(<ProfileStatus status='check state status' />)
      const root = component.root
      expect(root.state.status).toBe('check state status')
    })
    test('after creation span should be displayed', () => {
        const component = create(<ProfileStatus status='check state status' />)
        const instance = component.getInstance()

        const span = instance.findByType('span')
        expect(span.length).toBe(1)
      })
  }) */