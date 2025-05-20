import Image from 'next/image';
import { SteppedLinearGradientWithStars } from '../components/SteppedLinearGradient';
import { FadingHero } from '../components/FadingHero';
import styles from '../components/Hero.module.css';
import { ProjectsSection } from '../components/ProjectsSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <SteppedLinearGradientWithStars
      color1="#6D28D9"
      color2="#582688"
      segments={20}
      starImages={[
        '/images/star1.png',
        '/images/star2.png',
        '/images/star3.png',
        '/images/star5.png',
        '/images/star6.png',
        '/images/star7.png',
        '/images/star8.png',
      ]}
      starCount={100}
      starAreaPercent={0.95}
    >
      {/* === HERO SECTION === */}
      <FadingHero>
        <div className={styles.profile}>
          <Image
            src="/images/profile.jpg"
            alt="Garrett Weaver"
            width={500}
            height={500}
            className={styles.avatar}
          />
        </div>

        <div className={styles.about}>
          <h1>
            Hi, I&apos;m <span className={styles.name}>Garrett</span>
          </h1>
          <p>Passionate about bowling and software development.</p>
        </div>
      </FadingHero>

      {/* === PROJECTS SECTION === */}
      <ProjectsSection />
      {/* footer with social icons */}
      <Footer />
    </SteppedLinearGradientWithStars>
  );
}
