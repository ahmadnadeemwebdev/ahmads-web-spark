const Footer = () => {
  return (
    <footer className="border-t-2 border-foreground bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-bold uppercase text-sm tracking-wider">© {new Date().getFullYear()} Ahmad Nadeem</p>
        <p className="font-bold uppercase text-xs tracking-widest">
          Graphic Designer <span className="text-primary">×</span> Web Developer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
