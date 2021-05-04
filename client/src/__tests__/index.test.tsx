/// <reference types="jest" />

import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import Home from 'pages/index'

afterEach(cleanup)

it('「Next.js!」のリンクが Next.js の公式サイトのトップページである', () => {
    render(<Home />)
    expect(screen.getByText('Next.js').getAttribute('href')).toBe('https://nextjs.org/')
})