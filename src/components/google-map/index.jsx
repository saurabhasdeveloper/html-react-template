
const GoogleMap = () =>{
  return (
    <div className="map">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d350719.8816902913!2d77.19097512304008!3d28.61393986971961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce313eb4fe445%3A0x74d8c24f0b15130a!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1594393259182!5m2!1sen!2sin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
