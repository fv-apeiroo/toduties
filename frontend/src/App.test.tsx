import { render, screen, fireEvent, act } from '@testing-library/react'
import App from './App'

describe('App', () => {
    test('renders the home section by default', () => {
        render(<App />)
        expect(screen.getByText('Welcome to toduties')).toBeInTheDocument()
    })

    test('renders the duties section when the menu item is clicked', async () => {
        await act(async () => {
            render(<App />)
        })
        const dutiesMenuItem = screen.getByText('Duties')

        await act(async () => {
            fireEvent.click(dutiesMenuItem)
        })

        expect(screen.getByText('To-Do List')).toBeInTheDocument()
    })

    test('renders the correct content when the menu is clicked', async () => {
        await act(async () => {
            render(<App />)
        })
        const homeMenuItem = screen.getByText('Home')
        const dutiesMenuItem = screen.getByText('Duties')

        await act(async () => {
            fireEvent.click(dutiesMenuItem)
        })
        expect(screen.getByText('To-Do List')).toBeInTheDocument()

        await act(async () => {
            fireEvent.click(homeMenuItem)
        })
        expect(screen.getByText('Welcome to toduties')).toBeInTheDocument()
    })
})
