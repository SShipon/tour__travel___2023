
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonUi from '../../UI/buttons/ButtonUi';
import CardButton from '../../UI/buttons/CardButton';
import { Title } from '../../UI/titleText/Text';
import CardHeader from './cardHeader/CardHeader';
import ImgUi from './imgUi/ImgUi';


const Card = ({card, widths, heights, blog}) => {
  const {img, title} = card || {} ;
  
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  // Decide hat to render
  let btn = blog ? "justify-center" : "justify-between"
  

  return (
     <div className={`${widths} shadow-xl rounded-xl bg-[#f7f5f3dc]`} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        <ImgUi heights={heights} img={img} isHovered={isHovered} alt="card Img"/>
        <div className="card-body">
          <div className='flex justify-between'>
            <CardHeader headerTitle="180/Per Person" icon="$"/>
            <CardHeader headerTitle="5 Days/6 night" icon="🈴"/>
          </div>
          <div>
            <Title cardTitle={title} />
          </div>
          <div className={`flex ${btn}`}>
            {
              blog ? <Link to="/"><ButtonUi text ="MORE INFO"/></Link> : <>
              <CardButton card="Add Card" bg />
              <CardButton card="More Info" /> 
              </>
            }
             
          </div>
        </div>
    </div>
  );
};

export default Card;
