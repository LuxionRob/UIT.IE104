import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Table, Typography } from 'antd'
import { AiTwotoneDelete } from 'react-icons/ai'
import { getUserById, updateUser } from '../api/user'
import { getAllOrder, updateOrder } from '../api/ordered'
import { AuthContext } from '../components/Auth'
import { transformToVNCurrency } from '../utils'
import { Link } from 'react-router-dom'

const { Text } = Typography

const Payment = () => {
  const { authenticatedAccount } = useContext(AuthContext)
  const [order, setOrder] = useState([])
  const [userInfo, setUserInfo] = useState(false)
  const [cartInfo, setCartInfo] = useState([])
  const [checkArr, setCheckArr] = useState([])
  const [dataSource, setDataSource] = useState([])
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [popUp, setPopUp] = useState(false)

  const columns = [
    {
      title: 'Ảnh',
      dataIndex: 'image',
      width: '232px',
      align: 'center',
      key: 'image',
      render: (url) => {
        return <img src={url} alt={url} width='200' />
      },
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Số lượng',
      align: 'center',
      dataIndex: 'quanity',
      key: 'quanity',
    },
    {
      title: 'Giá',
      align: 'center',
      dataIndex: 'price',
      key: 'price',
      render: (price) => {
        return transformToVNCurrency(price)
      },
    },
    {
      title: 'Tổng',
      align: 'center',
      dataIndex: 'total',
      key: 'total',
      render: (_, record) => {
        return transformToVNCurrency(record.price * record.quanity)
      },
    },
    {
      title: '',
      align: 'center',
      dataIndex: 'delete',
      key: 'delete',
      render: (_, record) => {
        return (
          <div onClick={() => handleDelete(record.key)}>
            <AiTwotoneDelete />
          </div>
        )
      },
    },
  ]

  const handleDelete = (key) => {
    const newCartInfo = cartInfo.filter((item) => item.id !== key)
    const newSelectedRowKeys = selectedRowKeys.filter((item) => item !== key)
    const newCheckArr = checkArr.filter((item) => item.key !== key)
    setSelectedRowKeys(newSelectedRowKeys)
    setCheckArr(newCheckArr)
    setCartInfo(newCartInfo)
    const newUserInfo = { ...userInfo, cart: newCartInfo }
    setUserInfo(newUserInfo)
  }

  const handleIncreaseQuanity = (e, index) => {
    let newUserInfo = { ...userInfo }
    newUserInfo.cart[index].quanity += 1
    setUserInfo(newUserInfo)
  }

  const onSelectChange = (newSelectedRowKeys) => {
    const newCheckArr = []
    newSelectedRowKeys.map((rowKey) => {
      newCheckArr.push(...dataSource.filter((data) => data.key === rowKey))
    })
    setSelectedRowKeys(newSelectedRowKeys)
    setCheckArr(newCheckArr)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }

  const fetchUser = async () => {
    try {
      const res = await getUserById(authenticatedAccount.id)
      setUserInfo(res.data)
      setCartInfo(res.data.cart)
      return Promise.resolve()
    } catch (error) {
      return Promise.reject({ 2: error })
    }
  }

  const fetchOrder = async () => {
    try {
      const res = await getAllOrder()
      setOrder(res.data)
      return Promise.resolve()
    } catch (error) {
      return Promise.reject()
    }
  }

  const updateUserInfo = async () => {
    try {
      const res = await updateUser(userInfo)
      return Promise.resolve()
    } catch (error) {
      return Promise.reject()
    }
  }

  const handleSummary = () => {
    return (
      <>
        <Table.Summary.Row>
          <Table.Summary.Cell rowSpan={4} index={0}></Table.Summary.Cell>
          <Table.Summary.Cell index={1}></Table.Summary.Cell>
          <Table.Summary.Cell index={2}></Table.Summary.Cell>
          <Table.Summary.Cell index={2}></Table.Summary.Cell>
          <Table.Summary.Cell align='center' index={3}>
            Tổng đơn hàng:
          </Table.Summary.Cell>
          <Table.Summary.Cell align='center' index={1}>
            <Text type='danger'>{transformToVNCurrency(totalPrice)}</Text>
          </Table.Summary.Cell>
          <Table.Summary.Cell index={4}></Table.Summary.Cell>
        </Table.Summary.Row>
      </>
    )
  }

  useEffect(() => {
    let total = 0
    if (checkArr.length) {
      checkArr.map((checked) => {
        total += checked.quanity * checked.price
      })
    }
    setTotalPrice(total)
  }, [selectedRowKeys])

  useEffect(() => {
    fetchUser()
    fetchOrder()
  }, [])

  useEffect(() => {
    if (userInfo?.id) {
      updateUserInfo()
      const newDataSource = cartInfo.map((cart) => ({
        key: cart.id,
        image: cart.productImage,
        name: cart.name,
        quanity: cart.quanity,
        price: cart.price,
      }))
      setDataSource([...newDataSource])
    }
  }, [userInfo])

  const updateOrderInfo = () => {
    cartInfo.map((product) => {
      const orderedProduct = order.find((item) => item.id === product.id)
      const newOrder = {
        orderedAt: new Date().toISOString(),
        quanity: product.quanity,
      }
      orderedProduct.ordered.push(newOrder)
      updateOrder(orderedProduct)
    })
  }

  const handleOnClick = () => {
    const currCart = cartInfo
    const newUserInfo = { ...userInfo }
    if (checkArr.length != 0) {
      newUserInfo.cart = []
      newUserInfo.history.push({ cart: currCart, date: new Date().toISOString() })
      setUserInfo(newUserInfo)
      updateOrderInfo()
      setPopUp(true)
    }
  }

  return (
    <>
      <div className='mx-64 mt-10'>
        <h1 className='mb-4 text-center text-4xl text-primary'>Đơn hàng</h1>
        <Table
          dataSource={dataSource}
          columns={columns}
          rowSelection={rowSelection}
          pagination={false}
          summary={handleSummary}
        />
        <button onClick={handleOnClick} className='button-primary float-right my-10 h-16 w-52'>
          Mua ngay
        </button>
      </div>

      {popUp && (
        <div className='fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-10'>
          <div className='shawdow-md relative flex h-3/10 w-3/10 flex-col items-center justify-center rounded-xl border-2 bg-slate-100 py-8'>
            <h1 className='mb-4 text-center text-xl font-bold'>Thanh toán thành công!</h1>
            <section className='mt-2'>
              Tiền trao cháo múc <span className='text-primary'>（ᗜ ‸ ᗜ）</span>
            </section>
            <Link to='/' className='button-primary mt-6 p-2'>
              Quay lại trang chủ
            </Link>
          </div>
        </div>
      )}
    </>

    // <Fragment>
    //   <div className='flex w-full flex-col px-64 '>
    //     <div>
    //       <div className='flex border-2 border-slate-500 rounded-t-xl pl-16 py-4'>
    //         <input className='basis-1/10' type='checkbox' />
    //         <h2 className='text-xl basis-6/10 grow'>Sản phẩm</h2>
    //         <h2 className='text-xl basis-2/10 grow text-center'>Sổ tiền</h2>
    //         <h2 className='text-xl basis-1/10 text-center'>Thao tác</h2>
    //       </div>
    //       <div className='border-2 border-slate-500 rounded-b-xl py-4'>
    //         {userInfo?.cart &&
    //           userInfo?.cart.length > 0 &&
    //           userInfo.cart.map((product, index) => {
    //             return (
    //               <div key={product.id} className='flex items-center pl-16'>
    //                 <input className='basis-1/10' type='checkbox' />
    //                 <div className='basis-1/10'>
    //                   <img className='pr-7 pb-5' width='180' src={product.productImage} alt={product.name} />
    //                 </div>
    //                 <div className='basis-1/2 grow self-start'>
    //                   <div className='text-lg text-black font-semibold'>{product.name}</div>
    //                   <div className='text-base font-medium '>{transformToVNCurrency(product.price)}</div>
    //                   <div className='flex h-5'>
    //                     <div className='text-base text-black font-medium leading-5'>Size:</div>
    //                     <div className='text-black font-medium pl-2.5 leading-5'> {product.size}</div>
    //                   </div>
    //                   <div className='flex items-center h-5'>
    //                     <div className='text-base text-black font-medium'>Số lượng:</div>
    //                     <div className='h-5 flex pl-2.5'>
    //                       <button
    //                         onClick={(e) => handleDecreaseQuanity(e, index)}
    //                         className='button-primary flex justify-center items-center w-6 h-6 rounded-full'
    //                       >
    //                         -
    //                       </button>
    //                       <div className='py-0 px-2.5'>{product.quanity}</div>
    //                       <button
    //                         onClick={(e) => handleIncreaseQuanity(e, index)}
    //                         className='button-primary flex justify-center items-center w-6 h-6 rounded-full'
    //                       >
    //                         +
    //                       </button>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className='basis-2/10 grow text-center'>
    //                   {transformToVNCurrency(product.price * product.quanity)}
    //                 </div>
    //                 <div className='basis-1/10 flex justify-center items-center'>
    //                   <AiTwotoneDelete />
    //                 </div>
    //               </div>
    //             )
    //           })}
    //       </div>
    //     </div>

    //     <div className='flex-col flex'>
    //       <div className='flex self-end'>
    //         <div className=' text-xl font-bold leading-9 text-primary mr-12'>Mã khuyến mãi</div>
    //         <div className='h-9 flex rounded-lg bg-white border border-black border-solid'>
    //           <input
    //             type='mail'
    //             placeholder='Nhập mã giảm giá...'
    //             className='text-base w-9/12 border-none py-2 pr-0 pl-4 rounded-lg font-medium focus-visible:outline-nonev'
    //           />
    //           <button className='w-32 bg-primary text-white font-semibold text-xl px-2 rounded-lg border-none h-9 '>
    //             Áp dụng
    //           </button>
    //         </div>
    //       </div>
    //       <div className='mt-2.5 self-end text-3xl text-right font-bold leading-9 text-primary mr-32'>
    //         Tổng cộng:{' '}
    //         {userInfo?.cart &&
    //           userInfo?.cart.length > 0 &&
    //           transformToVNCurrency(
    //             userInfo.cart.reduce((total, product) => total + product.price * product.quanity, 0)
    //           )}
    //       </div>
    //     </div>
    //     <div className='w-full text-center'>
    //       <button className='w-2/12 bg-primary text-white font-semibold text-2xl py-0 px-5 rounded-2xl border-none h-10 leading-10 Login-item1'>
    //         Thanh toán
    //       </button>
    //     </div>
    //   </div>
    // </Fragment>
  )
}
export default Payment
