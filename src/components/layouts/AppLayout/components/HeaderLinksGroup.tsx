import { Anchor, Group, Menu, Text } from "@mantine/core";
import type { GroupProps } from "@mantine/core";

import { IconApps, IconArticle, IconBook2, IconCaretDown, IconLink, IconQuestionMark, IconTable, IconUsers } from "@tabler/icons";

type LinkObject =
  | {
      label: string;
      href: string;
      links?: undefined;
      external?: boolean;
    }
  | {
      label: string;
      href?: undefined;
      links: {
        label: string;
        icon: JSX.Element;
        href: string;
        external?: boolean;
      }[];
      external?: never;
    };

const links: LinkObject[] = [
  {
    label: "Features",
    links: [
      {
        label: "Form",
        icon: <IconTable size={20} />,
        href: "/form",
      },
      {
        label: "Link",
        icon: <IconLink size={20} />,
        href: "/link",
      },
      {
        label: "Apps",
        icon: <IconApps size={20} />,
        href: "/apps",
      },
    ],
  },
  {
    label: "Learn",
    links: [
      {
        label: "Documentation",
        icon: <IconBook2 size={20} />,
        href: "/docs",
        external: true,
      },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  {
    label: "Support",
    links: [
      {
        label: "FAQ",
        icon: <IconQuestionMark size={20} />,
        href: "/faq",
      },
    ],
  },
];

type HeaderLinksGroupProps = GroupProps;

function HeaderLinksGroup({ children, ...props }: HeaderLinksGroupProps) {
  return (
    <Group {...props}>
      {links.map((link) => {
        if (link.links) {
          return (
            <Menu key={link.label} shadow="md" trigger="hover" position="bottom-end">
              <Menu.Target>
                <Anchor component="button" variant="text" underline={false}>
                  <Group spacing={4}>
                    <Text component="span">{link.label}</Text>
                    <IconCaretDown size={16} />
                  </Group>
                </Anchor>
              </Menu.Target>

              <Menu.Dropdown>
                {link.links?.map((link) => (
                  <Menu.Item key={link.label} component="a" href={link.href} icon={link.icon}>
                    {link.label}
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
          );
        } else {
          return (
            <Anchor component="a" key={link.label} href={link.href} variant="text" underline={false}>
              {link.label}
            </Anchor>
          );
        }
      })}
    </Group>
  );
}

export type { HeaderLinksGroupProps };
export default HeaderLinksGroup;
