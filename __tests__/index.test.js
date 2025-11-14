import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home Page', () => {
  it('renders the home page', () => {
    render(<Home />)
    
    const heading = screen.getByRole('heading', { 
      name: /Chào mừng đến với MyProject/i 
    })
    
    expect(heading).toBeInTheDocument()
  })

  it('displays the description', () => {
    render(<Home />)
    
    const description = screen.getByText(/Develop: Cải thiện hiệu suất/i)
    
    expect(description).toBeInTheDocument()
  })

  it('has a link to about page', () => {
    render(<Home />)
    
    const aboutLink = screen.getByRole('link', { name: /Giới thiệu/i })
    
    expect(aboutLink).toHaveAttribute('href', '/about')
  })
})
