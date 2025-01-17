const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-full px-2 pt-4 pb-8">
      <button
        onClick={() => window.close()}
        type="button"
        className="inline-flex items-center px-4 py-2 text-[15px] font-bold text-white border border-transparent rounded-full shadow-sm bg-twitterAccentThree hover:bg-twitterAccentFive focus:outline-none w-fit"
      >
        Done
      </button>
    </footer>
  )
}

export default Footer
