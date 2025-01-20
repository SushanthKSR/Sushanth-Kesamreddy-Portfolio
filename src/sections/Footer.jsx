const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

    
    
    
     <div className="flex gap-3">
        <div className="social-icon">
        <a href="https://x.com/SushanthKReddy9?t=sfPpa4W-fCVu3Ru7rS93-Q&s=09">
          <img src="/assets/github.svg" alt="github" className="w-7 h-7" />
        </a> 
        </div>
        <div className="social-icon">
        <a href="https://x.com/SushanthKReddy9?t=sfPpa4W-fCVu3Ru7rS93-Q&s=09">
          <img src="/assets/twitter.svg" alt="twitter" className="w-7 h-7" />
        </a>
        </div>
        <div className="social-icon">
        <a href="https://x.com/SushanthKReddy9?t=sfPpa4W-fCVu3Ru7rS93-Q&s=09" >
          <img src="/assets/instagram.svg" alt="instagram" className="w-7 h-7"/>
        </a>  
        </div>
      </div>

      <p className="text-white-500">© 2024 Sushanth Kesamreddy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

