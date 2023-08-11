const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content py-16">
        <div>
          <a href="#" className="font-bold text-2xl text-secondary">
            homehunt
          </a>
          <p>
            Homehunt Tech Limited
            <br />
            House Rent Provider since 2023
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">House Rent</a>
          <a className="link link-hover">Bookings</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
