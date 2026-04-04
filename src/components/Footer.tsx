const Footer = () => {
  return (
    <footer className="py-8 px-6 lg:px-8 border-t border-border/30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="gradient-text-primary font-medium">Ahmad Nadeem</span>
        </p>
        <p className="text-sm text-muted-foreground">
          Video Editor
        </p>
      </div>
    </footer>
  );
};

export default Footer;
