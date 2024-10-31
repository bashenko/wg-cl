// import React, {useState} from 'react';
// import { SideMenu } from './SideMenu';

// export default function BurgerMenu(): React.FC {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative">
//       <button onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center justify-between text-gray-600"
//       >
//         {isOpen ? 'X' : 'menu'}
//       </button>

//       {isOpen && (
//         <SideMenu isOpen={isOpen} toggleMenu={() => {
//           setIsOpen(false);
//           // You can also call any other logic here, like toggling a different state variable
//         }} />
//       )}
//     </div>
//   );
// }
