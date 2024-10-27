import { getI18n, getScopedI18n } from "@/locales/server";
import HomeBanner from "./home-banner";


export default async function Home() {
  const t = await getI18n();
  const landingT = await getScopedI18n('landing');
  return (
    <div className="w-full">
      <HomeBanner/>
      <section className="min-h-screen w-full">
        <p>{landingT('badge.title')}</p>
        <p>{landingT('badge.second')}</p>
      </section>
    </div>
  );
}
