import React from 'react'
import { render } from '@testing-library/react'
import List from './List'

test('renders List component', () => {
    const { getByText } = render(
        <List />
    )

    expect(getByText(/I am a task in a list/i)).toBeInTheDocument()
})