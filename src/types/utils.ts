import { useData, useRouter } from 'vitepress'

import { ComputedRef, computed, nextTick, onMounted, ref } from 'vue'

import { Prelink, VideoProps } from './types'

/**
 * Extracts `prelink` information from `frontmatter`.
 *
 * @returns Returns the `prelink` property value of the `hero` object in
 *   `frontmatter`, or `undefined` if it does not exist.
 */
export const usePrelink = (): ComputedRef<Prelink | undefined> => {
  const { frontmatter } = useData()
  return computed(() => frontmatter.value.hero?.prelink)
}

/**
 * Checks if a link is an external link.
 *
 * @param link - The link string to be checked.
 * @returns Returns `true` if the link is external, otherwise `false`.
 */
export const isExternal = (link: string): boolean =>
  /^(?:[a-z]+:|\/\/)/i.test(link)

/**
 * Moves specified DOM elements to the target position.
 *
 * When the component is mounted, replaces the content inside `.VPHero .text`
 * with the content of `#hero-text`.
 */
export const moveDomElements = () => {
  onMounted(() => {
    const targetElement = document.querySelector('.VPHero .text')
    const sourceElement = document.querySelector('#hero-text')

    if (targetElement && sourceElement) {
      targetElement.innerHTML = ''
      targetElement.appendChild(sourceElement)
    }
  })
}

/**
 * Creates a functionality for copying links.
 *
 * @returns An object containing the `copied` state and the `copyLink` function.
 */
export const useCopyLink = () => {
  const copied = ref(false)

  const copyLink = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2000)
    } catch (error) {
      console.error('Failed to copy link:', error)
      alert('Failed to copy link, please copy manually.')
    }
  }

  return { copied, copyLink }
}

/**
 * Video platform configuration. Each platform includes the following
 * properties:
 *
 * - `src`: A function that returns the video embed link, accepting the unique
 *   identifier `id` of the video as a parameter.
 * - `title`: The name of the video player.
 */
export const video = {
  bilibili: {
    src: (id: VideoProps['id']) =>
      `https://player.bilibili.com/player.html?bvid=${id}&autoplay=0`,
    title: 'Bilibili video player'
  },
  tencent: {
    src: (id: VideoProps['id']) =>
      `https://v.qq.com/txp/iframe/player.html?vid=${id}`,
    title: 'Tencent Video player'
  },
  youku: {
    src: (id: VideoProps['id']) => `https://player.youku.com/embed/${id}`,
    title: 'Youku video player'
  },
  youtube: {
    src: (id: VideoProps['id']) =>
      `https://www.youtube-nocookie.com/embed/${id}`,
    title: 'YouTube video player'
  },
  vimeo: {
    src: (id: VideoProps['id']) => `https://player.vimeo.com/video/${id}`,
    title: 'Vimeo video player'
  },
  xigua: {
    src: (id: VideoProps['id']) => `https://www.ixigua.com/iframe/${id}`,
    title: 'XiGua video player'
  }
}

/**
 * Dynamically returns the corresponding video configuration or custom link.
 *
 * @param VideoProps - Video-related parameters.
 * @returns Video configuration object, including `src` and `title`.
 */
export const getVideo = (props: VideoProps) => {
  /**
   * If both `is` and `id` are provided, return the configuration for the
   * corresponding video platform.
   */
  if (props.is && props.id) return video[props.is]

  /** If only `id` exists, return the default YouTube video configuration. */
  if (props.id) return video.youtube

  /**
   * If neither `is` nor `id` is provided, and a custom `src` is provided,
   * return the custom video configuration. If `src` is empty, return an empty
   * link.
   */
  return { src: props.src || '', title: 'Custom video player' }
}

/**
 * Utility function for generating the share link of the current VitePress page.
 *
 * Uses VitePress's `useRouter` to get the current route and generate a complete
 * share link based on the path.
 *
 * @returns The share link of the current page.
 */
export function useShareLink(): ComputedRef<string> {
  const router = useRouter()
  return computed(() => {
    return `${window.location.origin}${router.route.path}`
  })
}

/**
 * Handles click events to perform copy operations or redirection.
 *
 * When `prelink.copy` is `true`, prevents the default behavior and copies the
 * content of `prelink.install` to the clipboard. If the copy operation is
 * successful, prints a success message to the console. If it fails, prints an
 * error message. If `prelink.copy` is `false` or not set, the function does not
 * perform the copy operation and proceeds with the normal redirection process.
 *
 * @param event - The mouse event object that triggered the event.
 * @param prelink - A `Prelink` object containing link information. It includes
 *   jump links, copy content, etc.
 * @returns Void
 */
export function handleClick(
  event: MouseEvent,
  prelink: Prelink | undefined
): void {
  if (!prelink) return

  const textToCopy = prelink.install || 'No content provided for copying'

  if (prelink.copy) {
    event.preventDefault()
    navigator.clipboard
      .writeText(prelink.install)
      .then(() => {
        console.log('Copied to clipboard:', textToCopy)
      })
      .catch((err) => {
        console.error('Copy failed', err)
      })
  }
}
