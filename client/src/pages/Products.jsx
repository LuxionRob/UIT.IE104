import React, { useEffect, useState, useContext } from 'react'
import { Pagination, Select } from 'antd'
import { BsTrash2 } from 'react-icons/bs'
import Loading from '../components/Loading'
import { SearchContext } from '../components/Search'
import { getPagedProduct } from '../api/product'
import ProductCard from '../components/ProductCard'

const typeOfProduct = ['Tất cả', 'Trà sữa', 'Trà', 'Sữa chua', 'Cà phê', 'Sữa']
const { Option } = Select

const Products = () => {
  const { searchValue } = useContext(SearchContext)
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
        q: searchValue,
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
      const params = {
        _page: paginationPage,
        _limit: '12',
        q: searchValue,
      }
      if (filterType !== 'Tất cả') {
        params.type = filterType
      }
      const productList = await getPagedProduct(params)
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
  }, [paginationPage, filterType, searchValue])

  return (
    <>
      <div className='max-w-screen mx-64 mt-10 flex grow flex-col xl:mx-8 lg:mx-4 sm:mt-32'>
        <div className='mb-6 flex justify-between'>
          <h1 className='text-2xl'>Sản phẩm</h1>
          <Select className='w-28' defaultValue={'Tất cả'} onChange={onChangeFilter}>
            {typeOfProduct.map((type, index) => {
              return (
                <Option key={index} value={type}>
                  {type}
                </Option>
              )
            })}
          </Select>
        </div>
        {products && products.length > 0 ? (
          <div className='grid w-full grid-cols-4 gap-6 sm:grid-cols-2'>
            {products.map((product, index) => {
              return <ProductCard key={index} product={product} isLoading={isLoading} />
            })}
          </div>
        ) : (
          <div className='flex h-full grow flex-col items-center justify-center'>
            <BsTrash2 className='h-[5%] w-[5%]' />
            <h2 className='text-xl font-bold'>Không có dữ liệu!</h2>
          </div>
        )}
      </div>
      {totalProduct > 0 && (
        <Pagination
          current={paginationPage}
          className='mx-auto mt-4 mb-10'
          onChange={onPageChange}
          total={totalProduct}
          pageSize={12}
          showSizeChanger={false}
        />
      )}
      {isLoading && <Loading />}
    </>
  )
}

export default Products
