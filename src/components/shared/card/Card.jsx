
import { useState } from 'react';
import CardButton from '../../UI/buttons/CardButton';
import { Title } from '../../UI/titleText/Text';
import CardHeader from './cardHeader/CardHeader';
import ImgUi from './imgUi/ImgUi';


const Card = ({card, widths, heights}) => {
  const {img, title} = card || {} ;
  

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };


  return (
     <div className={`${widths} shadow-xl rounded-xl bg-[#f0ece7]`} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        <ImgUi heights={heights} img={img} isHovered={isHovered} alt="card Img"/>
        <div className="card-body">
          <div className='flex justify-between'>
            <CardHeader headerTitle="180/Per Person" icon="$"/>
            <CardHeader headerTitle="5 Days/6 night" icon="🈴"/>
          </div>
          <div>
            <Title cardTitle={title} />
          </div>
          <div className="flex justify-between">
             <CardButton card="Add Card" />
             <CardButton card="More Info" bg />
          </div>
        </div>
    </div>
  );
};

export default Card;
