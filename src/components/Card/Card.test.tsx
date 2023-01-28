import { render, fireEvent } from '@react-testing-library'
import { Store, AnyAction } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { mockStore } from 'redux-mock-store'
import Card from '.'
import { Product } from '../../@types/types'

describe('MyComponent', () => {
    let store: Store<Product, AnyAction>
    let props = {
        id: '1',
        name: 'test',
        price: 100,
        image: 'test',
        description: 'test',
        category: 'test',
    } as unknown as Product
    beforeEach(() => {
        store = mockStore({
            products: {
                products: [
                    {
                        id: '1',
                        name: 'test',
                        price: 100,
                        image: 'test',
                        description: 'test',
                        category: 'test',
                    },
                ],
            },
        })
    })

    it('renders correctly with props', () => {
        const { debug } = render(
            <Provider store={store}>
                <Card {...props} />
            </Provider>
        )

        debug()

        // Assertions to check if the component is rendered correctly with the props
    })
})