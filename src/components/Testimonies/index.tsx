//import testimoniesData from '../../data/testimoniesData';
//  style={{
//     animationDuration: `${item.duration}s´,
//     animationDelay: `${item.delay}s`,
//     animationIterationCount: 'infinite',
//   }}

const Testimonies = () => {
  return (
    // i would rather map over a list of items containet the data buthad to do it like this because of the animation
    <section className='container'>
      <div className='wrapper'>
        <div className='outer'>
          <div
            className='card'
            style={{ '--delay': -1 } as React.CSSProperties}
          >
            <div className='content'>
              <div className='img'>
                <img src='images/img-1.jpg' alt='bb' />
              </div>
              <div className='details'>
                <span className='name'>Sumit Kapoor</span>
                <p>Frontend Developer</p>
              </div>
            </div>
            {/* <a href="#">Follow</a> */}
          </div>

          <div className='card' style={{ '--delay': 0 } as React.CSSProperties}>
            <div className='content'>
              <div className='img'>
                <img src='images/img-2.jpg' alt='' />
              </div>
              <div className='details'>
                <span className='name'>Andrew Neil</span>
                <p>YouTuber & Blogger</p>
              </div>
            </div>
            {/* <a href="#">Follow</a> */}
          </div>
          <div className='card' style={{ '--delay': 1 } as React.CSSProperties}>
            <div className='content'>
              <div className='img'>
                <img src='images/img-3.jpg' alt='' />
              </div>
              <div className='details'>
                <span className='name'>Jasmine Carter</span>
                <p>Freelancer & Vlogger</p>
              </div>
            </div>
            {/* <a href="#">Follow</a> */}
          </div>
          <div className='card' style={{ '--delay': 2 } as React.CSSProperties}>
            <div className='content'>
              <div className='img'>
                <img src='images/img-4.jpg' alt='' />
              </div>
              <div className='details'>
                <span className='name'>Justin Chung</span>
                <p>Backend Developer</p>
              </div>
            </div>
            {/* <a href="#">Follow</a> */}
          </div>
          <div className='card' style={{ '--delay': 2 } as React.CSSProperties}>
            <div className='content'>
              <div className='img'>
                <img src='images/img-5.jpg' alt='' />
              </div>
              <div className='details'>
                <span className='name'>Adrina Calvo</span>
                <p>Teacher & Advertiser</p>
              </div>
            </div>
            {/* <a href="#">Follow</a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;

//    <div>
//   {testimoniesData.map((item) => {
//     const { id, name, position, company, image, quote, delay } = item;
//     return (
//       <div
//         key={id}
//         className=' mb-7  w-[37rem] bg-white rounded-lg shadow-2xl card'
//         style={{
//           animationDelay: `${delay}s`,
//         }}
//       >
//         <div className='flex items-center h-[6rem]   '>
//           <img src={image} alt={name} className='h-full  rounded-l-lg' />

//           <div className='flex flex-col p-4 text-sm '>
//             <blockquote className='mb-1'>{quote}</blockquote>

//             <span className='flex gap-1 text-contentColor'>
//               <h2 className='font-semibold  '>{name}, </h2>
//               <span>{position},</span>
//               <span> {company}</span>
//             </span>
//           </div>
//         </div>
//       </div>
//     );
//   })}
// </div>;
