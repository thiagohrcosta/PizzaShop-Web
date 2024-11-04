import { render } from "@testing-library/react"
import { Pagination } from "./pagination"

const onPageChangeCallback = vi.fn()

import userEvent from "@testing-library/user-event";

describe('Pagination', () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear()
  })

  it('should display the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination 
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />
    )

    expect(wrapper.getByText('Page 1 from 20')).toBeInTheDocument()
    expect(wrapper.getByText('Total 200 item(s)')).toBeInTheDocument()
  })

  it('should be able to navigate to the next page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination 
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Next page'
    })

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(1)
  })

  it('should be able to navigate to the previously page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination 
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />
    )

    const previouslyPageButton = wrapper.getByRole('button', {
      name: 'Previously page'
    })

    await user.click(previouslyPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(4)
  })

  it('should be able to navigate to the first page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination 
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />
    )

    const firstPageButton = wrapper.getByRole('button', {
      name: 'First page'
    })

    await user.click(firstPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(0)
  })

  it('should be able to navigate to the last page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination 
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />
    )

    const lastPageButton = wrapper.getByRole('button', {
      name: 'Last page'
    })

    await user.click(lastPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(19)
  })
})