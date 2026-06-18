const Footer = () => {
  return (
    <footer className="py-8 px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ahmad Nadeem
        </p>
        <p className="text-sm text-muted-foreground">
          Graphic Designer · Web Developer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
