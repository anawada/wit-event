'use client'

import { useId } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import andrewGreeneImage from '@/images/avatars/andrew-greene.jpg'
import cathleneBurrageImage from '@/images/avatars/cathlene-burrage.jpg'
import damarisKimuraImage from '@/images/avatars/damaris-kimura.jpg'
import dianneGuilianelliImage from '@/images/avatars/dianne-guilianelli.jpg'
import erhartCockrinImage from '@/images/avatars/erhart-cockrin.jpg'
import giordanoSagucioImage from '@/images/avatars/giordano-sagucio.jpg'
import gordonSandersonImage from '@/images/avatars/gordon-sanderson.jpg'
import heatherTerryImage from '@/images/avatars/heather-terry.jpg'
import ibrahimFraschImage from '@/images/avatars/ibrahim-frasch.jpg'
import jaquelinIschImage from '@/images/avatars/jaquelin-isch.jpg'
import kimberlyParsonsImage from '@/images/avatars/kimberly-parsons.jpg'
import parkerJohnsonImage from '@/images/avatars/parker-johnson.jpg'
import piersWilkinsImage from '@/images/avatars/piers-wilkins.jpg'
import richardAstley from '@/images/avatars/richard-astley.jpg'
import rinaldoBeynonImage from '@/images/avatars/rinaldo-beynon.jpg'
import ronniCantadoreImage from '@/images/avatars/ronni-cantadore.jpg'
import stevenMchailImage from '@/images/avatars/steven-mchail.jpg'
import waylonHydenImage from '@/images/avatars/waylon-hyden.jpg'

const speakers = [
  {
    name: 'Steven McHail',
    role: 'Designer at Globex Corporation',
    image: stevenMchailImage,
  },
  {
    name: 'Jaquelin Isch',
    role: 'UX Design at InGen',
    image: jaquelinIschImage,
  },
  {
    name: 'Dianne Guilianelli',
    role: 'General Manager at Initech',
    image: dianneGuilianelliImage,
  },
  {
    name: 'Ronni Cantadore',
    role: 'Design Engineer at Weyland-Yutani',
    image: ronniCantadoreImage,
  },
  {
    name: 'Erhart Cockrin',
    role: 'Product Lead at Cyberdyne Systems',
    image: erhartCockrinImage,
  },
  {
    name: 'Parker Johnson',
    role: 'UI Designer at MomCorp',
    image: parkerJohnsonImage,
  },
  {
    name: 'Damaris Kimura',
    role: 'Senior Engineer at OCP',
    image: damarisKimuraImage,
  },
  {
    name: 'Ibrahim Frasch',
    role: 'Programmer at Umbrella Corp',
    image: ibrahimFraschImage,
  },
  {
    name: 'Cathlene Burrage',
    role: 'Frontend Developer at Buy n Large',
    image: cathleneBurrageImage,
  },
  {
    name: 'Rinaldo Beynon',
    role: 'Data Scientist at Rekall',
    image: rinaldoBeynonImage,
  },
  {
    name: 'Waylon Hyden',
    role: 'DevOps at RDA Corporation',
    image: waylonHydenImage,
  },
  {
    name: 'Giordano Sagucio',
    role: 'Game Developer at Soylent Corp',
    image: giordanoSagucioImage,
  },
  {
    name: 'Andrew Greene',
    role: 'Frontend Developer at Ultratech',
    image: andrewGreeneImage,
  },
  {
    name: 'Heather Terry',
    role: 'Backend Developer at Xanatos Enterprises',
    image: heatherTerryImage,
  },
  {
    name: 'Piers Wilkins',
    role: 'Full stack Developer at BiffCo',
    image: piersWilkinsImage,
  },
  {
    name: 'Gordon Sanderson',
    role: 'Mobile Developer at Cobra Industries',
    image: gordonSandersonImage,
  },
  {
    name: 'Kimberly Parsons',
    role: 'Game Developer at Tyrell Corporation',
    image: kimberlyParsonsImage,
  },
  {
    name: 'Richard Astley',
    role: 'CEO at Roll Out',
    image: richardAstley,
  },
]

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Speakers() {
  let id = useId()

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-brand-cyan sm:text-5xl"
          >
            Speakers
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-white/85">
            One day of talks and panels — meet the voices taking the stage at
            Women in Tech Meetup 2026.
          </p>
          <p className="mt-3 font-mono text-sm text-brand-cyan">
            <time dateTime="2026-06-08">8 June 2026</time>
            <span className="text-white/40"> · </span>
            Millennium Point, Birmingham
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:mt-16 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 lg:mt-24">
          {speakers.map((speaker, speakerIndex) => (
            <div key={speaker.name}>
              <div className="group relative h-70 transform overflow-hidden rounded-4xl">
                <div
                  className={clsx(
                    'absolute top-0 right-4 bottom-6 left-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                    [
                      'border-brand-cyan/60',
                      'border-brand-magenta/60',
                      'border-white/25',
                    ][speakerIndex % 3],
                  )}
                />
                <div
                  className="absolute inset-0 bg-brand-purple/50"
                  style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                >
                  <Image
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                    src={speaker.image}
                    alt=""
                    priority={speakerIndex < 6}
                    sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </div>
              <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-white">
                {speaker.name}
              </h3>
              <p className="mt-1 text-base tracking-tight text-brand-magenta/90">
                {speaker.role}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
