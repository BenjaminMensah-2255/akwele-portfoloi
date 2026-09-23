import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Download, ExternalLink } from "lucide-react";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Reveal } from "@/components/motion/Reveal";
import { profile } from "@/data/profile";
import { getNextProject, getProject, projects } from "@/data/projects";
import { formatIndex } from "@/lib/utils";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: `Case Study Not Found - ${profile.name}`,
    };
  }

  return {
    title: `${project.title} - ${profile.name}`,
    description: `${project.client} case study: ${project.objective}`,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} - ${profile.name}`,
      description: project.objective,
      url: `/work/${project.slug}`,
      images: [
        {
          url: project.image,
          width: 1536,
          height: 1024,
          alt: project.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - ${profile.name}`,
      description: project.objective,
      images: [project.image],
    },
  };
}

export default async function WorkCaseStudy({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const nextProject = getNextProject(project.slug);
  const narrative = [
    { label: "Problem", body: project.challenge },
    { label: "Insight", body: project.lessons },
    { label: "Strategy", body: project.strategy },
    { label: "Execution", body: project.execution },
  ];

  return (
    <main className="pt-16">
      <section className="px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
        <div className="section-inner">
          <Reveal>
            <Link href="/#work" className="text-link mb-12">
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              <span>Back to work</span>
            </Link>
          </Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <Reveal>
              <p className="eyebrow mb-6">{project.industry} case study</p>
              <h1 className="display max-w-[10ch]">{project.title}</h1>
            </Reveal>
            <Reveal delay={0.16} className="border-t border-border pt-6">
              <p className="text-2xl leading-8">{project.objective}</p>
              <dl className="mt-10 grid gap-5 text-sm text-secondary sm:grid-cols-2">
                <div>
                  <dt className="eyebrow mb-2">Client</dt>
                  <dd>{project.client}</dd>
                </div>
                <div>
                  <dt className="eyebrow mb-2">Year</dt>
                  <dd>{project.year}</dd>
                </div>
                <div>
                  <dt className="eyebrow mb-2">Role</dt>
                  <dd>{project.role}</dd>
                </div>
                <div>
                  <dt className="eyebrow mb-2">Channels</dt>
                  <dd>{project.channels.join(", ")}</dd>
                </div>
              </dl>
              {project.presentation ? (
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={project.presentation.canvaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border-button gap-2"
                  >
                    <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
                    <span>View on Canva</span>
                  </a>
                  <a
                    href={project.presentation.downloadUrl}
                    download
                    className="border-button gap-2"
                  >
                    <Download className="h-4 w-4" strokeWidth={1.5} />
                    <span>{project.presentation.downloadLabel}</span>
                  </a>
                </div>
              ) : null}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-10">
        <div className="section-inner">
          <ImageReveal
            src={project.image}
            alt={project.alt}
            priority
            sizes="100vw"
            className="aspect-[1.45/1] w-full"
          />
        </div>
      </section>

      <section className="section">
        <div className="section-inner grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <p className="eyebrow mb-6">Case sequence</p>
            <h2 className="section-title">From attention to action.</h2>
          </Reveal>
          <div className="border-t border-border">
            {narrative.map((item, index) => (
              <Reveal
                as="div"
                key={item.label}
                className="grid gap-5 border-b border-border py-8 md:grid-cols-[7rem_1fr]"
              >
                <p className="font-display text-5xl text-accent">{formatIndex(index)}</p>
                <div>
                  <h3 className="text-3xl">{item.label}</h3>
                  <p className="mt-4 max-w-3xl text-lg leading-8 text-secondary">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-dark text-dark-text">
        <div className="section-inner">
          <Reveal className="mb-14 max-w-5xl">
            <p className="eyebrow mb-6 text-dark-text/55">Results</p>
            <h2 className="section-title">{project.outcome}</h2>
          </Reveal>
          <div className="grid border-t border-dark-text/30 md:grid-cols-4">
            {project.metrics.map((metric) => (
              <Reveal
                as="div"
                key={metric.label}
                className="border-b border-dark-text/30 py-8 md:border-r md:px-7"
              >
                <p className="font-display text-[clamp(2.8rem,5.5vw,5.75rem)] leading-none">
                  {metric.value}
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.16em] text-dark-text/60">
                  {metric.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow mb-6">Campaign visuals</p>
            <h2 className="section-title">A visual system with measurable intent.</h2>
          </Reveal>
          <Reveal className="self-end">
            <p className="max-w-2xl text-lg leading-8 text-secondary">
              Visuals, paid media, content, and reporting were treated as one
              working system. The strongest creative decisions were the ones
              that made the audience response easier to read.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border px-4 py-10 sm:px-6 lg:px-10">
        <div className="section-inner">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group grid gap-8 py-8 lg:grid-cols-[1fr_0.8fr] lg:items-end"
            data-cursor="VIEW"
          >
            <div>
              <p className="eyebrow mb-6">Next project</p>
              <h2 className="font-display text-[clamp(2.25rem,4.6vw,4.9rem)] leading-[0.98] transition-transform duration-300 group-hover:translate-x-2">
                {nextProject.title}
              </h2>
            </div>
            <div className="flex items-center justify-between border-t border-border pt-5 text-secondary">
              <span>{nextProject.client}</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
