import { render, screen } from '@testing-library/react'
import About from '../pages/about'

describe('About Page', () => {
  it('renders the about page heading', () => {
    render(<About />)
    
    const heading = screen.getByRole('heading', { 
      name: /Giới thiệu về MyProject/i 
    })
    
    expect(heading).toBeInTheDocument()
  })

  it('displays Git workflow features list', () => {
    render(<About />)
    
    // Check for specific list items
    expect(screen.getByText(/Git rebase conflicts/i)).toBeInTheDocument()
    expect(screen.getByText(/Large merge conflicts/i)).toBeInTheDocument()
    expect(screen.getByText(/Git stash in conflict scenarios/i)).toBeInTheDocument()
    expect(screen.getByText(/Git rerere automation/i)).toBeInTheDocument()
  })

  it('has a link back to home page', () => {
    render(<About />)
    
    const homeLink = screen.getByRole('link', { name: /Quay lại trang chủ/i })
    
    expect(homeLink).toHaveAttribute('href', '/')
  })
})
