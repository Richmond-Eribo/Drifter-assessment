import testimoniesData from '../../data/testimoniesData';

const Testimonies = () => {
  return (
    <section>
      <div>
        {testimoniesData.map((item) => {
          const { id, name, position, company, image, quote } = item;
          return (
            <div
              key={id}
              className=' mb-7  w-[37rem] bg-white rounded-lg shadow-2xl'
            >
              <div className='flex items-center h-[6rem]   '>
                <img src={image} alt={name} className='h-full  rounded-l-lg' />

                <div className='flex flex-col p-4 text-sm '>
                  <blockquote className='mb-1'>{quote}</blockquote>

                  <span className='flex gap-1 text-contentColor'>
                    <h2 className='font-semibold  '>{name}, </h2>
                    <span>{position},</span>
                    <span> {company}</span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonies;
