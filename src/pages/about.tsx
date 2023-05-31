import { Head } from "minista"
import style from "../assets/styles/about.module.css"
const about = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <script type="module" src="/src/assets/scripts/main.ts" />
      </Head>
      <h1 className={style.title}>About</h1>
    </div>
  )
}

export default about
