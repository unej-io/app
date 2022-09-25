import { Anchor, Group, Stack, Text } from "@mantine/core";
import type { GroupProps } from "@mantine/core";

import { APP } from "~/const/app";

type LinkObject = {
  label: string;
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
};

const links: LinkObject[] = [
  {
    label: "About",
    links: [
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Contact",
        href: "/contact",
      },
      {
        label: "Releases",
        href: "/releases",
      },
    ],
  },
  {
    label: "Features",
    links: [
      {
        label: "Form",
        href: "/form",
      },
      {
        label: "Link",
        href: "/link",
      },
      {
        label: "Apps",
        href: "/apps",
      },
    ],
  },
  {
    label: "Learn",
    links: [
      {
        label: "Documentation",
        href: "/docs",
      },
      {
        label: "Contribute",
        href: "/contribute",
      },
    ],
  },
  {
    label: "Support",
    links: [
      {
        label: "FAQ",
        href: "/faq",
      },
    ],
  },
  {
    label: "Community",
    links: [
      {
        label: "Stars on Github",
        href: APP.link.github,
      },
    ],
  },
];

type FooterLinksGroupProps = GroupProps;

function FooterLinksGroup({ children, ...props }: FooterLinksGroupProps) {
  return (
    <Group {...props}>
      {links.map((link, index) => (
        <Stack key={link.label + index.toString()}>
          <Text weight={700}>{link.label}</Text>

          <Stack>
            {link.links.map((link, index) => (
              <Anchor component="a" key={link.label + index.toString()} variant="text" size="sm" href={link.href}>
                {link.label}
              </Anchor>
            ))}
          </Stack>
        </Stack>
      ))}
    </Group>
  );
}

export type { FooterLinksGroupProps };
export default FooterLinksGroup;
