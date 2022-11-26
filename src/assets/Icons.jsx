const HomeIcon = ({ size }) => {
    return (
        <svg viewBox="0 0 24 24" height={size} width={size} xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z" fill='currentColor' />
        </svg>
    )
}

const ActiveHomeIcon = ({ size }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"
        fill="currentColor"
      />
    </svg>
  )
}

const SearchIcon = ({ size }) => {
    return (
        <svg viewBox="0 0 24 24" height={size} width={size} xmlns="http://www.w3.org/2000/svg">
            <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z" fill='currentColor' />
        </svg>
    )
}

const ActiveSearchIcon = ({ size }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z"
        fill="currentColor"
      />
      <path
        d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 01-2.077 5.816l4.344 4.344a1 1 0 01-1.414 1.414l-4.353-4.353a9.454 9.454 0 01-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"
        fill="currentColor"
      />
    </svg>
  )
}

const CollectionIcon = ({ size }) => {
    return (
        <svg viewBox="0 0 24 24" height={size} width={size} xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z" fill='currentColor' />
        </svg>
    )
}

const ActiveCollectionIcon = ({ size }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zM15.5 2.134A1 1 0 0014 3v18a1 1 0 001 1h6a1 1 0 001-1V6.464a1 1 0 00-.5-.866l-6-3.464zM9 2a1 1 0 00-1 1v18a1 1 0 102 0V3a1 1 0 00-1-1z"
        fill="currentColor"
      />
    </svg>
  )
}

const PlusIcon = ({ size }) => {
    return (
        <svg viewBox="0 0 16 16" height={size} width={size} xmlns="http://www.w3.org/2000/svg">
            <path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z" fill='currentColor' />
        </svg>
    )
}

const HeartIcon = ({ size }) => {
    return (
        <svg viewBox="0 0 16 16" height={size} width={size} xmlns="http://www.w3.org/2000/svg">
            <path d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z" fill="currentColor" />
        </svg>
    )
}

const DownloadIcon = ({ size }) => {
    return (
        <svg viewBox="0 0 24 24" height={size} width={size} xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z" />
            <path d="M12 6.05a1 1 0 011 1v7.486l1.793-1.793a1 1 0 111.414 1.414L12 18.364l-4.207-4.207a1 1 0 111.414-1.414L11 14.536V7.05a1 1 0 011-1z" />
        </svg>
    )
}

const PrevIcon = ({ size }) => {
    return (
        <svg viewBox="0 0 24 24" height={size} width={size} xmlns="http://www.w3.org/2000/svg" fill="currentColor">
           <path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z" />
        </svg>
    )
}

const NextIcon = ({ size }) => {
    return (
        <svg viewBox="0 0 24 24" height={size} width={size} xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z" />
        </svg>
    )
}

const DownDirIcon = ({ size }) => {
    return (
        <svg viewBox="0 0 16 16" height={size} width={size} xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M14 6l-6 6-6-6h12z" />
        </svg>
    )
}

const ExternalIcon = ({ size }) => {
    return (
        <svg viewBox="0 0 16 16" height={size} width={size} xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z" />
            <path d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z" />
        </svg>
    )
}

const PlayIcon = ({ size }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z" />
    </svg>
  )
}

const PauseIcon = ({ size }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z" />
    </svg>
  )
}

const PlayerPrevIcon = ({ size }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z" />
    </svg>
  )
}

const PlayerNextIcon = ({ size }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z" />
    </svg>
  )
}

const ShuffleIcon = ({ size }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z" />
      <path d="M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 11-1.06-1.06L13.109 13H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z" />
    </svg>
  )
}

const Icon = ({ name, size = 24 }) => {

    const icons = {
        home: HomeIcon,
        activeHomeIcon: ActiveHomeIcon,
        search: SearchIcon,
        activeSearchIcon: ActiveSearchIcon,
        collection: CollectionIcon,
        activeCollectionIcon: ActiveCollectionIcon,
        plus: PlusIcon,
        heart: HeartIcon,
        download: DownloadIcon,
        prev: PrevIcon,
        next: NextIcon,
        downDir: DownDirIcon,
        external: ExternalIcon,
        play: PlayIcon,
        pause: PauseIcon,
        playerPrev: PlayerPrevIcon,
        playerNext: PlayerNextIcon,
        shuffleIcon: ShuffleIcon,      
    }

    const Component = icons[name]
    return <Component size={size} />
}

export { Icon }