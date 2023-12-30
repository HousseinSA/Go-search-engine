
import CountryLocation from "./CountryLocation"

const Footer = () => {
  return (
    <footer className=" w-full absolute text-sm text-gray-500 bg-[#f2f2f2] bottom-0">
      <div className="border-b px-8 py-3">
        <CountryLocation />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
        <ul className="flex items-center space-x-6">
          <li className="footer_links">About</li>
          <li className="footer_links">Advertising</li>
          <li className="footer_links">Business</li>
          <li className="footer_links">How Search Works</li>
        </ul>
        <ul className="flex items-center space-x-6">
          <li className="footer_links">Privacy</li>
          <li className="footer_links">Terms</li>
          <li className="footer_links">Settings</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
