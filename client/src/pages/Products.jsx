import React, { useEffect, useState } from 'react'
import { Pagination, Select } from 'antd'
import Loading from '../components/Loading'
import { getPagedProduct } from '../api/product'
import ProductCard from '../components/ProductCard'

const typeOfProduct = ['Trà sữa', 'Trà', 'Sữa chua', 'Cà phê', 'Sữa']
const { Option } = Select

const Products = () => {
  const [products, setProducts] = useState([])
  const [paginationPage, setPaginationPage] = useState([1])
  const [totalProduct, setTotalProduct] = useState()
  const [filterType, setFilterType] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const fetchProductData = async () => {
    try {
      setIsLoading(true)
      const productList = await getPagedProduct({
        _page: paginationPage,
        _limit: '12',
      })
      setIsLoading(false)
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
      setIsLoading(true)
      const productList = await getPagedProduct({
        _page: paginationPage,
        _limit: '12',
        type: filterType,
      })
      setIsLoading(false)
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
      <div className='max-w-screen mx-64 mt-10 sm:mt-32 lg:mx-4 xl:mx-8'>
        <div className='mb-6 flex justify-between'>
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
        {isLoading ? (
          <Loading />
        ) : (
          <div className='grid w-full grid-cols-4 gap-6 sm:grid-cols-2'>
            {products.map((product, index) => {
              return <ProductCard key={index} product={product} isLoading={isLoading} />
            })}
          </div>
        )}
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
