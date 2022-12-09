const AboutUs = () => {
  const members = [
    { name: 'Tri Bùi', link: 'https://www.facebook.com/LuxionRob' },
    { name: 'Ánh Nguyệt', link: 'https://www.facebook.com/profile.php?id=100034575011574' },
    { name: 'Khánh Châu', link: 'https://www.facebook.com/bunbe.bong.378/' },
    { name: 'Thanh Nhàn', class: 'object-top', link: 'https://www.facebook.com/NguyenThanhNhan78104' },
    { name: 'Đức Luận', link: 'https://www.facebook.com/profile.php?id=100044166517726' },
  ]

  return (
    <div className='px-64 mt-8'>
      <h1 className='text-center mb-8 text-4xl text-green-500'>Thành viên</h1>
      <div className='flex flex-wrap justify-around'>
        {members.map((member, index) => {
          const newClass = member.class ? member.class : ''
          const imageClass =
            'px-5 object-cover h-52 rounded-full hover:bg-green-700 transition-all delay-200 linear ' + newClass
          return (
            <a key={index} href={member.link} className='mb-6'>
              <img
                className={imageClass}
                src={`http://localhost:3003/api/images/members/${index + 1}`}
                alt='Memberofteam'
                width='333'
                height='333'
              />
              <span className='block text-center font-semibold hover:text-green-500 mt-4'> {member.name} </span>
            </a>
          )
        })}
      </div>

      <div className='flex flex-col'>
        <h1 className='text-4xl pt-8 text-green-500 text-center'>Về chúng tôi</h1>
        <div className='flex justify-center pl-2 p-8 '>
          <p className='text-black-500 text-justify'>
            FiveTea được thành lập vào năm 2019, bắt nguồn từ đam mê khởi nghiệp của chúng tôi. Ngay từ những ngày đầu
            tiên, mục tiêu của chúng tôi là có thể phục vụ và đem đến những món đồ uống chất lượng và an toàn cho mọi
            người. FiveTea là kênh bán hàng trực tuyến, đưa đến cho người dùng một dịch vụ trải nghiệm hữu ích và rất
            tiện lợi. Hãy đến với chúng tôi, bạn sẽ được thưởng thức những món đồ uống hấp dẫn và mang nét riêng của
            FiveTea. <br></br>
            FiveTea là cái tên được đặt gồm 5 thành viên của nhóm chúng tôi. Năm trong tiếng anh là Five và Tea là trà.
            Vì thế chúng tôi quyết định chọn đặt FiveTea là tên trang website bán những loại nước uống giải khát. Và
            chúng tôi mong muốn mang đến cho người dùng nhiều trải nghiệm trên chính trang website này. <br></br>
            Bên phải là những thành viên của nhóm chúng tôi.
          </p>
        </div>
      </div>
    </div>
  )
}
export default AboutUs
