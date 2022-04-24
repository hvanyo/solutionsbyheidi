import React, { FC, ComponentType, HTMLProps } from 'react';
import {
  designable,
  DesignableComponentsProps,
  DesignableProps,
  flowHoc,
  withDesign,
  addClasses,
  Blockquote,
  Cite,
  Section,
} from '@bodiless/fclasses';
import { withEditorFullFeatured } from '../Editors';


type TestimonialsComponents = {
  Wrapper: ComponentType<any>,
  Quote: ComponentType<any>,
  Submitter: ComponentType<any>,
};

export type Props = DesignableComponentsProps<HeroComponents> & HTMLProps<HTMLElement>;

const testimonialsComponents: TestimonialsComponents = {
  Wrapper: Section,
  Quote: Blockquote,
  Submitter: Cite,
};

const TestimonialsClean: FC<DesignableProps> = ({ components }) => {
  const {
    Wrapper,
    Quote,
    Submitter,
  } = components;

  return (
    <Wrapper>

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-brandRed-400" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  
                </div>
                <Quote />
                <Submitter />
              </div>

            </div>
          </div>

        </div>
      </div>
    </Wrapper>
  );
};

/* TODO add data-aos="zoom-y-out" to Title */

const asTestimonials = flowHoc(
  designable(testimonialsComponents, 'FeaturesBlocks'),
  withDesign({
    Wrapper: addClasses('relative'),    
    Title: flowHoc(
      withEditorFullFeatured('herotitle', 'Insert Hero Title'),
      addClasses('text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 z-30'),
    ),
    Quote: flowHoc(
      withEditorFullFeatured('quote', 'Insert Quote'),
      addClasses('text-xl font-medium mb-4'),
    ),
    Submitter: flowHoc(
      withEditorFullFeatured('submitter', 'Insert Submitter Name'),
      addClasses('block font-bold text-lg not-italic mb-1'),
    ),    
  }),
);

const Testimonials = asTestimonials(TestimonialsClean);

export default Testimonials;


/* Preserving other testimonials from website if I want to put testimonials as slider 

TESTIMONIALS
Was a pleasure working with Heidi. We were able to get the job done under a tight schedule, and she took the extra time to make tools easy to use so i can maintain going forward. Very good experience

brockracer
Always does an excellent job. I highly recommend!

txentre
Heidi did exactly what I needed, very promptly, and then went beyond the assigned work to provide instructions on how to solve the problem myself in the future.

mchurleysr
Excellent provider. Delivered exact what was order, on time and on budget. Already working with her on more projects. Thanks, Jeff

Jeff
Great job! Very professional and flexible with my schedule.

Rovertrip
Awesome. simply terrific, and we will continue to work together in the future!

digguys
She is a great find and very professional and fast. She is pragmatic with her approach and executes at a more than reasonable time frame.

dpark
Sometimes you come across a genuinely talented, easy to work with and technically reassuring engineer. Heidi is better than that. She’s excellent with her communication and her suggestions were relevant. You should hire her.

dpark
Heidi did a fantastic job. I am very happy with her level of expertise and how quickly she worked with me and got back to me on what I was trying to accomplish.

brendageiger
Heidi did an excellent job defining and fulfilling user requirements for this complex Drupal project which included a lot of customizations and integration between Drupal and MailChimp to allow users to populate the website content and calendar and push out information via email.

WMBR
Heidi did an excellent on this project, and I highly recommend her. I would definitely work with her again.

mekinney
Heidi is professional, responsive and provides a great product. It was a pleasure working with her and I would recommend her to others without hesitation.

benross
I found Heidi to be highly knowledgeable of the drupal system and very easy to work with.. All the work was done in a timely manner and most projects were finished ahead of schedule. I highly recommend Heidi to anyone looking for a top notch developer!

aaronnechama
Fabulous provider! I look forward to working with her again…fast, professional, great communication. Highly recommended.

JessLL
Appreciated Heidi’s identifying affordable solution options and recommendations to address client requirements.

WMBR
Heidi was a pleasure to work with. Very professional, knowledgeable, and personable. She would be the first person I would refer friends or colleagues to who need assistance with a WordPress related project.

smallbizpr
Heidi is a WordPress guru! She’s knowledgeable, talented and professional. She walked me thru so much of its functionality I couldn’t find elsewhere. I couldn’t have asked for a better freelancer!

Mary_Frederick
Heidi is very reliable, very responsive and in my case very patient. I would not hesitate in recommending her.

chateaugm
Heidi, I’m so proud at my website thanks to all your work, help and knowledge. I loved working with you. All those videos and instructions you made, had really learned me a lot. Your service is amazing and for any question (and I know I asked a lot) you had the perfect answer! I get so many great comments from family & friends and they all say it looks very professional. I just can’t wait to get it out to the rest of the world.

Love, Petra Prijs
Woweeeeeee, Heidi!! My revamped blog looks fantastic! I’m blown away by your extraordinarily diligent, prompt, and courteous service. What a delight to work with you – you’re truly in a class of your own.

Mari Smith ~ Success Coach

*/