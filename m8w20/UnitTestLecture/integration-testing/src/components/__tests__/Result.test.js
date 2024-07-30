import { render, prettyDOM, fireEvent } from '@testing-library/react'

import Result from '../Result'

describe('Testing API',()=>{
    test('can retrieve mock data', ()=> {
        const { container, getByTestId, findByText } = render(<Result status="Waiting"/>)
        const highScoreButton = getByTestId('high-scores')
        fireEvent.click(highScoreButton);

        return findByText('Bryan: 11')
    })
})