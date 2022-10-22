// feature component
import featuresData from '../../data/featuresData';
import { Wrapper, Content } from './index.styles';

const Features = () => {
  return (
    <Wrapper>
      <div>
        {featuresData.map((item) => {
          const { id, heading, content, icon } = item;

          return (
            <Content key={id}>
              <header>
                {/* font-weight of the header  to do later */}
                <img src={icon} alt={heading} className='mb-4' />
                <h2 className='font-semibold text-headingColor mb-2 '>
                  {' '}
                  {heading}{' '}
                </h2>
              </header>

              <p className='text-contentColor font-medium'>{content}</p>
            </Content>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Features;
