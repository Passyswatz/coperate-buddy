import Image from 'next/image';
import Button from '../components/Button';

function ServicesCard({ imgUrl, label, subtext, backgroundColor, buttonBackgroundColor, buttonTextColor, buttonBorderColor }) {
  return (
    <div className="service-card flex rounded-xl flex-col justify-center items-center w-[360px] h-[346px] mt-10 hover:scale-105" style={{ backgroundColor }}>
      <Image src={imgUrl} alt={label} width={200} height={200} />
      <h2 className="service-label font-inter font-bold text-28px leading-33.89px text-center">{label}</h2>
      <p className="service-subtext font-poppins font-normal text-13px leading-19.15px text-center">{subtext}</p>
      <Button 
        label="Visit Page" 
        backgroundColor={buttonBackgroundColor} 
        textColor={buttonTextColor} 
        borderColor={buttonBorderColor} 
      />
    </div>
  );
}

export default ServicesCard;
