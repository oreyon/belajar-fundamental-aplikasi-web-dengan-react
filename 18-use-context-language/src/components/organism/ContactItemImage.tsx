interface PropTypes {
  imageUrl: string;
}

function ContactItemImage(props: PropTypes) {
  const { imageUrl } = props;

  return (
   <div className="contact-item__image">
     <img src={imageUrl} alt="contact avatar"/>
   </div>
 );
}

export default ContactItemImage;