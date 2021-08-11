import React from "react";

interface IItem {
  text?: string;
  id?: string;
  onClick: (id: string | undefined) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div'
  href?: string;
}

interface IMyListProps {
  list: IItem[]
}

// export function MyList({list}: IMyListProps) {
//   return (
//       <ul>
//         {
//           list.map((item) => (
//               <li onClick={() => item.onClick(item.id)} key={item.id}>{item.text}</li>
//           ))
//         }
//       </ul>
//   )
// }

export function GenericList({list}: IMyListProps) {
  return (
      <>
        {list.map(({As = 'div', text, onClick, className, id, href}) => (
          <As
              className={className}
              onClick={() => onClick(id)}
              key={id}
              href={href}
          >
            {text}
          </As>
        ))}
      </>
  )
}