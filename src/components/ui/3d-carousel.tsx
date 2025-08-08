"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

const galleryImages = [
  {
    src: "/lovable-uploads/882be319-ec7d-447b-835b-d1668728b5cc.png",
    alt: "Scene Clean-up Service - Professional biohazard cleaning",
    category: "Scene Clean-up"
  },
  {
    src: "/lovable-uploads/46366808-5631-475a-98f3-274e2c6a7f8f.png",
    alt: "Tiles and Hard Floor Polishing - After cleaning result",
    category: "Floor Polishing"
  },
  {
    src: "/lovable-uploads/59768259-1ebc-4371-af71-a7129c9dd83f.png",
    alt: "Deep Cleaning Services - Professional floor cleaning",
    category: "Deep Cleaning"
  },
  {
    src: "/lovable-uploads/063d916d-8635-4138-80b4-fcf70ccae32d.png",
    alt: "Industrial Cleaning - Solar panel cleaning equipment",
    category: "Industrial Cleaning"
  },
  {
    src: "/lovable-uploads/3ba8a3a4-58e1-4676-87b1-5dfeea331275.png",
    alt: "Solar Panel Cleaning - Professional maintenance service",
    category: "Solar Panel Cleaning"
  },
  {
    src: "/lovable-uploads/0253280b-3638-45a1-8858-5619a24806c8.png",
    alt: "Upholstery Cleaning - Professional furniture cleaning",
    category: "Upholstery Cleaning"
  },
  {
    src: "/lovable-uploads/b1b1a4eb-b7c3-4d03-b137-b7b4d9d7a7ba.png",
    alt: "Carpet Cleaning - Professional carpet cleaning service",
    category: "Carpet Cleaning"
  },
  {
    src: "/lovable-uploads/325b41e2-75bb-4501-9011-c126b7038697.png",
    alt: "Couch Cleaning - Professional furniture cleaning",
    category: "Furniture Cleaning"
  },
  {
    src: "/lovable-uploads/a27354cd-d4c6-409f-9ae2-5738675a5cb8.png",
    alt: "Mattress Cleaning - Professional sanitization service",
    category: "Mattress Cleaning"
  },
  {
    src: "/lovable-uploads/cb4a0c89-2bc0-45cb-b264-e7ac4cf47109.png",
    alt: "Window Cleaning - Professional window cleaning service",
    category: "Window Cleaning"
  }
]

const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1] as const }
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] as const }

const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: {
    handleClick: (imgUrl: string, index: number) => void
    controls: any
    cards: { src: string; alt: string; category: string }[]
    isCarouselActive: boolean
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 1100 : 1800
    const faceCount = cards.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    return (
      <div
        className="flex h-full items-center justify-center bg-background"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {cards.map((image, i) => (
            <motion.div
              key={`key-${image.src}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl bg-background p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(image.src, i)}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                layoutId={`img-${image.src}`}
                className="pointer-events-none w-full rounded-xl object-cover aspect-square"
                initial={{ filter: "blur(4px)" }}
                layout="position"
                animate={{ filter: "blur(0px)" }}
                transition={transition}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }
)

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`

function ThreeDPhotoCarousel() {
  const [activeImg, setActiveImg] = useState<string | null>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()
  const cards = useMemo(() => galleryImages, [])

  useEffect(() => {
    console.log("Cards loaded:", cards)
  }, [cards])

  const handleClick = (imgUrl: string) => {
    setActiveImg(imgUrl)
    setIsCarouselActive(false)
    controls.stop()
  }

  const handleClose = () => {
    setActiveImg(null)
    setIsCarouselActive(true)
  }

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeImg && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={`img-container-${activeImg}`}
            layout="position"
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 m-5 md:m-36 lg:mx-[19rem] rounded-3xl"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            <motion.img
              layoutId={`img-${activeImg}`}
              src={activeImg}
              className="max-w-full max-h-full rounded-lg shadow-lg"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                willChange: "transform",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative h-[500px] w-full overflow-hidden">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={cards}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  )
}

export { ThreeDPhotoCarousel };