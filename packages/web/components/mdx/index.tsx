import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Tabs, Tab } from 'fumadocs-ui/components/tabs';
import { Steps, Step } from 'fumadocs-ui/components/steps';
import type { MDXComponents } from 'mdx/types';
import { cn } from '@/lib/utils';

import { ComponentPreview } from './component-preview';
import { ComponentSource } from './component-source';

const TerminalTab = ({ className, ...props }: React.ComponentProps<typeof Tab>) => {
  return <Tab className={cn('font-mono text-sm', className)} {...props} />;
};

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ComponentPreview,
    ComponentSource,
    Tabs,
    Tab: TerminalTab,
    Steps,
    Step,
    ...components,
  };
}
