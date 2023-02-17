import NikeImg from '../../../assets/images/b1.png';
import CardHeader from './cardHeader/CardHeader';
import ImgUi from './imgUi/ImgUi';



const Card = () => {
  /* 
  .card-title = {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    }
    .card-compact .card-title {
        margin-bottom: 0.25rem;
    }
    .card-normal .card-title {
        margin-bottom: 0.75rem;
    }
   */

  return (
    <div className="grid grid-cols-3 justify-items-center">
     <div className="card w-96 shadow-xl bg-[#eeebe9]">
        <ImgUi img={NikeImg} alt="card Img"/>
        <div className="card-body">
          <div className='flex justify-between'>
          {/* <p className="card-title">${headerTitle}</p> */}
            <CardHeader headerTitle="180/Per Person" icon="$"/>
            <CardHeader headerTitle="5 Days/6 night" icon="🈴"/>
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div> 
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;