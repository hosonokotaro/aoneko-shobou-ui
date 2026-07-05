import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Button } from '@/molecules/Button'

describe('Button', () => {
  it('button 要素として描画され、クリックで onClick が呼ばれる', async () => {
    const onClick = vi.fn()
    render(
      <Button
        text="送信"
        buttonSize="M"
        buttonColor="DEFAULT"
        onClick={onClick}
      />
    )

    const button = screen.getByRole('button', { name: '送信' })
    await userEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('isAnchor のとき anchor 要素として描画される', () => {
    render(
      <Button
        text="詳細へ"
        buttonSize="M"
        buttonColor="DEFAULT"
        isAnchor
        href="/detail"
      />
    )

    const anchor = screen.getByRole('link', { name: '詳細へ' })
    expect(anchor.getAttribute('href')).toBe('/detail')
    expect(screen.queryByRole('button')).toBeNull()
  })
})
