import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Anchor } from '@/atoms/Anchor'

describe('Anchor', () => {
  it('href と children を描画する', () => {
    render(<Anchor href="https://example.com">リンク</Anchor>)

    const anchor = screen.getByRole('link', { name: 'リンク' })
    expect(anchor.getAttribute('href')).toBe('https://example.com')
    expect(anchor.getAttribute('rel')).toBeNull()
  })

  it('target が _blank のとき rel に noopener noreferrer を付与する', () => {
    render(
      <Anchor href="https://example.com" target="_blank">
        外部リンク
      </Anchor>
    )

    const anchor = screen.getByRole('link', { name: '外部リンク' })
    expect(anchor.getAttribute('target')).toBe('_blank')
    expect(anchor.getAttribute('rel')).toBe('noopener noreferrer')
  })

  it('クリックで onClick が呼ばれる', async () => {
    const onClick = vi.fn((event) => event.preventDefault())
    render(
      <Anchor href="https://example.com" onClick={onClick}>
        リンク
      </Anchor>
    )

    await userEvent.click(screen.getByRole('link', { name: 'リンク' }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('target が _blank のとき onClick は呼ばれない', async () => {
    const onClick = vi.fn()
    render(
      <Anchor href="https://example.com" target="_blank" onClick={onClick}>
        外部リンク
      </Anchor>
    )

    const anchor = screen.getByRole('link', { name: '外部リンク' })
    anchor.addEventListener('click', (event) => event.preventDefault())
    await userEvent.click(anchor)

    expect(onClick).not.toHaveBeenCalled()
  })
})
