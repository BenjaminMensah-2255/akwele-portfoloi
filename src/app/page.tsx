import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { AnimatedMetric } from "@/components/motion/AnimatedMetric";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Reveal } from "@/components/motion/Reveal";
import { TextLink } from "@/components/ui/TextLink";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { formatIndex } from "@/lib/utils";

export default function Home() {
  return (
    <main>
      <Hero />
      <Credibility />
      <About />
      <Expertise />
      <SelectedWork />
      <Results />
      <Process />
      <Tools />
      <Testimonials />
      <Experience />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[96svh] px-4 pb-10 pt-28 sm:px-6 lg:px-10">
      <div className="section-inner grid min-h-[calc(96svh-9rem)] items-end gap-10 lg:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)]">
        <div className="relative z-10 min-w-0">
          <div className="display max-w-[11ch] mt-6" aria-label="Digital Marketer">
            <Reveal className="block overflow-hidden">DIGITAL</Reveal>
            <Reveal className="block overflow-hidden" delay={0.1}>
              MARKETER
            </Reveal>
          </div>
          <Reveal
            delay={0.22}
            className="mt-8 max-w-2xl text-lg leading-8 text-secondary"
          >
            {profile.heroCopy}
          </Reveal>
          <Reveal delay={0.34} className="mt-10 flex flex-wrap gap-5">
            <Link href="#work" className="border-button">
              View Work
            </Link>
            <TextLink href="#contact">Contact Me</TextLink>
          </Reveal>
        </div>

        <div className="relative min-w-0 lg:min-h-[76vh]">
          <ImageReveal
            src={profile.portrait}
            alt={`${profile.name}, digital marketer in Accra`}
            priority
            sizes="(min-width: 1024px) 43vw, 100vw"
            className="aspect-[4/5] w-full lg:absolute lg:bottom-0 lg:right-0 lg:h-[76vh]"
            imageClassName="object-[50%_28%]"
          />
          <Reveal
            delay={0.45}
            className="mt-5 grid grid-cols-[auto_1fr] gap-4 border-t border-border pt-4 text-sm text-secondary lg:absolute lg:bottom-10 lg:left-[-7rem] lg:w-72 lg:bg-background/85 lg:p-5"
          >
            <span className="text-foreground">Accra</span>
            <span>{profile.positioning}</span>
          </Reveal>
        </div>
      </div>
      <Reveal
        delay={0.55}
        className="section-inner mt-10 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-secondary"
      >
        <span>Scroll</span>
        <ArrowDown className="h-4 w-4" strokeWidth={1.4} />
      </Reveal>
    </section>
  );
}

function Credibility() {
  return (
    <section className="border-y border-border py-5" aria-label="Industries">
      <div className="section-inner flex flex-col gap-4 px-4 sm:px-6 lg:px-10">
        <p className="eyebrow">Experience across</p>
        <div className="flex flex-wrap gap-x-8 gap-y-3 font-display text-2xl leading-none md:text-3xl">
          {profile.industries.map((industry) => (
            <span key={industry}>{industry}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="eyebrow mb-6">About</p>
          <h2 className="section-title max-w-5xl">{profile.aboutStatement}</h2>
        </Reveal>
        <div className="lg:pt-16">
          <Reveal className="max-w-2xl text-lg leading-8 text-secondary">
            {profile.bio}
          </Reveal>
          <div className="mt-12 grid border-t border-border">
            {profile.highlights.map((item) => (
              <Reveal
                as="div"
                key={item.label}
                className="grid gap-2 border-b border-border py-5 sm:grid-cols-[11rem_1fr]"
              >
                <p className="eyebrow">{item.label}</p>
                <p className="text-lg">{item.value}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="section">
      <div className="section-inner">
        <Reveal className="mb-14 max-w-4xl">
          <p className="eyebrow mb-6">Expertise</p>
          <h2 className="section-title">Services built around growth.</h2>
        </Reveal>
        <div className="border-t border-border">
          {profile.expertise.map((item, index) => (
            <Reveal
              as="div"
              key={item.title}
              className="group grid gap-5 border-b border-border py-8 md:grid-cols-[7rem_0.85fr_1.15fr] md:py-10"
            >
              <p className="font-display text-4xl text-accent">{formatIndex(index)}</p>
              <h3 className="text-2xl transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                {item.title}
              </h3>
            <p className="max-w-3xl leading-7 text-secondary md:text-lg md:leading-8">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="section !px-0">
      <div className="section-inner px-4 sm:px-6 lg:px-10">
        <Reveal className="mb-16 grid gap-7 md:grid-cols-[1fr_0.75fr]">
          <div>
            <p className="eyebrow mb-6">Selected campaigns</p>
            <h2 className="section-title">
              SELECTED
              <br />
              WORK
            </h2>
          </div>
          <p className="max-w-xl self-end text-lg leading-8 text-secondary">
            Projects with real outcomes across digital strategy, beauty
            campaigns, fashion branding, logistics, content, and importation.
          </p>
        </Reveal>
      </div>
      <div className="border-t border-border">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="project-row block border-b border-border px-4 py-8 sm:px-6 lg:px-10 lg:py-12"
            data-cursor="VIEW"
          >
            <div className="section-inner grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div className={index % 2 ? "lg:order-2" : ""}>
                <div className="mb-6 flex items-center justify-between gap-4 text-sm text-secondary">
                  <span>{formatIndex(index)}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="project-title font-display text-[clamp(2.25rem,4.6vw,4.9rem)] leading-[0.96]">
                  {project.title}
                </h3>
                <div className="mt-8 grid gap-5 border-t border-border pt-5 text-sm text-secondary md:grid-cols-3">
                  <p>{project.client}</p>
                  <p>{project.industry}</p>
                  <p>{project.outcome}</p>
                </div>
              </div>
              <ImageReveal
                src={project.image}
                alt={project.alt}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[1.35/1] w-full"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Results() {
  return (
    <section className="section bg-dark text-dark-text">
      <div className="section-inner">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <h2 className="section-title">Learning, building, and turning ideas into measurable work.</h2>
          <p className="max-w-xl self-end text-lg leading-8 text-dark-text/70">
            I combine creativity with data-driven decision making,
            practical business experience, and clear communication.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {profile.results.map((metric) => (
            <AnimatedMetric key={metric.label} {...metric} className="border-dark-text/30" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section">
      <div className="section-inner grid gap-14 lg:grid-cols-[0.78fr_1.22fr]">
        <Reveal className="lg:sticky lg:top-28 lg:h-fit">
          <p className="eyebrow mb-6">Process</p>
          <h2 className="section-title">From strategy to execution.</h2>
        </Reveal>
        <div className="border-t border-border">
          {profile.process.map((item, index) => (
            <Reveal
              as="div"
              key={item.title}
              className="grid gap-5 border-b border-border py-9 md:grid-cols-[8rem_1fr]"
            >
              <p className="font-display text-6xl text-accent">{formatIndex(index)}</p>
              <div>
                <h3 className="text-3xl">{item.title}</h3>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-secondary">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tools() {
  return (
    <section className="section">
      <div className="section-inner">
        <Reveal className="mb-12 grid gap-7 md:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="eyebrow mb-6">Capabilities</p>
            <h2 className="section-title">Skills I am building every day.</h2>
          </div>
          <p className="max-w-xl self-end text-lg leading-8 text-secondary">
            A practical mix of marketing, research, analytics, communication,
            and business skills shaped through training and real customer work.
          </p>
        </Reveal>
        <div className="grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-4">
          {profile.tools.map((tool) => (
            <Reveal
              as="div"
              key={tool}
              className="border-b border-r border-border p-5 text-lg md:p-7"
            >
              {tool}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section">
      <div className="section-inner">
        <Reveal className="mb-12">
          <p className="eyebrow mb-6">Testimonials</p>
          <h2 className="section-title">What people say.</h2>
        </Reveal>
        <div className="grid border-t border-border lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Reveal
              as="div"
              key={testimonial.name}
              className="border-b border-border py-8 lg:border-r lg:px-8"
            >
              <blockquote className="font-display text-3xl leading-tight">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <p className="mt-10 text-sm text-secondary">
                {testimonial.name}
                <br />
                {testimonial.role}, {testimonial.company}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section">
      <div className="section-inner grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
        <Reveal>
          <p className="eyebrow mb-6">Experience</p>
          <h2 className="section-title">Education, experience, and milestones.</h2>
        </Reveal>
        <div className="border-t border-border">
          {experience.map((item, index) => (
            <Reveal
              as="div"
              key={`${item.role}-${item.year}`}
              className="grid gap-5 border-b border-border py-8 md:grid-cols-[5rem_1fr_10rem]"
            >
              <p className="font-display text-4xl text-accent">{formatIndex(index)}</p>
              <div>
                <h3 className="text-2xl">{item.role}</h3>
                <p className="mt-1 text-secondary">{item.company}</p>
                <p className="mt-5 max-w-2xl leading-7 text-secondary">
                  {item.description}
                </p>
                <p className="mt-5 max-w-2xl leading-7">{item.achievement}</p>
              </div>
              <p className="text-sm text-secondary md:text-right">{item.year}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="section bg-dark text-dark-text">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow mb-8 text-dark-text/55">Marketing philosophy</p>
          <h2 className="font-display text-[clamp(2.8rem,6.5vw,7.5rem)] leading-[0.95]">
            SUCCESSFUL MARKETING
            <br />
            UNDERSTANDS PEOPLE,
            <br />
            SOLVES PROBLEMS,
            <br />
            AND BUILDS TRUST.
          </h2>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section pb-10">
      <div className="section-inner grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <p className="eyebrow mb-6">Contact</p>
          <h2 className="section-title">
            LET&apos;S BUILD
            <br />
            SOMETHING WORTH
            <br />
            TALKING ABOUT.
          </h2>
        </Reveal>
        <Reveal className="self-end">
          <p className="max-w-xl text-lg leading-8 text-secondary">
            Whether you need a marketing partner, a campaign plan, or imported
            products, I would love to hear from you.
          </p>
          <div className="mt-10 grid border-t border-border">
            <a className="group flex items-center justify-between border-b border-border py-5" href={`mailto:${profile.email}`}>
              <span>{profile.email}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a className="group flex items-center justify-between border-b border-border py-5" href={profile.linkedin} target="_blank" rel="noreferrer">
              <span>Request LinkedIn profile</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a className="group flex items-center justify-between border-b border-border py-5" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              <span>{profile.phone}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a className="group flex items-center justify-between border-b border-border py-5" href={profile.businessSite} target="_blank" rel="noreferrer">
              <span>Prissy Importation</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="border-b border-border py-5 text-secondary">{profile.location}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-4 pb-8 sm:px-6 lg:px-10">
      <div className="section-inner flex flex-col gap-5 border-t border-border pt-6 text-sm text-secondary md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-foreground">{profile.name}</p>
          <p>{profile.role}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <a href={`mailto:${profile.email}`} className="nav-link">
            Email
          </a>
          <a href={profile.linkedin} className="nav-link" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="nav-link">
            Phone
          </a>
          <a href={profile.businessSite} className="nav-link" target="_blank" rel="noreferrer">
            Prissy Importation
          </a>
          <a href="#" className="nav-link">
            Back to top
          </a>
        </div>
        <p>Copyright 2026</p>
      </div>
    </footer>
  );
}
