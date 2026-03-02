import MDXComponents from '@theme-original/MDXComponents';
import CardLink from '@site/src/components/CardLink';
import CardGrid from '@site/src/components/CardGrid';
import {Accordion, AccordionGroup} from '@site/src/components/Accordion';
import {Steps, Step} from '@site/src/components/Steps';

export default {
  ...MDXComponents,
  Card: CardLink,
  Columns: CardGrid,
  Accordion,
  AccordionGroup,
  Steps,
  Step,
};
