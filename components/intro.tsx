import Image from 'next/image'
import authorImage from '@/public/images/authors/mainak.png'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Mainak.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m Mainak Chakraborty, a first&ndash;generation computer
          scientist pursuing an BTech in Information Technology at the West
          Bengal University of Technology. I develop scalable
          data&ndash;analytics solutions to empower businesses worldwide and
          drive positive global impact. I&#39;m deeply passionate about AI
          ethics and advancing machine unlearning research to make AI systems
          safer, fairer, and privacy&ndash;aware.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg'
          src={authorImage}
          alt='Hamed Bahram'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
