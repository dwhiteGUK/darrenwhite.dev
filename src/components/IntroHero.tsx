import { FC } from 'react';

import { ArrowNarrowRightIcon } from '~/components';

const IntroHero: FC = () => (
  <div>
    <div className="md:absolute md:left-0 md:h-full md:w-1/2"></div>
    <div className="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="md:ml-auto md:w-1/2 md:pl-10">
        <div className="text-base leading-6 font-semibold uppercase tracking-wider text-gray-500">Introduction</div>
        <h2 className="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
          html, css and js developer with over 15 years experience.
        </h2>
        <p className="mt-3 text-lg leading-7 text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
          scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
          duis.
        </p>
        <div className="mt-8">
          <a
            href="/about"
            className="inline-flex items-center justify-center py-3 border border-transparent text-base leading-6 font-medium transition duration-150 ease-in-out text-orange-500 hover:text-white"
          >
            My Story
            <ArrowNarrowRightIcon className="ml-2 w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default IntroHero;