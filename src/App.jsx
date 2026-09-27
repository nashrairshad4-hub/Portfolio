import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Cover from './components/Cover.jsx'
import Book from './components/Book.jsx'
import Navigation from './components/Navigation.jsx'
import AboutPage from './components/AboutPage.jsx'
import SkillsPage from './components/SkillsPage.jsx'
import ProjectsPage from './components/ProjectsPage.jsx'
import CertificatesPage from './components/CertificatesPage.jsx'
import ContactPage from './components/ContactPage.jsx'
import projects from './data/projects.js'
import './App.css'

const FLIP_DURATION = 480

export default function App() {
  // pageIndex: 0 = cover, 1..chapters.length = interior chapters
  const [pageIndex, setPageIndex] = useState(0)
  const [flipClass, setFlipClass] = useState('')
  const timeoutRef = useRef(null)

  const chapters = useMemo(
    () => [
      {
        title: 'About Me',
        blurb: 'A short introduction to who I am and how I work.',
        content: <AboutPage />,
      },
      {
        title: 'Skills',
        blurb: 'The languages, frameworks and tools I build with.',
        content: <SkillsPage />,
      },
      {
        title: 'Projects',
        blurb: 'Selected work, part one.',
        content: <ProjectsPage projects={projects.slice(0, 3)} startIndex={0} />,
      },
      {
        title: 'Projects',
        blurb: 'Selected work, part two.',
        content: <ProjectsPage projects={projects.slice(3)} startIndex={3} />,
      },
      {
        title: 'Certificates',
        blurb: 'Credentials, as they are earned.',
        content: <CertificatesPage />,
      },
      {
        title: "Let's Talk",
        blurb: 'How to reach me and where to find my work.',
        content: <ContactPage />,
      },
    ],
    [],
  )

  const totalPages = chapters.length + 1 // + cover
  const chapterIndex = Math.max(pageIndex - 1, 0)

  const goTo = useCallback(
    (nextPageIndex, direction) => {
      if (flipClass || nextPageIndex < 0 || nextPageIndex > chapters.length) return
      setFlipClass(direction === 'next' ? 'is-flipping-next' : 'is-flipping-prev')
      timeoutRef.current = setTimeout(() => {
        setPageIndex(nextPageIndex)
        setFlipClass('')
      }, FLIP_DURATION)
    },
    [flipClass, chapters.length],
  )

  const handleNext = useCallback(() => {
    if (pageIndex >= totalPages - 1) return
    if (pageIndex === 0) {
      setPageIndex(1)
      return
    }
    goTo(pageIndex + 1, 'next')
  }, [pageIndex, totalPages, goTo])

  const handlePrev = useCallback(() => {
    if (pageIndex <= 0) return
    if (pageIndex === 1) {
      setPageIndex(0)
      return
    }
    goTo(pageIndex - 1, 'prev')
  }, [pageIndex, goTo])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [handleNext, handlePrev])

  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  return (
    <div className="app">
      <div className="app__stage">
        {pageIndex === 0 ? (
          <Cover onOpen={() => setPageIndex(1)} />
        ) : (
          <Book
            page={chapters[chapterIndex]}
            chapterIndex={chapterIndex}
            flipClass={flipClass}
            onPrevEdge={handlePrev}
            onNextEdge={handleNext}
          />
        )}
      </div>

      <Navigation
        current={pageIndex}
        total={totalPages}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  )
}
