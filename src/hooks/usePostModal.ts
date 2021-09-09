import {useEffect, useRef} from "react";
import {IPostProps} from "../shared/Post";

export function usePostModal(props: IPostProps){
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if(event.target instanceof Node && !ref.current?.contains(event.target)){
        props.onClose?.()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return ref
}