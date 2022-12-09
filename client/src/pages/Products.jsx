import React, { useEffect, useState } from 'react'
import { Pagination, Select } from 'antd'
import { getPagedProduct } from '../api/product'
import ProductCard from '../components/ProductCard'

const typeOfProduct = ['Trà sữa', 'Trà', 'Sữa chua', 'Cà phê', 'Sữa']
const { Option } = Select

const Products = () => {
  const [products, setProducts] = useState([])
  const [paginationPage, setPaginationPage] = useState([1])
  const [totalProduct, setTotalProduct] = useState()
  const [filterType, setFilterType] = useState('')

  const fetchProductData = async () => {
    try {
      const productList = await getPagedProduct({ _page: paginationPage, _limit: '12' })
      setTotalProduct(productList.data.pagination._totalRows)
      setProducts(productList.data.data)
      return Promise.resolve()
    } catch (error) {
      if (error.response) {
        navigate('/404')
      }
    }
  }

  const fetchFilterProduct = async () => {
    try {
      const productList = await getPagedProduct({ _page: paginationPage, _limit: '12', type: filterType })
      setTotalProduct(productList.data.pagination._totalRows)
      setProducts(productList.data.data)
      return Promise.resolve()
    } catch (error) {
      if (error.response) {
        navigate('/404')
      }
    }
  }

  const onPageChange = (page) => {
    setPaginationPage(page)
  }

  const onChangeFilter = (value) => {
    setFilterType(value)
  }

  useEffect(() => {
    setPaginationPage(1)
  }, [filterType])

  useEffect(() => {
    filterType ? fetchFilterProduct() : fetchProductData()
  }, [paginationPage, filterType])

  return (
    <>
      <div className='max-w-screen px-64 mt-10'>
        <div className='flex justify-between mb-6'>
          <h1 className='text-2xl'>Sản phẩm</h1>
          <Select className='w-28' defaultValue={'Chọn loại'} onChange={onChangeFilter}>
            {typeOfProduct.map((type, index) => {
              return (
                <Option key={index} value={type}>
                  {type}
                </Option>
              )
            })}
          </Select>
        </div>
        <div className='grid grid-cols-4 gap-6 w-full'>
          {products &&
            products.map((product, index) => {
              return <ProductCard key={index} product={product} />
            })}
        </div>
      </div>
      {totalProduct && (
        <Pagination
          current={paginationPage}
          className='mx-auto mt-4 mb-10'
          onChange={onPageChange}
          total={totalProduct}
          pageSize={12}
          showSizeChanger={false}
        />
      )}
    </>
  )
}

export default Products
