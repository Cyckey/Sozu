export interface IconImageMode {
  /** Icon and image in light mode */
  light: string
  /** Icon and image in dark mode */
  dark: string
}

/** DocBox interface */
export interface BoxItem {
  /** DocBox name. */
  name: string
  /** DocBox link. */
  link: string
  /** DocBox tag. */
  tag?: string
  /** Icon color. */
  color?: string | IconImageMode
  /** Icon name (supports iconify) */
  icon?: string | IconImageMode
  /** Image path (supports light and dark mode) */
  image?: string | IconImageMode
}

/** DocPill interface */
export interface Pill {
  /** Pill name. */
  name: string
  /** Pill link. */
  link?: string
  /** Icon name (supports iconify) */
  icon?: string | IconImageMode
  /** Icon color. */
  color?: string | IconImageMode
  /** Image path (supports light and dark mode) */
  image?: string | IconImageMode
}

/** DocLinks interface */
export interface LinkItem {
  /** DocLinks name. */
  name: string
  /** DocLinks description. */
  desc?: string
  /** DocLinks link. */
  link: string
  /** Icon color. */
  color?: string | IconImageMode
  /** Icon name (supports iconify) */
  icon?: string | IconImageMode
  /** Image path (supports light and dark mode) */
  image?: string | IconImageMode
}

/** BoxCube interface */
export interface BoxCubeItem {
  /** BoxCube name. */
  name: string
  /** BoxCube link. */
  link: string
  /** BoxCube description. */
  desc?: string
  /** BoxCube tag. */
  tag?: string
  /** Icon color. */
  color?: string | IconImageMode
  /** Icon name (supports iconify) */
  icon?: string | IconImageMode
  /** Image path (supports light and dark mode) */
  image?: string | IconImageMode
}

/** DocAsideLogo interface */
export interface AsideItem {
  /** Link address. */
  link: string
  /** Icon color. */
  color?: string | IconImageMode
  /** Icon name (supports iconify) */
  icon?: string | IconImageMode
  /** Image path (supports light and dark mode) */
  image?: string | IconImageMode
  /** Name. */
  name?: string
  /** Activity name. */
  activity?: string
  /** Hidden info 1. */
  hide1?: string
  /** Info 1. */
  info1?: string
  /** Hidden info 2. */
  hide2?: string
  /** Info 2. */
  info2?: string
}

/** Announcement interface */
export interface Prelink {
  /** Link URL. */
  link?: string
  /** Link title. */
  title: string
  /** Link content. */
  content?: string
  /** Date */
  date?: string
  /** Date text */
  dateText?: string
  /** Date icon */
  dateIcon?: string
  /** Copy switch */
  copy?: boolean
  /** Content to copy */
  install?: string
}

/** HomeFooter interface */
export interface FooterData {
  /** Array of link groups. */
  group?: Group[]
  /** Record information. */
  beian?: Beian
  /** Author information. */
  author?: Author
}

/** HomeFooter Group interface */
export interface Group {
  /** Icon name (supports iconify) */
  icon?: string
  /** Icon style */
  color?: string
  /** Group title */
  title: string
  /** Array of links */
  links: Link[]
}

/** HomeFooter Beian interface */
export interface Beian {
  /** ICP record number */
  icp?: string
  /** ICP icon, @default 'fluent:globe-shield-48-filled' */
  icpIcon?: string
  /** Public security record number */
  police?: string
  /** Public security record icon, @default 'fluent:shield-checkmark-48-filled' */
  policeIcon?: string
  /** Whether to show icon */
  showIcon?: boolean
}

/** HomeFooter Author interface */
export interface Author {
  /** Author name */
  name?: string
  /** Author link */
  link?: string
}

/** HomeFooter Link interface */
export interface Link {
  /** Link icon */
  icon?: string
  /** Link style */
  color?: string
  /** Link name */
  name: string
  /** Link address */
  link: string
}

/** DocVideoLink interface */
export interface VideoProps {
  /** Optional id, required when selecting a platform */
  id?: string
  /** Optional platform type */
  is?: 'youtube' | 'bilibili' | 'tencent' | 'youku' | 'vimeo' | 'xigua'
  /** Custom video link, only needed when `is` and `id` do not exist. */
  src?: string
}

/** ShareButton interface. */
export interface ShareButtonItem {
  /**
   * Class name of the button icon, supports Iconify icon library. @default
   * 'solar:share-bold'
   */
  buttonIcon?: string

  /** Text content displayed on the button. @default 'Share this page' */
  buttonText?: string

  /**
   * Class name of the icon displayed after successful copy, supports Iconify
   * icon library. @default 'mdi:thumbs-up'
   */
  copiedIcon?: string

  /** Text information displayed after successful copy. @default 'Link copied!' */
  copiedText?: string
}
