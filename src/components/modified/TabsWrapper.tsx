import * as Tabs from "@radix-ui/react-tabs";
import Heading from "../common/Heading";

const TabsWrapper = {
  Root: ({ children, ...props }: Tabs.TabsProps) => {
    return (
      <Tabs.Root className="space-y-md" {...props}>
        {children}
      </Tabs.Root>
    );
  },

  List: ({ children, ...props }: Tabs.TabsListProps) => {
    return (
      <Tabs.List
        className="rounded bg-foreground bg-opacity-5 dark:bg-foreground-dark/5"
        {...props}
      >
        {children}
      </Tabs.List>
    );
  },

  Content: ({ children, ...props }: Tabs.TabsContentProps) => {
    return (
      <Tabs.Content className="space-y-md" {...props}>
        {children}
      </Tabs.Content>
    );
  },

  Trigger: ({ children, ...props }: Tabs.TabsTriggerProps) => {
    return (
      <Tabs.Trigger
        className="rounded px-sm py-sm text-sm font-medium data-[state=active]:bg-background-dark data-[state=active]:text-foreground-dark data-[state=inactive]:opacity-70 dark:data-[state=active]:bg-background dark:data-[state=active]:text-foreground"
        {...props}
      >
        <Heading as="h3" variant="unstyled">
          {children}
        </Heading>
      </Tabs.Trigger>
    );
  },
};

export default TabsWrapper;
