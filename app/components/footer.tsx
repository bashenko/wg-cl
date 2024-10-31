import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="container xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md mx-auto flex justify-between items-center py-10 md:px-8 px-4">
      <div className="container w-full mx-auto flex xl:flex-row xl:gap-0 flex-col gap-8 justify-between items-center">
        {/* Column 1 - Logo and Description */}
        <div>
          <Image src="/images/wgs-blue.png" alt="GSF Logo" width={200} height={58} />
        </div>

        {/* Column 2 - Quick Links */}
        <div className='space-y-4'>
        <ul className="footerLinkWrapper list-none flex flex-col items-center sm:flex-row sm:justify-between space-y-2 sm:space-y-0 sm:space-x-4 footer-menu"> 
          <li><a className="" target="_blank" href="https://www.worldgovernmentsummit.org/about/the-organization">About WGS</a></li>
          <li><a target="_blank" href="https://www.worldgovernmentsummit.org">Observer</a></li>
          <li><a target="_blank" href="https://www.worldgovernmentsummit.org/community/partners">Partners</a></li>
          <li><a target="_blank" href="https://www.worldgovernmentsummit.org/community/join-the-membership">Join Membership</a></li>
          <li><a target="_blank" href="https://www.worldgovernmentsummit.org">Initiatives</a></li>
        </ul>
            <p className="text-xs text-center xl:text-left">Copyright &copy; {new Date().getFullYear()} World Government Summit. All rights reserved.</p>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <ul className="space-y-4 justify-center">
            <li className='text-xs flex flex-row items-center xl:justify-start justify-center'><div className=''><Image src="/images/icons/call.svg" alt="envelope" width={24} height={24} className="w-4 h-4 mr-2" /></div><a href="mailto:govtechprize@worldgovernmentssummit.org" className="hover:text-blue-400">govtechprize@worldgovernmentssummit.org</a></li>
            <li className='text-xs flex flex-row items-center xl:justify-start justify-center'><div><Image src="/images/icons/map.svg" alt="envelope" width={14} height={20} className="w-4 h-4 mr-2" /></div><span>P.O. Box 212000,Dubai - UAE</span></li>
          </ul>
        </div>

        {/* Column 4 - Social Media */}
        <div>
          <div className="flex flex-row space-x-4 justify-between">
            <a href="#" className="hover:text-blue-400"><Image src="/images/icons/fb.svg" alt="envelope" width={14} height={20} className="w-4 h-4 mr-2" /></a>
            <a href="#" className="hover:text-blue-400"><Image src="/images/icons/tw.svg" alt="envelope" width={14} height={20} className="w-4 h-4 mr-2" /></a>
            <a href="#" className="hover:text-blue-400"><Image src="/images/icons/link.svg" alt="envelope" width={14} height={20} className="w-4 h-4 mr-2" /></a>
            <a href="#" className="hover:text-blue-400"><Image src="/images/icons/yt.svg" alt="envelope" width={14} height={20} className="w-4 h-4 mr-2" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}