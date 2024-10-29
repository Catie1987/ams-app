
import { useChangeLocale, useCurrentLocale } from '../../../locales/client'
 
export default function SwitchLocale() {
  
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale({ preserveSearchParams: true })
 
  return (
    <>
      <p>Current locale: {locale}</p>
      <button onClick={() => changeLocale('en')}>English</button>
      <button onClick={() => changeLocale('vn')}>Vietnam</button>
      <button onClick={() => changeLocale('ja')}>Japan</button>
      <button onClick={() => changeLocale('zh')}>Chinese</button>
    </>
  )
}
 