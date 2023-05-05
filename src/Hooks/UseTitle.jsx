import { useEffect } from "react"

const UseTitle = title => {
    useEffect(()=> {
    document.title=`${title} Travel`
    },[title])
}
export default UseTitle;