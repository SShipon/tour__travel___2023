
import { useState } from 'react';
import AddButton from '../../UI/buttons/AddButton';
import DetailButton from '../../UI/buttons/DetailButton';
import { Title } from '../../UI/titleText/Text';
import CardHeader from './cardHeader/CardHeader';
import ImgUi from './imgUi/ImgUi';


const Card = ({card}) => {
  const {img, title} = card || {} ;

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
     <div className="card w-96 shadow-xl bg-[#e4e1dd] "onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        <ImgUi img={img} isHovered={isHovered} alt="card Img"/>
        <div className="card-body">
          <div className='flex justify-between'>
            <CardHeader headerTitle="180/Per Person" icon="$"/>
            <CardHeader headerTitle="5 Days/6 night" icon="🈴"/>
          </div>
          <div>
            <Title cardTitle={title} />
          </div>
          <div className="flex justify-between">
             <AddButton addCard="Add Card"/> 
             <DetailButton info="More Info"/>
          </div>
        </div>
    </div>
  );
};

export default Card;

/*
  <div className="grid grid-cols-3 justify-items-center">
 */