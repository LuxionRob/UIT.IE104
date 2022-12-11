import React, { useState, useEffect } from 'react'
import { Select, DatePicker } from 'antd'
import dayjs from 'dayjs'
import { AreaChart, YAxis, XAxis, Tooltip, Area } from 'recharts'
import { getAllOrder } from '../api/ordered'
import Loading from '../components/Loading'

const Admin = () => {
  const [ordered, setOrdered] = useState([])
  const [productInfo, setProductInfo] = useState({})
  const [time, setTime] = useState({ year: 2022, month: 1 })
  const [timeLine, setTimeLine] = useState({})
  const [isLoading, setisLoading] = useState(false)
  const { Option } = Select

  const calculateIncomeYear = ({ id, type, name, price, rate, ordered }, { year, month }) => {
    if (ordered) {
      const timeline = ordered.map((order) => {
        return {
          year: new Date(order.orderedAt).getFullYear(),
          month: new Date(order.orderedAt).getMonth() + 1,
          date: new Date(order.orderedAt).getDate(),
          quanity: order.quanity,
        }
      })

      const truncateTimeline = timeline.reduce((total, item) => {
        if (total?.length > 0) {
          const index = total.findIndex((v) => v.year === item.year && v.month === item.month && v.date === item.date)
          if (index >= 0) {
            total[index].quanity += item.quanity
          } else {
            total.push(item)
          }
        } else {
          total.push(item)
        }
        return total
      }, [])

      const handledTimeline = truncateTimeline.filter((v) => v.year === year && v.month === month)

      const res = handledTimeline
        .map((item) => {
          return {
            date: item.date,
            total: item.quanity * price,
          }
        })
        .sort((a, b) => a.date - b.date)
      return res
    }
    return null
  }

  const handleOrder = async () => {
    try {
      setisLoading(true)
      const res = await getAllOrder()
      setOrdered(res.data)
      setProductInfo(res.data[0])
      setTimeLine(calculateIncomeYear(res.data[0], time))
      setisLoading(false)
    } catch (error) {
      console.warn(error)
    }
  }

  useEffect(() => {
    handleOrder()
  }, [])

  const handleChangeProduct = (value) => {
    setisLoading(true)
    const product = ordered[value - 1]
    setProductInfo(product)
    setTimeLine(calculateIncomeYear(product, time))
    setisLoading(false)
  }
  const onChangeTime = (date) => {
    setisLoading(true)
    const newTime = { year: date.$y, month: date.$M + 1 }
    setTime(newTime)
    setTimeLine(calculateIncomeYear(productInfo, newTime))
    setisLoading(false)
  }

  return (
    <div>
      <div className='grid'>
        <div className='flex flex-col items-center'>
          <div>
            <DatePicker onChange={onChangeTime} picker='month' defaultValue={dayjs('2022-01', 'YYYY-MM')} />
            <Select defaultValue={1} className='' onChange={handleChangeProduct}>
              {ordered?.length &&
                ordered.map((order) => {
                  return <Option key={order.name} value={order.id}>{`${order.id}. ${order.name}`}</Option>
                })}
            </Select>
          </div>
          <AreaChart
            width={1024}
            height={500}
            data={timeLine}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <XAxis dataKey='date' />
            <YAxis />
            <Area dataKey='total' stroke='#8884d8' fill='#8884d8' />
            <Tooltip />
          </AreaChart>
          <h1 className='text-2xl font-bold text-primary'>
            Doanh thu {productInfo && productInfo.name} trong tháng {time && time.month}, năm {time && time.year}
          </h1>
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  )
}

export default Admin
