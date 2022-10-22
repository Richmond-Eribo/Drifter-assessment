import Marc from '../images/avatars/Marc_Andreessen.webp';
import Kat from '../images/avatars/Kat_Manalac.webp';
import Elad from '../images/avatars/Elad_Gill.webp';
import Jessica from '../images/avatars/Jessica_Verrilli.webp';
import Daniel from '../images/avatars/Daniel_Gross.webp';
import Sarah from '../images/avatars/Sarah_Tavel.webp';
import Nat from '../images/avatars/Nat.webp';
import { testimoniesDataType } from '../interfaces/testimoniesDataTypes';

const testimoniesData: testimoniesDataType[] = [
  {
    id: 1,
    name: 'Marc Andreessen',
    position: 'Co-Founder & General Partner',
    company: 'Andreessen Horowitz',
    image: Marc,
    quote:
      'We like investing in companies that have been established cleanly and professionally. Atlas is one of the very best ways to do that.',
  },

  {
    id: 2,
    name: 'Kat Mañalac',
    position: 'Partner',
    company: 'Y Combinator',
    image: Kat,
    quote:
      'We’re delighted to be working with Stripe to make it easier for our international founders to spend more time working on their startup and less time on paperwork.',
  },

  {
    id: 3,
    name: 'Elad Gil',
    position: 'Entrepreneur and Investor',
    image: Elad,
    quote: 'Atlas is what top-tier founders are using today.',
  },

  {
    id: 4,
    name: 'Jessica Verrilli',
    position: 'General Partner',
    company: 'GV',
    image: Jessica,
    quote:
      'Company formation through Stripe Atlas is streamlining the shift toward remote work, helping founders all over the world participate in the opportunities abundant in Silicon Valley.',
  },

  {
    id: 5,
    name: 'Daniel Gross',
    position: 'Founder',
    company: 'Pioneer.app',
    image: Daniel,
    quote:
      'Atlas is the perfect way to graduate your project into a real company.',
  },

  {
    id: 6,
    name: 'Sarah Tavel',
    position: 'General Partner',
    company: 'Benchmark',
    image: Sarah,
    quote: 'Stripe Atlas is the easy button for forming a company.',
  },
  {
    id: 7,
    name: 'Nat Friedman',
    position: 'CEO',
    company: 'GitHub',
    image: Nat,
    quote: 'I will use Atlas for my next company.',
  },
];

export default testimoniesData;
