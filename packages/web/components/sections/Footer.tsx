import Link from 'next/link';
import MCLogo from '@/components/MCLogo';

const footerLinks = {
  product: {
    title: 'Product',
    links: [
      { label: 'Get Started', href: '/docs/introduction' },
      { label: 'Themes', href: '/docs/theming' },
      { label: 'Components', href: '/docs/components' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      {
        label: 'Changelog',
        href: 'https://github.com/MicroClub-USTHB/mcoli-ui/blob/main/CHANGELOG.md',
      },
      {
        label: 'Contributing',
        href: 'https://github.com/MicroClub-USTHB/mcoli-ui/blob/main/CONTRIBUTING.md',
      },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      {
        label: 'License',
        href: 'https://github.com/MicroClub-USTHB/mcoli-ui/blob/main/LICENSE',
      },
    ],
  },
};

function FooterLink({ href, label }: { href: string; label: string }) {
  const isExternal = href.startsWith('http') || href.endsWith('.md') || href === '/LICENSE';

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
    >
      {label}
    </Link>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/50 bg-card/50 backdrop-blur-xl">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <MCLogo size={32} />
            </Link>
            <p className="text-sm text-muted-foreground">
              Stop building from scratch. Elevate your UI with MicroClub DNA
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="flex flex-col gap-3">
              <h3 className="font-semibold text-foreground text-sm">{section.title}</h3>
              <div className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <FooterLink key={link.href} href={link.href} label={link.label} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Mcoli UI. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built by{' '}
            <a
              href="https://microclub.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              the Dev Department of MicroClub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
