import { businessOption } from "../../constants/types";

export const getBusinessOptions = (t: any, locale: string):businessOption[] => [
  {
    title: t('navbar.business1'),
    href: "/business/automotive",
    description: t('navbar.businessdes1'),
  },
  {
    title: t('navbar.business2'),
    href: "/business/speaker",
    description: t('navbar.businessdes2'),
  },
  {
    title: t('navbar.business3'),
    href: "/business/camera-module",
    description: t('navbar.businessdes3'),
  },
  {
    title: t('navbar.business4'),
    href: "/business/transformer",
    description: t('navbar.businessdes4'),
  },
  {
    title: t('navbar.business5'),
    href: "/business/electronic",
    description: t('navbar.businessdes5'),
  },
  {
    title: t('navbar.business6'),
    href: "/business/medical",
    description: t('navbar.businessdes6'),
  },
  {
    title: t('navbar.business7'),
    href: "/business/battery-energy",
    description: t('navbar.businessdes7'),
  },
  {
    title: t('navbar.business8'),
    href: "/business/motor",
    description: t('navbar.businessdes8'),
  },
  ];